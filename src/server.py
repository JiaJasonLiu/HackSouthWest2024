"""The main webserver for the project"""

import json
from flask import Flask, render_template, request
import server_funcs

app = Flask(__name__)

@app.route("/get_stock_price")
def get_stock_price():
    """Handles the get_stock_price API call"""
    response_data = server_funcs.get_stock_info()
    return json.dumps(response_data)

@app.route("/send_user")
def recive_server_data():
    """Handles storing the data in the database"""
    server_funcs.recive_data_from_client(request.args)

    return json.dumps(1)

if __name__ == ("__main__"):
    app.run(debug=True, port = '3000')
