from flask import Flask, request, jsonify
from flask_cors import CORS

from carHub.backend.handler.appointments import AppointmentsHandler
from carHub.backend.handler.users import UserHandler

app = Flask(__name__)
# apply CORS
CORS(app)


# This route make two things
# 1. List of all parts in the systems - GET
# 2. Add a new part to the system - POST
@app.route('/carhub/users', methods=['GET', 'POST'])
def handleUsers():
    if request.method == 'POST':
        return UserHandler().insertUserJson(request.json)
    else:
        return UserHandler().getAllUsers()


@app.route('/carhub/users/<int:user_id>', methods=['GET', 'PUT', 'DELETE'])
def handleUsersbyId(user_id):
    if request.method == 'GET':
        return UserHandler().getUserById(user_id)
    # elif request.method == 'PUT':
    #   return BaseParts().updatePart(request.json)
    # elif request.method == 'DELETE':
    # return BaseParts().deletePart(pid)
    else:
        return jsonify("Method Not Allowed"), 405


@app.route('/carhub/appointments', methods=['GET', 'POST'])
def handleAppointments():
    if request.method == 'POST':
        return AppointmentsHandler().insertAppointmentJson(request.json)
    else:
        if not request.args:
            return AppointmentsHandler().getAllAppointments()

        else:
            return AppointmentsHandler().getUserAppointmentByNames(request.args)


if __name__ == '__main__':
    app.run()
