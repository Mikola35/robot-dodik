def on_button_pressed_a():
    for index in range(4):
        левая_рука(вверх, 100)
        basic.pause(500)
        левая_рука(вниз, 100)
        basic.pause(500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    правая_рука(середина, 100)
    левая_рука(середина, 100)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    for index2 in range(4):
        правая_рука(вверх, 100)
        basic.pause(500)
        правая_рука(вниз, 100)
        basic.pause(500)
input.on_button_pressed(Button.B, on_button_pressed_b)

def левая_рука(string: str, num: number):
    global Угол_2
    if string == вверх:
        Угол_2 = pins.map(num, 0, 100, 90, 180)
        robotbit.servo(robotbit.Servos.S1, Угол_2)
    elif string == вниз:
        Угол_2 = pins.map(num, 0, 100, 90, 0)
        robotbit.servo(robotbit.Servos.S1, Угол_2)
    else:
        robotbit.servo(robotbit.Servos.S1, 90)
def правая_рука(string: str, num: number):
    global Угол_1
    if string == вверх:
        Угол_1 = pins.map(num, 0, 100, 90, 0)
        robotbit.servo(robotbit.Servos.S2, Угол_1)
    elif string == вниз:
        Угол_1 = pins.map(num, 0, 100, 90, 180)
        robotbit.servo(robotbit.Servos.S2, Угол_1)
    else:
        robotbit.servo(robotbit.Servos.S2, 90)
Угол_1 = 0
Угол_2 = 0
вниз = ""
вверх = ""
середина = ""
середина = "середина"
вверх = "вверх"
вниз = "вниз"
влево = "влево"
вправо = "вправо"
basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)