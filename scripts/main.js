require("content/turrets");

Vars.content.units().each(e => e.health *= 1);
Planets.sun.atmosphereRadOut = 5;
Planets.sun.lightColor = Color.red;

Planets.serpulo.orbitRadius = 5.6;

if(!Vars.headless){
  Core.app.post(() => {
    const meta = Vars.mods.locateMod("hardmode").meta;
    meta.displayName = "[red]hardmode";
    meta.author = "[#FCC21B]joshwelyt";
    meta.description = "[red]why did you download this";
  });
  
  Events.run(Trigger.newGame, () => {
    Time.run(Fx.coreLand.lifetime, () => {
      var core = Vars.player.closestCore();
      if(core != null){
        //F u c k i n g   e x p l o d e
        //credit to meepoffaith for kode
        Fx.dynamicExplosion.at(core.getX(), core.getY(), 20 + Mathf.pow(core.block.size, 2), core.block);
        Effect.shake(30 + Mathf.pow(core.block.size, 2), 200 + Mathf.pow(core.block.size, 3), core);
        Vars.ui.showInfoPopup("[red]hardmode has begun[]", 5, Align.center, 192, 0, 0, 0);
      }
    });
  });
}