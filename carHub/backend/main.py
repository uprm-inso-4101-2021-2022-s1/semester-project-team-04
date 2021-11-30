from flask import Flask, jsonify
from flask_cors import CORS
from flask import request
from flask_jwt_extended import create_access_token, JWTManager


from carHub.backend.dao.users import UsersDAO
from carHub.backend.handler.appointments import AppointmentsHandler
from carHub.backend.handler.users import UserHandler
"""
App routing implementation to map specific URL to associated function.
"""
app = Flask(__name__)
# apply CORS
CORS(app)

app.config["JWT_SECRET_KEY"] = "super-secret"
jwt = JWTManager(app)


# This route make two things
# 1. List of all users in the systems - GET
# 2. Add a new user to the system - POST
@app.route('/carhub/users', methods=['GET', 'POST'])
def handleUsers():
    if request.method == 'POST':
        return UserHandler().insertUserJson(request.json)
    else:
        return UserHandler().getAllUsers()


# This route list a user by it's id
@app.route('/carhub/users/<int:user_id>', methods=['GET'])
def handleUsersbyId(user_id):
    if request.method == 'GET':
        return UserHandler().getUserById(user_id)
    else:
        return jsonify("Method Not Allowed"), 405


# This route make two things
# 1. List of all users appointments in the systems - GET
# 2. Add a new user appointment to the system - POST
@app.route('/carhub/appointments', methods=['GET', 'POST'])
def handleAppointments():
    if request.method == 'POST':
        return AppointmentsHandler().insertAppointmentJson(request.json)
    else:
        if not request.args:
            return AppointmentsHandler().getAllAppointments()

        else:
            return AppointmentsHandler().getUserAppointmentByNames(request.args)


# method for testing connection between frontend an api
@app.route('/register', methods=['POST'])
def register_post():
    email = request.json.get("email", None)

    if UsersDAO().searchUserByEmail(email):
        return jsonify(Error="User's email already exist."), 404
    UserHandler().insertUserForm(request.json)
    access_token = create_access_token(identity=email)
    return jsonify("OK"), 200


@app.route('/Sign-in', methods=['POST'])
def signin_post():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    result = UsersDAO().searchUserByEmail(email)

    try:
        result[0]
    except TypeError:
        return jsonify(Error="Incorrect email or password."), 404

    else:


    #if result[0] is None:
     #   return jsonify(Error="Incorrect email or password."), 404

        if not result[1] or not UsersDAO().searchUserByPassword(result[0], password):
            return jsonify(Error="Incorrect email or password."), 404
        access_token = create_access_token(identity=email)
        return jsonify("OK"), 200


if __name__ == '__main__':
    app.run()
