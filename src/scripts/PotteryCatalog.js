
const potteryToSell = []

export const toSellOrNotToSell = (madeObject) => {  //must accept an object as a parameter(input)
   if (madeObject.cracked === false) { 
    if (madeObject.weight >= 6){madeObject.price = 40}
    else {madeObject.price = 20}
    {potteryToSell.push(madeObject)}

} 

 
   
   return madeObject

}




export const usePottery = () => {
    return potteryToSell.map(art => ({...art}))
}