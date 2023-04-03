// simulation object declared here to allow it to be redefined
var currentSimulation = new SimplePendulum();

function init() {
	const simulationCanvasHandler = new SimulationDrawer("main");
    const fps = 10;
    document.getElementById("refresh-constants").addEventListener("click", () => {
		const initialAngle = getFloatValueFromPage("initial-angle");
		const secondAngle = getFloatValueFromPage("second-initial-angle");
		const gravity = getFloatValueFromPage("gravity");
		const length = 100 * getFloatValueFromPage("length");
		const density = getFloatValueFromPage("air-density");
		const deltaTime = 0.01 * getFloatValueFromPage("delta-time");
        const timeScale = getFloatValueFromPage("time-scale");
		currentSimulation = changeSimulation();
		if (currentSimulation instanceof DoubleSimplePendulum) {
			currentSimulation.setConstants(initialAngle, secondAngle, gravity, density, length, deltaTime);
		} else {
			currentSimulation.setConstants(initialAngle, gravity, density, length, deltaTime);
		}
		currentSimulation.refresh(simulationCanvasHandler.width, simulationCanvasHandler.height);
        clearInterval(clock);
        clock = window.setInterval(updateFrame, 1/timeScale*fps, simulationCanvasHandler);
	});
    var clock = window.setInterval(updateFrame, fps, simulationCanvasHandler);
}

function changeSimulation() {
	const simType = document.getElementById("sim-type").value;
	switch (simType) {
		case "simple-gravity-pendulum":
			return new SimplePendulum();
		case "small-angle-approximation-pendulum":
			return new SmallAnglePendulum();
		case "double-simple-pendulum":
			return new DoubleSimplePendulum();
		case "real-time-pendulum":
			return new RealTimePendulum();
	}
}

function updateFrame(canvas) {
	canvas.drawFrame(currentSimulation);
	currentSimulation.updateSimulation(canvas.width, canvas.height);
}

function getFloatValueFromPage(elementId) {
	return parseFloat(document.getElementById(elementId).value);
}

init();
