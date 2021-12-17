/**
 * Custom blocks
 */
//% weight=100 color=#4a0087 icon=""
namespace drawRobotRemoteControle {
    //% block="Set Microbit as RemoteController(radioGroup: $radioGroup )"
    export function setAsRemoteController(radioGroup: number){
        radio.setGroup(radioGroup)
        input.onButtonPressed(Button.A, function () {
            basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
            radio.sendString("left")
        })
        input.onButtonPressed(Button.AB, function () {
            basic.showIcon(IconNames.Yes)
            radio.sendString("next")
        })
        input.onButtonPressed(Button.B, function () {
            basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
            radio.sendString("right")
        })
        input.onLogoEvent(TouchButtonEvent.Pressed, function () {
            basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
            radio.sendString("stop")
        })
    }
}

