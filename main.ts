let current = 0
let prior = 0
loops.everyInterval(1000, function () {
    current = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    current,
    1024
    )
    current = Math.round(137 + 29.9 * (current / 36))
    if (Math.abs(current - prior) > 0) {
        music.playTone(current, music.beat(BeatFraction.Whole))
    }
    prior = current
})
