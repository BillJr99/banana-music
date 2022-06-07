current = 0
prior = 0

def on_every_interval():
    global current, prior
    current = pins.analog_read_pin(AnalogPin.P1)
    current = pins.map(current, 0, 1023, 0, 3)
    if abs(current - prior) > 0.01:
        music.play_tone(min(max(pins.map(current, 0.1, 0.25, 0, 36), 0), 36) * 23.6389 + 137,
            music.beat(BeatFraction.WHOLE))
    prior = current
    basic.show_number(current)
loops.every_interval(1000, on_every_interval)
