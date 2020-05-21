input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        левая_рука(вверх, 100)
        basic.pause(500)
        левая_рука(вниз, 100)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    правая_рука(середина, 100)
    левая_рука(середина, 100)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        правая_рука(вверх, 100)
        basic.pause(500)
        правая_рука(вниз, 100)
        basic.pause(500)
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
let вниз = ""
let вверх = ""
let середина = ""
середина = "середина"
вверх = "вверх"
вниз = "вниз"
let влево = "влево"
let вправо = "вправо"
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
