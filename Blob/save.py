# Import the required modules
import mysql.connector
import base64

# For security reasons, never expose your password
password = open('password','r').readline()



# Create a connection
mydb = mysql.connector.connect(
    host="127.0.0.1",
    user="tsitohaina",
    password=password,
    database="file"  
)


# Create a cursor object
cursor = mydb.cursor()

# Open a file in binary mode
file = open('image.png','rb').read()

# We must encode the file to get base64 string
file = base64.b64encode(file)

# Sample data to be inserted
args = ('100', file)

# Prepare a query
query = 'INSERT INTO Image VALUES(%s, %s)'

# Execute the query and commit the database.
cursor.execute(query,args)
mydb.commit()
