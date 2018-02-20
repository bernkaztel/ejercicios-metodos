// 1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:

function forEach(array, callback) {
    return callback(array);
}

function miForEach(array) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        console.log(element);
    }
}

forEach([1, 2, 3, 4, 5], miForEach);


// 2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:

function myMap(array, callback) {
    newArray = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        newArray.push(element);
    }
    return callback(newArray);
}

function theFunction(newArray) {
    for (var i = 0; i < newArray.length; i++) {
        newArray[i] = newArray[i] * 2
    }
    return newArray;
}

myMap([1, 2, 3, 4, 5], theFunction);



// 3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
function myFilter(array, condition, callback) {
    newArray = [];
    for (var i = 0; i < array.length; i++) {
        element = array[i];
        if (callback(element, condition)) {
            newArray.push(element);
        }
    }
    return newArray;
}

function theFunction(element, condition) {

    return element > condition;
}

myFilter([1, 5, 3, 4, 5], 2, theFunction);

// 4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
function miReduce(arreglo, reduce) {

}

// Bonus:
// 1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
function miSort(arreglo, callback) {

}
