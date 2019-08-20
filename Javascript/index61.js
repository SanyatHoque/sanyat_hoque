const weekday =5
let message

switch (weekday) {
  case 1:
    message = 'The name is Monday';
    console.log(message)
    break;
  case 2:
    message = 'The name is Tuesday';
    console.log(message)
    break;
  case 3:
    message = 'The name is Wednessday';
    console.log(message)
    break;
  case 4:
    message = 'The name is Thursday';
    console.log(message)
    break;
    case 5:
    message = 'The name is Friday';
    console.log(message)
    break;
    case 6:
    message = 'The name is Saturday';
    console.log(message)
    break;
    case 7:
    message = 'The name is Sunday';
    console.log(message)
    break;
  default:
     message = 'Error: Please input a number bettwen 1 and 7';
     console.log(message)
    }
