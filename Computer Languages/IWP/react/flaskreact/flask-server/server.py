from flask import Flask,jsonify,request
from pymongo.errors import PyMongoError
from database import db_connetion
from bson import ObjectId
app = Flask(__name__)


def convert_objectid_to_str(data):
    if isinstance(data, list):
        return [convert_objectid_to_str(item) for item in data]
    elif isinstance(data, dict):
        return {key: convert_objectid_to_str(value) for key, value in data.items()}
    elif isinstance(data, ObjectId):
        return str(data)
    return data

@app.route("/generateReport" ,methods=["GET"])
def get_members() :
    print("yes i am called")
    try:
        email = "skjgjfhgj@gmail.com"
        if not email:
            return jsonify({"error": "Email is required"}), 400
        print(email)
        collection = db_connetion.get_collection("useroragnizationdetails")

        latest_data = collection.find({"emailId": "skjgjfhgj@gmail.com"}).sort("_id", -1).limit(1)
        latest_data = list(latest_data)
        latest_data = convert_objectid_to_str(latest_data)
        
    except Exception as e:
        print(f"Error fetching data: {e}")
        return jsonify({"error": "Failed to fetch data from the database"}), 500

    return jsonify(latest_data), 200


if __name__ == "__main__" : 
    app.run(debug=True)