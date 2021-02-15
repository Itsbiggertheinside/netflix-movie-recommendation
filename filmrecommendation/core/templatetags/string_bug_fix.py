from django import template

register = template.Library()


@register.filter
def string_formatter(value):
    return value.replace('`', '"')