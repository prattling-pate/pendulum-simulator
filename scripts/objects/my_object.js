class MyObject {
	constructor(colour = "black", velocity = new Velocity(), acceleration = new Acceleration(), position = new Position(), mass = 1, tangible = true) {
		this.colour = colour;
		this.mass = mass;
		this.forces = { weight: new Vector2(0, 0), drag: new Vector2(0, 0), tension: new Vector2(0, 0) };
		this.acceleration = acceleration;
		this.velocity = velocity;
		this.position = position;
		this.tangible = tangible;
	}

	setVelocity(x, y) {
		this.velocity.setX(x);
		this.velocity.setY(y);
	}

	setPosition(x, y) {
		this.position.x = x;
		this.position.y = y;
	}

	setCoeffDrag(newDrag) {
		this.coeffDrag = newDrag;
	}

	updateKinematics(densityOfAir, timeStep) {
		if (!this.tangible) {
			return null;
		}
		this.updateDrag(densityOfAir);
		this.acceleration.update(this);
		this.velocity.update(this.acceleration, timeStep);
		this.position.update(this.velocity, timeStep);
	}

	updateWeight(gravitationalFieldStrength) {
		this.forces.weight = new Vector2(0, this.mass * gravitationalFieldStrength);
	}

	resolveVectors() {
		return this.forces.tension.add(this.forces.weight.add(this.forces.drag));
	}

	updateDrag(densityOfAir) {
		const dragX = -Math.sign(this.velocity.getX()) * 0.5 * densityOfAir * this.coeffDrag * this.width * this.velocity.getX() ** 2;
		const dragY = -Math.sign(this.velocity.getY()) * 0.5 * densityOfAir * this.coeffDrag * this.height * this.velocity.getY() ** 2;
		this.forces.drag.setX(dragX);
		this.forces.drag.setY(dragY);
	}
}
