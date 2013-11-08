
var min_width = 175;


$(document).ready(function(){

	recalculate(".grid", min_width, 15)

	//Get value from user input
	$("#update").click(function(){
	 		min_width = $("#mingrid").val();
			recalculate(".grid", min_width, 15)

	});

});

$(window).resize(function() {
		recalculate(".grid", min_width, 15)
});


function recalculate(target, min_width, margin) {
  //Variables and calculations
  var wrap_width = $(".wrapper").width();
  var col =  (wrap_width / min_width).toFixed(4);
  var col_rounded =  Math.floor(wrap_width / min_width);
  var total_margin = Math.floor(col_rounded*margin)
  var target_width = Math.floor(wrap_width/col_rounded);
  var final_wrap_width = Math.floor(wrap_width - total_margin );
  var final_target_width = Math.floor(final_wrap_width/col_rounded);

  console.log($(target+":nth-child(1)"))

  $(target).width(final_target_width).removeClass("adjusted"); // set width and remove adjustment class
  $(target+":nth-child("+(col_rounded)+"n-"+(col_rounded-1)+")").css({"margin-left": 0}).addClass("adjusted")
  $(target).not(".adjusted").css({"margin-left": (margin+2)+"px"});

  //Displaying values
	$("#wrapper").html(wrap_width + "px");
	$("#columns").html(col_rounded);
	$("#col_margin").html(total_margin/col_rounded + "px");
	$("#final_wrapper").html(final_wrap_width + "px");
	$("#target").html(target_width + "px");
	$("#final_target").html(final_target_width + "px");

	$("#mingrid").val(target_width);
}


