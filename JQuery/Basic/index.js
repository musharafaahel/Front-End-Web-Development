


$(document).ready(function(){
	// $("h1").css("color", "red");
	// console.log($("h1").css("fontSize"));
	$("h1").addClass("big-title");
	// $("h1").text("Kitkat");
	// $("button").html("<em>add</em>");


	// $("a").attr("href","www.yahoo.com");
	// console.log($("a").attr("href"));

	$("h1").click(function () {
		$("h1").css("color","purple");
	})



	for ( let i = 1; i<= 5; i++){
		$("button").click(function () {
			$("h1").css("color","purple");
		});
	}


	$("input").keydown(function(e) {
		$("h1").text(e.key);
	})

})


