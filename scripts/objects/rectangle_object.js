class Rectangle extends MyObject {
	constructor(colour = "black", velocity = new Velocity(), acceleration = new Acceleration(), position = new Position(), mass = 1, tangible = true, width = 1, height = 1) {
		super(colour, velocity, acceleration, position, mass, tangible);
		this.coeffDrag = 0.8;
		this.height = height;
		this.width = width;
        this.topLeftCorner = this._getTopLeftCorner();
		this.shape = "rectangle";
	}

    _getTopLeftCorner() {
        return {x: this.position.x - 0.5 * this.width, y: this.position.y - 0.5 * this.height};
    }
}
