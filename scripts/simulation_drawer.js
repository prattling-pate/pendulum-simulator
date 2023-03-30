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
        this.drawLine(object0.position.x, object0.position.y + 0.5 * object0.height, object1.position.x, object1.position.y, "black", 1);
    }

    _drawString2(sim) {
        const object1 = sim.objectList[1];
        const object2 = sim.objectList[2];
        this.drawLine(object1.position.x, object1.position.y + object1.radius, object2.position.x, object2.position.y, "black", 1);
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
        if (sim instanceof DoubleSimplePendulum) {
            this._drawString2(sim);
        }
    }
}