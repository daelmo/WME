
$.ajax({
	type: "GET",
	url: "http://localhost:8000/properties",
	async: true,
	success: function(data) {
		var i=0;
		for(var value in data){
			$('#prop_selection')
					.append($("<option></option>")
							.attr("value", i)
							.text(value));
				i++;	
				}
					
		},
	error: function(jqXHR, text, err) {
		//TODO Handle error if occured
	}
});