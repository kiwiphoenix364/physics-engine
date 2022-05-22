namespace SpriteKind {
    export const movingplatform = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canJump) {
        canJump = false
        hittingwall = false
        mySprite.vy = -200
        mySprite.ay = -400
        pause(100)
        mySprite.ay = 400
    }
})
function GenerateCollision () {
    movingPlatforImages = [sprites.create(img`
        99999999999999999999999999999999
        99999999999999999999999999999999
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.movingplatform), sprites.create(img`
        ................................
        ..........55555555555...........
        ........555555555555555.........
        ......5555555555555555555.......
        .....555555555555555555555......
        ....55555555555555555555555.....
        ...5555555555555555555555555....
        ..555555555555555555555555555...
        ..555555555555555555555555555...
        .55555555555555555555555555555..
        .55555555555555555555555555555..
        5555555555555555555555555555555.
        5555555555555555555555555555555.
        5555555555555555555555555555555.
        5555555555555555555555555555555.
        5555555555555555555555555555555.
        5555555555555555555555555555555.
        5555555555555555555555555555555.
        5555555555555555555555555555555.
        5555555555555555555555555555555.
        5555555555555555555555555555555.
        5555555555555555555555555555555.
        .55555555555555555555555555555..
        .55555555555555555555555555555..
        ..555555555555555555555555555...
        ..555555555555555555555555555...
        ...5555555555555555555555555....
        ....55555555555555555555555.....
        .....555555555555555555555......
        ......5555555555555555555.......
        ........555555555555555.........
        ..........55555555555...........
        `, SpriteKind.movingplatform), sprites.create(img`
        55555555555555555555555555555555
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        55555555555555555555555555555555
        `, SpriteKind.Player)]
    numberOfMovingPlatformImages = movingPlatforImages.length
    movingPlatformCollisonImages = [img`
        cccccccccccccccccccccccccccccccc
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, img`
        ................................
        ..........ccccccccccc...........
        ........cc...........cc.........
        ......cc...............cc.......
        .....c...................c......
        ....c.....................c.....
        ...c.......................c....
        ..c.........................c...
        ..c.........................c...
        .c...........................c..
        .c...........................c..
        c.............................c.
        c.............................c.
        c.............................c.
        c.............................c.
        c.............................c.
        c.............................c.
        c.............................c.
        c.............................c.
        c.............................c.
        c.............................c.
        c.............................c.
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, img`
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        `]
    for (let index = 0; index <= numberOfMovingPlatformImages; index++) {
        // put the tilemap locations that correspond to the order of your index of moving platform images and collisions
        if (index == 0) {
            item = tiles.getTilesByType(assets.tile`myTile0`)
        } else if (index == 1) {
            item = tiles.getTilesByType(assets.tile`myTile10`)
        } else if (index == 2) {
            item = tiles.getTilesByType(assets.tile`myTile2`)
        } else {
        	
        }
        for (let value of item) {
            mySprite2 = movingPlatforImages[index]
            sprites.setDataNumber(mySprite2, "type", index)
            tiles.placeOnTile(mySprite2, value)
        }
    }
    // PUT NUMBER OF COLLISION IMAGES HERE!
    for (let index6 = 0; index6 <= 2; index6++) {
        // put the tilemap locations that correspond to the order of your index of regular platform images and collisions
        if (index6 == 0) {
            collisionImages = img`
                ..............................cc
                ............................cc..
                ..........................cc....
                ........................cc......
                ......................cc........
                ....................cc..........
                ..................cc............
                ................cc..............
                ..............cc................
                ............cc..................
                ..........cc....................
                ........cc......................
                ......cc........................
                ....cc..........................
                ..cc............................
                cc..............................
                `
        } else if (index6 == 1) {
            collisionImages = img`
                c . . . . . . . . . . . . . . . 
                . c . . . . . . . . . . . . . . 
                . . c . . . . . . . . . . . . . 
                . . . c . . . . . . . . . . . . 
                . . . . c . . . . . . . . . . . 
                . . . . . c . . . . . . . . . . 
                . . . . . . c . . . . . . . . . 
                . . . . . . . c . . . . . . . . 
                . . . . . . . . c . . . . . . . 
                . . . . . . . . . c . . . . . . 
                . . . . . . . . . . c . . . . . 
                . . . . . . . . . . . c . . . . 
                . . . . . . . . . . . . c . . . 
                . . . . . . . . . . . . . c . . 
                . . . . . . . . . . . . . . c . 
                . . . . . . . . . . . . . . . c 
                `
        } else if (index6 == 2) {
        	
        } else {
        	
        }
        // put the tilemap locations that correspond to the order of your index of regular platform images and collisions
        if (index6 == 0) {
            item = tiles.getTilesByType(assets.tile`myTile13`)
        } else if (index6 == 1) {
            item = tiles.getTilesByType(assets.tile`myTile`)
        } else if (index6 == 2) {
        	
        } else {
        	
        }
        for (let value2 of item) {
            for (let index32 = 0; index32 <= 512; index32++) {
                for (let index222 = 0; index222 <= 512; index222++) {
                    if (0 != collisionImages.getPixel(index32, index222)) {
                        TileCollisionArrayX.push(value2.column * 16 + index32)
                        TileCollisionArrayY.push(value2.row * 16 + index222 + 1)
                    }
                }
            }
        }
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    stats.turnStats(true)
})
let collisionImages: Image = null
let mySprite2: Sprite = null
let item: tiles.Location[] = []
let movingPlatformCollisonImages: Image[] = []
let numberOfMovingPlatformImages = 0
let movingPlatforImages: Sprite[] = []
let hittingwall = false
let canJump = false
let mySprite: Sprite = null
let TileCollisionArrayX: number[] = []
let TileCollisionArrayY: number[] = []
TileCollisionArrayY = [0]
TileCollisionArrayX = [0]
let everyframecoly = [0]
let everyframecolx = [0]
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
mySprite.vy = 100
scene.cameraFollowSprite(mySprite)
let mySprite3 = sprites.create(img`
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    c 
    `, SpriteKind.Player)
mySprite3.setFlag(SpriteFlag.Invisible, true)
GenerateCollision()
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    canJump = mySprite.isHittingTile(CollisionDirection.Bottom)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setFlag(SpriteFlag.GhostThroughWalls, false)
    hittingwall = false
    everyframecolx = []
    everyframecoly = []
    // This loads and unloads objects, if you have moving objects bigger than 100 pixels, then set the "within" number to be the size of the biggest object ((width + height) / 2), do the same with the other one just below this one
    for (let value3 of spriteutils.getSpritesWithin(SpriteKind.movingplatform, 50, mySprite)) {
        for (let index322 = 0; index322 <= value3.width; index322++) {
            for (let index5 = 0; index5 <= value3.height; index5++) {
                if (movingPlatformCollisonImages[sprites.readDataNumber(value3, "type")].getPixel(index322, index5) != 0) {
                    everyframecolx.push(value3.left + index322 + 1)
                    everyframecoly.push(value3.top + index5 + 1)
                }
            }
        }
    }
    mySprite3.setPosition(mySprite.x, mySprite.bottom)
    for (let value4 of spriteutils.getSpritesWithin(SpriteKind.movingplatform, 50, mySprite)) {
        if (value4.overlapsWith(mySprite3)) {
            mySprite.x += value4.vx / 50
            mySprite.y += value4.vy / 50
        }
    }
    for (let index52 = 0; index52 <= everyframecolx.length; index52++) {
        if (mySprite.x + 1 > everyframecolx[index52] && mySprite.x - 1 < everyframecolx[index52]) {
            if (mySprite.vy >= 0 - 50 && mySprite.bottom - 3 <= everyframecoly[index52]) {
                if (mySprite.bottom + 3 >= everyframecoly[index52]) {
                    mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                    hittingwall = true
                    canJump = true
                    mySprite.bottom = everyframecoly[index52] - 1
                } else if (mySprite.bottom + 6 >= everyframecoly[index52]) {
                    mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                    canJump = true
                }
            }
        }
    }
    for (let index42 = 0; index42 <= everyframecolx.length; index42++) {
        if (mySprite.top + 2 <= everyframecoly[index42] && mySprite.y - 3 >= everyframecoly[index42]) {
            if (mySprite.right <= everyframecoly[index42] && mySprite.right + 0 >= everyframecoly[index42]) {
                if (controller.right.isPressed()) {
                    controller.moveSprite(mySprite, 0, 0)
                    mySprite.right = everyframecolx[index42] - 1
                }
            } else if (mySprite.left <= everyframecolx[index42] && mySprite.left + 6 >= everyframecolx[index42]) {
                if (controller.left.isPressed()) {
                    controller.moveSprite(mySprite, 0, 0)
                    mySprite.left = everyframecolx[index42] + 1
                }
            }
        }
    }
    for (let index4 = 0; index4 <= TileCollisionArrayX.length; index4++) {
        if (mySprite.top + 2 <= TileCollisionArrayY[index4] && mySprite.y - 3 >= TileCollisionArrayY[index4]) {
            if (mySprite.right <= TileCollisionArrayX[index4] && mySprite.right + 0 >= TileCollisionArrayX[index4]) {
                if (controller.right.isPressed()) {
                    controller.moveSprite(mySprite, 0, 0)
                    mySprite.right = TileCollisionArrayX[index4] - 1
                }
            } else if (mySprite.left <= TileCollisionArrayX[index4] && mySprite.left + 6 >= TileCollisionArrayX[index4]) {
                if (controller.left.isPressed()) {
                    controller.moveSprite(mySprite, 0, 0)
                    mySprite.left = TileCollisionArrayX[index4] + 1
                }
            }
        }
    }
    for (let index43 = 0; index43 <= TileCollisionArrayX.length; index43++) {
        if (mySprite.x + 1 > TileCollisionArrayX[index43] && mySprite.x - 1 < TileCollisionArrayX[index43]) {
            if (mySprite.vy >= 0 && mySprite.bottom - 3 <= TileCollisionArrayY[index43]) {
                if (mySprite.bottom + 3 >= TileCollisionArrayY[index43]) {
                    mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                    hittingwall = true
                    canJump = true
                    mySprite.bottom = TileCollisionArrayY[index43] - 1
                } else if (mySprite.bottom + 6 >= TileCollisionArrayY[index43]) {
                    mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                    canJump = true
                }
            }
        }
    }
    if (hittingwall) {
        mySprite.vy = 0
        mySprite.ay = 0
    } else {
        if (mySprite.vy == 0) {
            mySprite.ay = 300
        }
    }
})
game.onUpdateInterval(1000, function () {
    for (let value6 of sprites.allOfKind(SpriteKind.movingplatform)) {
        if (sprites.readDataNumber(value6, "type") == 1) {
            value6.vx = 10
        }
    }
})
