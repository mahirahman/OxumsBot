# api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImFmZTRkMzcxNGQ0YzlkOGIiLCJpYXQiOjE2NDAwOTAyOTIsIm5iZiI6MTY0MDA5MDI5MiwiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjo0OTkyNDIifQ.bm8LLVZLSkkrE3mLfH5LHY5RwfhLADayNEVlMPOMSYI"
# server ID = 2950091 AU MAIN

import requests

def request_headers(api_key):
    headers = {
        "Authorization" : f"Bearer {api_key}",
        "X-Rate-Limit-Limit" : 60,
        "X-Rate-Limit-Remaining" : 60
        }
    return 
    
def get_server_info(server_id, api_key):

    url = f"https://api.battlemetrics.com/servers/{server_id}"
    server_info = requests.request("GET", url, headers=request_headers(api_key))
    return server_info

def get_server_map(seed, size, api_key):
    return None

data = get_server_info(2950091, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImFmZTRkMzcxNGQ0YzlkOGIiLCJpYXQiOjE2NDAwOTAyOTIsIm5iZiI6MTY0MDA5MDI5MiwiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjo0OTkyNDIifQ.bm8LLVZLSkkrE3mLfH5LHY5RwfhLADayNEVlMPOMSYI")

print(data.text)
