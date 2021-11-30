from config.dbconfig import pg_config
import psycopg2

"""
Appointment implementation to access the data stored in the database through SQL queries.
"""


class AppointmentsDAO:
    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s host=%s port=%s" % (pg_config['dbname'],
                                                                            pg_config['user'],
                                                                            pg_config['password'],
                                                                            pg_config['host'],
                                                                            pg_config['port'])

        self.conn = psycopg2._connect(connection_url)

    # Run query to get all appointments information from the database.
    def getAllAppointments(self):
        cursor = self.conn.cursor()
        query = "select user_id, user_first_name, user_last_name, appointment_created, appointment_scheduled, appointment_cancelled  " \
                "from users natural inner join appointments;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    # Run query to get the user appointment by it's names from database.
    def getUserByAppointmentbyNames(self, user_first_name, user_last_name):
        cursor = self.conn.cursor()
        query = "select user_id, user_first_name, user_last_name, appointment_created, appointment_scheduled, appointment_cancelled " \
                "from users natural inner join appointments where user_first_name = %s and user_last_name = %s;"
        cursor.execute(query, (user_first_name, user_last_name,))
        result = cursor.fetchone()
        return result

    # Run query to store user's appointment  to the database.
    def insert(self, appointment_created, appointment_scheduled, appointment_cancelled, user_id):
        cursor = self.conn.cursor()
        query = "insert into appointments(appointment_created, appointment_scheduled, appointment_cancelled, user_id) " \
                "values (%s, %s, %s, %s) returning appointment_id;"
        cursor.execute(query, (appointment_created, appointment_scheduled, appointment_cancelled, user_id,))
        appointment_id = cursor.fetchone()[0]
        self.conn.commit()
        return appointment_id
