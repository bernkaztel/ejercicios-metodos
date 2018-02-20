// 1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:

function forEach(array, callback) {
    for ( i = 0; i < array.length; i++) {
         element = array[i];
        callback(element);
    }
}

forEach([1,2,3,4,5], function(element){
    console.log(element);
});

// 2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:


function myMap(array, callback) {
    newArray = [];
    for ( i = 0; i < array.length; i++) {
         element = array[i];
       newArray.push(callback(element));
    }
    return (newArray);
}

myMap([1,2,3,4,5], function(element){
    return element + 2;
});


// 3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:


function myFilter(array, callback) {
    newArray = [];
    for ( i = 0; i < array.length; i++) {
         element = array[i];
       newArray.push(callback(element));
    }
    return (newArray);
}

myFilter([1,2,3,4,5], function(element){
    return element > 2;
});

// 4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
function miReduce(arreglo, reduce) {

}

// Bonus:
// 1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
function miSort(arreglo, callback) {

}
