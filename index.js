
var MAP;

// ELIU = Extremely Low Income Units
var urlELIU = "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD";
var numberELIU = [];

// Neighborhood names
var urlNbhoodNames = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";
var nbhoodNames = [];

// Crimes in NY
var urlCrimes = "https://data.cityofnewyork.us/api/views/qgea-i56i/rows.json?accessType=DOWNLOAD";
var crimes = [];

// Arrays Boroughs
var bronx = [];


// Function charge the map
function initMap() {
    MAP = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
	});

	 var contentString = '<div id="content">'+
            '<h1 style="font-size: 20px; color: #027E94">NYU Stern School</h1>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });

    MAP.data.loadGeoJson('http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson');
	function poligonos() {
	    MAP.data.setStyle (function(feature) {
    	    getElementById("OBJECTID");
    	    var color = ["red", "blue", "green"];
    	    if(id < 10) {
    	        fillColor: red;
    	    }
	    )};
	}


	var adrss = "NYU Stern School of Business";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address' : adrss}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			MAP.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
	          position: results[0].geometry.location,
	          map: MAP
	        });
	        marker.addListener('click', function() {
          	infowindow.open(map, marker);
        });
		}
	});
}

// function for change color navbar
function chgColorNavbar() {
	$(window).scroll(function() {
	    	if ($("#bar").offset().top > 631) {
	            $("#bar").addClass("bg-white");
	        }
	        else {
	            $("#bar").removeClass("bg-white");
	        }
	    });
}

// function that asks for the data ELIU
function getELIU(url) {
	var dt = $.get(url, function(){})

		.done(function() {
			var dts = dt.responseJSON.data;
			for (var i = 0; i < dts.length; i++) {
				numberELIU.push([dts[i][15], dts[i][23], dts[i][24], dts[i][31]]);
				numberELIU.sort();
			}
		});
}

// function that asks for the data Neighborhood Names 
function getNbhoodNames(url) {
	var dt = $.get(url, function(){})

		.done(function() {
			var dts = dt.responseJSON.data;
			for (var i = 0; i < dts.length; i++) {
				nbhoodNames.push([dts[i][10], dts[i][9], dts[i][16]]);
			}
		});
}

function getCrimes(url) {
	var dt = $.get(url, function(){})

		.done(function() {
			var dts = dt.responseJSON.data;
			for (var i = 0; i < dts.length; i++) {
				crimes.push([dts[i][10], dts[i][9], dts[i][16]]);
				console.log(crimes);
			}
		});
}




// console.log(numberELIU);
// console.log(nbhoodNames);


$(document).ready(function() {
	// getELIU(urlELIU);
	// getNbhoodNames(urlNbhoodNames);
	chgColorNavbar();
});


