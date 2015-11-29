function delete_country(){
	// start on_submit() of form in html
	// get value of input field
	// check if empty
	// call delete method via ajax	
}

function add_country(){
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
	success: function(data){
	
	
		$.each(data, function(i, item) {  
			var td;
			var row = document.createElement('tr');
			
			for(key in item){
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
		var i=0;
		for(var value in data){
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