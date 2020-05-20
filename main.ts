input.onButtonPressed(Button.A, function () {
    левое_плечо(вниз, 1)
})
function левое_плечо (string: string, num: number) {
    if (string == вверх) {
        robotbit.Servo(robotbit.Servos.S1, 180)
    } else if (string == вниз) {
        robotbit.Servo(robotbit.Servos.S1, 0)
    } else {
        robotbit.Servo(robotbit.Servos.S1, 90)
    }
}
function подставка (string: string, num: number) {
	
}
input.onButtonPressed(Button.AB, function () {
    левое_плечо(середина, 1)
})
input.onButtonPressed(Button.B, function () {
    левое_плечо(вверх, 1)
})
function правое_плечо (string: string, num: number) {
	
}
let вниз = ""
let вверх = ""
let середина = ""
середина = "середина"
вверх = "вверх"
вниз = "вниз"
let влево = "влево"
let вправо = "вправо"
