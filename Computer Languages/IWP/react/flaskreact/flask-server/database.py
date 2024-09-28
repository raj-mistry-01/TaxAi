from pymongo import MongoClient
from pymongo.collection import Collection
from pymongo.database import Database 

MONGO_URI = "mongodb+srv://daiictHack:matrix0101@cluster0.gtkir.mongodb.net/TaxAi?retryWrites=true&w=majority&appName=Cluster0"

DATABASE_NAME = "TaxAi"

class DatabaseColletion :
    def __init__(self) -> None:
        self.client = MongoClient(MONGO_URI)
        self.db = self.client[DATABASE_NAME]

    def get_collection(self,colletion_name : str) -> Collection :
        return self.db[colletion_name]

db_connetion = DatabaseColletion()