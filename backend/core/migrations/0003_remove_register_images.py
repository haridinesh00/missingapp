# Generated by Django 3.2.12 on 2022-03-22 15:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_register_images'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='register',
            name='images',
        ),
    ]