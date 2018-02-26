
// RADIOACTIVITEIT CHART

window.onload = function () {

    "use strict";
    var chart = new CanvasJS.Chart("radioactiviteit", {
        animationEnabled: true,
        zoomEnabled: true,
        backgroundColor: "#00193A",
        axisX : {
            includeZero: false,
            labelFontColor: "#FFFFFF",
        },
        axisY : {
            includeZero: false,
            labelFontColor: "#FFFFFF"
        },
        data: data  // random generator below
    });
    
    chart.render();

    var limit = 1000;

    var y = 0;
    var data = [];
    var dataSeries = { type: "line" };
    var dataPoints = [];
    for (var i = 0; i < limit; i += 1) {
        y += (Math.random() * 10 - 5);
        dataPoints.push({
            x: i - limit / 2,
            y: y                
        });
    }
    
    dataSeries.dataPoints = dataPoints;
    data.push(dataSeries);               


// SUPPLY CHART


var chart = new CanvasJS.Chart("supply", {
	animationEnabled: true,
    backgroundColor: "#00193A",
	theme: "dark1", // "light1", "light2", "dark1", "dark2"
	axisY: {
        labelFontColor: "#FFFFFF"
	},
	data: [{        
		type: "column",  
		dataPoints: [      
			{ y: 300200, label: "Voedsel" },
			{ y: 266455,  label: "Water" },
		]
	}]
});
chart.render();
        
    
// DRUK CHART


    var chart = new CanvasJS.Chart("druk", {
		backgroundColor: "#00193A",
		axisX :{
            includeZero:false,
            labelFontColor: "#FFFFFF",
        },
        axisY :{
            includeZero:false,
            labelFontColor: "#FFFFFF"
        },
        data: [
		{
			type: "area",
			dataPoints: [
				{ y: 10 },
				{ y:  4 },
				{ y: 18 },
				{ y:  8 }
			]
		}
	]
	});
	chart.render();



	document.getElementById('addDataPoint').onclick = function () {
		var length = chart.options.data[0].dataPoints.length;
		chart.options.data[0].dataPoints.push({ y: 25 - Math.random() * 10});
		chart.render();
	}

	document.getElementById('updateDataPoint').onclick = function () {
		var length = chart.options.data[0].dataPoints.length;
		chart.options.data[0].dataPoints[length-1].y = 15 - Math.random() * 10;
		chart.render();
	}




}