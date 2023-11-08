from flask import *
from flask_cors import CORS
from numpy import *
from cvzone import *
from pickle import *
import numpy as np
import cv2
import re
import mysql.connector

app = Flask(__name__)
CORS(app)
app.secret_key = "this is very confidential"

# DB configurations
db_config = {
    "host": "user2.clfxc0soq2ue.us-east-1.rds.amazonaws.com",
    "user": "admin",
    "password": "beetroot",
    "database": "user2"
}

try:
    # Create a database connection
    connection = mysql.connector.connect(**db_config)

    if connection.is_connected():
        # Perform database operations
        cursor = connection.cursor()
        print("CONNECTED!")

except mysql.connector.Error as e:
    print("Error: ", e)

@app.route("/home")         # Home page
def index():
    return redirect("http://localhost:3000/")

@app.route("/login")        # Login page
def login():
    return redirect("http://localhost:3000/login")

@app.route("/model")        # Model page
def model():
    return redirect("http://localhost:3000/model")

@app.route("/register", methods=["POST", "GET"])        # Register page to fetch the email and password from user
def signup():
    msg = ""
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        password = request.form["password"]

        select_query = "SELECT * FROM REGISTER WHERE EMAIL = %s"
        cursor.execute(select_query, (email,))
        account = cursor.fetchone()

        if account:
            return redirect('http://localhost:3000/login')

        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            msg = "Invalid email address"

        else:
            insert_query = "INSERT INTO REGISTER (NAME, EMAIL, PASSWORD) VALUES (%s, %s, %s)"
            cursor.execute(insert_query, (name, email, password))
            connection.commit()
            msg = "Account created successfully"

    return redirect('http://localhost:3000/login')

@app.route("/login", methods=["POST", "GET"])       # Login page to fetch the email and password from user
def login1():
    msg = ''

    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        select_query = "SELECT * FROM REGISTER WHERE EMAIL = %s AND PASSWORD = %s"
        cursor.execute(select_query, (email, password))
        account = cursor.fetchone()
        print(account)

        if account:
            session["Loggedin"] = True
            session["id"] = account[1]
            session["email"] = email
            return redirect("/model")

        else:
            msg = "Incorrect Email / Password"
            return redirect('/login')
    else:
        return redirect('/login')


@app.route("/predict")          # Predict function that detects the free parking slot
def predict():
    cap = cv2.VideoCapture("./Dataset/carParkingInput.mp4")
    with open("parkingSlotPosition", "rb") as f:
        posList = load(f)

    width, height = 167, 58

    def checkParkingSpace(imgPro):
        spaceCounter = 0

        for pos in posList:
            x, y = pos
            imgCrop = imgPro[y: y + height, x: x + width]

            count = cv2.countNonZero(imgCrop)
            if count < 900:
                color = (0, 255, 0)
                thickness = 5
                spaceCounter += 1

            else:
                color = (0, 0, 255)
                thickness = 2

            cv2.rectangle(img, pos, (pos[0] + width, pos[1] + height), color, thickness)
        putTextRect(img, f"Free : {spaceCounter}/{len(posList)}", (100, 50), scale=3, thickness=5, offset=20,
                    colorR=(0, 200, 0))

    while True:
        if cap.get(cv2.CAP_PROP_POS_FRAMES) == cap.get(cv2.CAP_PROP_FRAME_COUNT):
            cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

        success, img = cap.read()

        imgG = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        imgB = cv2.GaussianBlur(imgG, (3, 3), 1)
        imgT = cv2.adaptiveThreshold(imgB, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 25, 16)
        imgM = cv2.medianBlur(imgT, 5)
        kernel = np.ones((3, 3), np.uint8)
        imgD = cv2.dilate(imgM, kernel, iterations=1)
        checkParkingSpace(imgD)
        cv2.imshow("Image", img)
        if cv2.waitKey(1) and 0xFF == ord('q'):
            break


if __name__ == "__main__":
    app.run(debug=True)