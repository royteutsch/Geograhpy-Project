var player = {
  money: 10,
  graphics: 0,
  elec: 0,
  marketing: [],
  artists: [],
  lootboxTeam: [],
  lastUpdate: Date.now()
}

var firstMarketing = {
  tier: 0,
  cost: 10,
  mult: 1,
  amount: 0,
  bought: 0,
  name: "Smoke Trail"
}

var firstArtist = {
  tier: 0,
  cost: 30,
  mult: 1,
  amount: 0,
  bought: 0,
  name: "Single cellular life"
}

var firstLootboxTeam = {
  tier: 0,
  cost: 90,
  mult: 1,
  amount: 0,
  bought: 0,
  name: "Manmade Fire"
}

player.marketing.push(new Generator(firstMarketing))
player.artists.push(new Generator(firstArtist))
player.lootboxTeam.push(new Generator(firstLootboxTeam))