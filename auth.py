import requests
import json

url = "https://auth.workid.global/api/token"

payload = json.dumps({
  "operation": "get-api-token",
  "username": "your username",
  "password": "your password"
})
headers = {
  'x-api-key': '{api-key}',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
