// alllllll the maths will be done in here and the objects
function init() {
	const currentSimulation = new SimplePendulum();
	const simulationCanvasHandler = new SimulationDrawer("main");
    const fps = 1/100
    document.getElementById("refresh-constants").addEventListener("click", () => {
        const initialAngle = getFloatValueFromPage("initial-angle");
        const gravity = getFloatValueFromPage("gravity");
        const length = 100*getFloatValueFromPage("length");
        const density = getFloatValueFromPage("air-density");
        const deltaTime = 0.01*getFloatValueFromPage("delta-time");
        currentSimulation.refresh(simulationCanvasHandler.width, simulationCanvasHandler.height);
        currentSimulation.setConstants(initialAngle, gravity, density, length, deltaTime);
    });
    const clock = setInterval(updateFrame, fps, currentSimulation, simulationCanvasHandler);
}

function updateFrame(sim, canvas) {
    canvas.drawFrame(sim);
    sim.updateSimulation(canvas.width,canvas.height);
}

function getFloatValueFromPage(elementId) {
	return parseFloat(document.getElementById(elementId).value);
}

init();
