input.onButtonPressed(Button.A, function () {
    Fänger.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Fänger.change(LedSpriteProperty.X, 1)
})
let Ball: game.LedSprite = null
let Fänger: game.LedSprite = null
let BallFlugPause = 700
let PunkteImLevel = 10
game.setScore(0)
game.setLife(10)
Fänger = game.createSprite(2, 4)
basic.forever(function () {
    Ball = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(BallFlugPause)
        Ball.change(LedSpriteProperty.Y, 1)
    }
    if (Fänger.isTouching(Ball)) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
    Ball.delete()
    if (game.score() > 0 && game.score() % PunkteImLevel == 0) {
        BallFlugPause = BallFlugPause - 50
    }
})
