# Generated by Django 4.1.1 on 2022-09-28 15:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('alcohol', '0014_alter_alcohol_like_count'),
        ('wouldU', '0004_alter_ranking_alcohol_no_alter_review_alcohol_no'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ranking',
            name='alcohol_no',
            field=models.OneToOneField(db_column='alcohol_no', on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='alcohol.alcohol'),
        ),
        migrations.AlterField(
            model_name='review',
            name='alcohol_no',
            field=models.ForeignKey(db_column='alcohol_no', on_delete=django.db.models.deletion.CASCADE, to='alcohol.alcohol'),
        ),
    ]
