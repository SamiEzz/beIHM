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
    string = string[3:len(string)-3]
    string = "("+string+")"
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
    mycursor = mydb.cursor()
    sql = "INSERT INTO `table1` (`id`, `tension`, `courant`, `temperature`) VALUES (%s,%s,%s,%s);"
    val=ser.readline()
    val=parser(val)
    mycursor.execute(sql,val)
    mydb.commit()
    print(val)
    sleep(3)
    

ser.close()















"""
def parser(string):
    table = []
    f_id=0
    f_tension=0
    f_courant=0
    f_temperature=0
    id=""
    tension=""
    courant=""
    temperature=""
    nbr_virgule=0
    
    for i in range(0,len(string)):
        char = string[i]
        if(char=="["):
            # remplissage de id
            f_id=1
            f_tension=0
            f_courant=0
            f_temperature=0
        elif(char==","):
            nbr_virgule+=1
            if(nbr_virgule==1):
                f_tension=1
                f_id=0
                f_courant=0
                f_temperature=0
            elif(nbr_virgule==2):
                f_tension=0
                f_id=0
                f_courant=1
                f_temperature=0
            elif(nbr_virgule==3):
                f_tension=0
                f_id=0
                f_courant=0
                f_temperature=1
            else:
                f_tension=0
                f_id=0
                f_courant=0
                f_temperature=0    
                tibari = 1
        else:
            f_tension=0
            f_id=0
            f_courant=0
            f_temperature=0
            tibari = 1
        
        if(f_id==1 || ):
            id=string[i]
                
    
    
    
    return table
"""