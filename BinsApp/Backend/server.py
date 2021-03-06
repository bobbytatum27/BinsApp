import gspread, json
from customerfunctions import *
from inventoryfunctions import *
from orderfunctions import *
from flask import Flask, request, abort, jsonify
from oauth2client.service_account import ServiceAccountCredentials

app = Flask(__name__)

@app.route("/customers", methods=['POST', 'GET'])
def log():
    try:
        loginInfo = request.get_json(force=False, cache=True)
        addCustomer(loginInfo['name'],
                    loginInfo['email'],
                    loginInfo['phone'],
                    loginInfo['address'],
                    loginInfo['specialInstructions'],
                    loginInfo['size'],
                    loginInfo['building'],
                    loginInfo['parking'],
                    loginInfo['licenseNumber'],
                    loginInfo['licenseState'])
    except:
        print('exception')
    x = {'a':False}
    return jsonify(x)

@app.route("/modifycustomers", methods=['POST', 'GET'])
def log2():
    try:
        customerInfo = request.get_json(force=False, cache=True)
        modifyCustomer(customerInfo['name'],
                       customerInfo['email'],
                       customerInfo['phone'],
                       customerInfo['address'],
                       customerInfo['specialInstructions'],
                       customerInfo['selectedButton'])

    except:
        print('exception')
    x = {'a':False}
    return jsonify(x)

@app.route("/modifyAddress", methods=['POST', 'GET'])
def log3():
    try:
        customerAddress = request.get_json(force=False, cache=True)
        modifyAddress(customerAddress['name'],
                       customerAddress['email'],
                       customerAddress['phone'],
                       customerAddress['address'],
                       customerAddress['specialInstructions'],
                       customerAddress['selectedButton'],
                       customerAddress['building'],
                       customerAddress['parking'])

    except:
        print('exception')
    x = {'a':False}
    return jsonify(x)

@app.route("/inventory", methods=['POST', 'GET'])
def log4():
    try:
        binInfo = request.get_json(force=False, cache=True)
        addBin(binInfo['itemName'], binInfo['email'], binInfo['image'])
    except:
        print('exception')
    x = {'a':False}
    return jsonify(x)

@app.route("/render", methods=['GET'])
def log5():
    list = json.dumps(renderList())
    return list

@app.route("/orders", methods=['POST', 'GET'])
def log6():
    try:
        orderInfo = request.get_json(force=False, cache=True)
        addOrder(orderInfo['dateSelected'],
                 orderInfo['timeSelected'],
                 orderInfo['address'],
                 orderInfo['email'],
                 orderInfo['phone'],
                 orderInfo['type'],
                 orderInfo['selected'])
    except:
        print('exception')
    x = {'a':False}
    return jsonify(x)

@app.route("/renderorders", methods=['GET'])
def log7():
    list = json.dumps(renderOrders())
    return list

@app.route("/renderpastorders", methods=['GET'])
def log8():
    list = json.dumps(renderPastOrders())
    return list

@app.route("/modifybin", methods=['POST', 'GET'])
def log9():
    try:
        binInfo = request.get_json(force=False, cache=True)
        modifyBin(binInfo['id'],
                  binInfo['selected'],
                  binInfo['email'],
                  binInfo['isInStorage'])
    except:
        print('exception')
    x = {'a':False}
    return jsonify(x)

@app.route("/%used", methods=['GET'])
def log10():
    list = json.dumps(renderPercentages())
    return list

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
