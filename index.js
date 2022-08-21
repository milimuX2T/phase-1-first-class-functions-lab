const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (){ 
    return  drivers.slice(0,2)
}

const returnLastTwoDrivers = function (){
    return drivers.slice(-2)
}

let selectingDrivers = []

selectingDrivers[0] = returnFirstTwoDrivers
selectingDrivers[1] = returnLastTwoDrivers

const createFareMultiplier = function (){
    return function (a){ 
      return  a*a
    }

}

const fareDoubler = function (a){
    return a*2
        
    

}

const fareTripler = function (a){
    return  a*3
      
      
    
}



const selectDifferentDrivers = function (arrayOfDrivers, fn){
    return fn(arrayOfDrivers)

}





// Code your solution in this file!
