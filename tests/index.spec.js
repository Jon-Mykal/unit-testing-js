
const assert = require('assert');
describe('Math', () => {
    describe(".min", () => {
        it('returns the lowest number', () => {
            const minimum = 2;
            
            assert.ok(Math.min(3, 2) === minimum);
        });
    });
});