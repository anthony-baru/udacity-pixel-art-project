// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



//wait for document to load first
$(function(){
	function makeGrid(){
		// Your code goes here!
		//assign the values to variables
		var width=$('#inputHeight').val();
		var height=$('#inputWeight').val();
		var color=$('#colorPicker').val();
		var canvas=$('#pixelCanvas');//table id.
		canvas.append("<tbody></tbody>");
		canvasBody=$('#pixelCanvas').find('tbody');

		//draw the rows(height)
		for(x=0;x<width;x++){
			canvasBody.append("<tr></tr>");	
		}

		//draw the columns(width)
		for(y=0;y<height;y++){
			canvas.find("tr").append("<td></td>");
		}

		//give td a variable
		cell=canvas.find("td");

		//playing with the colors
		$(cell).on('click',function(){
			$(this).css("background-color",$('#colorPicker').val()).css("transition","0.5s");
		});
	} //function makegrid ends here

	//prevent the input from submitting and call makegrid()
	$('input[type="submit"]').on('click',function(e){
		e.preventDefault();
		makeGrid();
	});

	$('input[type="submit"]').on('click',function(){
		$('form').append("<a href='index.html'><button>Clear</button></a>");
		$('form').attr("method","POST");
		$('input[type="submit"]').remove();
	});
});