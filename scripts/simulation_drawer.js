class SimulationDrawer extends CanvasHandler {
    constructor(canvasId) {
        super(canvasId);
        this.running = true;
    }

    _drawBackground() {
        this.drawRectangle(0, 0, this.width, this.height, "white");
    }

    _drawString(sim) {
        const object0 = sim.objectList[0];
        const object1 = sim.objectList[1];
        this.drawLine(object0.position.x, object0.position.y, object1.position.x, object1.position.y, "black", 1);
    }

    _drawObject(object) {
        if (object.shape == "circle") {
            this.drawCircle(object.position.x, object.position.y, object.radius, object.colour);
        }
        else if (object.shape == "rectangle") {
            this.drawRectangle(object.topLeftCorner.x, object.topLeftCorner.y, object.width, object.height, object.colour);
        }
    }

    togglePause() {
        if (this.running) this.running = false;
        else this.running = true;
    }

    drawFrame(sim) {
        this._drawBackground();
        for (const object of sim.objectList) {
            this._drawObject(object);
        }
        this._drawString(sim);
    }
}