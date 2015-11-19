function split_to_array(string) {
	return string.split(";");
}

$.ajax({
	type: "GET",
	url: "http://localhost:8000/properties",
	async: true,
	success: function(data) {
		alert(data);
		var array = split_to_array(data);
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