namespace SpriteKind {
    export const Charizard = SpriteKind.create()
    export const Blastoise = SpriteKind.create()
    export const Venasaur = SpriteKind.create()
    export const Pikachu = SpriteKind.create()
    export const Firemove1 = SpriteKind.create()
    export const Fireultimate = SpriteKind.create()
    export const Thundermove1 = SpriteKind.create()
    export const ThunderUltimate = SpriteKind.create()
    export const WaterMove1 = SpriteKind.create()
    export const WaterUltimate = SpriteKind.create()
    export const Grassmove1 = SpriteKind.create()
    export const GrassUltimate = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Grassmove1, SpriteKind.Blastoise, function (sprite, otherSprite) {
    info.player2.changeScoreBy(-200)
    info.player4.changeScoreBy(100)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Firemove1, SpriteKind.Venasaur, function (sprite, otherSprite) {
    info.player4.changeScoreBy(-40)
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    info.player3.changeLifeBy(-50)
    mySprite8 = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ............bbbbbbb55bbbbbbb......................
        ............bbbbbbb55bbbbbbb......................
        ............bbbbbbb55bbbbbbb......................
        ............bbbbbbb55bbbbbbb......................
        ............bbbbbbb55bbbbbbb......................
        .........bbbbbbbbbb55bbbbbbbbbb...................
        .........bbbbbbbbbb55bbbbbbbbbb...................
        ....bbbbbbbbbbbbbbb55bbbbbbbbbbbb.................
        ....bbbbbbbbbbbbbbb55bbbbbbbbbbbb.................
        ....bbbbbbbbbbbbbbb55bbbbbbbbbbbb.................
        ..bbbbbbbbbb55bbbbb55bbb5555bbbbbbbbbb............
        ..bbbbbbbbbb55bbbbb55bbb5555bbbbbbbbbb............
        ..bbbbbbbbbb55bbbbb55bbb5555bbbbbbbbbb............
        ..bbbbbbbbbb55bbbbb55bbb5555bbbbbbbbbb............
        ..bbbbbbbbbb55bbbbb55bbb5555bbbbbbbbbb............
        ..bbbbbbbbbbbbbbbbb55bbbbbbbbbbbbbbbbb............
        ..bbbbbbbbbbbbbbbbb55bbbbbbbbbbbbbbbbb............
        ..555555555555555555555555555555555555............
        ..555555555555555555555555555555555555............
        ..555555555555555555555555555555555555............
        ..bbbbbbbbbbbbbbbbb55bbbbbbbbbbbbbbbbb............
        ..bbbbbbbbbbbbbbbbb55bbbbbbbbbbbbbbbbb............
        ..bbbbbbbbbb55bbbbb55bbb5555bbbbbbbbbb............
        ..bbbbbbbbbb55bbbbb55bbb5555bbbbbbbbbb............
        ..bbbbbbbbbb55bbbbb55bbb5555bbbbbbbbbb............
        ..bbbbbbbbbb55bbbbb55bbb5555bbbbbbbbbb............
        ..bbbbbbbbbb55bbbbb55bbb5555bbbbbbbbbb............
        ....bbbbbbbbbbbbbbb55bbbbbbbbbbbb.................
        ....bbbbbbbbbbbbbbb55bbbbbbbbbbbb.................
        ....bbbbbbbbbbbbbbb55bbbbbbbbbbbb.................
        .........bbbbbbbbbb55bbbbbbbbbb...................
        .........bbbbbbbbbb55bbbbbbbbbb...................
        ............bbbbbbb55bbbbbbb......................
        ............bbbbbbb55bbbbbbb......................
        ............bbbbbbb55bbbbbbb......................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.ThunderUltimate)
    pause(5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.ThunderUltimate)
})
sprites.onOverlap(SpriteKind.Grassmove1, SpriteKind.Pikachu, function (sprite, otherSprite) {
    info.player3.changeScoreBy(-100)
    info.player4.changeScoreBy(50)
    pause(5000)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    info.player2.changeLifeBy(-50)
    mySprite10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b b b . . . . . 
        . . . . . b b 9 9 9 b b . . . . 
        . . . . b b b 6 8 9 b b b . . . 
        . . . b b b b 9 6 6 b b b b . . 
        . . . b b b b 9 8 6 b b b b . . 
        . . . b b b b 6 6 9 b b b b . . 
        . . . b b b b 6 8 9 b b b b . . 
        . . . b b b b 6 8 9 b b b b . . 
        . . . b b b b 6 6 6 b b b b . . 
        . . . . b b b 9 8 6 b b b b . . 
        . . . . b b b 9 6 6 b b b . . . 
        . . . . . b b 6 6 8 b b . . . . 
        . . . . . . b b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WaterUltimate)
    info.player2.setScore(10000)
    mySprite10.follow(mySprite2, 1500)
    pause(5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.WaterUltimate)
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    info.player4.changeLifeBy(-50)
    mySprite12 = sprites.create(img`
        . . 7 6 6 6 6 6 6 6 6 6 . . . . 
        . 7 7 6 7 7 7 7 7 7 7 6 7 7 7 . 
        . 7 6 7 7 7 6 6 6 6 6 6 7 7 7 7 
        . 7 6 6 6 6 7 7 7 7 7 7 6 6 7 7 
        . 6 6 7 7 6 6 7 7 7 7 7 7 6 6 7 
        . 6 6 7 7 7 6 6 6 6 6 6 6 7 7 7 
        . . 6 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . 6 6 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 6 6 6 7 6 7 7 7 7 7 . . . 
        . . . 7 7 7 7 7 7 6 6 7 . . . . 
        . . . . . . 7 6 7 7 7 7 . . . . 
        . . . . . . 7 7 7 6 7 7 . . . . 
        . . . . . . 7 7 6 7 . . . . . . 
        . . . . . . 7 6 7 7 . . . . . . 
        . . . . . . 6 7 6 7 . . . . . . 
        . . . . . . . 6 7 . . . . . . . 
        `, SpriteKind.GrassUltimate)
    mySprite12.setBounceOnWall(true)
    mySprite12.setVelocity(randint(-50, 50), randint(-50, 50))
    for (let index = 0; index < 10; index++) {
        pause(100)
        info.player4.changeScoreBy(1000)
    }
    pause(5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.GrassUltimate)
})
sprites.onOverlap(SpriteKind.Firemove1, SpriteKind.Pikachu, function (sprite, otherSprite) {
    info.player3.changeScoreBy(-20)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeLifeBy(-10)
    mySprite9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 9 8 8 . . . . . . . 
        . . . . 9 8 8 6 6 9 . . . . . . 
        . . . 9 8 9 9 9 6 6 8 . . . . . 
        . . . 8 9 6 9 6 6 9 8 . . . . . 
        . . . 8 9 6 6 9 6 9 8 . . . . . 
        . . . 8 9 6 9 9 9 8 8 . . . . . 
        . . . . 8 9 9 9 8 8 . . . . . . 
        . . . . . 8 8 8 9 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WaterMove1)
    mySprite9.setVelocity(randint(-150, 150), randint(-150, 150))
    mySprite9.setBounceOnWall(true)
    pause(5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.WaterMove1)
})
sprites.onOverlap(SpriteKind.Blastoise, SpriteKind.ThunderUltimate, function (sprite, otherSprite) {
    controller.player2.moveSprite(mySprite2, -50, -50)
    info.player2.changeScoreBy(-200)
    pause(5000)
    controller.player2.moveSprite(mySprite2, 50, 50)
    pause(5000)
})
info.player4.onLifeZero(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Venasaur)
    info.player4.setScore(0)
})
sprites.onOverlap(SpriteKind.GrassUltimate, SpriteKind.Pikachu, function (sprite, otherSprite) {
    info.player1.changeScoreBy(400)
    pause(1000)
})
info.player3.onScore(0, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Pikachu)
    info.player3.setLife(0)
})
sprites.onOverlap(SpriteKind.Venasaur, SpriteKind.WaterMove1, function (sprite, otherSprite) {
    info.player4.changeScoreBy(-50)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Firemove1, SpriteKind.Blastoise, function (sprite, otherSprite) {
    info.player2.changeScoreBy(-10)
})
info.player2.onScore(0, function () {
    info.player2.setLife(0)
    sprites.destroyAllSpritesOfKind(SpriteKind.Blastoise)
})
sprites.onOverlap(SpriteKind.Grassmove1, SpriteKind.Charizard, function (sprite, otherSprite) {
    info.player1.changeScoreBy(-50)
    info.player4.changeScoreBy(25)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Venasaur, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.player4.changeScoreBy(-50)
    pause(2500)
})
info.onScore(0, function () {
    game.gameOver(false)
})
info.player3.onLifeZero(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Pikachu)
    info.player3.setScore(0)
})
sprites.onOverlap(SpriteKind.Blastoise, SpriteKind.Fireultimate, function (sprite, otherSprite) {
    info.player2.changeScoreBy(-1250)
})
sprites.onOverlap(SpriteKind.Charizard, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.player1.changeScoreBy(-100)
    pause(2500)
})
sprites.onOverlap(SpriteKind.Pikachu, SpriteKind.Fireultimate, function (sprite, otherSprite) {
    info.player3.changeScoreBy(-2500)
})
sprites.onOverlap(SpriteKind.Venasaur, SpriteKind.ThunderUltimate, function (sprite, otherSprite) {
    controller.player4.moveSprite(mySprite4, -10, -10)
    info.player4.changeScoreBy(-100)
    pause(5000)
    controller.player4.moveSprite(mySprite4, 20, 20)
    pause(5000)
})
sprites.onOverlap(SpriteKind.GrassUltimate, SpriteKind.Blastoise, function (sprite, otherSprite) {
    info.player1.changeScoreBy(800)
    pause(1000)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player4.changeLifeBy(-10)
    mySprite11 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 7 7 7 . . 7 7 7 . . . . . . 
        . . 7 6 7 7 7 6 6 7 7 7 7 7 . . 
        . . 7 6 6 7 7 6 7 7 7 7 6 7 . . 
        . . 7 6 6 7 7 6 7 7 6 6 6 7 . . 
        . . 7 7 7 7 7 7 7 7 6 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 7 7 7 . . . . . . . 
        . . . . 7 7 7 7 . . . . . . . . 
        . . . . . 7 7 . . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Grassmove1)
    mySprite11.setBounceOnWall(true)
    pause(100)
    for (let index = 0; index < 4; index++) {
        mySprite11.setVelocity(randint(-100, 100), randint(-100, 100))
    }
    pause(5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Grassmove1)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(-10)
    mySprite5 = sprites.create(img`
        . . . . . . 4 4 4 . . . . . . . 
        . . . 4 4 4 4 2 4 4 4 . . . . . 
        . . 4 4 4 2 2 2 2 2 4 4 . . . . 
        . 4 4 2 2 2 5 5 5 2 2 2 4 . . . 
        4 2 2 2 2 2 5 . . 5 2 2 4 4 . . 
        4 2 5 5 5 5 . . . 5 2 2 2 4 4 . 
        4 2 5 . . . . . . . 5 5 2 2 4 . 
        4 2 5 5 . . . . . . . . 5 2 2 4 
        4 2 2 2 5 . . . . . . . . 5 2 4 
        . 4 2 2 2 5 . . . . . . . 5 2 2 
        . . 4 4 2 5 . . . . . . . 5 2 2 
        . . . 4 2 5 . . . . . . 5 5 2 4 
        . . . 4 2 5 5 5 5 5 5 5 2 2 2 4 
        . . . 4 2 2 2 2 2 2 2 2 2 2 4 4 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Firemove1)
    mySprite5.follow(mySprite, 1000)
    pause(5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Firemove1)
})
sprites.onOverlap(SpriteKind.Venasaur, SpriteKind.Fireultimate, function (sprite, otherSprite) {
    info.player4.changeScoreBy(-5000)
})
info.player1.onScore(0, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Charizard)
    info.player1.setLife(0)
})
info.player1.onLifeZero(function () {
    info.player1.setScore(0)
    sprites.destroyAllSpritesOfKind(SpriteKind.Charizard)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mySprite7 = sprites.create(img`
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . b b b . . . . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . b b b b b . . . . . . . . 
        . . . b 5 b 5 b . . . . . . . . 
        . . . b b b b b . . . . . . . . 
        . . . b b 5 b b . . . . . . . . 
        . . . . b b b . . . . . . . . . 
        . . b b b b b b b . . . . . . . 
        . . b b b b b b b . . . . . . . 
        . . . b b . b b . . . . . . . . 
        . . . b b . b b . . . . . . . . 
        `, SpriteKind.Thundermove1)
    mySprite7.setVelocity(randint(-50, 50), randint(-50, 50))
    mySprite7.setStayInScreen(true)
    info.player3.changeLifeBy(-10)
    pause(2000)
    projectile = sprites.createProjectileFromSprite(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..........5555555.............
        ..........5555555.............
        .......555555555555555........
        .......555555555555555........
        .....555555555555555555.......
        .....555555555555555555.......
        .....555555555555555555.......
        ...5555555555555555555555.....
        ...5555555555555555555555.....
        ...5555555555555555555555.....
        ...5555555555555555555555.....
        ...5555555555555555555555.....
        .....555555555555555555.......
        .....555555555555555555.......
        .....55555555555555555........
        .....55555555555555555........
        .......5555555555555..........
        .......5555555555555..........
        ..........5555555.............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, mySprite7, 0, 0)
    pause(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Thundermove1)
    pause(3000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
sprites.onOverlap(SpriteKind.Charizard, SpriteKind.WaterMove1, function (sprite, otherSprite) {
    info.player1.changeScoreBy(-100)
    pause(1000)
})
info.player2.onLifeZero(function () {
    info.player2.setScore(0)
    sprites.destroyAllSpritesOfKind(SpriteKind.Blastoise)
})
sprites.onOverlap(SpriteKind.Charizard, SpriteKind.ThunderUltimate, function (sprite, otherSprite) {
    controller.player1.moveSprite(mySprite, -35, -35)
    info.player1.changeScoreBy(-100)
    pause(5000)
    controller.player1.moveSprite(mySprite, 70, 70)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Blastoise, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.player2.changeScoreBy(-200)
    pause(2500)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    info.player1.changeLifeBy(-50)
    mySprite.startEffect(effects.fire, 1000)
    pause(1000)
    mySprite6 = sprites.create(img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        .........................222222222222222222222222222222222222222222.................................
        .........................222222222222222222222222222222222222222222.................................
        .........................222222222222222222222222222222222222222222.................................
        .........................222222222222222222222222222222222222222222.................................
        .........................222222222222222222222222222222222222222222.................................
        .........................222222222222222222222222222222222222222222.................................
        .........................222222222222222222222222222222222222222222.................................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444445555555555555555555555555555555555555555555555555555555544444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222244444444444444555555555555555555555555555555555555555555444444444444442222222............
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ....222222222222224444444444444455555555555555555555555555554444444444444422222222222222............
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ...........2222222222222244444444444444555555555555554444444444444422222222222222...................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        ..................22222222222222444444444444444444444444444422222222222222..........................
        .........................222222222222222222222222222222222222222222.................................
        .........................222222222222222222222222222222222222222222.................................
        .........................222222222222222222222222222222222222222222.................................
        .........................222222222222222222222222222222222222222222.................................
        .........................222222222222222222222222222222222222222222.................................
        .........................222222222222222222222222222222222222222222.................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        `, SpriteKind.Fireultimate)
    pause(5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Fireultimate)
})
info.player4.onScore(0, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Venasaur)
    info.player4.setLife(0)
})
sprites.onOverlap(SpriteKind.GrassUltimate, SpriteKind.Charizard, function (sprite, otherSprite) {
    info.player1.changeScoreBy(-200)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Pikachu, SpriteKind.WaterMove1, function (sprite, otherSprite) {
    info.player3.changeScoreBy(-50)
    pause(1000)
})
let mySprite6: Sprite = null
let projectile: Sprite = null
let mySprite7: Sprite = null
let mySprite5: Sprite = null
let mySprite11: Sprite = null
let mySprite9: Sprite = null
let mySprite12: Sprite = null
let mySprite10: Sprite = null
let mySprite8: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.player1.setScore(500)
info.player2.setScore(1500)
info.player4.setScore(3000)
info.player3.setScore(750)
info.player1.setLife(1)
info.player2.setLife(1)
info.player3.setLife(1)
info.player4.setLife(1)
scene.setBackgroundImage(img`
    2222222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222222666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    22222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666
    22222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666666
    22222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222f222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    22222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666666
    55555555555555555522222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777776666
    55555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777
    55555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777
    55555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777
    55555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777
    55555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777
    555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777
    555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777
    555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777
    555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777
    555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777
    555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777
    555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777
    555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777
    55555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777
    55555555555555555555555555555555555555555555555555555555555555555555555555777777fffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777ffffffffffffffff777777777fffff777777777777777777777777777777777777777777777
    55555555555555555555555555555555555555555555555555555555555555555555555555777777777777777777777777777777777777777ff777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    5555555555555555555555555555555555555555555555555555555555555555555555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 4 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Charizard)
mySprite.setPosition(22, 26)
controller.player1.moveSprite(mySprite, 70, 70)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . . 1 8 1 . . . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Blastoise)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 5 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Pikachu)
mySprite2.setPosition(133, 23)
mySprite3.setPosition(28, 81)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 7 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Venasaur)
controller.player2.moveSprite(mySprite2, 50, 50)
controller.player3.moveSprite(mySprite3, 100, 100)
mySprite4.setPosition(147, 94)
controller.player4.moveSprite(mySprite4, 20, 20)
mySprite.setStayInScreen(true)
mySprite2.setStayInScreen(true)
mySprite3.setStayInScreen(true)
mySprite4.setStayInScreen(true)
forever(function () {
    pause(1000)
    info.player1.changeLifeBy(1)
    info.player2.changeLifeBy(1)
    info.player3.changeLifeBy(3)
    info.player4.changeLifeBy(1)
})
