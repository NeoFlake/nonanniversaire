$("#zoneintro").prop("value", "Aujourd'hui est un jour très spécial");
$("#zoneune").prop("value", "Pleins de bonheur pour toi");
$("#zonedeux").prop("value", "J'aimerai t'offrir un cadeau");
$("#zonetrois").prop("value", "Clique ici pour pouvoir le découvrir");

$("#zoneintro").on("click", function() {

	$("body").css({"background-image": "url('../img/sectionune.jpeg')", "background-size": "cover", "background-repeat": "no-repeat"});
	$("#zoneintro").prop("value", "").css({"background-image": "url('../img/intro.png')", "background-size": "100% 100%"});
	$("#zoneune").css("display", "block");

});

$("#zoneune").on("click", function() {

	$("body").css("background-image", "url('../img/sectiondeux.jpeg')");
	$("#zonedeux").css("display", "block");

});

$("#zonedeux").on("click", function() {

	$("body").css({"background-image": "url('../img/sectiontrois.jpeg')", "background-size": "100% 180%"});
	$("#zonetrois").css("display", "block");

});

$("#zonetrois").on("click", function() {

	$("body").css({"background-image": "url('../img/outtro.jpeg')", "background-size": "100% 1000px"});

	setTimeout(function () {

		$("#zonetrois").css("display", "none");

		setTimeout(function () {

			$("#zonedeux").css("display", "none");

			setTimeout(function () {

				$("#zoneune").css("display", "none");

				setTimeout(function () {

					$("#zoneintro").css("display", "none");

					setTimeout(function () {

						$("#zoneintro").prop("value", "Attends, ça arrive dans 4 secondes !").css({"display": "block", "background-image": "none"});

						setTimeout(function () {

							$("#zoneune").prop("value", "3 secondes !").css("display", "block");

							setTimeout(function () {

								$("#zonedeux").prop("value", "2 secondes !").css("display", "block");

								setTimeout(function () {

									$("#zonetrois").prop("value", "1 secondes !!!").css("display", "block");

									setTimeout(function () {

										$("body").css({"background-image": "url('../img/cameo.jpeg')", "background-size": "100% 1000px"});
										$("input").css("display", "none");
										document.querySelector("audio").play();

										setTimeout(function () {

											$("#zonetrois").prop("value", "Merci d'avoir regardé jusqu'au bout").css({"display": "block", "margin-top": "20%"});

										}, 5000);

									}, 2000)

								}, 1000);

							}, 1000);

						}, 1000);

					}, 3000);

				}, 1000);

			}, 1000);

		}, 1000);

	}, 1000);

});