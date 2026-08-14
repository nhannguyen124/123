input.onButtonPressed(Button.A, function () {
    Acebott.Servo_IO(ServoPin.P16, 180)
})
input.onButtonPressed(Button.B, function () {
    Acebott.Servo_IO(ServoPin.P16, -180)
})
basic.forever(function () {
	
})
