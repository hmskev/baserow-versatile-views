import { _ as _export_sfc, w as resolveColor, x as Paginator, C as ColorPickerContext, y as ColorPicker, z as __nuxt_component_0$3, h as __nuxt_component_0$2, B as colorContrast, D as BaserowIcon } from './server.mjs';
import { T as Toasts } from './Toasts-CnmFZjjH.mjs';
import { resolveComponent, resolveDirective, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@sentry/core';
import 'vue-router';
import 'node:url';
import 'jwt-decode';
import 'tldjs';
import 'perfect-debounce';
import '@vue/shared';
import 'lodash';
import 'antlr4';
import '@vuelidate/core';
import '@vuelidate/validators';
import 'moment-timezone';
import 'lodash/get.js';
import 'js-sha256';
import 'path-to-regexp';
import 'vue-devtools-stub';
import 'ulid';
import 'lodash/debounce.js';
import 'thenby';
import 'bignumber.js';
import 'axios';
import 'moment-guess';
import 'async-mutex';
import '@tiptap/vue-3';
import '@tiptap/extension-placeholder';
import '@tiptap/extension-mention';
import 'markdown-it-regexp';
import '@tiptap/extension-document';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-hard-break';
import '@tiptap/extension-heading';
import '@tiptap/extension-list-item';
import '@tiptap/extension-bullet-list';
import '@tiptap/extension-ordered-list';
import '@tiptap/extension-bold';
import '@tiptap/extension-italic';
import '@tiptap/extension-strike';
import '@tiptap/extension-link';
import '@tiptap/extension-underline';
import '@tiptap/extension-subscript';
import '@tiptap/extension-superscript';
import '@tiptap/extension-blockquote';
import '@tiptap/extension-code-block';
import '@tiptap/extension-horizontal-rule';
import '@tiptap/extension-task-item';
import '@tiptap/extension-task-list';
import '@tiptap/extension-text';
import '@tiptap/extension-dropcursor';
import '@tiptap/extension-gapcursor';
import '@tiptap/extension-history';
import '@tiptap/core';
import 'tiptap-markdown';
import '@tiptap/vue-3/menus';
import '@tiptap/pm/state';
import '@tiptap/extension-image';
import 'tippy.js';
import 'markdown-it';
import 'markdown-it-task-lists';
import 'lodash/extend.js';
import 'prosemirror-state';
import '@tiptap/pm/model';
import '@tiptap/pm/transform';
import 'flush-promises';
import 'papaparse';
import 'mitt';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0f85a4cc-af3b-436c-a9ad-c30f230e5b22", e._sentryDebugIdIdentifier = "sentry-dbid-0f85a4cc-af3b-436c-a9ad-c30f230e5b22");
  } catch (e2) {
  }
})();
const _sfc_main = {
  components: {
    ColorPicker,
    ColorPickerContext,
    Toasts,
    Paginator
  },
  data() {
    return {
      textarea: "",
      checkbox: false,
      radio: "a",
      radioButton: "a",
      switchValue: false,
      switchUnknown: 2,
      dropdown: "",
      dropdownMultiple: [],
      longDropdown: "0",
      date: "",
      formula: 'concat(field("Text"), field("Text"))',
      image: BaserowIcon,
      input: "",
      color: "primary",
      colorVariables: [
        { name: "Primary", value: "primary", color: "#985353ff" },
        { name: "Secondary", value: "secondary", color: "#545398ff" }
      ],
      colorContrastSamples: [
        "#000000ff",
        "#2c3e50ff",
        "#5498dbff",
        "#985353ff",
        "#ffffff"
      ],
      radioOptions: [
        { value: "a", label: "Option A" },
        { value: "b", label: "Option B" },
        { value: "c", label: "Option C" },
        { value: "d", label: "Option D", loading: true },
        { value: "e", label: "Option D", disabled: true }
      ],
      radioOptionIcons: [
        { value: "a", icon: "iconoir-align-left" },
        { value: "b", icon: "iconoir-align-center" },
        { value: "c", icon: "iconoir-align-right" }
      ]
    };
  },
  head() {
    return {
      title: "Style guide"
    };
  },
  computed: {
    contrastedColors() {
      const resolvedPickerColor = resolveColor(this.color, this.colorVariables);
      return [
        resolvedPickerColor,
        ...this.colorContrastSamples.filter(
          (color) => color !== resolvedPickerColor
        )
      ].map((color) => ({
        color,
        contrastedColor: colorContrast(color)
      }));
    }
  },
  methods: {
    resolveColor,
    alert(message) {
      alert(message);
    },
    triggerError() {
      throw new Error("Fake error");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toasts = resolveComponent("Toasts");
  const _component_FormTextarea = resolveComponent("FormTextarea");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_FormGroup = resolveComponent("FormGroup");
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_RadioGroup = resolveComponent("RadioGroup");
  const _component_SwitchInput = resolveComponent("SwitchInput");
  const _component_Dropdown = resolveComponent("Dropdown");
  const _component_DropdownItem = resolveComponent("DropdownItem");
  const _component_client_only = __nuxt_component_0$3;
  const _component_Alert = resolveComponent("Alert");
  const _component_Button = resolveComponent("Button");
  const _component_ButtonIcon = resolveComponent("ButtonIcon");
  const _component_ButtonText = resolveComponent("ButtonText");
  const _component_ButtonAdd = resolveComponent("ButtonAdd");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_Tab = resolveComponent("Tab");
  const _component_Context = resolveComponent("Context");
  const _component_Modal = resolveComponent("Modal");
  const _component_Paginator = resolveComponent("Paginator");
  const _component_List = resolveComponent("List");
  const _component_Avatar = resolveComponent("Avatar");
  const _component_Presentation = resolveComponent("Presentation");
  const _component_ColorPicker = resolveComponent("ColorPicker");
  const _component_ColorPickerContext = resolveComponent("ColorPickerContext");
  const _component_ColorInput = resolveComponent("ColorInput");
  const _component_CallToAction = resolveComponent("CallToAction");
  const _component_nuxt_link = __nuxt_component_0$2;
  const _directive_auto_overflow_scroll = resolveDirective("auto-overflow-scroll");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="style-guide__wrapper">`);
  _push(ssrRenderComponent(_component_Toasts, null, null, _parent));
  _push(`<div class="style-guide"><div class="margin-bottom-3"><h1>&lt;h1&gt;Heading 1&lt;/h1&gt;</h1><h2>&lt;h2&gt;Heading 2&lt;/h2&gt;</h2><h3>&lt;h3&gt;Heading 3&lt;/h3&gt;</h3><h4>&lt;h4&gt;Heading 4&lt;/h4&gt;</h4></div><div class="margin-bottom-3"><p> Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing elit. Pellentesque eget ipsum eu risus congue posuere vel at erat. Phasellus mattis est sit amet dui sodales, a interdum turpis interdum. Sed eu lobortis libero. Phasellus <strong>vestibulum</strong>, nunc sed elementum scelerisque, tellus felis pretium lectus, eget laoreet quam est in massa. Maecenas non dapibus dolor. Mauris <em>condimentum</em> iaculis dui vel finibus. Nullam consequat non arcu at vehicula. Maecenas ac consequat ipsum, sed viverra dui. Donec dignissim suscipit ultrices. Nullam quis mattis nulla, et venenatis justo. Curabitur scelerisque dictum <a href="#">velit</a>, eget vestibulum lacus gravida in. Praesent id lorem volutpat, venenatis quam vel, ultricies leo. </p></div><div class="margin-bottom-3">`);
  _push(ssrRenderComponent(_component_FormTextarea, {
    ref: "input",
    modelValue: $data.textarea,
    "onUpdate:modelValue": ($event) => $data.textarea = $event,
    placeholder: "Textarea",
    class: "margin-bottom-2",
    rows: 6
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormTextarea, {
    ref: "input",
    modelValue: $data.textarea,
    "onUpdate:modelValue": ($event) => $data.textarea = $event,
    "auto-expandable": "",
    placeholder: "Auto expandable textarea",
    class: "margin-bottom-2",
    "max-rows": 14
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    disabled: "",
    placeholder: "Enter something here",
    value: "This is the value",
    "icon-right": "iconoir-clock",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    modelValue: $data.input,
    "onUpdate:modelValue": ($event) => $data.input = $event,
    placeholder: "Error state",
    error: "",
    "icon-left": "iconoir-search",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    modelValue: $data.input,
    "onUpdate:modelValue": ($event) => $data.input = $event,
    placeholder: "Loading state...",
    loading: "",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    modelValue: $data.input,
    "onUpdate:modelValue": ($event) => $data.input = $event,
    placeholder: "Left icon",
    "icon-left": "iconoir-search",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    modelValue: $data.input,
    "onUpdate:modelValue": ($event) => $data.input = $event,
    placeholder: "Right icon",
    "icon-right": "iconoir-db",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    modelValue: $data.input,
    "onUpdate:modelValue": ($event) => $data.input = $event,
    size: "small",
    placeholder: "Small input",
    "icon-right": "iconoir-db",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    modelValue: $data.input,
    "onUpdate:modelValue": ($event) => $data.input = $event,
    size: "large",
    placeholder: "Large input",
    "icon-right": "iconoir-db",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    class: "margin-bottom-2",
    label: "Form Group"
  }, {
    helper: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Description text`);
      } else {
        return [
          createTextVNode("Description text")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FormInput, {
          ref: "name",
          modelValue: $data.input,
          "onUpdate:modelValue": ($event) => $data.input = $event,
          type: "text",
          placeholder: "Native input"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FormInput, {
            ref: "name",
            modelValue: $data.input,
            "onUpdate:modelValue": ($event) => $data.input = $event,
            type: "text",
            placeholder: "Native input"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    class: "margin-bottom-2",
    label: "Form Group error",
    error: true,
    required: ""
  }, {
    helper: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Description text`);
      } else {
        return [
          createTextVNode("Description text")
        ];
      }
    }),
    error: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Error message`);
      } else {
        return [
          createTextVNode("Error message")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FormInput, {
          ref: "name",
          modelValue: $data.input,
          "onUpdate:modelValue": ($event) => $data.input = $event,
          error: true,
          placeholder: "Native input"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FormInput, {
            ref: "name",
            modelValue: $data.input,
            "onUpdate:modelValue": ($event) => $data.input = $event,
            error: true,
            placeholder: "Native input"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    label: "Checkbox field",
    required: "",
    class: "margin-bottom-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Checkbox, {
          modelValue: $data.checkbox,
          "onUpdate:modelValue": ($event) => $data.checkbox = $event,
          class: "margin-bottom-1"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Checkbox, {
          modelValue: $data.checkbox,
          "onUpdate:modelValue": ($event) => $data.checkbox = $event
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`With text`);
            } else {
              return [
                createTextVNode("With text")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Checkbox, {
            modelValue: $data.checkbox,
            "onUpdate:modelValue": ($event) => $data.checkbox = $event,
            class: "margin-bottom-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_Checkbox, {
            modelValue: $data.checkbox,
            "onUpdate:modelValue": ($event) => $data.checkbox = $event
          }, {
            default: withCtx(() => [
              createTextVNode("With text")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    class: "margin-bottom-3",
    label: "Native Radio input",
    required: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_RadioGroup, {
          modelValue: $data.radio,
          "onUpdate:modelValue": ($event) => $data.radio = $event,
          options: $data.radioOptions
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_RadioGroup, {
            modelValue: $data.radio,
            "onUpdate:modelValue": ($event) => $data.radio = $event,
            options: $data.radioOptions
          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    class: "margin-bottom-3",
    label: "Radio buttons",
    required: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_RadioGroup, {
          modelValue: $data.radio,
          "onUpdate:modelValue": ($event) => $data.radio = $event,
          type: "button",
          options: $data.radioOptions
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_RadioGroup, {
            modelValue: $data.radio,
            "onUpdate:modelValue": ($event) => $data.radio = $event,
            type: "button",
            options: $data.radioOptions
          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    class: "margin-bottom-3",
    label: "Radio buttons with icons",
    required: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_RadioGroup, {
          modelValue: $data.radio,
          "onUpdate:modelValue": ($event) => $data.radio = $event,
          type: "button",
          options: $data.radioOptionIcons
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_RadioGroup, {
            modelValue: $data.radio,
            "onUpdate:modelValue": ($event) => $data.radio = $event,
            type: "button",
            options: $data.radioOptionIcons
          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    label: "Switch Input",
    class: "margin-bottom-3",
    required: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SwitchInput, {
          modelValue: $data.switchValue,
          "onUpdate:modelValue": ($event) => $data.switchValue = $event,
          class: "margin-bottom-2"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwitchInput, {
          modelValue: $data.switchValue,
          "onUpdate:modelValue": ($event) => $data.switchValue = $event,
          class: "margin-bottom-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`With text`);
            } else {
              return [
                createTextVNode("With text")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwitchInput, {
          modelValue: $data.switchUnknown,
          "onUpdate:modelValue": ($event) => $data.switchUnknown = $event,
          class: "margin-bottom-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`With text`);
            } else {
              return [
                createTextVNode("With text")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwitchInput, {
          modelValue: $data.switchUnknown,
          "onUpdate:modelValue": ($event) => $data.switchUnknown = $event,
          small: "",
          class: "margin-bottom-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Small With text`);
            } else {
              return [
                createTextVNode("Small With text")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwitchInput, {
          modelValue: $data.switchValue,
          "onUpdate:modelValue": ($event) => $data.switchValue = $event,
          class: "margin-bottom-2",
          small: ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwitchInput, {
          modelValue: $data.switchValue,
          "onUpdate:modelValue": ($event) => $data.switchValue = $event,
          class: "margin-bottom-1",
          large: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Small with text `);
            } else {
              return [
                createTextVNode(" Small with text ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwitchInput, {
          modelValue: $data.switchUnknown,
          "onUpdate:modelValue": ($event) => $data.switchUnknown = $event,
          class: "margin-bottom-2",
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Disabled `);
            } else {
              return [
                createTextVNode(" Disabled ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwitchInput, {
          modelValue: $data.switchUnknown,
          "onUpdate:modelValue": ($event) => $data.switchUnknown = $event,
          class: "margin-bottom-2",
          disabled: "",
          small: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Small disabled `);
            } else {
              return [
                createTextVNode(" Small disabled ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwitchInput, {
          modelValue: $data.switchValue,
          "onUpdate:modelValue": ($event) => $data.switchValue = $event,
          color: "neutral",
          class: "margin-bottom-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Neutral color`);
            } else {
              return [
                createTextVNode("Neutral color")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwitchInput, {
          modelValue: $data.switchUnknown,
          "onUpdate:modelValue": ($event) => $data.switchUnknown = $event,
          color: "neutral",
          class: "margin-bottom-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Neutral intermediate`);
            } else {
              return [
                createTextVNode("Neutral intermediate")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwitchInput, {
          modelValue: $data.switchValue,
          "onUpdate:modelValue": ($event) => $data.switchValue = $event,
          color: "neutral",
          disabled: true,
          class: "margin-bottom-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Neutral disabled`);
            } else {
              return [
                createTextVNode("Neutral disabled")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SwitchInput, {
            modelValue: $data.switchValue,
            "onUpdate:modelValue": ($event) => $data.switchValue = $event,
            class: "margin-bottom-2"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_SwitchInput, {
            modelValue: $data.switchValue,
            "onUpdate:modelValue": ($event) => $data.switchValue = $event,
            class: "margin-bottom-2"
          }, {
            default: withCtx(() => [
              createTextVNode("With text")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_SwitchInput, {
            modelValue: $data.switchUnknown,
            "onUpdate:modelValue": ($event) => $data.switchUnknown = $event,
            class: "margin-bottom-2"
          }, {
            default: withCtx(() => [
              createTextVNode("With text")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_SwitchInput, {
            modelValue: $data.switchUnknown,
            "onUpdate:modelValue": ($event) => $data.switchUnknown = $event,
            small: "",
            class: "margin-bottom-2"
          }, {
            default: withCtx(() => [
              createTextVNode("Small With text")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_SwitchInput, {
            modelValue: $data.switchValue,
            "onUpdate:modelValue": ($event) => $data.switchValue = $event,
            class: "margin-bottom-2",
            small: ""
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_SwitchInput, {
            modelValue: $data.switchValue,
            "onUpdate:modelValue": ($event) => $data.switchValue = $event,
            class: "margin-bottom-1",
            large: ""
          }, {
            default: withCtx(() => [
              createTextVNode(" Small with text ")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_SwitchInput, {
            modelValue: $data.switchUnknown,
            "onUpdate:modelValue": ($event) => $data.switchUnknown = $event,
            class: "margin-bottom-2",
            disabled: ""
          }, {
            default: withCtx(() => [
              createTextVNode(" Disabled ")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_SwitchInput, {
            modelValue: $data.switchUnknown,
            "onUpdate:modelValue": ($event) => $data.switchUnknown = $event,
            class: "margin-bottom-2",
            disabled: "",
            small: ""
          }, {
            default: withCtx(() => [
              createTextVNode(" Small disabled ")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_SwitchInput, {
            modelValue: $data.switchValue,
            "onUpdate:modelValue": ($event) => $data.switchValue = $event,
            color: "neutral",
            class: "margin-bottom-2"
          }, {
            default: withCtx(() => [
              createTextVNode("Neutral color")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_SwitchInput, {
            modelValue: $data.switchUnknown,
            "onUpdate:modelValue": ($event) => $data.switchUnknown = $event,
            color: "neutral",
            class: "margin-bottom-2"
          }, {
            default: withCtx(() => [
              createTextVNode("Neutral intermediate")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_SwitchInput, {
            modelValue: $data.switchValue,
            "onUpdate:modelValue": ($event) => $data.switchValue = $event,
            color: "neutral",
            disabled: true,
            class: "margin-bottom-2"
          }, {
            default: withCtx(() => [
              createTextVNode("Neutral disabled")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    label: "Dropdown",
    required: "",
    class: "margin-bottom-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Dropdown, {
          modelValue: $data.dropdown,
          "onUpdate:modelValue": ($event) => $data.dropdown = $event
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 1",
                value: "choice-1"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 2",
                value: "choice-2",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 3",
                value: "choice-3",
                icon: "iconoir-db"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 4",
                value: "choice-4",
                icon: "iconoir-cancel",
                disabled: true
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 5",
                value: "choice-5",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 6",
                value: "choice-6",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 5",
                  value: "choice-5",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 6",
                  value: "choice-6",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { style: { "width": "200px" } }, [
            createVNode(_component_Dropdown, {
              modelValue: $data.dropdown,
              "onUpdate:modelValue": ($event) => $data.dropdown = $event
            }, {
              default: withCtx(() => [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 5",
                  value: "choice-5",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 6",
                  value: "choice-6",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                })
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    label: "Dropdown multiple",
    required: "",
    class: "margin-bottom-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Dropdown, {
          modelValue: $data.dropdownMultiple,
          "onUpdate:modelValue": ($event) => $data.dropdownMultiple = $event,
          multiple: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 1",
                value: "choice-1"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 2",
                value: "choice-2",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 3",
                value: "choice-3",
                icon: "iconoir-db"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 4",
                value: "choice-4",
                icon: "iconoir-cancel",
                disabled: true
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 5",
                value: "choice-5",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 6",
                value: "choice-6",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 5",
                  value: "choice-5",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 6",
                  value: "choice-6",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { style: { "width": "200px" } }, [
            createVNode(_component_Dropdown, {
              modelValue: $data.dropdownMultiple,
              "onUpdate:modelValue": ($event) => $data.dropdownMultiple = $event,
              multiple: ""
            }, {
              default: withCtx(() => [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 5",
                  value: "choice-5",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 6",
                  value: "choice-6",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                })
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    label: "Dropdown disabled",
    required: "",
    class: "margin-bottom-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Dropdown, {
          modelValue: $data.dropdown,
          "onUpdate:modelValue": ($event) => $data.dropdown = $event,
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 1",
                value: "choice-1"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 2",
                value: "choice-2",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 3",
                value: "choice-3",
                icon: "iconoir-db"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 4",
                value: "choice-4",
                icon: "iconoir-cancel",
                disabled: true
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 5",
                value: "choice-5",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 6",
                value: "choice-6",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 5",
                  value: "choice-5",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 6",
                  value: "choice-6",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { style: { "width": "200px" } }, [
            createVNode(_component_Dropdown, {
              modelValue: $data.dropdown,
              "onUpdate:modelValue": ($event) => $data.dropdown = $event,
              disabled: ""
            }, {
              default: withCtx(() => [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 5",
                  value: "choice-5",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 6",
                  value: "choice-6",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                })
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    label: "Very long dropdown",
    required: "",
    class: "margin-bottom-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Dropdown, {
          modelValue: $data.longDropdown,
          "onUpdate:modelValue": ($event) => $data.longDropdown = $event
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_DropdownItem, {
                key: "some-2",
                name: "Something",
                value: "some-2"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                key: "test-3",
                name: "Test 3",
                value: "test3"
              }, null, _parent3, _scopeId2));
              _push3(`<!--[-->`);
              ssrRenderList([
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15
              ], (i) => {
                _push3(ssrRenderComponent(_component_DropdownItem, {
                  key: i,
                  name: "Choice " + i,
                  value: i,
                  disabled: i === 7
                }, null, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
              _push3(ssrRenderComponent(_component_DropdownItem, {
                key: "test-1",
                name: "Test 1",
                value: "test1"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                key: "test-2",
                name: "Test 2",
                value: "test2"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                (openBlock(), createBlock(_component_DropdownItem, {
                  key: "some-2",
                  name: "Something",
                  value: "some-2"
                })),
                (openBlock(), createBlock(_component_DropdownItem, {
                  key: "test-3",
                  name: "Test 3",
                  value: "test3"
                })),
                (openBlock(), createBlock(Fragment, null, renderList([
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15
                ], (i) => {
                  return createVNode(_component_DropdownItem, {
                    key: i,
                    name: "Choice " + i,
                    value: i,
                    disabled: i === 7
                  }, null, 8, ["name", "value", "disabled"]);
                }), 64)),
                (openBlock(), createBlock(_component_DropdownItem, {
                  key: "test-1",
                  name: "Test 1",
                  value: "test1"
                })),
                (openBlock(), createBlock(_component_DropdownItem, {
                  key: "test-2",
                  name: "Test 2",
                  value: "test2"
                }))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { style: { "width": "200px" } }, [
            createVNode(_component_Dropdown, {
              modelValue: $data.longDropdown,
              "onUpdate:modelValue": ($event) => $data.longDropdown = $event
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(_component_DropdownItem, {
                  key: "some-2",
                  name: "Something",
                  value: "some-2"
                })),
                (openBlock(), createBlock(_component_DropdownItem, {
                  key: "test-3",
                  name: "Test 3",
                  value: "test3"
                })),
                (openBlock(), createBlock(Fragment, null, renderList([
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15
                ], (i) => {
                  return createVNode(_component_DropdownItem, {
                    key: i,
                    name: "Choice " + i,
                    value: i,
                    disabled: i === 7
                  }, null, 8, ["name", "value", "disabled"]);
                }), 64)),
                (openBlock(), createBlock(_component_DropdownItem, {
                  key: "test-1",
                  name: "Test 1",
                  value: "test1"
                })),
                (openBlock(), createBlock(_component_DropdownItem, {
                  key: "test-2",
                  name: "Test 2",
                  value: "test2"
                }))
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    label: "Dropdown with footer",
    required: "",
    class: "margin-bottom-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Dropdown, {
          modelValue: $data.dropdown,
          "onUpdate:modelValue": ($event) => $data.dropdown = $event,
          "show-search": "",
          "show-footer": ""
        }, {
          footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<a class="select__footer-button"${_scopeId2}><i class="iconoir-plus"${_scopeId2}></i> Add item </a>`);
            } else {
              return [
                createVNode("a", {
                  class: "select__footer-button",
                  onClick: ($event) => _ctx.$refs.IntegrationCreateEditModal.show()
                }, [
                  createVNode("i", { class: "iconoir-plus" }),
                  createTextVNode(" Add item ")
                ], 8, ["onClick"])
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 1",
                value: "choice-1"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 2",
                value: "choice-2",
                icon: "iconoir-edit-pencil"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 3",
                value: "choice-3",
                icon: "iconoir-db"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 4",
                value: "choice-4",
                icon: "iconoir-cancel",
                disabled: true
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { style: { "width": "200px" } }, [
            createVNode(_component_Dropdown, {
              modelValue: $data.dropdown,
              "onUpdate:modelValue": ($event) => $data.dropdown = $event,
              "show-search": "",
              "show-footer": ""
            }, {
              footer: withCtx(() => [
                createVNode("a", {
                  class: "select__footer-button",
                  onClick: ($event) => _ctx.$refs.IntegrationCreateEditModal.show()
                }, [
                  createVNode("i", { class: "iconoir-plus" }),
                  createTextVNode(" Add item ")
                ], 8, ["onClick"])
              ]),
              default: withCtx(() => [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                })
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    label: "Dropdown by link",
    required: "",
    class: "margin-bottom-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}><a${_scopeId}>Open dropdown</a>`);
        _push2(ssrRenderComponent(_component_Dropdown, {
          ref: "dropdown1",
          modelValue: $data.dropdown,
          "onUpdate:modelValue": ($event) => $data.dropdown = $event,
          "show-input": false
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 1",
                value: "choice-1"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 2",
                value: "choice-2",
                icon: "iconoir-edit-pencil"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 3",
                value: "choice-3",
                icon: "iconoir-db"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 4",
                value: "choice-4",
                icon: "iconoir-cancel",
                disabled: true
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { style: { "width": "200px" } }, [
            createVNode("a", {
              ref: "dropdownLink",
              onClick: ($event) => _ctx.$refs.dropdown1.toggle(_ctx.$refs.dropdownLink)
            }, "Open dropdown", 8, ["onClick"]),
            createVNode(_component_Dropdown, {
              ref: "dropdown1",
              modelValue: $data.dropdown,
              "onUpdate:modelValue": ($event) => $data.dropdown = $event,
              "show-input": false
            }, {
              default: withCtx(() => [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                })
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    label: "Dropdown large",
    required: "",
    class: "margin-bottom-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Dropdown, {
          modelValue: $data.dropdown,
          "onUpdate:modelValue": ($event) => $data.dropdown = $event,
          "show-search": false,
          size: "large"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 1",
                value: "choice-1"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 2",
                value: "choice-2",
                icon: "iconoir-edit-pencil"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 3",
                value: "choice-3",
                icon: "iconoir-db"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 4",
                value: "choice-4",
                icon: "iconoir-cancel",
                disabled: true
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { style: { "width": "200px" } }, [
            createVNode(_component_Dropdown, {
              modelValue: $data.dropdown,
              "onUpdate:modelValue": ($event) => $data.dropdown = $event,
              "show-search": false,
              size: "large"
            }, {
              default: withCtx(() => [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                })
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    label: "Dropdown error",
    required: "",
    class: "margin-bottom-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Dropdown, {
          modelValue: $data.dropdown,
          "onUpdate:modelValue": ($event) => $data.dropdown = $event,
          error: true
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 1",
                value: "choice-1"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 2",
                value: "choice-2",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 3",
                value: "choice-3",
                icon: "iconoir-db"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 4",
                value: "choice-4",
                icon: "iconoir-cancel",
                disabled: true
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 5",
                value: "choice-5",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DropdownItem, {
                name: "Choice 6",
                value: "choice-6",
                icon: "iconoir-edit-pencil",
                description: "Lorem ipsum dolor sit amet, consectetur."
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 5",
                  value: "choice-5",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 6",
                  value: "choice-6",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { style: { "width": "200px" } }, [
            createVNode(_component_Dropdown, {
              modelValue: $data.dropdown,
              "onUpdate:modelValue": ($event) => $data.dropdown = $event,
              error: true
            }, {
              default: withCtx(() => [
                createVNode(_component_DropdownItem, {
                  name: "Choice 1",
                  value: "choice-1"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 2",
                  value: "choice-2",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 3",
                  value: "choice-3",
                  icon: "iconoir-db"
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 4",
                  value: "choice-4",
                  icon: "iconoir-cancel",
                  disabled: true
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 5",
                  value: "choice-5",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                }),
                createVNode(_component_DropdownItem, {
                  name: "Choice 6",
                  value: "choice-6",
                  icon: "iconoir-edit-pencil",
                  description: "Lorem ipsum dolor sit amet, consectetur."
                })
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="control"><label class="control__label">Datepicker field</label><div class="control__elements"> value: ${ssrInterpolate($data.date)} <br><br>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</div></div></div><div class="margin-bottom-3">`);
  _push(ssrRenderComponent(_component_Alert, {
    type: "success",
    "close-button": ""
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Toast message`);
      } else {
        return [
          createTextVNode("Toast message")
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="alert__actions-button-text alert__actions-button-text--normal"${_scopeId}> Cancel </button><button class="alert__actions-button-text alert__actions-button-text--loading"${_scopeId}> Accept </button>`);
      } else {
        return [
          createVNode("button", { class: "alert__actions-button-text alert__actions-button-text--normal" }, " Cancel "),
          createVNode("button", { class: "alert__actions-button-text alert__actions-button-text--loading" }, " Accept ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}> Lorem ipsum dolor sit amet, <a href="#"${_scopeId}>consectetur</a> adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. </p>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode(" Lorem ipsum dolor sit amet, "),
            createVNode("a", { href: "#" }, "consectetur"),
            createTextVNode(" adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Alert, {
    type: "warning",
    "close-button": ""
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Toast message`);
      } else {
        return [
          createTextVNode("Toast message")
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="alert__actions-button-text alert__actions-button-text--normal"${_scopeId}> Cancel </button><button class="alert__actions-button-text alert__actions-button-text--loading"${_scopeId}> Accept </button>`);
      } else {
        return [
          createVNode("button", { class: "alert__actions-button-text alert__actions-button-text--normal" }, " Cancel "),
          createVNode("button", { class: "alert__actions-button-text alert__actions-button-text--loading" }, " Accept ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}> Lorem ipsum dolor sit amet, <a href="#"${_scopeId}>consectetur</a> adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. </p>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode(" Lorem ipsum dolor sit amet, "),
            createVNode("a", { href: "#" }, "consectetur"),
            createTextVNode(" adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Alert, {
    type: "info-primary",
    "close-button": ""
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Toast message`);
      } else {
        return [
          createTextVNode("Toast message")
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          type: "primary",
          size: "small"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Accept `);
            } else {
              return [
                createTextVNode(" Accept ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<button class="alert__actions-button-text alert__actions-button-text--normal"${_scopeId}> Cancel </button>`);
      } else {
        return [
          createVNode(_component_Button, {
            type: "primary",
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(" Accept ")
            ]),
            _: 1
          }),
          createVNode("button", { class: "alert__actions-button-text alert__actions-button-text--normal" }, " Cancel ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}> Lorem ipsum dolor sit amet, <a href="#"${_scopeId}>consectetur</a> adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. </p>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode(" Lorem ipsum dolor sit amet, "),
            createVNode("a", { href: "#" }, "consectetur"),
            createTextVNode(" adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Alert, {
    type: "info-neutral",
    "close-button": ""
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Toast message`);
      } else {
        return [
          createTextVNode("Toast message")
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="alert__actions-button-text alert__actions-button-text--normal"${_scopeId}> Cancel </button><button class="alert__actions-button-text alert__actions-button-text--loading"${_scopeId}> Accept </button>`);
      } else {
        return [
          createVNode("button", { class: "alert__actions-button-text alert__actions-button-text--normal" }, " Cancel "),
          createVNode("button", { class: "alert__actions-button-text alert__actions-button-text--loading" }, " Accept ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}> Lorem ipsum dolor sit amet, <a href="#"${_scopeId}>consectetur</a> adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. </p>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode(" Lorem ipsum dolor sit amet, "),
            createVNode("a", { href: "#" }, "consectetur"),
            createTextVNode(" adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Alert, {
    type: "error",
    "close-button": ""
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Alert title`);
      } else {
        return [
          createTextVNode("Alert title")
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="alert__actions-button-text alert__actions-button-text--normal alert__actions-button-text--loading"${_scopeId}> Cancel </button>`);
      } else {
        return [
          createVNode("button", { class: "alert__actions-button-text alert__actions-button-text--normal alert__actions-button-text--loading" }, " Cancel ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Alert, null, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Alert title`);
      } else {
        return [
          createTextVNode("Alert title")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3 style-guide__buttons" style="${ssrRenderStyle({ backgroundColor: "white", padding: "5px" })}"><h3>Button</h3>`);
  _push(ssrRenderComponent(_component_Button, { type: "primary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button primary`);
      } else {
        return [
          createTextVNode("Button primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, { type: "secondary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button secondary`);
      } else {
        return [
          createTextVNode("Button secondary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, { type: "danger" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button danger`);
      } else {
        return [
          createTextVNode("Button danger")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, { type: "upload" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button upload`);
      } else {
        return [
          createTextVNode("Button upload")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3 style-guide__buttons" style="${ssrRenderStyle({ backgroundColor: "white", padding: "5px" })}"><h3>Button large</h3>`);
  _push(ssrRenderComponent(_component_Button, {
    type: "primary",
    size: "large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button primary`);
      } else {
        return [
          createTextVNode("Button primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "secondary",
    size: "large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button secondary`);
      } else {
        return [
          createTextVNode("Button secondary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "danger",
    size: "large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button danger`);
      } else {
        return [
          createTextVNode("Button danger")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "upload",
    size: "large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button upload`);
      } else {
        return [
          createTextVNode("Button upload")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3 style-guide__buttons" style="${ssrRenderStyle({ backgroundColor: "white", padding: "5px" })}"><h3>Button small</h3>`);
  _push(ssrRenderComponent(_component_Button, {
    type: "primary",
    size: "small"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button primary`);
      } else {
        return [
          createTextVNode("Button primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "secondary",
    size: "small"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button secondary`);
      } else {
        return [
          createTextVNode("Button secondary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "danger",
    size: "small"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button danger`);
      } else {
        return [
          createTextVNode("Button danger")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "upload",
    size: "small"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button upload`);
      } else {
        return [
          createTextVNode("Button upload")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3 style-guide__buttons" style="${ssrRenderStyle({ backgroundColor: "white", padding: "5px" })}"><h3>Button loading</h3>`);
  _push(ssrRenderComponent(_component_Button, {
    type: "primary",
    size: "small",
    loading: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button primary`);
      } else {
        return [
          createTextVNode("Button primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "secondary",
    size: "small",
    loading: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button secondary`);
      } else {
        return [
          createTextVNode("Button secondary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "danger",
    size: "small",
    loading: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button danger`);
      } else {
        return [
          createTextVNode("Button danger")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "upload",
    size: "small",
    loading: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button upload`);
      } else {
        return [
          createTextVNode("Button upload")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3 style-guide__buttons" style="${ssrRenderStyle({ backgroundColor: "white", padding: "5px" })}"><h3>Button disabled</h3>`);
  _push(ssrRenderComponent(_component_Button, {
    type: "primary",
    size: "small",
    disabled: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button primary`);
      } else {
        return [
          createTextVNode("Button primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "secondary",
    size: "small",
    disabled: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button secondary disabled`);
      } else {
        return [
          createTextVNode("Button secondary disabled")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "danger",
    size: "small",
    disabled: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button danger disabled`);
      } else {
        return [
          createTextVNode("Button danger disabled")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3 style-guide__buttons" style="${ssrRenderStyle({ backgroundColor: "white", padding: "5px" })}"><h3>Button with icon</h3>`);
  _push(ssrRenderComponent(_component_Button, {
    type: "primary",
    size: "small",
    icon: "iconoir-plus"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button primary`);
      } else {
        return [
          createTextVNode("Button primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "secondary",
    size: "small",
    icon: "iconoir-plus"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button secondary`);
      } else {
        return [
          createTextVNode("Button secondary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "danger",
    size: "small",
    icon: "iconoir-plus"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button danger`);
      } else {
        return [
          createTextVNode("Button danger")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3" style="${ssrRenderStyle({ backgroundColor: "white", padding: "5px" })}"><h3>Button full width</h3>`);
  _push(ssrRenderComponent(_component_Button, {
    class: "margin-bottom-2",
    type: "primary",
    icon: "iconoir-plus",
    "full-width": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button primary`);
      } else {
        return [
          createTextVNode("Button primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    class: "margin-bottom-2",
    type: "secondary",
    icon: "iconoir-plus",
    "full-width": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button secondary`);
      } else {
        return [
          createTextVNode("Button secondary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    class: "margin-bottom-2",
    type: "danger",
    icon: "iconoir-plus",
    "full-width": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button danger`);
      } else {
        return [
          createTextVNode("Button danger")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3" style="${ssrRenderStyle({ backgroundColor: "white", padding: "5px" })}"><h3>Button icon</h3><div class="margin-bottom-2"> Primary `);
  _push(ssrRenderComponent(_component_ButtonIcon, {
    type: "primary",
    icon: "iconoir-basketball"
  }, null, _parent));
  _push(`</div><div> Secondary `);
  _push(ssrRenderComponent(_component_ButtonIcon, {
    type: "secondary",
    icon: "iconoir-basketball"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ButtonIcon, {
    type: "primary",
    icon: "iconoir-basketball",
    loading: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_ButtonIcon, {
    type: "primary",
    icon: "iconoir-basketball",
    disabled: ""
  }, null, _parent));
  _push(`</div><div class="margin-bottom-3" style="${ssrRenderStyle({ backgroundColor: "white", padding: "5px" })}"><h3>Button text</h3>`);
  _push(ssrRenderComponent(_component_ButtonText, {
    type: "primary",
    icon: "iconoir-plus"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button text primary`);
      } else {
        return [
          createTextVNode("Button text primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ButtonText, {
    type: "secondary",
    icon: "iconoir-plus"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button text primary`);
      } else {
        return [
          createTextVNode("Button text primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ButtonText, {
    type: "primary",
    icon: "iconoir-plus",
    loading: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button text loading`);
      } else {
        return [
          createTextVNode("Button text loading")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ButtonText, {
    type: "primary",
    icon: "iconoir-plus",
    disabled: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Button text disabled`);
      } else {
        return [
          createTextVNode("Button text disabled")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3" style="${ssrRenderStyle({ backgroundColor: "white", padding: "5px" })}"><h3>Button add</h3>`);
  _push(ssrRenderComponent(_component_ButtonAdd, null, null, _parent));
  _push(ssrRenderComponent(_component_ButtonAdd, { disabled: "" }, null, _parent));
  _push(`</div><div class="margin-bottom-3" style="${ssrRenderStyle({ "background-color": "#ffffff", "padding": "20px" })}"><h3>Classic tabs</h3>`);
  _push(ssrRenderComponent(_component_Tabs, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Tab, {
          selected: true,
          title: "Tab 1"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}> Tab 1 content Lorem ipsum dolor sit amet, <a href="#"${_scopeId2}>consectetur</a> adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. </p>`);
            } else {
              return [
                createVNode("p", null, [
                  createTextVNode(" Tab 1 content Lorem ipsum dolor sit amet, "),
                  createVNode("a", { href: "#" }, "consectetur"),
                  createTextVNode(" adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Tab, { title: "Tab 2" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}> Tab 2 content Lorem ipsum dolor sit amet, <a href="#"${_scopeId2}>consectetur</a> adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. </p>`);
            } else {
              return [
                createVNode("p", null, [
                  createTextVNode(" Tab 2 content Lorem ipsum dolor sit amet, "),
                  createVNode("a", { href: "#" }, "consectetur"),
                  createTextVNode(" adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Tab, { title: "Tab 3" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}> Tab 3 content Lorem ipsum dolor sit amet, <a href="#"${_scopeId2}>consectetur</a> adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. </p>`);
            } else {
              return [
                createVNode("p", null, [
                  createTextVNode(" Tab 3 content Lorem ipsum dolor sit amet, "),
                  createVNode("a", { href: "#" }, "consectetur"),
                  createTextVNode(" adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Tab, {
            selected: true,
            title: "Tab 1"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createTextVNode(" Tab 1 content Lorem ipsum dolor sit amet, "),
                createVNode("a", { href: "#" }, "consectetur"),
                createTextVNode(" adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. ")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Tab, { title: "Tab 2" }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createTextVNode(" Tab 2 content Lorem ipsum dolor sit amet, "),
                createVNode("a", { href: "#" }, "consectetur"),
                createTextVNode(" adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. ")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Tab, { title: "Tab 3" }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createTextVNode(" Tab 3 content Lorem ipsum dolor sit amet, "),
                createVNode("a", { href: "#" }, "consectetur"),
                createTextVNode(" adipiscing elit. Sed quis gravida ante. Nulla nec elit dui. Nam nec dui ligula. Pellentesque feugiat erat vel porttitor euismod. Duis nec viverra urna. Praesent. ")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3"><div class="tooltip margin-bottom-2"><div class="tooltip__content">Example tooltip</div></div><div class="tooltip tooltip--top"><div class="tooltip__content">Tooltip top</div></div></div><div class="margin-bottom-3 style-guide__contexts"><div class="context"><div class="context__menu-title">Vehicles</div><ul class="context__menu"><li class="context__menu-item"><a class="context__menu-item-link" href="#"><i class="context__menu-item-icon iconoir-edit-pencil"></i> Rename database </a></li><li class="context__menu-item"><a class="context__menu-item-link" href="#"><i class="context__menu-item-icon iconoir-bin"></i> Delete table </a></li><li class="context__menu-item"><a class="context__menu-item-link context__menu-item-link--loading" href="#"><i class="context__menu-item-icon iconoir-bin"></i> Loading </a></li></ul></div><div class="context" style="${ssrRenderStyle({ "max-width": "264px" })}"><div class="context__menu-title">Workspace permissions</div><ul class="context__menu context__menu--can-be-active"><li class="context__menu-item"><a href="#" class="context__menu-item-link context__menu-item-link--with-desc active"><span class="context__menu-item-title">Admin</span><div class="context__menu-item-description"> Description of what an admin can or can\u2019t do on the workspace. </div><i class="context__menu-active-icon iconoir-check"></i></a></li><li class="context__menu-item"><a href="#" class="context__menu-item-link context__menu-item-link--with-desc disabled"><span class="context__menu-item-title">Admin</span><div class="context__menu-item-description"> Description of what an admin can or can\u2019t do on the workspace. </div></a></li><li class="context__menu-item"><a href="#" class="context__menu-item-link context__menu-item-link--with-desc context__menu-item-link--loading"><span class="context__menu-item-title">Builder</span><div class="context__menu-item-description"> Description of what a builder can or can\u2019t do on the workspace. </div></a></li><li class="context__menu-item context__menu-item--with-separator"><a class="context__menu-item-link context__menu-item-link--delete" href="#"> Remove from workspace </a></li></ul></div><div class="select"><div class="select__search"><i class="select__search-icon iconoir-search"></i><input type="text" class="select__search-input" placeholder="Search views"></div><ul${ssrRenderAttrs(mergeProps({ class: "select__items" }, ssrGetDirectiveProps(_ctx, _directive_auto_overflow_scroll)))}><li class="select__item active"><a href="#" class="select__item-link"><div class="select__item-name">Workspace name 1</div></a><i class="select__item-active-icon iconoir-check"></i><a href="#" class="select__item-options"><i class="baserow-icon-more-vertical"></i></a></li><li class="select__item"><a href="#" class="select__item-link"><div class="select__item-name">Workspace name 2</div></a><a href="#" class="select__item-options"><i class="baserow-icon-more-vertical"></i></a></li><li class="select__item select__item--loading"><a href="#" class="select__item-link"><div class="select__item-name">Workspace name 3</div></a><a href="#" class="select__item-options"><i class="baserow-icon-more-vertical"></i></a></li><li class="select__item"><a href="#" class="select__item-link"><div class="select__item-name">Workspace name 4</div></a><a href="#" class="select__item-options"><i class="baserow-icon-more-vertical"></i></a></li></ul><div class="select__footer"><a href="#" class="select__footer-button"><i class="iconoir-plus"></i> Do something </a></div></div></div><div class="margin-bottom-3 style-guide__contexts"><div class="select"><div class="select__search"><i class="select__search-icon iconoir-search"></i><input type="text" class="select__search-input" placeholder="Search views"></div><ul${ssrRenderAttrs(mergeProps({ class: "select__items" }, ssrGetDirectiveProps(_ctx, _directive_auto_overflow_scroll)))}><li class="select__item"><a href="#" class="select__item-link"><div class="select__item-name"><i class="select__item-icon iconoir-view-grid color-primary"></i> Grid view name </div></a><a href="#" class="select__item-options" data-context=".context"><i class="baserow-icon-more-vertical"></i></a></li><li class="select__item"><a href="#" class="select__item-link"><div class="select__item-name"><i class="select__item-icon iconoir-view-grid color-primary"></i> Grid view option 2. </div></a><a href="#" class="select__item-options"><i class="baserow-icon-more-vertical"></i></a></li><li class="select__item"><a href="#" class="select__item-link"><div class="select__item-name"><i class="select__item-icon iconoir-view-grid color-primary"></i> Grid view 2 </div></a><a href="#" class="select__item-options"><i class="baserow-icon-more-vertical"></i></a></li><li class="select__item"><a href="#" class="select__item-link"><div class="select__item-name"><i class="select__item-icon iconoir-view-grid color-primary"></i> Grid view 3 </div></a><a href="#" class="select__item-options"><i class="baserow-icon-more-vertical"></i></a></li></ul><div class="select__footer"><div class="select__footer-create"><a class="select__footer-create-link"><i class="select__footer-create-icon iconoir-table"></i> Grid <i class="select__footer-create-link-icon iconoir-plus"></i></a><a class="select__footer-create-link"><i class="select__footer-create-icon iconoir-view-grid"></i> Gallery <i class="select__footer-create-link-icon iconoir-plus"></i></a><a class="select__footer-create-link"><i class="select__footer-create-icon iconoir-edit"></i> Form <i class="select__footer-create-link-icon iconoir-plus"></i></a><a class="select__footer-create-link"><i class="select__footer-create-icon iconoir-kanban-board"></i> Kanban <i class="select__footer-create-link-icon iconoir-plus"></i></a></div></div></div><div class="context datepicker-context">`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</div><div class="time-select"><ul><li><a href="#">00:00</a></li><li><a href="#">00:30</a></li><li><a href="#" class="active">01:00</a></li><li><a href="#">01:30</a></li><li><a href="#">02:00</a></li><li><a href="#">02:30</a></li><li><a href="#">03:00</a></li><li><a href="#">03:30</a></li></ul></div></div><div class="formula-field margin-bottom-3"><div class="formula-field__input">`);
  _push(ssrRenderComponent(_component_FormTextarea, {
    modelValue: $data.formula,
    "onUpdate:modelValue": ($event) => $data.formula = $event,
    "auto-expandable": "",
    class: "auto-expandable-textarea--input-formula"
  }, null, _parent));
  _push(`</div><div class="formula-field__body"><div class="formula-field__items"><ul class="formula-field__item-group"><li class="formula-field__item-group-title">Fields</li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="iconoir-text formula-field__item-icon"></i> Text </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="baserow-icon-hashtag formula-field__item-icon"></i> Number </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="iconoir-check formula-field__item-icon"></i> Checkbox </a></li></ul><ul class="formula-field__item-group"><li class="formula-field__item-group-title">Constants</li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="baserow-icon-hashtag formula-field__item-icon"></i> e </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="baserow-icon-hashtag formula-field__item-icon"></i> pi </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="iconoir-check formula-field__item-icon"></i> true </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="iconoir-check formula-field__item-icon"></i> false </a></li></ul><ul class="formula-field__item-group"><li class="formula-field__item-group-title">Operators</li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="iconoir-text formula-field__item-icon"></i> If </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="baserow-icon-hashtag formula-field__item-icon"></i> add </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="baserow-icon-hashtag formula-field__item-icon"></i> subtract </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="baserow-icon-hashtag formula-field__item-icon"></i> multiply </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="baserow-icon-hashtag formula-field__item-icon"></i> divide </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="baserow-icon-hashtag formula-field__item-icon"></i> pow </a></li></ul><ul class="formula-field__item-group"><li class="formula-field__item-group-title">Functions</li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="iconoir-text formula-field__item-icon"></i> concat </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="iconoir-text formula-field__item-icon"></i> join </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="iconoir-text formula-field__item-icon"></i> slice </a></li><li class="formula-field__item"><a href="#" class="formula-field__item-link"><i class="baserow-icon-hashtag formula-field__item-icon"></i> length </a></li></ul></div><div class="formula-field__description"><div class="formula-field__description-heading-1">concat</div><div class="formula-field__description-text"> Concatenates its arguments and returns the result. </div><div class="formula-field__description-heading-2">Syntax</div><pre class="formula-field__description-example"><code>concat(text...)</code></pre><div class="formula-field__description-heading-2">Examples</div><pre class="formula-field__description-example"><code>concat(\u201CHello\u201D, \u201CWorld\u201D) == \u201CHelloWorld\u201D
\u201CHello\u201D + \u201CWorld\u201D == \u201CHelloWorld\u201D</code></pre></div></div></div><div class="margin-bottom-3">`);
  _push(ssrRenderComponent(_component_Button, {
    "append-icon": "iconoir-edit-pencil",
    onClick: ($event) => _ctx.$refs.context1.toggle($event.target)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Toggle context `);
      } else {
        return [
          createTextVNode(" Toggle context ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Context, { ref: "context1" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="context__menu-title"${_scopeId}>Vehicles</div><ul class="context__menu"${_scopeId}><li class="context__menu-item"${_scopeId}><a class="context__menu-item-link" href="#"${_scopeId}><i class="context__menu-item-icon iconoir-edit-pencil"${_scopeId}></i> This does nothing </a></li><li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}> Open another context </a>`);
        _push2(ssrRenderComponent(_component_Context, { ref: "context2" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="context__menu-title"${_scopeId2}>Open modal</div><ul class="context__menu"${_scopeId2}><li class="context__menu-item"${_scopeId2}><a class="context__menu-item-link"${_scopeId2}><i class="context__menu-item-icon iconoir-edit-pencil"${_scopeId2}></i> Click to open modal </a></li>`);
              _push3(ssrRenderComponent(_component_Modal, { ref: "modal1" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h2 class="box__title"${_scopeId3}>Modal inside a context</h2>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      icon: "iconoir-edit-pencil",
                      onClick: ($event) => _ctx.$refs.context3.toggle($event.target)
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Toggle context`);
                        } else {
                          return [
                            createTextVNode("Toggle context")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Context, { ref: "context3" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="context__menu-title"${_scopeId4}>Vehicles</div><ul class="context__menu"${_scopeId4}><li class="context__menu-item"${_scopeId4}><a class="context__menu-item-link" href="#"${_scopeId4}><i class="context__menu-item-icon iconoir-edit-pencil"${_scopeId4}></i> This does nothing </a></li><li class="context__menu-item"${_scopeId4}><a class="context__menu-item-link"${_scopeId4}> Open another context </a>`);
                          _push5(ssrRenderComponent(_component_Context, { ref: "context4" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="context__menu-title"${_scopeId5}>End!</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "context__menu-title" }, "End!")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</li><li class="context__menu-item"${_scopeId4}><a class="context__menu-item-link" href="#"${_scopeId4}><i class="context__menu-item-icon iconoir-bin"${_scopeId4}></i> This does nothing </a></li></ul>`);
                        } else {
                          return [
                            createVNode("div", { class: "context__menu-title" }, "Vehicles"),
                            createVNode("ul", { class: "context__menu" }, [
                              createVNode("li", { class: "context__menu-item" }, [
                                createVNode("a", {
                                  class: "context__menu-item-link",
                                  href: "#"
                                }, [
                                  createVNode("i", { class: "context__menu-item-icon iconoir-edit-pencil" }),
                                  createTextVNode(" This does nothing ")
                                ])
                              ]),
                              createVNode("li", { class: "context__menu-item" }, [
                                createVNode("a", {
                                  class: "context__menu-item-link",
                                  onClick: ($event) => _ctx.$refs.context4.toggle($event.target)
                                }, " Open another context ", 8, ["onClick"]),
                                createVNode(_component_Context, { ref: "context4" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "context__menu-title" }, "End!")
                                  ]),
                                  _: 1
                                }, 512)
                              ]),
                              createVNode("li", { class: "context__menu-item" }, [
                                createVNode("a", {
                                  class: "context__menu-item-link",
                                  href: "#"
                                }, [
                                  createVNode("i", { class: "context__menu-item-icon iconoir-bin" }),
                                  createTextVNode(" This does nothing ")
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("h2", { class: "box__title" }, "Modal inside a context"),
                      createVNode(_component_Button, {
                        icon: "iconoir-edit-pencil",
                        onClick: ($event) => _ctx.$refs.context3.toggle($event.target)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Toggle context")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_Context, { ref: "context3" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "context__menu-title" }, "Vehicles"),
                          createVNode("ul", { class: "context__menu" }, [
                            createVNode("li", { class: "context__menu-item" }, [
                              createVNode("a", {
                                class: "context__menu-item-link",
                                href: "#"
                              }, [
                                createVNode("i", { class: "context__menu-item-icon iconoir-edit-pencil" }),
                                createTextVNode(" This does nothing ")
                              ])
                            ]),
                            createVNode("li", { class: "context__menu-item" }, [
                              createVNode("a", {
                                class: "context__menu-item-link",
                                onClick: ($event) => _ctx.$refs.context4.toggle($event.target)
                              }, " Open another context ", 8, ["onClick"]),
                              createVNode(_component_Context, { ref: "context4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "context__menu-title" }, "End!")
                                ]),
                                _: 1
                              }, 512)
                            ]),
                            createVNode("li", { class: "context__menu-item" }, [
                              createVNode("a", {
                                class: "context__menu-item-link",
                                href: "#"
                              }, [
                                createVNode("i", { class: "context__menu-item-icon iconoir-bin" }),
                                createTextVNode(" This does nothing ")
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }, 512)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</ul>`);
            } else {
              return [
                createVNode("div", { class: "context__menu-title" }, "Open modal"),
                createVNode("ul", { class: "context__menu" }, [
                  createVNode("li", { class: "context__menu-item" }, [
                    createVNode("a", {
                      class: "context__menu-item-link",
                      onClick: ($event) => _ctx.$refs.modal1.show()
                    }, [
                      createVNode("i", { class: "context__menu-item-icon iconoir-edit-pencil" }),
                      createTextVNode(" Click to open modal ")
                    ], 8, ["onClick"])
                  ]),
                  createVNode(_component_Modal, { ref: "modal1" }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "box__title" }, "Modal inside a context"),
                      createVNode(_component_Button, {
                        icon: "iconoir-edit-pencil",
                        onClick: ($event) => _ctx.$refs.context3.toggle($event.target)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Toggle context")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_Context, { ref: "context3" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "context__menu-title" }, "Vehicles"),
                          createVNode("ul", { class: "context__menu" }, [
                            createVNode("li", { class: "context__menu-item" }, [
                              createVNode("a", {
                                class: "context__menu-item-link",
                                href: "#"
                              }, [
                                createVNode("i", { class: "context__menu-item-icon iconoir-edit-pencil" }),
                                createTextVNode(" This does nothing ")
                              ])
                            ]),
                            createVNode("li", { class: "context__menu-item" }, [
                              createVNode("a", {
                                class: "context__menu-item-link",
                                onClick: ($event) => _ctx.$refs.context4.toggle($event.target)
                              }, " Open another context ", 8, ["onClick"]),
                              createVNode(_component_Context, { ref: "context4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "context__menu-title" }, "End!")
                                ]),
                                _: 1
                              }, 512)
                            ]),
                            createVNode("li", { class: "context__menu-item" }, [
                              createVNode("a", {
                                class: "context__menu-item-link",
                                href: "#"
                              }, [
                                createVNode("i", { class: "context__menu-item-icon iconoir-bin" }),
                                createTextVNode(" This does nothing ")
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }, 512)
                    ]),
                    _: 1
                  }, 512)
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li${_scopeId}><a href="#"${_scopeId}><i class="context__menu-item-icon iconoir-bin"${_scopeId}></i> This does nothing </a></li></ul>`);
      } else {
        return [
          createVNode("div", { class: "context__menu-title" }, "Vehicles"),
          createVNode("ul", { class: "context__menu" }, [
            createVNode("li", { class: "context__menu-item" }, [
              createVNode("a", {
                class: "context__menu-item-link",
                href: "#"
              }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-edit-pencil" }),
                createTextVNode(" This does nothing ")
              ])
            ]),
            createVNode("li", { class: "context__menu-item" }, [
              createVNode("a", {
                class: "context__menu-item-link",
                onClick: ($event) => _ctx.$refs.context2.toggle($event.target)
              }, " Open another context ", 8, ["onClick"]),
              createVNode(_component_Context, { ref: "context2" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "context__menu-title" }, "Open modal"),
                  createVNode("ul", { class: "context__menu" }, [
                    createVNode("li", { class: "context__menu-item" }, [
                      createVNode("a", {
                        class: "context__menu-item-link",
                        onClick: ($event) => _ctx.$refs.modal1.show()
                      }, [
                        createVNode("i", { class: "context__menu-item-icon iconoir-edit-pencil" }),
                        createTextVNode(" Click to open modal ")
                      ], 8, ["onClick"])
                    ]),
                    createVNode(_component_Modal, { ref: "modal1" }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "box__title" }, "Modal inside a context"),
                        createVNode(_component_Button, {
                          icon: "iconoir-edit-pencil",
                          onClick: ($event) => _ctx.$refs.context3.toggle($event.target)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Toggle context")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_Context, { ref: "context3" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "context__menu-title" }, "Vehicles"),
                            createVNode("ul", { class: "context__menu" }, [
                              createVNode("li", { class: "context__menu-item" }, [
                                createVNode("a", {
                                  class: "context__menu-item-link",
                                  href: "#"
                                }, [
                                  createVNode("i", { class: "context__menu-item-icon iconoir-edit-pencil" }),
                                  createTextVNode(" This does nothing ")
                                ])
                              ]),
                              createVNode("li", { class: "context__menu-item" }, [
                                createVNode("a", {
                                  class: "context__menu-item-link",
                                  onClick: ($event) => _ctx.$refs.context4.toggle($event.target)
                                }, " Open another context ", 8, ["onClick"]),
                                createVNode(_component_Context, { ref: "context4" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "context__menu-title" }, "End!")
                                  ]),
                                  _: 1
                                }, 512)
                              ]),
                              createVNode("li", { class: "context__menu-item" }, [
                                createVNode("a", {
                                  class: "context__menu-item-link",
                                  href: "#"
                                }, [
                                  createVNode("i", { class: "context__menu-item-icon iconoir-bin" }),
                                  createTextVNode(" This does nothing ")
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        }, 512)
                      ]),
                      _: 1
                    }, 512)
                  ])
                ]),
                _: 1
              }, 512)
            ]),
            createVNode("li", null, [
              createVNode("a", { href: "#" }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-bin" }),
                createTextVNode(" This does nothing ")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    onClick: ($event) => _ctx.$refs.modal2.show()
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`show modal`);
      } else {
        return [
          createTextVNode("show modal")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Modal, { ref: "modal2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="box__title"${_scopeId}>An example modal</h2><p${_scopeId}> Mauris dignissim massa ac justo consequat porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tellus suscipit, gravida libero a, egestas urna. Quisque tellus nisi, consequat et interdum non, posuere sed lacus. Morbi fermentum lorem sed vestibulum tristique. Vivamus scelerisque molestie ligula vel elementum. Etiam metus lacus, commodo sit amet tristique luctus, pulvinar eget justo. Fusce sed vehicula dolor. Aliquam sollicitudin fringilla augue, posuere maximus orci sollicitudin a. Vestibulum egestas tristique nunc, tristique dignissim mauris dictum imperdiet. Mauris ultrices ac eros at fringilla. Praesent ut tincidunt dui. </p>`);
      } else {
        return [
          createVNode("h2", { class: "box__title" }, "An example modal"),
          createVNode("p", null, " Mauris dignissim massa ac justo consequat porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tellus suscipit, gravida libero a, egestas urna. Quisque tellus nisi, consequat et interdum non, posuere sed lacus. Morbi fermentum lorem sed vestibulum tristique. Vivamus scelerisque molestie ligula vel elementum. Etiam metus lacus, commodo sit amet tristique luctus, pulvinar eget justo. Fusce sed vehicula dolor. Aliquam sollicitudin fringilla augue, posuere maximus orci sollicitudin a. Vestibulum egestas tristique nunc, tristique dignissim mauris dictum imperdiet. Mauris ultrices ac eros at fringilla. Praesent ut tincidunt dui. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    onClick: ($event) => _ctx.$store.dispatch("toast/success", {
      title: "Custom success toast",
      message: "Mauris dignissim massa ac justo consequat porttitor."
    })
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` toggle success toast `);
      } else {
        return [
          createTextVNode(" toggle success toast ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "danger",
    onClick: ($event) => _ctx.$store.dispatch("toast/error", {
      title: "Custom error toast",
      message: "Mauris dignissim massa ac justo consequat porttitor."
    })
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` toggle error toast `);
      } else {
        return [
          createTextVNode(" toggle error toast ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "danger",
    onClick: ($event) => _ctx.$store.dispatch("toast/warning", {
      title: "Custom warning toast",
      message: "Mauris dignissim massa ac justo consequat porttitor."
    })
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` toggle warning toast `);
      } else {
        return [
          createTextVNode(" toggle warning toast ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    onClick: ($event) => _ctx.$store.dispatch("toast/info", {
      title: "Custom info toast",
      message: "Mauris dignissim massa ac justo consequat porttitor."
    })
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` toggle info toast `);
      } else {
        return [
          createTextVNode(" toggle info toast ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3"><div class="modal__box"><div class="modal__actions"><a class="modal__close"><i class="iconoir-cancel"></i></a></div><h2 class="box__title">An example modal</h2><p> Mauris dignissim massa ac justo consequat porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tellus suscipit, gravida libero a, egestas urna. Quisque tellus nisi, consequat et interdum non, posuere sed lacus. Morbi fermentum lorem sed vestibulum tristique. Vivamus scelerisque molestie ligula vel elementum. Etiam metus lacus, commodo sit amet tristique luctus, pulvinar eget justo. Fusce sed vehicula dolor. Aliquam sollicitudin fringilla augue, posuere maximus orci sollicitudin a. Vestibulum egestas tristique nunc, tristique dignissim mauris dictum imperdiet. Mauris ultrices ac eros at fringilla. Praesent ut tincidunt dui. </p><div class="delete-section"><div class="delete-section__label"><div class="delete-section__label-icon"><i class="iconoir-warning-triangle"></i></div> Will also be permanently deleted </div><p class="delete-section__description"> Mauris dignissim massa ac justo consequat porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tellus suscipit, gravida libero a, egestas urna. Quisque tellus nisi, consequat et interdum non, posuere sed lacus. </p><ul class="delete-section__list"><li><i class="delete-section__list-icon iconoir-db"></i> Vehicles <small>including 12 tables</small></li><li><i class="delete-section__list-icon iconoir-db"></i> Webshop <small>including 12 tables</small></li></ul></div><div class="actions actions--right">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "large",
    overflow: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Validate`);
      } else {
        return [
          createTextVNode("Validate")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="modal__box modal__box--with-sidebar"><div class="modal__actions"><a class="modal__close"><i class="iconoir-cancel"></i></a></div><div class="modal__box-sidebar modal__box-sidebar--left modal__box-sidebar--scrollable"><div class="modal-sidebar__head"><div class="modal-sidebar__head-initials-icon">B</div><div class="modal-sidebar__head-name">Settings</div></div><ul class="modal-sidebar__nav"><li><a class="modal-sidebar__nav-link active"><i class="modal-sidebar__nav-icon iconoir-user"></i> Account </a></li><li><a class="modal-sidebar__nav-link"><i class="modal-sidebar__nav-icon iconoir-lock"></i> Password </a></li><li><a class="modal-sidebar__nav-link"><i class="modal-sidebar__nav-icon iconoir-key-alt"></i> API Tokens </a></li><li><a class="modal-sidebar__nav-link"><i class="modal-sidebar__nav-icon iconoir-eye-off"></i> Delete account </a></li></ul></div><div class="modal__box-content"><h2 class="box__title">An example modal</h2><p> Mauris dignissim massa ac justo consequat porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tellus suscipit, gravida libero a, egestas urna. Quisque tellus nisi, consequat et interdum non, posuere sed lacus. Morbi fermentum lorem sed vestibulum tristique. Vivamus scelerisque molestie ligula vel elementum. Etiam metus lacus, commodo sit amet tristique luctus, pulvinar eget justo. Fusce sed vehicula dolor. Aliquam sollicitudin fringilla augue, posuere maximus orci sollicitudin a. Vestibulum egestas tristique nunc, tristique dignissim mauris dictum imperdiet. Mauris ultrices ac eros at fringilla. Praesent ut tincidunt dui. </p></div></div></div><div class="margin-bottom-3"><div class="card" style="${ssrRenderStyle({ "width": "320px" })}"><div class="card__cover"><i class="card__cover-empty-image iconoir-media-image"></i>`);
  {
    _push(`<!---->`);
  }
  _push(`</div><div class="card__fields"><div class="card__field"><div class="card__field-name">Text</div><div class="card__field-value"><div class="card-text">This is a single line text field</div></div></div><div class="card__field"><div class="card__field-name">Long text</div><div class="card__field-value"><div class="card-text"> This is a long text field with a very long content that doesn&#39;t fit. </div></div></div><div class="card__field"><div class="card__field-name">Link row</div><div class="card__field-value"><div class="card-many-to-many__list-wrapper"><div class="card-many-to-many__list"><div class="card-many-to-many__item card-link-row"><span class="card-many-to-many__name"> Value 1 with a very long name that doesn&#39;t </span></div><div class="card-many-to-many__item card-link-row card-link-row--unnamed"><span class="card-many-to-many__name"> unnamed row 1 </span></div><div class="card-many-to-many__item card-link-row"><span class="card-many-to-many__name"> Another value </span></div></div></div></div></div><div class="card__field"><div class="card__field-name">Number</div><div class="card__field-value"><div class="card-text">205</div></div></div><div class="card__field"><div class="card__field-name">Decimal</div><div class="card__field-value"><div class="card-text">205.55</div></div></div><div class="card__field"><div class="card__field-name">Boolean</div><div class="card__field-value"><div class="card-boolean"><i class="iconoir-check"></i></div></div></div><div class="card__field"><div class="card__field-name">Date</div><div class="card__field-value"><div class="card-text">2021-01-01</div></div></div><div class="card__field"><div class="card__field-name">Datetime</div><div class="card__field-value"><div class="card-text">2021-01-01</div></div></div><div class="card__field"><div class="card__field-name">URL</div><div class="card__field-value"><div class="card-text"><a href="#">http://baserow.io</a></div></div></div><div class="card__field"><div class="card__field-name">Email</div><div class="card__field-value"><div class="card-text"><a href="#">bram@baserow.io</a></div></div></div><div class="card__field"><div class="card__field-name">File</div><div class="card__field-value"><div class="card-file__list-wrapper"><ul class="card-file__list"><li class="card-file__item"><img src="http://localhost:4000/media/thumbnails/tiny/NcTfu10MwH9xtUkzL5jcmqIDXE0vkHin_1e01581444c66c952aa585f6fc79a671885b75053d275329f20e7b5faa73d7ec.png" class="card-file__image"></li><li class="card-file__item"><img src="http://localhost:4000/media/thumbnails/tiny/E413HC1eHsw9gakeRrpUOodHprEBT1pv_01bb5d9bbbd9addb39d1352877ca061573f2ca8ba64631ae5d4b7f8e16f6b18b.png" class="card-file__image"></li><li class="card-file__item"><i class="card-file__icon iconoir-page-empty"></i></li></ul></div></div></div><div class="card__field"><div class="card__field-name">Single select</div><div class="card__field-value"><div class="card-single-select-option background-color--orange"> Option 1 with a very long name that doesn&#39;t fit unfortunately. </div></div></div><div class="card__field"><div class="card__field-name">Single select</div><div class="card__field-value"><div class="card-single-select-option background-color--gray"> Option 2 </div></div></div><div class="card__field"><div class="card__field-name">Multiple select</div><div class="card__field-value"><div class="card-many-to-many__list-wrapper"><div class="card-many-to-many__list"><div class="card-many-to-many__item card-multiple-select-option background-color--green"><span class="card-many-to-many__name"> Option value 1 </span></div><div class="card-many-to-many__item card-multiple-select-option background-color--blue"><span class="card-many-to-many__name"> Option 2 with a very long name that doesn&#39;t fit </span></div><div class="card-many-to-many__item card-multiple-select-option background-color--blue"><span class="card-many-to-many__name"> Option 3 </span></div></div></div></div></div><div class="card__field"><div class="card__field-name">Phone</div><div class="card__field-value"><div class="card-text"><a href="#">+316 12345678</a></div></div></div></div></div></div><div class="margin-bottom-3" style="${ssrRenderStyle({ "background-color": "#ffffff", "position": "relative", "height": "1000px" })}"><div class="data-table"><div class="data-table__header"><h1 class="data-table__title">12 Members in ACME Corp</h1><div class="data-table__actions">`);
  _push(ssrRenderComponent(_component_FormInput, {
    "left-icon": "iconoir-search",
    placeholder: "Find member..."
  }, null, _parent));
  _push(ssrRenderComponent(_component_Button, {
    href: "#",
    size: "large",
    class: "margin-left-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Invite member `);
      } else {
        return [
          createTextVNode(" Invite member ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="data-table__body"><table class="data-table__table"><thead><tr class="data-table__table-row"><th class="data-table__table-cell data-table__table-cell--sticky-left data-table__table-cell--header"><div class="data-table__table-cell-head">`);
  _push(ssrRenderComponent(_component_Checkbox, {
    modelValue: $data.checkbox,
    "onUpdate:modelValue": ($event) => $data.checkbox = $event
  }, null, _parent));
  _push(`</div></th><th class="data-table__table-cell data-table__table-cell--header"><div class="data-table__table-cell-head"><a href="#" class="data-table__table-cell-head-link">Name</a><div><i class="iconoir-sort-down"></i> 0 </div></div></th><th class="data-table__table-cell data-table__table-cell--header"><div class="data-table__table-cell-head">Email</div></th><th class="data-table__table-cell data-table__table-cell--header"><div class="data-table__table-cell-head"> Workspace permissions <div><i class="iconoir-sort-up"></i> 1 </div></div></th><th class="data-table__table-cell data-table__table-cell--header"><div class="data-table__table-cell-head">Team</div></th><th class="data-table__table-cell data-table__table-cell--header data-table__table-cell--sticky-right"><div class="data-table__table-cell-head"></div></th></tr></thead><tbody><!--[-->`);
  ssrRenderList(new Array(10), (i, i2) => {
    _push(`<tr class="${ssrRenderClass([{
      "data-table__table-row--selected": i2 === 2,
      "data-table__table-row--hover": i2 === 4
    }, "data-table__table-row"])}"><td class="data-table__table-cell data-table__table-cell--sticky-left"><div class="data-table__table-cell-content">`);
    _push(ssrRenderComponent(_component_Checkbox, {
      modelValue: $data.checkbox,
      "onUpdate:modelValue": ($event) => $data.checkbox = $event
    }, null, _parent));
    _push(`</div></td><td class="data-table__table-cell"><div class="data-table__table-cell-content"> This is a very long name that doesn&#39;t completely fit. </div></td><td class="data-table__table-cell"><div class="data-table__table-cell-content"> This is a very long name that doesn&#39;t completely fit. </div></td><td class="data-table__table-cell"><div class="data-table__table-cell-content"> This is a very long name that doesn&#39;t completely fit. </div></td><td class="data-table__table-cell"><div class="data-table__table-cell-content"> This is a very long name that doesn&#39;t completely fit. </div></td><td class="data-table__table-cell data-table__table-cell--sticky-right"><div class="data-table__table-cell-content"><div class="data-table__more-wrapper"><a href="#" class="data-table__more"><i class="data-table__more-icon baserow-icon-more-horizontal"></i></a></div></div></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div><div class="data-table__footer">`);
  _push(ssrRenderComponent(_component_Paginator, {
    page: 1,
    "total-pages": 10
  }, null, _parent));
  _push(`</div></div></div><div class="margin-bottom-3" style="${ssrRenderStyle({ "background-color": "#ffffff" })}"><h2>List component</h2>`);
  _push(ssrRenderComponent(_component_List, {
    items: [
      { id: 1, name: "test", image: $data.image },
      { id: 2, name: "test2", image: $data.image },
      { id: 2, name: "test3", image: $data.image },
      { id: 2, name: "test4", image: $data.image }
    ],
    attributes: ["name"]
  }, {
    "left-side": withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", item.image)}${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: item.image
          }, null, 8, ["src"])
        ];
      }
    }),
    "right-side": withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          size: "tiny",
          icon: "edit",
          onClick: ($event) => $options.alert("should edit item " + item.name)
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Button, {
          size: "tiny",
          icon: "iconoir-bin",
          onClick: ($event) => $options.alert("should delete item " + item.name)
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode(_component_Button, {
              size: "tiny",
              icon: "edit",
              onClick: ($event) => $options.alert("should edit item " + item.name)
            }, null, 8, ["onClick"]),
            createVNode(_component_Button, {
              size: "tiny",
              icon: "iconoir-bin",
              onClick: ($event) => $options.alert("should delete item " + item.name)
            }, null, 8, ["onClick"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3"><h2>Avatars</h2><div style="${ssrRenderStyle({ "display": "flex", "gap": "10px", "padding": "0.5em" })}">`);
  _push(ssrRenderComponent(_component_Avatar, {
    size: "small",
    icon: "iconoir-bin"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "small",
    icon: "iconoir-bin",
    color: "yellow"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "small",
    icon: "iconoir-bin",
    color: "red"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "small",
    icon: "iconoir-bin",
    color: "transparent"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "small",
    image: $data.image
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "small",
    initials: "BW",
    color: "neutral"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "small",
    initials: "BW",
    color: "cyan",
    rounded: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "small",
    icon: "iconoir-bin"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "small",
    image: $data.image,
    color: "neutral"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "small",
    initials: "BW",
    color: "red",
    rounded: false
  }, null, _parent));
  _push(`</div><div style="${ssrRenderStyle({ "display": "flex", "gap": "10px", "padding": "0.5em" })}">`);
  _push(ssrRenderComponent(_component_Avatar, {
    size: "medium",
    icon: "iconoir-bin"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "medium",
    icon: "iconoir-bin",
    color: "yellow"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "medium",
    icon: "iconoir-bin",
    color: "red"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "medium",
    icon: "iconoir-bin",
    color: "transparent"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "medium",
    image: $data.image
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "medium",
    initials: "BW",
    color: "neutral"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "medium",
    initials: "BW",
    color: "cyan",
    rounded: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "medium",
    icon: "iconoir-bin"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "medium",
    image: $data.image,
    color: "neutral"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "medium",
    initials: "BW",
    color: "red"
  }, null, _parent));
  _push(`</div><div style="${ssrRenderStyle({ "display": "flex", "gap": "10px", "padding": "0.5em" })}">`);
  _push(ssrRenderComponent(_component_Avatar, {
    size: "large",
    icon: "iconoir-bin"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "large",
    icon: "iconoir-bin",
    color: "yellow"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "large",
    icon: "iconoir-bin",
    color: "red"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "large",
    icon: "iconoir-bin",
    color: "transparent"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "large",
    image: $data.image
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "large",
    initials: "BW",
    color: "neutral"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "large",
    initials: "BW",
    color: "cyan",
    rounded: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "large",
    icon: "iconoir-bin"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "large",
    image: $data.image,
    color: "neutral"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "large",
    initials: "BW",
    color: "red"
  }, null, _parent));
  _push(`</div><div style="${ssrRenderStyle({ "display": "flex", "gap": "10px", "padding": "0.5em" })}">`);
  _push(ssrRenderComponent(_component_Avatar, {
    size: "x-large",
    icon: "iconoir-bin"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "x-large",
    icon: "iconoir-bin",
    color: "yellow"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "x-large",
    icon: "iconoir-bin",
    color: "red"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "x-large",
    icon: "iconoir-bin",
    color: "transparent"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "x-large",
    image: $data.image
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "x-large",
    initials: "BW",
    color: "neutral"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "x-large",
    initials: "BW",
    color: "cyan",
    rounded: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "x-large",
    icon: "iconoir-bin"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "x-large",
    image: $data.image
  }, null, _parent));
  _push(ssrRenderComponent(_component_Avatar, {
    size: "x-large",
    initials: "BW",
    color: "red"
  }, null, _parent));
  _push(`</div></div><div class="margin-bottom-3"><h2>Presentations</h2>`);
  _push(ssrRenderComponent(_component_Presentation, {
    title: "My baserow integration",
    subtitle: "Local baserow integration",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Presentation, {
    title: "My baserow integration",
    subtitle: "Local baserow integration",
    initials: "LB",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Presentation, {
    title: "My baserow integration",
    subtitle: "Local baserow integration",
    icon: "iconoir-db",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Presentation, {
    image: $data.image,
    title: "My baserow integration",
    subtitle: "Local baserow integration",
    "avatar-color": "neutral",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Presentation, {
    image: $data.image,
    title: "My baserow integration",
    subtitle: "Local baserow integration with a very long description",
    "avatar-color": "neutral",
    class: "margin-bottom-2"
  }, null, _parent));
  _push(`</div><div id="colorPicker" class="margin-bottom-3" style="${ssrRenderStyle({ "background-color": "#ffffff", "padding": "20px" })}">`);
  _push(ssrRenderComponent(_component_ColorPicker, {
    ref: "colorPickerComponent",
    modelValue: $data.color,
    "onUpdate:modelValue": ($event) => $data.color = $event
  }, null, _parent));
  _push(`<br><br><a> Open color picker context </a>`);
  _push(ssrRenderComponent(_component_ColorPickerContext, {
    ref: "colorPickerContext",
    modelValue: $data.color,
    "onUpdate:modelValue": ($event) => $data.color = $event,
    value: $data.color,
    variables: $data.colorVariables
  }, null, _parent));
  _push(`<br><br> ${ssrInterpolate($data.color)} - ${ssrInterpolate($options.resolveColor($data.color, $data.colorVariables))} <br><br><br>`);
  _push(ssrRenderComponent(_component_ColorInput, {
    modelValue: $data.color,
    "onUpdate:modelValue": ($event) => $data.color = $event,
    "color-variables": $data.colorVariables
  }, null, _parent));
  _push(ssrRenderComponent(_component_ColorInput, {
    modelValue: $data.color,
    "onUpdate:modelValue": ($event) => $data.color = $event,
    "color-variables": $data.colorVariables,
    "allow-opacity": false
  }, null, _parent));
  _push(`<h3>Color contrast</h3><table class="style-guide__color-contrast-table"><thead><tr><th>Preview</th><th>Initial color</th><th>Contrasted color</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($options.contrastedColors, (colorPair) => {
    _push(`<tr><td><div class="style-guide__color-contrast-preview" style="${ssrRenderStyle({ backgroundColor: colorPair.color })}"><div class="style-guide__color-contrast-preview-inner" style="${ssrRenderStyle({ backgroundColor: colorPair.contrastedColor })}"></div></div></td><td><code>${ssrInterpolate(colorPair.color)}</code></td><td><code>${ssrInterpolate(colorPair.contrastedColor)}</code></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div><div class="margin-bottom-3"><h2>Call to action</h2>`);
  _push(ssrRenderComponent(_component_CallToAction, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` My call to action. Click me! `);
      } else {
        return [
          createTextVNode(" My call to action. Click me! ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_CallToAction, { icon: "baserow-icon-plus" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Call to action with an icon `);
      } else {
        return [
          createTextVNode(" Call to action with an icon ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3"><div class="margin-bottom-3">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: {
    name: "builder-page",
    params: {
      builderId: 99,
      pageId: 99
    }
  } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          type: "primary",
          size: "small"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` To missing builder page `);
            } else {
              return [
                createTextVNode(" To missing builder page ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
            type: "primary",
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(" To missing builder page ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: {
    name: "database-table",
    params: {
      databaseId: 9999,
      tableId: 99,
      viewId: 99
    }
  } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          type: "primary",
          size: "small"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` To missing database table `);
            } else {
              return [
                createTextVNode(" To missing database table ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
            type: "primary",
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(" To missing database table ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: {
    name: "dashboard-application",
    params: {
      dashboardId: 9999
    }
  } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          type: "primary",
          size: "small"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` To missing dashboard `);
            } else {
              return [
                createTextVNode(" To missing dashboard ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
            type: "primary",
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(" To missing dashboard ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="margin-bottom-3">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: {
    name: "automation-workflow",
    params: {
      automationId: 999,
      workflowId: 999
    }
  } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          type: "primary",
          size: "small"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` To missing automation workflow `);
            } else {
              return [
                createTextVNode(" To missing automation workflow ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
            type: "primary",
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(" To missing automation workflow ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_Button, {
    type: "primary",
    size: "small",
    onClick: $options.triggerError
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Trigger fake error `);
      } else {
        return [
          createTextVNode(" Trigger fake error ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><br><br><br><br><br><br><br><br><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/styleGuide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const styleGuide = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { styleGuide as default };
//# sourceMappingURL=styleGuide-G0EtjgfG.mjs.map
