"""The main webserver for the project"""

import server_funcs
from flask import Flask, render_template, request
import json

app = Flask(__name__, template_folder="../frontend", static_folder="../frontend")

@app.route("/")
def send_frontend():
    """Serves the frontend to the client - might need replacing during integration"""

    return render_template("index.html")

@app.route("/get_stock_price")
def get_stock_price():
    """Handles the get_stock_price API call"""
    response_data = server_funcs.get_stock_info()

    return json.dumps(response_data)

if __name__ == ("__main__"):
    app.run()
