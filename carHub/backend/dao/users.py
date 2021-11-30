from carHub.backend.config.dbconfig import pg_config
import psycopg2

"""
User's implementation to access the data stored in the database through SQL queries.
"""


class UsersDAO:
    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s host=%s port=%s" % (pg_config['dbname'],
                                                                            pg_config['user'],
                                                                            pg_config['password'],
                                                                            pg_config['host'],
                                                                            pg_config['port'])

        self.conn = psycopg2._connect(connection_url)

    # Run query to get all users information from the database.
    def getAllUsers(self):
        cursor = self.conn.cursor()
        query = "select * from users natural inner join address natural inner join phone;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    # Run query to get the user by it's id from database.
    def getUserById(self, user_id):
        cursor = self.conn.cursor()
        query = "select * from users natural inner join address natural inner join phone where user_id = %s;"
        cursor.execute(query, (user_id,))
        result = cursor.fetchone()
        return result

    # Run query to store user's information to the database.
    def insert(self, user_first_name, user_last_name, user_uname, user_password, user_email):
        cursor = self.conn.cursor()
        query = "insert into users(user_first_name, user_last_name, user_uname, user_password, user_email) " \
                "values (%s, %s, %s, %s, %s) returning user_id;"
        cursor.execute(query, (user_first_name, user_last_name, user_uname, user_password, user_email,))
        user_id = cursor.fetchone()[0]
        self.conn.commit()
        return user_id

    # method for testing connection between frontend an api
    def insertForm(self, user_email, user_password):
        cursor = self.conn.cursor()
        query = "insert into users_test(user_email, user_password) " \
                "values (%s, %s) returning user_id;"
        cursor.execute(query, (user_email, user_password,))
        user_id = cursor.fetchone()[0]
        self.conn.commit()
        return user_id

        # method for testing connection between frontend an api

    def insertForm1(self, user_id, user_password1):
        cursor = self.conn.cursor()
        query = "insert into users_test_passwords(user_id, user_password1) " \
                "values (%s, %s) returning user_id;"
        cursor.execute(query, (user_id, user_password1,))
        user_id = cursor.fetchone()[0]
        self.conn.commit()
        return user_id

    # method for testing connection between frontend an api
    def searchUserByEmail(self, user_email):
        cursor = self.conn.cursor()
        query = "select user_id, user_email from users_test where user_email = %s;"
        cursor.execute(query, (user_email,))
        result = cursor.fetchone()
        return result

    # method for testing connection between frontend an api
    def searchUserByPassword(self, user_id, user_password1):
        cursor = self.conn.cursor()
        query = "select user_password1 from users_test_passwords where user_password1 = %s and  user_id = %s;"
        cursor.execute(query, (user_password1, user_id,))
        result = cursor.fetchone()
        return result
