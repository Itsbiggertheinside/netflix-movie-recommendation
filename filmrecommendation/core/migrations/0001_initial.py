# Generated by Django 3.1.6 on 2021-02-15 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SearchParameters',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('platform', models.CharField(max_length=45)),
                ('genre', models.CharField(max_length=45)),
                ('language', models.CharField(max_length=3)),
                ('score', models.CharField(max_length=5)),
                ('searched_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
