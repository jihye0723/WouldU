# Generated by Django 4.1.1 on 2022-10-02 22:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('alcohol', '0001_initial'),
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User_group_figure',
            fields=[
                ('user_kind', models.OneToOneField(db_column='user_kind_code', on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='user.user_kind_code')),
                ('alcohol_type_figure', models.JSONField(default=dict)),
                ('alcohol_taste_figure', models.JSONField(default=dict)),
            ],
            options={
                'db_table': 'user_group_figure',
            },
        ),
        migrations.CreateModel(
            name='User_alcohol',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.SmallIntegerField()),
                ('alcohol_no', models.ForeignKey(db_column='alcohol_no', on_delete=django.db.models.deletion.CASCADE, to='alcohol.alcohol')),
                ('user_no', models.ForeignKey(db_column='user_no', on_delete=django.db.models.deletion.CASCADE, to='user.user')),
            ],
            options={
                'db_table': 'user_alcohol',
            },
        ),
        migrations.CreateModel(
            name='Alcohol_like',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_like', models.BooleanField(default=False)),
                ('reg_date', models.DateTimeField(auto_now_add=True)),
                ('alcohol_no', models.ForeignKey(db_column='alcohol_no', on_delete=django.db.models.deletion.CASCADE, to='alcohol.alcohol')),
                ('user_no', models.ForeignKey(db_column='user_no', on_delete=django.db.models.deletion.CASCADE, to='user.user')),
            ],
            options={
                'db_table': 'alcohol_like',
            },
        ),
    ]
