current = 0
prior = 0

def on_every_interval():
    global current, prior
    current = pins.analog_read_pin(AnalogPin.P1)
    current = pins.map(current, 128, 896, 0, 36) * 23.6389 + 137
    if abs(current - prior) > 0:
        music.play_tone(current, music.beat(BeatFraction.WHOLE))
    prior = current
    basic.show_number(pins.map(current, 128, 896, 0, 3))
loops.every_interval(1000, on_every_interval)
