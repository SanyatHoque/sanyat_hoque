let arr = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit']

    function isBigEnough(value) {
        if (value == "Iceman") {
            return value
        } else if (value == "Magneto") {
            return value
        } else if (value == "Gambit") {
            return value
        }
    }
      
      let newArr = arr.filter(isBigEnough);
      console.log(newArr)