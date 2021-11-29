from flask import Flask, request, jsonify, render_template, url_for, redirect, flash
from flask_cors import CORS
from flask import Blueprint, render_template, redirect, url_for, request, flash
from flask_jwt_extended import create_access_token, JWTManager
from sqlalchemy.testing import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required

from carHub.backend.dao.users import UsersDAO
from carHub.backend.handler.appointments import AppointmentsHandler
from carHub.backend.handler.users import UserHandler

# auth = Blueprint('auth', __name__)

app = Flask(__name__)
# apply CORS
CORS(app)

app.config["JWT_SECRET_KEY"] = "super-secret"
jwt = JWTManager(app)


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


# method for testing connection between frontend an api
@app.route('/register', methods=['POST'])
def signup_post():
    # email = request.form.get('email')
    # name = request.form.get('name')
    # password = request.form.get('password')

    # user = User.query.filter_by(
    # email=email).first()  # if this returns a user, then the email already exists in database

    # if user:  # if a user is found, we want to redirect back to signup page so user can try again
    # flash('Email address already exists')
    # return redirect(url_for('auth.signup'))

    # create new user with the form data. Hash the password so plaintext version isn't saved.
    # new_user = User(email=email, name=name, password=generate_password_hash(password, method='sha256'))

    # add the new user to the database
    # db.session.add(new_user)
    # db.session.commit()
    email = request.json.get("email", None)

    if UsersDAO().searchUserByEmail(email):
        return jsonify(Error="User's email already exist."), 404
    # password = request.json.get("password", None)
    UserHandler().insertUserForm(request.json)
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@app.route('/Sign-in', methods=['POST'])
def signin_post():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    result = UsersDAO().searchUserByEmail(email)

    if not result[1] or not UsersDAO().searchUserByPassword(result[0], password):
        return jsonify(Error="Incorrect email or password."), 404
    # UserHandler().insertUserForm(request.json)
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


if __name__ == '__main__':
    app.run()
