from datetime import date, datetime

import django_filters
from dateutil.relativedelta import relativedelta
from django.db.models import Q

from apps.players.models import Player


class PlayerFilter(django_filters.FilterSet):
    """Custom filter created for filtering players by nationality and role"""

    nationalities = django_filters.CharFilter(
        field_name="nationality", method="filter_fields"
    )
    roles = django_filters.CharFilter(method="filter_fields")
    min_age = django_filters.NumberFilter(
        field_name="date_of_birth", method="filter_min_age"
    )
    max_age = django_filters.NumberFilter(
        field_name="date_of_birth", method="filter_max_age"
    )

    def filter_max_age(self, queryset, name, value):
        """Filters queryset by maximum age"""
        date_ago = datetime.combine(
            date.today() - relativedelta(years=value), datetime.min.time()
        )

        lookup = "__".join([name, "gte"])

        return queryset.filter(**{lookup: date_ago})

    def filter_min_age(self, queryset, name, value):
        """Filters queryset by minimum age"""

        date_ago = datetime.combine(
            date.today() - relativedelta(years=value), datetime.min.time()
        )

        lookup = "__".join([name, "lte"])

        return queryset.filter(**{lookup: date_ago})

    def filter_fields(self, queryset, name, value):
        """Filters queryset by specified field.
        When value is provided as comma separated values.
        This method will split those values and form
        complex query to make concatenated query with or.

        Examples:
            Split values by comma.
            >>> ...?nationalities=serbia,montenegro
            >>> q_objects = Q('nationality__name__icontains':'serba') \
            >>> | Q('nationality__name__icontains':'montenegro')

            Same concept applies on roles.
        """

        lookup = "__".join([name, "name", "icontains"])
        q_objects = Q()
        if "," in value:
            values = value.split(",")
            for v in values:
                q_objects |= Q(**{lookup: v})
        else:
            q_objects = Q(**{lookup: value})

        return queryset.filter(q_objects).distinct()

    class Meta:
        """The Meta class is a special class that defines metadata for a model"""

        model = Player
        fields = ["nationalities", "roles", "min_age", "max_age"]
