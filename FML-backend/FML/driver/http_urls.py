from rest_framework import routers
from django.conf.urls import url, include

from driver.views import (
        SongViewSet,
        )

# Registering viewsets on routers

router = routers.DefaultRouter()
router.register(r'songs', SongViewSet, base_name="songs",)
# router.register(r'found', FoundViewSet, base_name="found",)
# router.register(r'myfound', MyFoundViewSet, base_name="myfound",)
# router.register(r'mylost', MyLostViewSet, base_name="mylost",)
urlpatterns = router.urls