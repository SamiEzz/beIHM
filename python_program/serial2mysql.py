# -*- coding: utf-8 -*-
"""
Created on Wed Jan  9 15:00:34 2019

@author: Sami
"""

import mysql.connector
import serial
from time import sleep


abort=1

ser = serial.Serial(port='COM4',baudrate=9600)



def parser(string):
    string = string.decode("utf-8") 
    return string

def connect_to_db(db):
    mydb = mysql.connector.connect(
      host="localhost",
      user="root",
      database=db
    )
    return mydb

def check_abort(mydb):
    mycursor = mydb.cursor()    
    mycursor.execute("SELECT * FROM arret_urgence")    
    myresult = mycursor.fetchall()
    #print("abort : "+str(myresult))
    return myresult[0][0]

"""---------------------------------------------------------------"""
"""-----------------------Code principale-------------------------"""
"""---------------------------------------------------------------"""


while(True):
    mydb=connect_to_db("compacc_ihm")
    abort = check_abort(mydb)
    if(abort==0):
        ser.write(bytes(b'i'))
        val=""
        mycursor = mydb.cursor()
        sql = "INSERT INTO `_test_temps_reel` (`tension`, `courant`, `temperature`) VALUES "
        val=ser.readline()
        val=parser(val)
        print(val)
        sql = sql + val + ";"
        if(val[0]=="("):
            mycursor.execute(sql)
            mydb.commit()
            #print("commit")
        sleep(1)
        
    else:
        ser.write(bytes(b'a'))
        sleep(3)

ser.close()













