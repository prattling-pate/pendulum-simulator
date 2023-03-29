// alllllll the maths will be done in here and the objects
function init() {
	let currentSimulation = new SimplePendulum();
	const simulationCanvasHandler = new SimulationDrawer("main");
    const fps = 1/100
    const clock = setInterval(updateFrame, fps, currentSimulation, simulationCanvasHandler);
}

function updateFrame(sim, canvas) {
    canvas.drawFrame(sim);
    sim.updateSimulation(canvas.width, canvas.height);
}

function getFloatValueFromPage(elementId) {
	return parseFloat(document.getElementById(elementId).value);
}

init();
