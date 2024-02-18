"""The main webserver for the project"""

import json
from flask import Flask, render_template, request
import results_email
from flask_cors import CORS

import server_funcs

app = Flask(__name__)
CORS(app)

@app.route("/get_stock_price", methods=["GET"])
def get_stock_price():
    """Handles the get_stock_price API call"""
    response_data = server_funcs.get_stock_info()
    return json.dumps(response_data)

@app.route("/login", methods=["POST"])
def recive_server_data():
    """Handles storing the data in the database"""
    data = json.loads(json.dumps(request.json))
    server_funcs.recive_data_from_client("userData.csv", request.json, data['email'])
    mistake = {"error" : data['email'] + " shouldn't have logged in. We now know your password ends in: \'" + data['password'][-3::] + "\'"}
    server_funcs.user_mistake("mistakes.csv", "", mistake)

    return json.dumps(1)

@app.route("/user_mistake", methods=["POST"])
def user_made_mistake():
    """For when the user makes a mistake that needs to be logged"""
    data = json.loads(json.dumps(request.json))
    server_funcs.user_mistake("mistakes.csv", data['mistake'], request.json)
    return json.dumps(1)

@app.route("/generate_final_report", methods=["POST"])
def final_report():
    """Sends the final failure report for the client through email"""
    results_email.send()

    return json.dumps(1)

if __name__ == ("__main__"):
    app.run(debug=True, port = '3001')
