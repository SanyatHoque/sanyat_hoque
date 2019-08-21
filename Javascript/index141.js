let hotelEx = {
    fees: 2000,
    tripfee: 2000,
    mealsfee: 500,
  };

console.log("hotel: ",hotelEx)


let sum = hotelEx.reduce((acc, val) => {
    return acc + val;
  });