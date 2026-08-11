from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("versatile_views", "0003_versatile_comments"),
    ]

    operations = [
        migrations.CreateModel(
            name="VersatileGalleryElement",
            fields=[
                ("element_ptr", models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to="builder.element")),
                ("source_table_id", models.BigIntegerField(blank=True, null=True)),
                ("config", models.JSONField(blank=True, default=dict)),
            ],
            options={"verbose_name": "Versatile Gallery element"},
            bases=("builder.element",),
        ),
    ]
