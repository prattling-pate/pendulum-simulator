class PendulumSimulation {
	constructor(initialAngle = 0, gravitationalFieldStrength = 0, airDensity = 0, lengthOfPendulum = 1, width=640, height=480, changeInTime = 0.01) {
		this.pendulumCanvasHandler = new CanvasHandler("main");
		this._constants = { gravitationalFieldStrength: gravitationalFieldStrength, airDensity: airDensity, lengthOfPendulum: lengthOfPendulum, changeInTime: changeInTime };
		this.angle = initialAngle;
		this.objectList = this._getObjectList(width, height);
	}

	setConstants(initialAngle, gravitationalFieldStrength, airDensity, lengthOfPendulum, changeInTime) {
        this._constants = { gravitationalFieldStrength: gravitationalFieldStrength, airDensity: airDensity, lengthOfPendulum: lengthOfPendulum, changeInTime: changeInTime };
        this.angle = initialAngle;
    }

	refresh(width, height) {
        this._angularAcceleration = 0;
        this._angularVelocity = 0;
		this.objectList = this._getObjectList(width, height);
	}

    _updateObjects(width, height) {
        const c = this._constants;
        const objectRect = this.objectList[0]
        const circlePos = new Position(width/2 + c.lengthOfPendulum*Math.sin(this.angle), height/3+objectRect.height/2 + c.lengthOfPendulum * Math.cos(this.angle));
        this.objectList[1].setPosition(circlePos.x, circlePos.y);
    }

}
