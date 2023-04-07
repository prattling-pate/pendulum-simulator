class MyObject {
	constructor(colour = "black", velocity = new Velocity(), acceleration = new Acceleration(), position = new Position(), mass = 0.01, tangible = true) {
		this.colour = colour;
		this.mass = mass;
		this.acceleration = acceleration;
		this.velocity = velocity;
		this.position = position;
		this.tangible = tangible;
	}

	setPosition(x,y) {
		this.position.x=x;
		this.position.y=y;
	}

	updateKinematics(densityOfAir, timeStep, gravitationalFieldStrength, otherObject, lengthOfPendulum,height) {
		if (!this.tangible) {
			return null;
		}
		const Fd = this.getDrag(densityOfAir*0.001).getMagnitude();
		const mg = this.getWeight(gravitationalFieldStrength).y;
		const angleCos = (this.position.y - (otherObject.position.y+otherObject.height/2))/lengthOfPendulum;
		const angleSin = (this.position.x - otherObject.position.x)/lengthOfPendulum;
		const resultantForce = new Vector2((-mg*angleSin+Fd)*angleCos, 0);
		this.acceleration.update(resultantForce, this.mass);
		this.velocity.update(this.acceleration, timeStep);
		this.position.update(this.velocity.multiply(100), timeStep);
		this.position.y = Math.sqrt(lengthOfPendulum**2 - (this.position.x - otherObject.position.x)**2) + otherObject.position.y;
		}

	getWeight(gravitationalFieldStrength) {
		return new Vector2(0, this.mass * gravitationalFieldStrength);
	}

	getDrag(densityOfAir) {
		const dragX = -Math.sign(this.velocity.getX()) * 0.5 * densityOfAir * this.coeffDrag * this.width * this.velocity.getX() ** 2;
		const dragY = -Math.sign(this.velocity.getY()) * 0.5 * densityOfAir * this.coeffDrag * this.height * this.velocity.getY() ** 2;
		return new Vector2(dragX, dragY);
	}
}
