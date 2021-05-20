namespace SpriteKind {
    export const sword = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const SOLDER = SpriteKind.create()
}
function Levels () {
    if (Level == 1) {
        tiles.setTilemap(tilemap`LVL 1 WAR PLACE`)
    } else if (Level == 2) {
        tiles.setTilemap(tilemap`level0`)
        tiles.placeOnTile(georgian_soldier, tiles.getTileLocation(3, 3))
    } else if (Level == 3) {
        tiles.setTilemap(tilemap`level21`)
    } else if (Level == 4) {
        tiles.setTilemap(tilemap`level6`)
        tiles.placeOnTile(georgian_soldier, tiles.getTileLocation(8, 1))
    } else if (Level == 5) {
        tiles.setTilemap(tilemap`level24`)
        tiles.placeOnTile(georgian_soldier, tiles.getTileLocation(0, 13))
        music.beamUp.playUntilDone()
    } else if (Level == 6) {
        tiles.setTilemap(tilemap`BOSS_FIGHT`)
    } else {
        game.over(false)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    statusbar.value += -10
    tiles.setTileAt(location, assets.tile`myTile14`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . 9 9 9 9 9 9 b b b b b . . . 
        . . 9 9 9 9 9 9 b b b b b . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, georgian_soldier, -200, 0)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    georgian_soldier,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f 3 3 3 3 f f f f . . 
        . f f 3 f 3 3 3 3 3 3 f 3 f f . 
        . f 3 3 3 1 f 3 f 1 3 3 3 3 f . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f 3 3 f 3 3 f 3 3 f f . . 
        . f 3 3 f 2 2 2 2 2 2 f 3 3 f . 
        . f 3 3 f 2 2 2 2 2 2 f 3 3 f . 
        . f 3 3 f 4 4 5 5 4 4 f 3 3 f . 
        . . f f . f f f f f f . f f . . 
        . . . . . f f . . f f . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(location, assets.tile`myTile42`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    Level = 4
    statusbar.value += 25
    game.showLongText("ok that was cool. but solve this math to not lose", DialogLayout.Bottom)
    Levels()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . b b b b b 9 9 9 9 9 9 . . 
        . . . b b b b b 9 9 9 9 9 9 . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, georgian_soldier, 200, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    statusbar.value += -50
    tiles.setTileAt(location, assets.tile`myTile10`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    georgian_soldier,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f 3 3 3 3 f f f f f f . . 
        . f 3 3 f 1 3 f 1 3 3 3 f f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 f 3 f 3 3 3 3 f . . . 
        . . . f 3 3 3 3 f f f f . . . . 
        . . . f 2 2 2 f 3 3 f . . . . . 
        . . . f 2 2 2 f 3 3 f . . . . . 
        . . . f 5 5 4 f f f f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f 3 3 3 3 f f f f f f . . 
        . f 3 3 f 1 3 f 1 3 3 3 f f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 f 3 f 3 3 3 3 f . . . 
        . . . f e 4 f 3 3 f f . . . . . 
        . . . f 2 2 f 3 3 f f . . . . . 
        . . f f 5 5 f f f f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f 3 3 3 3 f f f f f f f . . 
        . f 3 f 1 3 f 1 3 3 3 3 f f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 f 3 f 3 3 3 3 f . . . 
        . . . f 3 3 3 3 3 3 f f . . . . 
        . . . f 2 2 2 e 3 3 4 . . . . . 
        . . . f 2 2 2 e 3 3 e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f 3 3 3 3 f f f f f f . . 
        . f 3 3 f 1 3 f 1 3 3 3 f f . . 
        . . f 3 3 3 3 3 3 3 3 3 e f . . 
        . . . f 3 f 3 f 3 f f 3 f . . . 
        . . . f e 4 4 4 f 3 3 f . . . . 
        . . . f 2 2 2 2 f 3 3 f . . . . 
        . . f f 5 5 4 4 f f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    statusbar.value = -35
    tiles.setTileAt(location, assets.tile`myTile42`)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    Level = 2
    statusbar.value += 50
    georgian_soldier.setPosition(4, 4)
    game.showLongText("oh your smart? then pass this maze to prove it", DialogLayout.Bottom)
    Levels()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    georgian_soldier,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f 3 3 3 3 3 f f f . . 
        . f f 3 3 1 f 3 1 f 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 3 f 3 f 3 f . . . . 
        . . . . f f f 3 3 3 3 f . . . . 
        . . . . f 3 3 f e 2 2 f . . . . 
        . . . f f 3 3 f f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f 3 3 3 3 f f f . . 
        . f f 3 3 3 1 f 3 1 f 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 f f . . 
        . . f 3 3 3 3 f 3 f 3 f d d f . 
        . . . f f f f 4 e e e f b b f . 
        . . . . f 3 3 f 4 d d e b b f . 
        . . . . f 3 3 f e d d e b f . . 
        . . . . f f f 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f 3 3 3 3 f f f . . 
        . f f 3 3 3 1 f 3 1 f 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 f 3 3 f 3 f . . . . 
        . . . . f f 3 3 f 4 e f . . . . 
        . . . . f f 3 3 f 2 2 f . . . . 
        . . . f f f f f f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f 3 3 3 3 f f f . . 
        . f f 3 3 3 1 f 3 1 f 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 f f . . 
        . . f 3 3 3 3 f 3 f 3 f d d f . 
        . . . f f f f 4 e e e f b b f . 
        . . . . f 3 3 f 4 d d e b b f . 
        . . . f f 3 3 f e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(location, assets.tile`myTile42`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    statusbar.value = -35
    tiles.setTileAt(location, assets.tile`myTile42`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile56`, function (sprite, location) {
    game.showLongText("you made it ", DialogLayout.Bottom)
    game.showLongText("you escaped im soo proud of you", DialogLayout.Bottom)
    game.showLongText("you did it with your sword", DialogLayout.Bottom)
    game.showLongText("now you can continue your life in the beautiful country Georgia", DialogLayout.Bottom)
    game.showLongText("you win", DialogLayout.Bottom)
    music.playMelody("G B A G C5 B A B ", 120)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    gladiator.destroy()
    info.changeScoreBy(2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    statusbar.value = -35
    tiles.setTileAt(location, assets.tile`myTile42`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    Level = 3
    statusbar.value += 15
    tiles.placeOnTile(georgian_soldier, tiles.getTileLocation(11, 3))
    game.showLongText("you found the botton now go and continue the maze", DialogLayout.Bottom)
    Levels()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile42`)
    game.showLongText("your definetely good at math. You are close to the end!!!!", DialogLayout.Bottom)
    Level = 5
    Levels()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    gladiator.destroy()
    statusbar.value += -20
})
let gladiator: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let georgian_soldier: Sprite = null
let Level = 0
Level = 1
georgian_soldier = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f 3 3 3 3 f f f f . . 
    . f f 3 3 3 3 3 3 3 3 3 3 f f . 
    . f 3 3 f 1 3 3 3 3 1 f 3 3 f . 
    . . f 3 3 3 3 f 3 f 3 3 3 f . . 
    . . . f 3 3 3 3 3 3 3 3 f . . . 
    . . f f f f f f f f f f f f . . 
    . . f 3 f 2 2 2 2 2 2 f 3 f . . 
    . . f f f 4 4 5 5 4 4 f f f . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(georgian_soldier)
Levels()
scene.cameraFollowSprite(georgian_soldier)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(georgian_soldier)
statusbar.setColor(7, 2)
statusbar.setLabel("HP")
statusbar.value = 200
game.showLongText("press e to shoot left and space bar to shoot right TRY TO SEE THE RUSSIAN FLAG", DialogLayout.Bottom)
game.showLongText("try to kill every gladiator because if you have two gladiator in the field at the same time one of them will become invincible", DialogLayout.Bottom)
info.setScore(0)
game.onUpdateInterval(5000, function () {
    if (Level == 5) {
        gladiator = sprites.create(img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f 1 1 1 1 e e f f . . . . 
            . . . f 1 1 1 1 d d 1 . . . . . 
            . . . f 1 1 1 1 d d 1 . . . . . 
            . . . f 1 1 1 f 1 1 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `, SpriteKind.Enemy)
        gladiator.setPosition(160, randint(0, 150))
        gladiator.follow(georgian_soldier, 70)
    }
})
game.onUpdateInterval(7000, function () {
    if (Level == 1) {
        gladiator = sprites.create(img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f 1 1 1 1 e e f f . . . . 
            . . . f 1 1 1 1 d d 1 . . . . . 
            . . . f 1 1 1 1 d d 1 . . . . . 
            . . . f 1 1 1 f 1 1 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `, SpriteKind.Enemy)
        gladiator.setPosition(160, randint(0, 300))
        gladiator.follow(georgian_soldier, 70)
    }
})
