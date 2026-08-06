#!/usr/bin/env node
/**
 * Check that Nitro's public asset manifest agrees with the files on disk.
 *
 * Nitro bakes a `size` and `etag` for every public asset into
 * `.output/server/chunks/nitro/nitro.mjs` and serves that `size` as the
 * Content-Length. If the recorded size is larger than the real file, the server
 * promises more bytes than it sends, the response never closes cleanly, and the
 * browser drops the asset with ERR_HTTP2_PROTOCOL_ERROR. When the asset is a
 * JavaScript chunk holding Nuxt plugins, the whole app stops hydrating: the page
 * renders but nothing responds to clicks.
 *
 * That is exactly how image 0.1.0 broke production, so the build fails here instead.
 *
 * Usage: node verify_asset_manifest.mjs <path-to-.output>
 */

import { readFile, stat } from 'node:fs/promises'
import { join, resolve } from 'node:path'

const outputDir = resolve(process.argv[2] ?? '.output')
const nitroFile = join(outputDir, 'server', 'chunks', 'nitro', 'nitro.mjs')

const source = await readFile(nitroFile, 'utf8')

// Entries look like:
//   "/_nuxt/abc123.js": {
//     "type": "text/javascript; charset=utf-8",
//     "etag": "\"59056a-...\"",
//     "mtime": "...",
//     "size": 5834090,
//     "path": "../public/_nuxt/abc123.js"
//   },
const entryPattern =
  /"(\/[^"]+)":\s*\{[^{}]*?"size":\s*(\d+)[^{}]*?"path":\s*"([^"]+)"[^{}]*?\}/g

const mismatches = []
let parsed = 0

for (const match of source.matchAll(entryPattern)) {
  const [, urlPath, declaredSize, relativePath] = match
  parsed += 1

  // The manifest's `path` is written relative to `.output/server`.
  const filePath = resolve(join(outputDir, 'server'), relativePath)

  let actualSize
  try {
    actualSize = (await stat(filePath)).size
  } catch {
    mismatches.push(`${urlPath}: manifest references ${relativePath}, which does not exist`)
    continue
  }

  if (actualSize !== Number(declaredSize)) {
    mismatches.push(
      `${urlPath}: manifest says ${declaredSize} bytes, file is ${actualSize} bytes ` +
        `(difference ${Number(declaredSize) - actualSize})`
    )
  }
}

if (parsed === 0) {
  console.error(
    `FAIL: parsed no asset entries from ${nitroFile}. The manifest format may have ` +
      `changed, so this check is no longer protecting the build.`
  )
  process.exit(1)
}

if (mismatches.length > 0) {
  console.error(`FAIL: ${mismatches.length} asset(s) disagree with the manifest:`)
  for (const line of mismatches) {
    console.error(`  ${line}`)
  }
  process.exit(1)
}

console.log(`OK: ${parsed} public assets match their manifest entries.`)
