# -*- coding: utf-8 -*-
"""
Created on Wed Jan  9 12:43:18 2019

@author: Sami
"""
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  database="BEI_db"
)

def create_table():
    sql = "CREATE TABLE `bei_db`.`table1` ( `id` INT(255) NOT NULL , `tension` FLOAT NULL DEFAULT NULL , `courant` FLOAT NULL DEFAULT NULL , `temperature` FLOAT NULL DEFAULT NULL , INDEX `id_h` (`id`)) ENGINE = InnoDB;"
    
    mycursor = mydb.cursor()

    mycursor.execute(sql)
    
create_table()