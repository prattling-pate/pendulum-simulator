class PendulumSimulation {
	constructor(initialAngle = 0, gravitationalFieldStrength = 0, airDensity = 0, lengthOfPendulum = 1, changeInTime = 0.1) {
		this.pendulumCanvasHandler = new CanvasHandler("main");
		this.objectList = [];
		this.constants = { gravitationalFieldStrength: gravitationalFieldStrength, airDensity: airDensity, lengthOfPendulum: lengthOfPendulum };
		this.angle = initialAngle;
		this.changeInTime = changeInTime;
	}

	setGravity(newG) {
		this.constants.gravitationalFieldStrength = newG;
	}

	setAirDensity(newDensity) {
		this.constants.airDensity = newDensity;
	}

	setLengthOfPendulum(newLength) {
		this.constants.lengthOfPendulum = newLength;
	}
}
