# Generated by Django 4.1.1 on 2022-09-30 04:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("alcohol", "0015_alter_alcohol_recommend_alcohol_no"),
        ("user", "0008_alter_user_user_kind"),
        ("mypage", "0004_user_alcohol"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Like",
            new_name="Alcohol_like",
        ),
        migrations.AlterModelTable(
            name="alcohol_like",
            table="alcohol_like",
        ),
    ]
