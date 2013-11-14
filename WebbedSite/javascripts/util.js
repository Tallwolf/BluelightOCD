/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * <pre>
 * (x * 255).clamp(0, 255)
 * </pre>
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

(function() {

function Vector2D( inX, inY ) {
    this.x = inX;
    this.y = inY;
    this.normalize = function() {
        var mag = Math.sqrt( this.x * this.x + this.y * this.y );
        this.x /= mag;
        this.y /= mag;
    };
};

window.dirVects = [];
window.dirVects[window.directions.none] = new Vector2D(0,0);
window.dirVects[window.directions.right] = new Vector2D(1,0);
window.dirVects[window.directions.left] = new Vector2D(-1,0);
window.dirVects[window.directions.up] = new Vector2D(0,1);
window.dirVects[window.directions.down] = new Vector2D(0,-1);

window.Vector2D = Vector2D;

}()); // make an anonymous global function expression and immediately call it.