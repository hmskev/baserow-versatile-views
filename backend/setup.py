from setuptools import find_packages, setup

setup(
    name="baserow-versatile-views",
    version="0.2.0",
    description=(
        "Airtable-parity view types for Baserow: Kanban, Calendar, Timeline and List"
    ),
    package_dir={"": "src"},
    packages=find_packages("src"),
    include_package_data=True,
)
