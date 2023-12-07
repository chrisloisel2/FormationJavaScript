function tri(a, b, logique) {
    if (logique(a, b)) {
        return a;
    } else {
        return b;
    }
}

tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < tab.length; i++) {
//     console.log(tab[i]);
// }

//fonction première
// foreach, map, filter, reduce, find, findIndex
tab.forEach((element) => {
    console.log(element);
});

//index0, 1, 2, 3, 4

console.log(tri(2, 3, (a, b) => a > b)); // 3
