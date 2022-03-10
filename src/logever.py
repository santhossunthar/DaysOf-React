from pynput.keyboard import Key, Listener

keys = []

def onPress(key):
    print(key, end=" Pressed\n")
    global keys
    keys.append(str(key))
        
def onRelease(key):
    if key == Key.esc:
        return False

with Listener(on_press=onPress, on_release=onRelease) as listener:
    listener.join()