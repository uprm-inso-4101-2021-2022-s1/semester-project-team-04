from flask import jsonify
from dao.appointments import AppointmentsDAO

"""
 File for handling appojntments information from app routing call using list and dictionaries data structures.
"""


class AppointmentsHandler:

    def build_appointment_dict(self, row):
        result = {}
        result['user_id'] = row[0]
        result['user_fname'] = row[1]
        result['user_lname'] = row[2]
        result['appoint_created'] = row[3]
        result['appoint_scheduled'] = row[4]
        result['appoint_cancelled'] = row[5]

        return result

    def build_appointment_attributes(self, user_id, appoint_id, appoint_created,
                                     appoint_scheduled, appoint_cancelled):
        result = {}
        result['user_id'] = user_id
        result['appoint_id'] = appoint_id
        result['appoint_created'] = appoint_created
        result['appoint_scheduled'] = appoint_scheduled
        result['appoint_cancelled'] = appoint_cancelled

        return result

    # Pass appojntment information to dao.
    def insertAppointmentJson(self, json):
        print("json ", json)
        if len(json) != 3:
            return jsonify(Error="Malformed post request"), 400
        else:
            appoint_created = json['appointment_created']
            appoint_scheduled = json['appointment_scheduled']
            appoint_cancelled = json['appointment_cancelled']
            if appoint_created and \
                    appoint_scheduled and appoint_cancelled:
                apdao = AppointmentsDAO()
                appoint_id = apdao.insert(appoint_created, appoint_scheduled, appoint_cancelled, 9)

                result = self.build_appointment_attributes(9, appoint_id, appoint_created, appoint_scheduled,
                                                           appoint_cancelled)
                return jsonify(Appointment=result), 201
            else:
                return jsonify(Error="Unexpected attributes in post request"), 400

    # Get all appointments information from dao.
    def getAllAppointments(self):
        apdao = AppointmentsDAO()
        result_list = []
        for row in apdao.getAllAppointments():
            result = self.build_appointment_dict(row)
            result_list.append(result)
        return jsonify(Appointment=result_list)

    # Get appointment information depending by it's names.
    def getUserAppointmentByNames(self, args):
        user_fname = args.get('user_first_name')
        user_lname = args.get('user_last_name')
        apdao = AppointmentsDAO()
        name_list = []
        if (len(args) == 2) and user_fname and user_lname:
            name_list.append(apdao.getUserByAppointmentbyNames(user_fname, user_lname))

        else:
            return jsonify(Error="Malformed query string"), 400
        result_list = []
        for row in name_list:
            result = self.build_appointment_dict(row)
            result_list.append(result)
        return jsonify(Appointments=result_list)
