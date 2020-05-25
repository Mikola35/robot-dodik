input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        левая_рука(вверх, 100)
        правая_рука(вниз, 100)
        basic.pause(200)
        левая_рука(середина, 100)
        правая_рука(середина, 100)
        basic.pause(200)
        левая_рука(вниз, 100)
        правая_рука(вверх, 100)
        basic.pause(200)
        левая_рука(середина, 100)
        правая_рука(середина, 100)
        basic.pause(200)
        подставка(влево, 30)
        basic.pause(500)
        подставка(вправо, 30)
        basic.pause(200)
        подставка(середина, 100)
        basic.pause(1000)
    }
})
function подставка (string: string, num: number) {
    if (string == вправо) {
        Угол_3 = pins.map(
        num,
        0,
        100,
        90,
        180
        )
        robotbit.Servo(robotbit.Servos.S5, Угол_3)
    } else if (string == влево) {
        Угол_3 = pins.map(
        num,
        0,
        100,
        90,
        0
        )
        robotbit.Servo(robotbit.Servos.S5, Угол_3)
    } else {
        robotbit.Servo(robotbit.Servos.S5, 90)
    }
}
input.onButtonPressed(Button.AB, function () {
    правая_рука(середина, 100)
    левая_рука(середина, 100)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
function левая_рука (string: string, num: number) {
    if (string == вверх) {
        Угол_2 = pins.map(
        num,
        0,
        100,
        90,
        180
        )
        robotbit.Servo(robotbit.Servos.S1, Угол_2)
    } else if (string == вниз) {
        Угол_2 = pins.map(
        num,
        0,
        100,
        90,
        0
        )
        robotbit.Servo(robotbit.Servos.S1, Угол_2)
    } else {
        robotbit.Servo(robotbit.Servos.S1, 90)
    }
}
function правая_рука (string: string, num: number) {
    if (string == вверх) {
        Угол_1 = pins.map(
        num,
        0,
        100,
        90,
        0
        )
        robotbit.Servo(robotbit.Servos.S2, Угол_1)
    } else if (string == вниз) {
        Угол_1 = pins.map(
        num,
        0,
        100,
        90,
        180
        )
        robotbit.Servo(robotbit.Servos.S2, Угол_1)
    } else {
        robotbit.Servo(robotbit.Servos.S2, 90)
    }
}
let Угол_1 = 0
let Угол_2 = 0
let Угол_3 = 0
let вправо = ""
let влево = ""
let вниз = ""
let вверх = ""
let середина = ""
середина = "середина"
вверх = "вверх"
вниз = "вниз"
влево = "влево"
вправо = "вправо"
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
