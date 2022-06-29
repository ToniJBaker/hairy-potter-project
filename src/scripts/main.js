// Imports go first
import {makePottery} from './PotteryWheel.js' 
import {firePottery} from './kiln.js'
import {toSellOrNotToSell} from './PotteryCatalog.js'
import {usePottery} from './PotteryCatalog.js'
import {PotteryList} from './PotteryList.js'



console.log(makePottery())



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", .75, 3)
console.log(mug)

let bowl = makePottery("bowl", 7, 5)
console.log(bowl)

let pitcher = makePottery("pitcher", 2, 10)
console.log(pitcher)

let platter = makePottery("platter", 2, 1)
console.log(platter)

let plate = makePottery("plate", 1.5, 1)
console.log(plate)



// Fire each piece of the 5 pieces of pottery in the kiln
let mugObject = firePottery(mug, 2400)
console.log(mugObject)

let bowlObject = firePottery(bowl, 1300)
console.log(bowlObject)

let pitcherObject = firePottery(pitcher, 2600)
console.log(pitcherObject)

let platterObject = firePottery(platter, 1225)
console.log(platterObject)

let plateObject = firePottery(plate, 2025)
console.log(plateObject)



// Determine which of the 5 pieces should be sold, and their price
let sellMug = toSellOrNotToSell(mugObject)
console.log(sellMug)

let sellBowl = toSellOrNotToSell(bowlObject)
console.log(sellBowl)

let sellPitcher = toSellOrNotToSell(pitcherObject)
console.log(sellPitcher)

let sellPlatter = toSellOrNotToSell(platterObject)
console.log(sellPlatter)

let sellPlate = toSellOrNotToSell(plateObject)
console.log(sellPlate)

usePottery()
console.log(usePottery())



// Invoke the component function that renders the HTML list
const parentHTMLElement = document.querySelector(".potteryList")
parentHTMLElement.innerHTML = PotteryList()



