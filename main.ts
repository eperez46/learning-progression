basic.forever(function () {
	
    input.onButtonPressed(Button.A, function() {
        
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    })
})
