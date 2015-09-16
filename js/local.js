var Country = prompt("What country are you?");
var City = prompt("What city are you?");
var APIurl = "http://api.wunderground.com/api/ef965f0566aedf6d/conditions/geolookup/q/" + Country + "/" + City +".json";

var getWeather = function(){
	$.ajax({
		type: 'GET',
		url: APIurl,
		success: function(response){
			showLocation(response);
			showWeather(response);
			console.log(response);

		},
		error: function(err){
			console.log("An error occured:", err);
		}
	})
}

// Get Location i.e country and city
var showLocation = function(param){
	$(".location")
	.append(param.location.country_name)
	.append(param.location.city);
}

// Get the weather conditions
var showWeather = function(param){
	$(".condition")
	.append(param.current_observation.weather)
	 $('#icon')
        .append("<img src='http://icons.wxug.com/i/c/a/" + param.current_observation.icon+".gif'>");
	$(".temp")
	.append(param.current_observation.temp_c);
	



}






$(document).ready(getWeather);