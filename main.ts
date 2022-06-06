let current = 0
let prior = 0
loops.everyInterval(1000, function () {
    current = pins.analogReadPin(AnalogPin.P1)
    current = pins.map(
    current,
    0,
    1023,
    0,
    3
    )
    if (Math.abs(current - prior) > 0.01) {
        music.playTone(Math.min(Math.max(pins.map(
        current,
        0.1,
        0.25,
        0,
        36
        ), 0), 36) * 23.6389 + 137, music.beat(BeatFraction.Whole))
    }
    prior = current
    basic.showNumber(current)
})
