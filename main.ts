namespace SpriteKind {
    export const gameHub = SpriteKind.create()
    export const mouseMain = SpriteKind.create()
}
function runGameThree () {
	
}
// Creates the menu cursor used for clicking between button sprites to enter into games
function createCursorOne () {
    cursorOne = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . . . f 1 f f f . . . . . . . 
        . . . . f f 1 1 f f f . . . . . 
        . . . . . f 1 1 1 1 f f f . . . 
        . . . . . f f 1 1 1 1 1 f f . . 
        . . . . . . f 1 1 1 1 1 1 f . . 
        . . . . . . f f 1 1 1 1 f f . . 
        . . . . . . . f 1 1 1 1 f . . . 
        . . . . . . . f f 1 f f 1 f . . 
        . . . . . . . . f f f . f 1 f . 
        . . . . . . . . . . . . . f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.mouseMain)
    cursorOne.setPosition(80, 60)
    cursorOne.setStayInScreen(true)
    controller.moveSprite(cursorOne)
}
sprites.onOverlap(SpriteKind.mouseMain, SpriteKind.gameHub, function (sprite, otherSprite) {
    if (otherSprite == gameOne && controller.A.isPressed()) {
        runGameOne()
    }
    if (otherSprite == gameTwo && controller.A.isPressed()) {
        runGameTwo()
    }
    if (otherSprite == gameThree && controller.A.isPressed()) {
        runGameThree()
    }
    if (otherSprite == gameFour && controller.A.isPressed()) {
        runGameFour()
    }
})
function runGameFour () {
	
}
function runGameOne () {
	
}
function runGameTwo () {
	
}
// On start, our game library pops up. This stores 4 games that we have created and allows you to click in between them. Playing whichever you would enjoy!
// 
// Braedan Prentice, Martin Clements, Owen Brast
let cursorOne: Sprite = null
let gameFour: Sprite = null
let gameThree: Sprite = null
let gameTwo: Sprite = null
let gameOne: Sprite = null
scene.setBackgroundColor(1)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fff
    fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fff
    fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fff
    fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fff
    fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fff
    fff111111111ffffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff1111111111fff
    fff111111111fffff555f555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555f555fffff1111111111fff
    fff111111111fffff5555f5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555f5555fffff1111111111fff
    fff111111111fffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffff1111111111fff
    fff111111111fffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffff1111111111fff
    fff111111111fffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffff1111111111fff
    fff111111111fffff55555fff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff5555555555555ffffffffff555555555555f55555555555555fffffffff55555555555555555555555fffffff55555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff55555555555555555f55555555555555555f55555555555555555f5555555555555555555555555555f55555555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff55555555555555555f55555555555555555f55555555555555555f55555555555555f5555555555555f55555555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff55555555555555555f55555555555555555f55555555555555555f55555555555555f5555555555555ffffff555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff55555555555555555f55555555555555555f55555555555555555f55555555555555f5555555555555f55555555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff55555555555555555f55555555555555555f55555555555555555f55555555555555f5555555555555f55555555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff55555555555555555f55555555555555555f55555555555555555f555555555555555f55555555555f555555555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff55555555555555555f55555555555555555555555555555555555f555555555555555f55555555555ffffffff55555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff5555555555555555555555555555555555555555555555555555ff5555555555555555555555555555555555555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fff55555fffff1111111111fff
    fff111111111fffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffff1111111111fff
    fff111111111fffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffff1111111111fff
    fff111111111fffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffff1111111111fff
    fff111111111fffff5555f5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555f5555fffff1111111111fff
    fff111111111fffff555f555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555f555fffff1111111111fff
    fff111111111fffff55f55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555f55fffff1111111111fff
    fff111111111fffffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffff1111111111fff
    fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fff
    fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fff
    fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fff
    fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fff
    fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
gameOne = sprites.create(img`
    ffffffffffffffffffffffffffffffff
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    ffffffffffffffffffffffffffffffff
    `, SpriteKind.gameHub)
gameOne.setPosition(40, 60)
gameTwo = sprites.create(img`
    ffffffffffffffffffffffffffffffff
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    ffffffffffffffffffffffffffffffff
    `, SpriteKind.gameHub)
gameTwo.setPosition(120, 60)
gameThree = sprites.create(img`
    ffffffffffffffffffffffffffffffff
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    ffffffffffffffffffffffffffffffff
    `, SpriteKind.gameHub)
gameThree.setPosition(40, 90)
gameFour = sprites.create(img`
    ffffffffffffffffffffffffffffffff
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    f111111111111111111111111111111f
    ffffffffffffffffffffffffffffffff
    `, SpriteKind.gameHub)
gameFour.setPosition(120, 90)
createCursorOne()
