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
			url: "http://localhost:8000/items/" + (id-1),
			async: true,
			success: function(data) {
				// delete tbody
				var new_tb = document.createElement('tbody');
				var old_tb = document.getElementById("table_body");
				new_tb.setAttribute("id", "table_body");
				old_tb.parentNode.replaceChild(new_tb, old_tb)

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

	if (id === "" && range !== "") {
		var array = range.split("-");
		$.ajax({
			type: "GET",
			url: "http://localhost:8000/items/" + (array[0]-1) + "/" + (array[1]-1),
			async: true,
			success: function(data) {
				// delete tbody
				var new_tb = document.createElement('tbody');
				var old_tb = document.getElementById("table_body");
				new_tb.setAttribute("id", "table_body");
				old_tb.parentNode.replaceChild(new_tb, old_tb)

				// acces row
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


	}


}

function print_table(){
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
}

//GET TABLECONTENT by loading of website (json or array)
print_table();

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

function add_country() {

	// start on_submit() of form in html
	//get values of field
	var name = document.getElementById("country_name").value;
	var prop1 =  document.getElementById("country_birth").value;
	var prop2 =  document.getElementById("country_cellphone").value;
	
	var obj = {};
	obj['name'] = name;
	obj['birth rate per 1000'] = parseFloat(prop1);
	obj['cell phones per 100'] = parseFloat(prop2);
	
	// send POST request via ajax
	$.ajax({
        type: "POST",
        url: "http://localhost:8000/items",
        data: obj,
        dataType: "json", 
		dataType: 'application/json; charset=utf-8',
		async: true, 
        success: function(data, textStatus, jqXHR){},
        failure: function(jqXHR, textStatus, errorThrown){}
        });
	
	print_table();
}