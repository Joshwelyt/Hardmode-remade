Vars.content.blocks().each(e => {
    if(e instanceof Turret) {
e.reloadTime = 50;
e.spread = 0;
e.inaccuracy = 45;
e.recoilAmount = 2;
e.restitution = 0;
e.xRand = 0;
e.cooldown = 100;
e.rotateSpeed = 3;
e.targetGround = true;
e.targetAir = true;
        if(typeof(e.shootType) !== "undefined") {
            if(typeof(e.shootType.collidesGround) !== "undefined") e.shootType.collidesGround = true;
            if(typeof(e.shootType.collidesAir) !== "undefined") e.shootType.collidesAir = true;
        }
    }
});

Blocks.lancer.chargeTime = 90;
Blocks.lancer.chargeMaxDelay = 90;
Blocks.meltdown.range = 70;
Blocks.meltdown.shootDuration = 70;
Blocks.meltdown.shootType.length = 50;
