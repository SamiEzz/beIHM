import RPi.GPIO as GPIO
import time
import random as random
GPIO.setmode(GPIO.BOARD)


while(1):
    for k in range(4):
        GPIO.setup(31+2*k,GPIO.OUT,initial=GPIO.LOW)
        time.sleep(random.random())
        print("HIGH " + str(k))
    for k in range(4):
        GPIO.setup(31+2*k,GPIO.OUT,initial=GPIO.HIGH)
        time.sleep(random.random())
        print("LOW " + str(k))
