

//Define and export a function named firePottery that is responsible for acting as a kiln.

export const firePottery = (madeObject, temperature)=> { //two inputs are the object made by makePottery() and the temperature of the kiln
       
        madeObject.fired = true
        if (temperature > 2200) {madeObject.cracked = true}
        else {madeObject.cracked = false}
        
        return madeObject
}

