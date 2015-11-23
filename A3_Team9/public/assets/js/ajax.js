
$.ajax({
	type: "GET",
	url: "http://localhost:8000/properties",
	async: true,
	success: function(data) {
		window.alert(data);
		for(var value in data){
			$('#prop_selection')
					.append($("<option></option>")
							.attr("value", value)
							.text(value));
				}
					
		},
	error: function(jqXHR, text, err) {
		//TODO Handle error if occured
	}
});