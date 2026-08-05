import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("builder", "0075_container_element_positioning_behaviour")]

    operations = [
        migrations.CreateModel(
            name="VersatileKanbanElement",
            fields=[
                (
                    "element_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="builder.element",
                    ),
                ),
                (
                    "source_table_id",
                    models.BigIntegerField(blank=True, null=True),
                ),
                ("config", models.JSONField(blank=True, default=dict)),
            ],
            bases=("builder.element",),
        ),
        migrations.CreateModel(
            name="VersatileCalendarElement",
            fields=[
                (
                    "element_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="builder.element",
                    ),
                ),
                (
                    "source_table_id",
                    models.BigIntegerField(blank=True, null=True),
                ),
                ("config", models.JSONField(blank=True, default=dict)),
            ],
            bases=("builder.element",),
        ),
        migrations.CreateModel(
            name="VersatileTimelineElement",
            fields=[
                (
                    "element_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="builder.element",
                    ),
                ),
                (
                    "source_table_id",
                    models.BigIntegerField(blank=True, null=True),
                ),
                ("config", models.JSONField(blank=True, default=dict)),
            ],
            bases=("builder.element",),
        ),
    ]
