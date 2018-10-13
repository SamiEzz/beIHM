import RPi.GPIO as GPIO
import time
import random as random
import sys
GPIO.setmode(GPIO.BOARD)


for k in range(4):
    GPIO.setup(31+2*k,GPIO.OUT,initial=GPIO.LOW)
    time.sleep(float(sys.argv[1]))
    print("HIGH " + str(k))
for k in range(4):
    GPIO.setup(31+2*k,GPIO.OUT,initial=GPIO.HIGH)
    time.sleep(float(sys.argv[1]))
    print("LOW " + str(k))
