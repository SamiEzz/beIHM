import RPi.GPIO as GPIO
import time
import random as random
GPIO.setmode(GPIO.BOARD)

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
    
