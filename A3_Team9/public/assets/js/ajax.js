function delete_country() {
	// get value of input field
	var el = document.getElementById("country_delete_id").value;
	// call delete method via ajax
	$.ajax({
		type: "DELETE",
		url: "http://localhost:8000/items/" + el,
		async: true,
	});
}

function filter_countries() {
	var id = document.getElementById("country_filter_id").value;
	var range = document.getElementById("country_filter_range").value;

	if (id !== "") {
		$.ajax({
			type: "GET",
			url: "http://localhost:8000/items/" + id,
			async: true,
			success: function(data) {
				// delete tbody
				var tbody = document.createElement('tbody');
				var old_tbody = document.getElementById("table_body");
				
				tbody.setAttribute("id", "table_body");
				old_tbody.parentNode.replaceChild(tbody, old_tbody)

				// acces row
				var row = document.createElement('tr');
				var td;
				for (var value in data) {

					td = document.createElement('td');
					$(td).html(data[value]);
					row.appendChild(td);
				}
				$('#table_body').append(row);

			},
			error: function(jqXHR, text, err) {
				//TODO Handle error if occured
			}

		});

	}
}



function add_country() {
	// start on_submit() of form in html
	//get values of field
	// send POST request via ajax
	// errormessage or success

}

//GET TABLECONTENT by loading of website (json or array)
$.ajax({
	type: "GET",
	url: "http://localhost:8000/items/",
	async: true,
	success: function(data) {


		$.each(data, function(i, item) {
			var td;
			var row = document.createElement('tr');

			for (key in item) {
				td = document.createElement('td');
				$(td).html(item[key]);
				row.appendChild(td);
			}

			$('#table_body').append(row);
		});
	},
	error: function(jqXHR, text, err) {
		//TODO Handle error if occured
	}

});


//GET PROPERTIES by loading of website
$.ajax({
	type: "GET",
	url: "http://localhost:8000/properties/",
	async: true,
	success: function(data) {
		var i = 0;
		for (var value in data) {
			$('#prop_selection')
					.append($("<option></option>")
							.attr("value", i)
							.text(data[value]));
			i++;
		}
	},
	error: function(jqXHR, text, err) {
		//TODO Handle error if occured
	}
});