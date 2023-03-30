$(document).ready(function () {
	if ($("#sim-type").val() == "double-simple-pendulum" || $("#sim-type").val() == "double-chaotic-pendulum") {
		$(".second-angle").show();
	} else {
		$(".second-angle").hide();
	}
});

$("#refresh-constants").click(function () {
	if ($("#sim-type").val() == "double-simple-pendulum" || $("#sim-type").val() == "double-chaotic-pendulum") {
		$(".second-angle").show();
	} else {
		$(".second-angle").hide();
	}
});