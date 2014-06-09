function Grid() {
    this.cells = [[]];
}

Grid.prototype.addCell = function (x, y, cell) {
    this.cells[x][y] = cell;
};

Grid.prototype.fetchCell = function (x, y) {
    return this.cells[x][y];
};

Grid.prototype.isEmpty = function (x, y) {
    return this.cells[x][y] == null;
};