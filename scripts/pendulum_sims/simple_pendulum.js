class SimplePendulum extends PendulumSimulation {
	constructor(initialAngle = 0.1, gravitationalFieldStrength = 9.81, airDensity = 0, lengthOfPendulum = 100, width=640, height=480, changeInTime = 0.01) {
		super(initialAngle, gravitationalFieldStrength, airDensity, lengthOfPendulum, width, height, changeInTime);
        this._angularAcceleration = 0;
        this._angularVelocity = 0;
	}

    setConstants(initialAngle, gravitationalFieldStrength, airDensity, lengthOfPendulum, changeInTime) {
        this._constants = { gravitationalFieldStrength: gravitationalFieldStrength, airDensity: airDensity, lengthOfPendulum: lengthOfPendulum, changeInTime: changeInTime };
        this.angle = initialAngle;
    }

	_getObjectList(width, height) {
        const c = this._constants;
        const rectPos = new Position(width/2, height/3);
        const circlePos = new Position(width/2 + c.lengthOfPendulum*Math.sin(this.angle), height/3+25/2 + c.lengthOfPendulum * Math.cos(this.angle));
		const objects = [
            new Rectangle("black", new Velocity(), new Acceleration(), rectPos, 0, false, 50, 25),
            new Circle("black", new Velocity(), new Acceleration(), circlePos, 0, false, 10)
        ];
        return objects;
	}

	_updateAngularAcceleration() {
		const c = this._constants;
		const angularAcceleration = (-c.gravitationalFieldStrength / c.lengthOfPendulum) * Math.sin(this.angle);
		this._angularAcceleration = angularAcceleration;
	}

	_updateAngularVelocity() {
		const c = this._constants;
		const angularVelocity = this._angularAcceleration * c.changeInTime;
		this._angularVelocity += angularVelocity;
	}

    _updateAngle() {
        this._updateAngularAcceleration();
        this._updateAngularVelocity();
        this.angle += this._angularVelocity;
    }

	updateSimulation(width, height) {
        this._updateAngle();
        this._updateObjects(width, height);
    }
}
