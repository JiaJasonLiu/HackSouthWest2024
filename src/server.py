"""The main webserver for the project"""

import json
from flask import Flask, render_template, request
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
    server_funcs.recive_data_from_client(request.json)

    return json.dumps(1)

@app.route("/user_mistake", methods=["POST"])
def user_made_mistake():
    """For when the user makes a mistake that needs to be logged"""
    server_funcs.user_mistake(request.args)

    return json.dumps(1)

@app.route("/generate_final_report", methods=["POST"])
def final_report():
    """Gets the final failure report for the client"""
    response_data = server_funcs.get_final_report(request.args)

    return json.dumps(response_data)

if __name__ == ("__main__"):
    app.run(debug=True, port = '3001')
