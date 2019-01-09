import RPi.GPIO as GPIO
import time
import random as random
GPIO.setmode(GPIO.BOARD)

for k in range(4):
    GPIO.setup(31+2*k,GPIO.OUT,initial=GPIO.LOW)
    time.sleep(0.1)
    print("HIGH " + str(k))
