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
                    loginInfo['specialInstructions'])
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
                       customerInfo['specialInstructions'])

    except:
        print('exception')
    x = {'a':False}
    return jsonify(x)

@app.route("/inventory", methods=['POST', 'GET'])
def log3():
    try:
        binInfo = request.get_json(force=False, cache=True)
        addBin(binInfo['itemName'], binInfo['email'], binInfo['image'])
    except:
        print('exception')
    x = {'a':False}
    return jsonify(x)

@app.route("/render", methods=['GET'])
def log4():
    list = json.dumps(renderList())
    return list

@app.route("/orders", methods=['POST', 'GET'])
def log5():
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
def log6():
    list = json.dumps(renderOrders())
    return list

@app.route("/renderpastorders", methods=['GET'])
def log7():
    list = json.dumps(renderPastOrders())
    return list

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
