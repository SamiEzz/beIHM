# -*- coding: utf-8 -*-
"""
Created on Wed Jan  9 15:00:34 2019

@author: Sami
"""

import mysql.connector
import serial
from time import sleep



ser = serial.Serial(port='COM3',baudrate=9600)



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



"""---------------------------------------------------------------"""
"""-----------------------Code principale-------------------------"""
"""---------------------------------------------------------------"""
mydb=connect_to_db("bei_db")


while(True):
    val=""
    mycursor = mydb.cursor()
    sql = "INSERT INTO `table1` (`id`, `tension`, `courant`, `temperature`) VALUES "
    val=ser.readline()
    val=parser(val)
    print(val)
    sql = sql + val + ";"
    mycursor.execute(sql)
    mydb.commit()
    sleep(3)
    

ser.close()













