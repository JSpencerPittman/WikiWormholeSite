import json
import os

from channels.generic.websocket import WebsocketConsumer
from wikiwormhole.traverse.popular import PopularTraverse
from wikiwormhole.wikiapi import generate_wiki_page_from_title, retreive_pageviews

CONFIG_PATH = os.path.join(os.path.dirname(__file__), '../config.yaml')
POP_ROUNDS = 5


class WikiWormholeConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, code):
        pass

    def receive(self, text_data):
        print("RECEIVING...")
        text_data_json = json.loads(text_data)
        print(text_data_json)
        wfrom = text_data_json["wfrom"]
        wto = text_data_json["wto"]
        print(f"FROM {wfrom} to {wto}")

        # SINGLE POP SEARCH
        # pop_start = PopularTraverse(wfrom, CONFIG_PATH)
        # for i in range(POP_ROUNDS):
        #     pop_start.traverse()
        #     print(i, pop_start._trace)

        # popt = ['apple', 'lemon', 'coconut']

        # self.send(text_data=json.dumps({"popt1": popt}))
