function split_to_array(string) {
	return string.split(";");
}

$.ajax({
	type: "GET",
	url: "http://localhost:8000/properties",
	async: true,
	success: function(data) {
		var split = split_to_array(data); //get array of data
		var array=[split[0], split[1], split[2], split[3], split[4], split[5], split[9]];
		$.each(array, function(key, value) {
			$('#prop_selection')
					.append($("<option></option>")
							.attr("value", key)
							.text(value));
		});
	},
	error: function(jqXHR, text, err) {
		//TODO Handle error if occured
	}
});