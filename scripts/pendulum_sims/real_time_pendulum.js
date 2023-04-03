class RealTimePendulum extends PendulumSimulation {
    constructor(initialAngle = 0.1, gravitationalFieldStrength = 9.81, airDensity = 0, lengthOfPendulum = 100, width=640, height=480, changeInTime = 0.01) {
        super(initialAngle, gravitationalFieldStrength, airDensity, lengthOfPendulum, width, height, changeInTime);
    }

    _getObjectList(width, height) {
        const c = this._constants;
        const rectPos = new Position(width/2, height/3);
        const circle1Pos = new Position(width/2 + c.lengthOfPendulum*Math.sin(this.angle), height/3+25/2 + c.lengthOfPendulum * Math.cos(this.angle));
		const objects = [
            new Rectangle("black", new Velocity(), new Acceleration(), rectPos, 0, false, 50, 25),
            new Circle("black", new Velocity(), new Acceleration(), circle1Pos, 0.01, true, 10), 
        ];
        return objects;
    }

    _updateObjects(width, height) {
        const c = this._constants;
        this.objectList[1].updateKinematics(c.airDensity, c.changeInTime, c.gravitationalFieldStrength, this.objectList[0], c.lengthOfPendulum, height);
    }

    updateSimulation(width, height){
        this._updateObjects(width, height);
    }
}