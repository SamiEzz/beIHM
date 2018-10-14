import RPi.GPIO as GPIO
import time
import random as random
import sys

GPIO.setmode(GPIO.BOARD)

<<<<<<< HEAD

for k in range(4*int(sys.argv[1])):
    GPIO.setup(31+2*(k%4),GPIO.OUT,initial=GPIO.HIGH)
    GPIO.setup(31+2*(k%4),GPIO.OUT,initial=GPIO.LOW)
    time.sleep(0.1)
    GPIO.setup(31+2*(k%4),GPIO.OUT,initial=GPIO.HIGH)
    
=======
#Ce code ne fait rien d'interessant, n'essaye pas de comprendre les équations ._.

def tousauf(k):
    for i in range(4):
        if(i==k):
            GPIO.setup(31+2*i,GPIO.OUT,initial=GPIO.HIGH)
            time.sleep(0.1)
        else:
            GPIO.setup(31+2*i,GPIO.OUT,initial=GPIO.LOW)
            time.sleep(0.1)

for k in range(20):
    tousauf(k%4)
    
>>>>>>> 50a9a9a8e40d8940a2f71782e14dacd2c8c057cb
