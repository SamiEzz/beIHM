# -*- coding: utf-8 -*-
"""
Created on Wed Jan  9 12:59:01 2019

@author: Sami
"""


import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  database="bei_db"
)

mycursor = mydb.cursor()

sql = "INSERT INTO `table1` (`id`, `tension`, `courant`, `temperature`) VALUES ('1', '16', '9', '30');"

mycursor.execute(sql)

mydb.commit()

"""
sql = "INSERT INTO `table1` (`id`, `tension`, `courant`, `temperature`) VALUES (%d,%f,%f,%f);"
val = ('1', '16', '9', '30')
mycursor.execute(sql,val)
"""