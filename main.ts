basic.forever(function () {
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
    basic.showNumber(0)
})
