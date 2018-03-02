
// RADIOACTIVITEIT CHART

var chart = new CanvasJS.Chart("radioactiviteit",{
        
    backgroundColor: "#00193A",
    axisX :{
        labelFontColor: "#FFFFFF",
    },
    axisY :{
        labelFontColor: "#FFFFFF"
    },
    data: [{
        type: "line",

        dataPoints: [
            { x: 8.00, y: 0.5 },
            { x: 9.00, y: 3 },
            { x: 10.00, y: 1 },
            { x: 11.00, y: 4 },
            { x: 12.00, y: 1.4 },
            { x: 13.00, y: 6.5 },
            { x: 14.00, y: 3.1 },
            { x: 15.00, y: 8 },
            { x: 16.00, y: 4.9 },
            { x: 17.00, y: 6.7 },
            { x: 18.00, y: 0.9 },
            { x: 19.00, y: 0.4 }
        ]
    }]
});
    
    document.getElementById('addDataPoint1').onclick = function () {
		var length = chart.options.data[0].dataPoints.length;
		chart.options.data[0].dataPoints.push({ y: 25 - Math.random() * 10});
		chart.render();
	}

	document.getElementById('updateDataPoint1').onclick = function () {
		var length = chart.options.data[0].dataPoints.length;
		chart.options.data[0].dataPoints[length-1].y = 15 - Math.random() * 10;
		chart.render();
	}
    
    chart.render();              

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

document.getElementById('removeFood').onclick = function () {
		var length = chart.options.data[0].dataPoints.length;
		chart.options.data[0].dataPoints.push({ y: 25 - Math.random() * 10});
		chart.render();
	}

	document.getElementById('removeWater').onclick = function () {
		var length = chart.options.data[0].dataPoints.length;
		chart.options.data[0].dataPoints[length-1].y = 15 - Math.random() * 10;
		chart.render();
	}

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
	



	document.getElementById('addDataPoint2').onclick = function () {
		var length = chart.options.data[0].dataPoints.length;
		chart.options.data[0].dataPoints.push({ y: 25 - Math.random() * 10});
		chart.render();
	}

	document.getElementById('updateDataPoint2').onclick = function () {
		var length = chart.options.data[0].dataPoints.length;
		chart.options.data[0].dataPoints[length-1].y = 15 - Math.random() * 10;
		chart.render();
	}

    chart.render();


