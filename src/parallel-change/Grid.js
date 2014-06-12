// addMethod - By John Resig (MIT Licensed)
function addMethod(object, name, fn){
    var old = object[ name ];
    object[ name ] = function(){
        if ( fn.length == arguments.length )
            return fn.apply( this, arguments );
        else if ( typeof old == 'function' )
            return old.apply( this, arguments );
    };
}

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

addMethod(Grid.prototype, "addCell", function(x, y, cell){
    this.cells[x][y] = cell;
});

addMethod(Grid.prototype, "addCell", function(coordinates, cell){
    this.newCells.push({coordinate: coordinates, cell: cell});

});

addMethod(Grid.prototype, "fetchCell", function(x, y){
    return this.cells[x][y];
});

addMethod(Grid.prototype, "fetchCell", function(coordinates){
    return this.findCell(coordinates);
});

addMethod(Grid.prototype, "isEmpty", function(x, y){
    return this.cells[x][y] == null;
});

addMethod(Grid.prototype, "isEmpty", function(coordinates){
    return this.findCell(coordinates) == null;
});