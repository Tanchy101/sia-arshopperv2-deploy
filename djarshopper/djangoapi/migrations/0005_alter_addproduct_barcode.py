# Generated by Django 5.0.3 on 2024-06-14 08:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoapi', '0004_alter_addproduct_barcode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addproduct',
            name='barcode',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
