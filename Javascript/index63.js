const yearVar = 2017
let monthName = null
let monthDays = null
switch (yearVar) {
  case 2017:
    monthName = 'Pittsburgh'
    monthDays = '2017'
    console.log(`${monthName} was the year NHL champ ${monthDays}`)
    break
  case 2016:
    monthName = 'Penguins'
    monthDays = '2016'
    console.log(`${monthName} was the year NHL champ ${monthDays}`)
    break
  case 2015:
    monthName = 'Pittsburgh Penguins'
    monthDays = '2015'
    console.log(`${monthName} was the year NHL champ ${monthDays}`)
    break
  case 2014:
    monthName = 'Chicago Blackhawks'
    monthDays = '2014'
    console.log(`${monthName} was the year NHL champ ${monthDays}`)
    break
    case 2013:
    monthName = 'Chicago Blackhawks'
    monthDays = '2012'
    console.log(`${monthName} was the year NHL champ ${monthDays}`)
    break;
    // case 6:
    // monthName = 'June'
    // monthDays = '30 days'
    // console.log(`${monthName} is selected month and has ${monthDays}`)
    // break;
    // case 7:
    // monthName = 'July'
    // monthDays = '31 days'
    // console.log(`${monthName} is selected month and has ${monthDays}`)
    // break;
    // case 8:
    // monthName = 'August'
    // monthDays = '31 days'
    // console.log(`${monthName} is selected month and has ${monthDays}`)
    // break;
    // case 9:
    // monthName = 'September'
    // monthDays = '30 days'
    // console.log(`${monthName} is selected month and has ${monthDays}`)
    // break;
    // case 10:
    // monthName = 'October'
    // monthDays = '31 days'
    // console.log(`${monthName} is selected month and has ${monthDays}`)
    // break;
    // case 11:
    //     monthName = 'November'
    //     monthDays = '31 days'
    //     console.log(`${monthName} is selected month and has ${monthDays}`)
    //     break;
    // case 12:
    //     monthName = 'December'
    //     monthDays = '31 days'
    //     console.log(`${monthName} is selected month and has ${monthDays}`)
    //     break;
  default:
     message = 'Error: Please input a different yr';
     console.log(message)
    }
