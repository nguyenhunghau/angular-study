"use strict";
function printPoint(p) {
    console.log(p.x + ", " + p.y);
}
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
// prints "12, 26"
var newVPoint = new VirtualPoint(13, 56);
printPoint(newVPoint);
