/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program makes a single RGB LED light up all the digital colors available
*/
// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// turn on LED
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    //pin13 = Red (1,0,0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Red")
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    //pin14 = Green (0,1,0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString("Green")
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    //pin15 = Blue (0,0,1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Blue")
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    //Magenta (1,0,1) = pin13 and pin15
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Magenta")
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    //Yellow (1,1,0) = pin13 and pin14
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString("Yellow")
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    //Cyan (0,1,1) = pin14 and pin15
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Cyan")
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    //White (1,1,1) = pin13, pin14 and pin15
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("White")
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    basic.showIcon(IconNames.Happy)
})
