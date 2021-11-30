from carHub.backend.config.dbconfig import pg_config
import psycopg2

"""
Phone implementation to access the data stored in the database through SQL queries.
"""
class PhoneDAO:
    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s host=%s port=%s" % (pg_config['dbname'],
                                                                            pg_config['user'],
                                                                            pg_config['password'],
                                                                            pg_config['host'],
                                                                            pg_config['port'])

        self.conn = psycopg2._connect(connection_url)

    # Run query to store user's phone number to the database.
    def insert(self, phone_number, user_id):
        cursor = self.conn.cursor()
        query = "insert into phone(phone_number, user_id) values (%s, %s) returning phone_id;"
        cursor.execute(query, (phone_number, user_id,))
        phone_id = cursor.fetchone()[0]
        self.conn.commit()
        return phone_id
