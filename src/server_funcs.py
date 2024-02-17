"""Contains functions for the server to run"""
import requests
import json
import get_api_key

def get_stock_info():
    """Returns stock info dict to be sent to server"""
    
    url = "https://yh-finance.p.rapidapi.com/market/v2/get-quotes"

    querystring = {"region":"US","symbols":"AMD,IBM,AAPL"}

    headers = {
        "X-RapidAPI-Key": get_api_key.get(),
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)
    
    data = json.loads(response.text)
    stockData = dict()
    for company in data['quoteResponse']['result']:
        # print("this is company", company)
        companyData = [str(company['regularMarketPrice']), str(company['regularMarketChange']), str(company['regularMarketChangePercent'])]
        # price;change;percentageChange
        stockData[company['longName']] = ";".join(companyData)
    
    return stockData
