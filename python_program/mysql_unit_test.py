# -*- coding: utf-8 -*-
"""
Created on Wed Jan  9 13:06:47 2019

@author: Sami
"""

import random
import mysql.connector
"""---------------------------------------------------------------"""
"""-----------------------Code fonctions--------------------------"""
"""---------------------------------------------------------------"""
def get_data(id):
    tension = 1500.0
    courant = 30.0
    tmp = 30.0
    _tension = tension + tension*random.random()*3/100
    _courant = courant + courant*random.random()*3/100
    _tmp = tmp + tmp*random.random()*3/100
    return [id,_tension,_courant,_tmp]

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


for id in range(0,10):
    mycursor = mydb.cursor()
    sql = "INSERT INTO `table1` (`id`, `tension`, `courant`, `temperature`) VALUES (%s,%s,%s,%s);"
    val=get_data(id)
    mycursor.execute(sql,val)
    mydb.commit()
    print(val)




"""sql = "INSERT INTO `table1` (`id`, `tension`, `courant`, `temperature`) VALUES ('1', '16', '9', '30');"""