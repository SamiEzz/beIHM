# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""


import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root"
)

mycursor = mydb.cursor()

mycursor.execute("CREATE DATABASE BEI_db")