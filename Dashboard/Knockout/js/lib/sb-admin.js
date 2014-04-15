$(function() {

	$('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
$(function() {
	Morris.Donut({
		element: 'visitors-today',
		data: [
		{label: "Peterborough Visitors", value: 3000},
		{label: "London Visitors", value: 9000},
		{label: "Leeds Visitors", value: 2110}
		]
	});

})
