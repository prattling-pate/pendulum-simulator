class Circle extends MyObject {
	constructor(colour = "black", velocity = new Velocity(), acceleration = new Acceleration(), position = new Position(), mass = 1, tangible = true, radius = 1) {
		super(colour, velocity, acceleration, position, mass, tangible);
		this.radius = radius;
		this.coeffDrag = 0.5;
		this.height = this.width = Math.PI * radius;
		this.shape = "circle";
	}
}
