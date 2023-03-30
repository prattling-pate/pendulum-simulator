class DoubleSimplePendulum extends SimplePendulum {
	constructor(initialAngle = 0.1, gravitationalFieldStrength = 9.81, airDensity = 0, lengthOfPendulum = 100, width=640, height=480, changeInTime = 0.01) {
        super(initialAngle, gravitationalFieldStrength, airDensity, lengthOfPendulum, width, height, changeInTime)
        this.angle2 = initialAngle;
        this._angularAcceleration2 = 0;
        this._angularVelocity2 = 0;
	}

    refresh(width, height) {
        this._angularAcceleration = 0;
        this._angularVelocity = 0;
        this._angularAcceleration2 = 0;
        this._angularVelocity2 = 0;
		this.objectList = this._getObjectList(width, height);
	}

    setConstants(initialAngle, secondAngle, gravitationalFieldStrength, airDensity, lengthOfPendulum, changeInTime) {
        this._constants = { gravitationalFieldStrength: gravitationalFieldStrength, airDensity: airDensity, lengthOfPendulum: lengthOfPendulum, changeInTime: changeInTime };
        this.angle = initialAngle;
        this.angle2 = secondAngle;
    }

    _updateObjects(width, height) {
        const c = this._constants;
        const objectRect = this.objectList[0]
        const circle1Pos = new Position(width/2 + c.lengthOfPendulum*Math.sin(this.angle), height/3+objectRect.height/2 + c.lengthOfPendulum * Math.cos(this.angle));
        const circle2Pos = new Position(circle1Pos.x + c.lengthOfPendulum*Math.sin(this.angle2), circle1Pos.y + c.lengthOfPendulum * Math.cos(this.angle2));
        this.objectList[1].setPosition(circle1Pos.x, circle1Pos.y);
        this.objectList[2].setPosition(circle2Pos.x, circle2Pos.y);
    }

    _getObjectList(width, height) {
        const c = this._constants;
        const rectPos = new Position(width/2, height/3);
        const circle1Pos = new Position(width/2 + c.lengthOfPendulum*Math.sin(this.angle), height/3+25/2 + c.lengthOfPendulum * Math.cos(this.angle));
        const circle2Pos = new Position(circle1Pos.x+ c.lengthOfPendulum*Math.sin(this.angle2), circle1Pos.y + c.lengthOfPendulum * Math.cos(this.angle2));
		const objects = [
            new Rectangle("black", new Velocity(), new Acceleration(), rectPos, 0, false, 50, 25),
            new Circle("black", new Velocity(), new Acceleration(), circle1Pos, 0, false, 10), 
            new Circle("black", new Velocity(), new Acceleration(), circle2Pos, 0, false, 10)
        ];
        return objects;
	}

    _updateAngularAcceleration2() {
        const c = this._constants;
        const angularAcceleration = -c.gravitationalFieldStrength / c.lengthOfPendulum * Math.sin(this.angle2);
        this._angularAcceleration2 = angularAcceleration;
    }

    _updateAngularVelocity2() {
        const c = this._constants;
        const angularVelocity = this._angularAcceleration2 * c.changeInTime;
        this._angularVelocity2 += angularVelocity;
    }

    _updateAngle2() {
        this._updateAngularAcceleration2();
        this._updateAngularVelocity2();
        this.angle2 += this._angularVelocity2;
    }

    updateSimulation(width, height) {
        this._updateAngle();
        this._updateAngle2();
        this._updateObjects(width, height);
    }

}