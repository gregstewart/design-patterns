describe("Grid", function () {
    var grid;

    beforeEach(function () {
        grid = new Grid();
    });

    it('returns true if the grid is empty', function () {
        var x = 0,
            y = 0;

        expect(grid.isEmpty(x, y)).toBe(true);
    });

    it('returns false if the grid has a value', function () {
        var cell = {},
            x = 0,
            y = 0;

        grid.addCell(x, y, cell);

        expect(grid.isEmpty(x, y)).toBe(false);
    });

    it('returns a cell from a given x/y co-ordinate', function () {
        var cell = {},
            x = 0,
            y = 0,
            storedCell;

        grid.addCell(x, y, cell);
        storedCell = grid.fetchCell(x, y);

        expect(storedCell).toBe(cell);
    });

    it('add a cell to the proper co-ordinates', function () {
        var cell = {},
            x = 0,
            y = 0;

        grid.addCell(x, y, cell);

        expect(grid.fetchCell(x, y)).toBe(cell);
    });

    describe('expand interface', function () {
        it('accepts a coordinate object and doesn\'t break the api', function () {
            var x = 0,
                y = 0,
                Coordinates = {x: x, y: y},
                cell = {};

            grid.addCell(Coordinates, cell);

            expect(grid.fetchCell(Coordinates)).toBe(cell);
        });

        it('should still return tru for an empty cell', function () {
            var x = 0,
                y = 0,
                Coordinates = {x: x, y: y};

            expect(grid.isEmpty(Coordinates)).toBe(true);
        });

    });
});