import {usePottery} from './PotteryCatalog.js'




export const PotteryList = () => {
    const saleList = usePottery()
    let htmlString = `<article class="potteryList">`    

    for (const clayObject of saleList) {
        console.log(clayObject)
        console.log(saleList)
    htmlString +=  `
        <section class="pottery" id="pottery--1">
        <h2 class= "pottery__shape"> ${clayObject.shape} </h2>
            <div class= "pottery__properties"> Item weighs ${clayObject.weight} grams and is ${clayObject.height} cm in height. 
            </div>
            <div class= "pottery__price"> Price is ${clayObject.price}
            </div>
        </section> 
`
        htmlString += `</article>`
        
    }
    return htmlString
}