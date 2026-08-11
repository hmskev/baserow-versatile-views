import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("versatile_views", "0002_view_types"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="VersatileComment",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("table_id", models.BigIntegerField()),
                ("row_id", models.BigIntegerField()),
                ("author_name", models.CharField(blank=True, max_length=255)),
                ("message", models.TextField()),
                ("created_on", models.DateTimeField(auto_now_add=True)),
                (
                    "user",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="versatile_view_comments",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "ordering": ("created_on", "id"),
                "indexes": [models.Index(fields=["table_id", "row_id"], name="versatile_v_table_i_8f9a6e_idx")],
            },
        ),
    ]
