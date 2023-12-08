// Correction Refactorisé

type Point = [number, number];

enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
}

function createPoint(x: number, y: number): Point {
    return [x, y];
}

function manipulatePoints(
    point1: Point,
    point2: Point,
    operation: Operation,
    factor: number = 1
): Point {
    switch (operation) {
        case Operation.ADD:
            return [
                (point1[0] + point2[0]) * factor,
                (point1[1] + point2[1]) * factor,
            ];
        case Operation.SUBTRACT:
            return [
                (point1[0] - point2[0]) * factor,
                (point1[1] - point2[1]) * factor,
            ];
        case Operation.MULTIPLY:
            return [
                point1[0] * point2[0] * factor,
                point1[1] * point2[1] * factor,
            ];
    }
}

function printPoint(point: Point, label: string = "Point"): void {
    console.log(`${label}: (${point[0]}, ${point[1]})`);
}

// Scénario de Test
let p1 = createPoint(4, 5);
let p2 = createPoint(2, 3);

let addedPoints = manipulatePoints(p1, p2, Operation.ADD, 5);
printPoint(addedPoints, "Added Point");

let subtractedPoints = manipulatePoints(p1, p2, Operation.SUBTRACT);
printPoint(subtractedPoints, "Subtracted Point");

let multipliedPoints = manipulatePoints(p1, p2, Operation.MULTIPLY);
printPoint(multipliedPoints, "Multiplied Point");
