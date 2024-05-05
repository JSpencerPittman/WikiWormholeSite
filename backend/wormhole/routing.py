from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(r"ws/wormhole/(?P<room_name>\w+)/$",
            consumers.WikiWormholeConsumer.as_asgi())
]
