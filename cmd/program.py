import RPi.GPIO as GPIO
import time
import random as random
import sys

GPIO.setmode(GPIO.BOARD)


for k in range(4*int(sys.argv[1])):
    GPIO.setup(31+2*(k%4),GPIO.OUT,initial=GPIO.HIGH)
    GPIO.setup(31+2*(k%4),GPIO.OUT,initial=GPIO.LOW)
    time.sleep(0.1)
    GPIO.setup(31+2*(k%4),GPIO.OUT,initial=GPIO.HIGH)
    