let arr = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit']
const updatedarr = arr.filter(function(updatedarr1) {
    return updatedarr1 = ['Professor X','Logan','Phoenix','Gambit'];
    });
console.log(updatedarr)
console.log(arr)
const concatarr = arr.map(function(updatedarr1) {
    if (updatedarr1=='Professor X') {
    return updatedarr1.concat('<3')
    } else if (updatedarr1=='Logan') {
    return updatedarr1.concat('<3')     
    } else if (updatedarr1=='Phoenix') {
    return updatedarr1.concat('<3')     
    } else if (updatedarr1=='Gamobit') {
    return updatedarr1.concat('<3')     
    
    } else {
        return updatedarr1
    }
    });
console.log(concatarr)