def on_button_pressed_a():
    servos.P0.set_angle(190)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
