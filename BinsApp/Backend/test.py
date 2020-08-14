import requests

response = requests.post('http://192.168.1.247:5000/test', json = {'username': 'test', 'text': 'Enter name here'})
response.json()
