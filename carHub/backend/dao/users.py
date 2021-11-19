from carHub.backend.config.dbconfig import pg_config
import psycopg2
import urllib.parse as urlparse


class UsersDAO:
    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s host=%s port=%s" % (pg_config['dbname'],
                                                                            pg_config['user'],
                                                                            pg_config['password'],
                                                                            pg_config['host'],
                                                                            pg_config['port'])

        self.conn = psycopg2._connect(connection_url)

    def getAllUsers(self):
        cursor = self.conn.cursor()
        query = "select * from users natural inner join address natural inner join phone;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    def getUserById(self, user_id):
        cursor = self.conn.cursor()
        query = "select * from users natural inner join address natural inner join phone where user_id = %s;"
        cursor.execute(query, (user_id,))
        result = cursor.fetchone()
        return result

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
