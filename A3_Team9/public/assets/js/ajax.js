$.ajax({
	type:"GET",
	url: "http://localhost:8000/properties",
	async:true,
	success: function(data){
		dt= data;
		alert(data);
	},
	error:function(jqXHR,text,err){
		//Handle error if occured
	}
				});