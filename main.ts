basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        if (x == 1) {
            led.plot(4, x)
            basic.pause(200)
            led.plot(3, x)
            basic.pause(200)
            led.plot(2, x)
            basic.pause(200)
            led.plot(1, x)
            basic.pause(200)
            led.plot(0, x)
            basic.pause(200)
        } else if (x == 3) {
            led.plot(4, x)
            basic.pause(200)
            led.plot(3, x)
            basic.pause(200)
            led.plot(2, x)
            basic.pause(200)
            led.plot(1, x)
            basic.pause(200)
            led.plot(0, x)
            basic.pause(200)
        } else {
            for (let y = 0; y <= 4; y++) {
                led.plot(y, x)
                basic.pause(200)
            }
        }
    }
    basic.clearScreen()
})
