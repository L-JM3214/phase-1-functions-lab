
  function distanceFromHqInBlocks(someValue) {
    if (someValue>=42){
    return (someValue-42);
    } else{
        return (42-someValue);
    }
  }  
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination){
    if (destination>43){
        return (destination-start)*264;
    } else{
        return (start-destination)*264;
    }
}
distanceTravelledInFeet(43,50);

function calculatesFarePrice(start, destination){
    const distancePrice = distanceTravelledInFeet(start, destination);

    if (distancePrice <= 400) {
        return 0; 
    } else if (distancePrice <= 2000) {
        return (distancePrice - 400) * 0.02; 
    } else if (distancePrice <= 2500) {
        return 25; 
    } else {
        return "cannot travel that far"; 
    }
}
calculatesFarePrice(43,50);
