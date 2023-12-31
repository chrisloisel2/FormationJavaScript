// __________________________________________________

// CORRECTION NON REFACTO

// Creation d'un Point
let PointA: [number, number] = [2, 4];
let PointB: [number, number] = [2, 4];

console.log(PointA[0]);
console.log(PointA[1]);

enum Operation {
    add = "ADD",
    substract = "SUBSTRACT",
    multiply = "MULTIPLY",
}

function createPoint(x: number, y: number): [number, number] {
    let res: [number, number] = [x, y];

    return res;
}

console.log(manipulatePoints(PointA, PointB, Operation.add, 6));
console.log(manipulatePoints(PointA, PointB, Operation.substract, 6));
console.log(manipulatePoints(PointA, PointB, Operation.multiply, 6));

function manipulatePoints(
    point1: [number, number],
    point2: [number, number],
    operation: Operation,
    factor: number = 1
) {
    switch (operation) {
        case Operation.add:
            console.log("vous avez essayer de add");
            let pointReturn: [number, number] = [
                (point1[0] + point2[0]) * factor,
                (point1[1] + point2[1]) * factor,
            ];
            return pointReturn;
        case Operation.substract:
            console.log("vous avez essayer de substract");
            let pointRetur: [number, number] = [
                (point1[0] - point2[0]) * factor,
                (point1[1] - point2[1]) * factor,
            ];
            return pointRetur;
            break;
        case Operation.multiply:
            console.log("vous avez essayer de multiply");
            let pointRetu: [number, number] = [
                point1[0] * point2[0] * factor,
                point1[1] * point2[1] * factor,
            ];
            return pointRetu;
            break;
        default:
            break;
    }
}

function printPoint(point: [number, number], label: string = "Point") {
    console.log(`${label}: (${point[0]}, ${point[1]})`);
}

printPoint(PointA);
printPoint(PointA, "Delta");
