namespace adoreos_ui {
    //% block
    export function create_button(image: Image) {
        images.createImage(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
        `)
    }
}

startup()

function startup() {
    basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
    basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
    basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
    basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
    basic.clearScreen()
}