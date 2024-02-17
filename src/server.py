"""The main webserver for the project"""

from flask import Flask, render_template, request

app = Flask(__name__, template_folder="../frontend", static_folder="../frontend")

@app.route("/")
def send_frontend():
    """Serves the frontend to the client"""

    return render_template("index.html")

if __name__ == ("__main__"):
    app.run()
