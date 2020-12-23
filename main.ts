input.onButtonPressed(Button.A, function () {
    Fänger.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Fänger.change(LedSpriteProperty.X, 1)
})
let Ball: game.LedSprite = null
let Fänger: game.LedSprite = null
let x = 0
let Pause = 500
let Level = 1
let RundenImLevel = 5
game.setScore(1)
game.setLife(10)
Fänger = game.createSprite(2, 4)
basic.forever(function () {
    Ball = game.createSprite(randint(0, 4), 0)
    basic.pause(Pause)
    Ball.change(LedSpriteProperty.Y, 1)
    basic.pause(Pause)
    Ball.change(LedSpriteProperty.Y, 1)
    basic.pause(Pause)
    Ball.change(LedSpriteProperty.Y, 1)
    basic.pause(Pause)
    Ball.change(LedSpriteProperty.Y, 1)
    if (Fänger.get(LedSpriteProperty.X) == Ball.get(LedSpriteProperty.X)) {
        game.addScore(1)
        basic.setLedColor(0x00ff00)
        basic.pause(500)
        basic.turnRgbLedOff()
    } else {
        game.removeLife(1)
        basic.setLedColor(0xff0000)
        basic.pause(500)
        basic.turnRgbLedOff()
    }
    Ball.delete()
    if (game.score() == RundenImLevel) {
        game.setScore(1)
        Level += 1
        Pause = Pause - 100
    }
})
