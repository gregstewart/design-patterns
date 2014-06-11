function Grid() {
    this.cells = [[]];
    this.newCells = [];

    this.findCell = function (coordinate) {
        var foundCell;
        this.newCells.forEach(function (cell) {
            if (cell.coordinate.x === coordinate.x && cell.coordinate.y === coordinate.y) {
                foundCell = cell.cell;
            }
        });
        return foundCell;
    };
}

Grid.prototype.addCell = function (x, y, cell) {
    if(arguments.length > 2 && !isNaN(x)) {
        this.cells[x][y] = cell;
    } else {
        this.newCells.push({coordinate: x, cell: y});
    }
};

Grid.prototype.fetchCell = function (x, y) {
    if(arguments.length > 1 && !isNaN(x)) {
        return this.cells[x][y];
    } else {
        return this.findCell(x);
    }
};

Grid.prototype.isEmpty = function (x, y) {
    if(arguments.length > 1 && !isNaN(x)) {
        return this.cells[x][y] == null;
    } else {
        return this.findCell(x) == null;
    }
};