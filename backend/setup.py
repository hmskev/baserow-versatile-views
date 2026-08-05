from setuptools import find_packages, setup

setup(
    name="baserow-versatile-views",
    version="0.1.0",
    description="Generic permission-aware Kanban, calendar, and timeline APIs for Baserow",
    package_dir={"": "src"},
    packages=find_packages("src"),
    include_package_data=True,
)
