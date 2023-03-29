class PendulumSimulation {
	constructor(initialAngle = 0, gravitationalFieldStrength = 0, airDensity = 0, lengthOfPendulum = 1, changeInTime = 0.01) {
		this.pendulumCanvasHandler = new CanvasHandler("main");
		this.objectList = [];
		this.constants = { gravitationalFieldStrength: gravitationalFieldStrength, airDensity: airDensity, lengthOfPendulum: lengthOfPendulum };
		this.angle = initialAngle;
		this.changeInTime = changeInTime;
	}

	refresh(width, height) {
		this.objectList = [];
		this.constants = { gravitationalFieldStrength: 0, airDensity: 0, lengthOfPendulum: 0 };
		this.angle = 0;
		this.changeInTime = 0.01;
	}

}
