import django_filters
from django.db.models import Q

from apps.players.models import Player


class PlayerFilter(django_filters.FilterSet):
    """Custom filter created for filtering players by nationality and role"""

    nationalities = django_filters.CharFilter(
        field_name="nationality", method="filter_fields"
    )
    roles = django_filters.CharFilter(method="filter_fields")

    def filter_fields(self, queryset, name, value):
        """Filter queryset by specified field.
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
        fields = ["nationalities", "roles"]
