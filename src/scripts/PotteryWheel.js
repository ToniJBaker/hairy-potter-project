// Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.//
let idnumber = 1
//Define and export a function named makePottery, return and object with the following properties:shape, weight, height, id//
let potteryObjects = {}
export const makePottery = (type, pounds, inches) => { //input as values type of shape, wight in grams, height in centimeters.//
     
       potteryObjects = {
            shape: type,
            weight: pounds,
            height: inches,
            id: idnumber 
        } 
    
    idnumber++   //increment this value

return potteryObjects
}
