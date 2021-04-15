basic.forever(function () {
    basic.showArrow(ArrowNames.East)
    basic.pause(100)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.showIcon(IconNames.Target)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(500)
    basic.showString("HELLO!")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
})
