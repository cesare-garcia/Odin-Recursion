function mergeSort(array) {
    
    let copy = array.slice();
    let sortedArray = [];

    if (copy.length===1) {
        return copy;
    } else {
        let lastElementIndex = array.length - 1;
        let midpointIndex = Math.floor((lastElementIndex)/2);
        let sortLeft = mergeSort(copy.slice(0, midpointIndex+1)); // first final val = 5
        let sortRight = mergeSort(copy.slice((midpointIndex+1), lastElementIndex+1)); // first final val = 2

        if (sortRight != undefined) {            
            let combinedArray = merge(sortLeft, sortRight, sortLeft.length, sortRight.length);
            return sortedArray.concat(combinedArray);
        } else {
            return sortedArray.concat(sortLeft);
        }
    }
}

function merge(array1, array2, a1Length, a2Length) {

    let newArray = [];
    let i = 0;
    let j= 0;
    let k = 0;

    while (i < a1Length && j < a2Length) {
        if (array1[i] < array2[j]) { 
            newArray[k] = array1[i];
            i++;
            k++;
            
        } else if (array1[i] > array2[j]) {
            newArray[k] = array2[j];
            j++;
            k++;
        } 
    }

    for (i; i <= a1Length; i++) {
        if (array1[i] != undefined) {
            newArray[k] = array1[i];
            k++;
        }
    }

    for (j; j <= a2Length; j++) {
        if (array2[j] != undefined) {
            newArray[k] = array2[j];
            k++;
        }
    }

    return newArray;
};