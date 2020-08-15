import gspread, json
from flask import Flask, request, abort, jsonify
from oauth2client.service_account import ServiceAccountCredentials
from googleapiclient import discovery

scope = ["https://spreadsheets.google.com/feeds","https://www.googleapis.com/auth/spreadsheets","https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("creds.json", scope)
client = gspread.authorize(creds)
service = discovery.build('sheets', 'v4', credentials=creds)
spreadsheet_id = '18l4cO3X1dp8MCWqDencHYUTidUhXb7u9IHFp_vg_5uQ'

def addCustomer(name, email, phone, addressLine1, addressLine2, city, state, zip, specialInstructions):
    address = addressLine1 + addressLine2 + ', ' + city + ' ' + state + ' ' + zip
    range_ = 'Customers!C3:G3'
    value_range_body = {
        "majorDimension": "COLUMNS",
        "values": [[name], [email], [phone], [address], [specialInstructions]]
    }
    value_input_option = 'USER_ENTERED'
    request = service.spreadsheets().values().append(spreadsheetId=spreadsheet_id, range=range_, valueInputOption=value_input_option, body=value_range_body)
    response = request.execute()

def modifyCustomer(name, email, phone, address, specialInstructions):
    customerID = email
    range_ = "Customers!A:A"
    value_render_option = "UNFORMATTED_VALUE"
    request2 = service.spreadsheets().values().get(spreadsheetId=spreadsheet_id, range=range_, valueRenderOption=value_render_option)
    response2 = request2.execute()
    values = response2['values']

    def findRow(id):
        for counter, x in enumerate(values, 1):
            if id == x:
                return counter
    value_range_body = {
        "majorDimension": "COLUMNS",
        "values": [[email], [''], [name], [phone], [address], [specialInstructions]]}
    row = findRow([customerID])
    value_input_option = "RAW"
    range_2 = "Customers!A" + str(row) + ":F" + str(row)
    request3 = service.spreadsheets().values().update(spreadsheetId=spreadsheet_id, range=range_2, valueInputOption=value_input_option, body=value_range_body)
    response3 = request3.execute()
