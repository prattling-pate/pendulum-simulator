class SmallAnglePendulum extends SimplePendulum {
	constructor(initialAngle = 0.1, gravitationalFieldStrength = 9.81, airDensity = 0, lengthOfPendulum = 100, width=640, height=480, changeInTime = 0.01) {
        super(initialAngle, gravitationalFieldStrength, airDensity, lengthOfPendulum, width, height, changeInTime)
	}

    _updateAngularAcceleration() {
		const c = this._constants;
		const angularAcceleration = (-c.gravitationalFieldStrength / c.lengthOfPendulum) * this.angle;
		this._angularAcceleration = angularAcceleration;
	}

}
