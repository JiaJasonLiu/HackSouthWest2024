"""Helper module for retriving APIKEY from file"""

def get_api_key():
    """Fetches the APIKEY from file"""
    with open("apikey.txt", "r", encoding="UTF-8") as fp:
        api_key = fp.readline()

    return api_key
