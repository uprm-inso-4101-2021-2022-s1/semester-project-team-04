from flask import jsonify
from werkzeug.security import generate_password_hash, check_password_hash

from dao.address import AddressDAO
from dao.users import UsersDAO


class UserHandler:

    def build_user_dict(self, row):
        result = {}
        result['user_id'] = row[0]
        result['user_fname'] = row[1]
        result['user_lname'] = row[2]
        result['user_uname'] = row[3]
        result['user_passwd'] = row[4]
        result['user_email'] = row[5]
        result['address_id'] = row[6]
        result['address_country'] = row[7]
        result['address_city'] = row[8]
        result['address_street'] = row[9]
        result['address_zipcode'] = row[10]

        return result

    def build_user_attributes(self, user_id, user_fname, user_lname, user_uname, user_passwd, user_email, address_id,
                              address_country, address_city, address_street, address_zipcode):
        result = {}
        result['user_id'] = user_id
        result['user_fname'] = user_fname
        result['user_lname'] = user_lname
        result['user_uname'] = user_uname
        result['user_passwd'] = user_passwd
        result['user_email'] = user_email
        result['address_id'] = address_id
        result['address_country'] = address_country
        result['address_city'] = address_city
        result['address_street'] = address_street
        result['address_zipcode'] = address_zipcode
        return result

    def insertUserJson(self, json):
        print("json ", json)
        if len(json) != 9:
            return jsonify(Error="Malformed post request"), 400
        else:
            users_fname = json['users_fname']
            users_lname = json['users_lname']
            users_uname = json['users_uname']
            users_passwd = json['users_passwd']
            users_email = json['users_email']
            address_country = json['address_country']
            address_city = json['address_city']
            address_street = json['address_street']
            address_zipcode = json['address_zipcode']
            if users_fname and users_lname and users_uname and \
                    users_passwd and users_email and address_country and address_city and \
                    address_street and address_zipcode:
                udao = UsersDAO()
                addao = AddressDAO()
                user_id = udao.insert(users_fname, users_lname,
                                      users_uname, generate_password_hash(users_passwd, method='sha256'), users_email)
                address_id = addao.insert(address_country, address_city,
                                          address_street, address_zipcode, user_id)

                result = self.build_user_attributes(user_id, users_fname,
                                                    users_lname,
                                                    users_uname,
                                                    users_passwd, users_email, address_id, address_country,
                                                    address_city, address_street,
                                                    address_zipcode)
                return jsonify(Users=result), 201
            else:
                return jsonify(Error="Unexpected attributes in post request"), 400

    def getAllUsers(self):
        udao = UsersDAO()
        result_list = []
        for row in udao.getAllUsers():
            result = self.build_user_dict(row)
            result_list.append(result)
        return jsonify(Users=result_list)

    def getUserById(self, user_id):
        udao = UsersDAO()
        row = udao.getUserById(user_id)
        if not row:
            return jsonify(Error="User Not Found"), 404
        else:
            user = self.build_user_dict(row)
            return jsonify(User=user)