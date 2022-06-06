let current = 0
let prior = 0
loops.everyInterval(1000, function () {
    current = pins.analogReadPin(AnalogPin.P1)
    current = pins.map(
    current,
    128,
    896,
    0,
    36
    )
    current = Math.round(current * 23.6389 + 137)
    led.plotBarGraph(
    current,
    988
    )
    if (Math.abs(current - prior) > 0) {
        music.playTone(current, music.beat(BeatFraction.Whole))
    }
    prior = current
})
