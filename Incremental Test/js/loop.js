function producePrevious(generatorArray, diff) {
  for (let i = 1; i < generatorArray.length; i++) {
    let g = generatorArray[i]
    generatorArray[i - 1].amount += g.productionPerSecond * diff
  }
}



function gameLoop(that) {
  let diff = (Date.now() - that.player.lastUpdate)/1000
  that.player.elec += that.player.lootboxTeam[0].productionPerSecond * diff
  elecMult = (Math.pow(2, that.player.elec) + 1)
  that.player.money += that.player.marketing[0].productionPerSecond * diff * elecMult
  that.player.graphics += that.player.artists[0].productionPerSecond * diff * elecMult
  producePrevious(that.player.marketing, diff)
  producePrevious(that.player.artists, diff)
  producePrevious(that.player.lootboxTeam, diff)

  that.player.lastUpdate = Date.now()
}