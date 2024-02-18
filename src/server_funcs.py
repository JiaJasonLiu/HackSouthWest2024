"""Contains functions for the server to run"""
import requests
import json
import get_api_key
import database
import smtplib
import results_email
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def get_stock_info():
    """Returns stock info dict to be sent to server"""

    url = "https://yh-finance.p.rapidapi.com/market/v2/get-quotes"

    querystring = {"region":"US","symbols":"AMD,IBM,AAPL,BTC-USD,MSFT"}

    headers = {
        "X-RapidAPI-Key": get_api_key.get(),
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)

    data = json.loads(response.text)
    stockData = dict()
    for company in data['quoteResponse']['result']:
        companyData = [str(company['regularMarketPrice']), str(company['regularMarketChange']), 
                       str(company['regularMarketChangePercent'])]
        # price;change;percentageChange
        stockData[company['longName']] = ";".join(companyData)
        
    return stockData

def recive_data_from_client(databaseName, data, username):
    """Recives data about the client and stores it in the database"""
    database.append_to_database_by_position(databaseName, username,data)

def user_mistake(databaseName,data):
    database.append_to_database(databaseName, data)
    
    """Called when the user makes a mistake, logs the mistake"""