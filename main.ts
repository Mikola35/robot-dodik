input.onButtonPressed(Button.A, function () {
    левое_плечо(вверх, 100)
    левое_плечо(вверх, 50)
    левое_плечо(вверх, 0)
})
function левое_плечо (string: string, num: number) {
    if (string == вверх) {
        Угол_1 = pins.map(
        num,
        0,
        100,
        90,
        180
        )
        robotbit.Servo(robotbit.Servos.S1, Угол_1)
    } else if (string == вниз) {
        Угол_1 = pins.map(
        num,
        0,
        100,
        0,
        90
        )
        robotbit.Servo(robotbit.Servos.S1, Угол_1)
    } else {
        robotbit.Servo(robotbit.Servos.S1, 90)
    }
    basic.pause(500)
}
function подставка (string: string, num: number) {
	
}
function правое_плечо (string: string, num: number) {
	
}
let Угол_1 = 0
let вниз = ""
let вверх = ""
let середина = "середина"
вверх = "вверх"
вниз = "вниз"
let влево = "влево"
let вправо = "вправо"
