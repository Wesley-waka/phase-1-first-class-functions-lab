const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers= () => {
 
    return drivers.slice(0,2);
}

console.log(returnFirstTwoDrivers());

const returnLastTwoDrivers=()=> {
    return drivers.slice(2,4);
}
console.log(returnLastTwoDrivers());

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(integer) {
    function fare (quad){
        let quadroupled = integer * quad;
        return(quadroupled);
    }
    return fare;
}

function fareDoubler(fare){
    return fare*2;
}

function fareTripler(fare){
    return fare*3;
}
function selectDifferentDrivers(drivers, returnDrivers){
    let selectingDrivers = returnDrivers(drivers);
    return selectingDrivers;
}


