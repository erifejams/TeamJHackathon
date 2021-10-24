google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart);

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ['Category', 'Start', 'Current'],
    ["Food", 8.94, 2.98],
    ["Transport", 18.49,14],
    ["Energy", 19.30,23],
    ["Life style", 21.45,12]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"
    },
    2
  ]);

  var options = {
    title: "Carbon emmision, in kg^2",
    bar: {
      groupWidth: "85%"
    },
    legend: {
      position: "bottom"
    },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);

  var dataAll = google.visualization.arrayToDataTable([
    ['Category', 'Start', 'Current'],
    ["Food", 1894, 1120],
    ["Transport", 1949,870],
    ["Energy", 2930,2300],
    ["Life style", 1145,1200]
  ]);

  var viewAll = new google.visualization.DataView(data);
  viewAll.setColumns([0, 1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"
    },
    2
  ]);

  var optionsAll = {
    title: "Carbon emmision, in kg^2",
    backgroundColor: 'transparent',
    bar: {
      groupWidth: "85%"
    },
    legend: {
      position: 'bottom',
      textStyle: {
        color: 'grey',
        fontSize: 14
      }
    }
  };
  var chartAll = new google.visualization.ColumnChart(document.getElementById("columnchart_values_all"));
  chartAll.draw(viewAll, optionsAll);

}


function drawChart() {

  var userData = google.visualization.arrayToDataTable([
    ['Carbon Footprint', 'Emission per Category'],
    ['Transport', 6],
    ['Food', 7],
    ['Life Style', 4],
    ['Energy', 8],
  ]);

  var optionsUser = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    colors: ['#56c27a', '#1A8763', 'gold', '#ffcc66'],
    chartArea: {
      left: 0,
      top: 0,
      width: '100%',
      height: '90%'
    },
    legend: {
      position: 'bottom',
      textStyle: {
        color: 'grey',
        fontSize: 14
      }
    }
  };

  var allUserData = google.visualization.arrayToDataTable([
    ['Carbon Footprint', 'Emission per Category'],
    ['Transport', 9],
    ['Food', 8],
    ['Life Style', 4],
    ['Energy', 5],
  ]);

  var optionsAllUser = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    colors: ['#56c27a', '#1A8763', 'gold', '#ffcc66'],
    chartArea: {
      left: 0,
      top: 0,
      width: '100%',
      height: '90%'
    },
    legend: {
      position: 'bottom',
      textStyle: {
        color: 'grey',
        fontSize: 14
      }
    },
  };

  var chartUser = new google.visualization.PieChart(document.getElementById('piechart'));
  chartUser.draw(userData, optionsUser);

  var chartAllUser = new google.visualization.PieChart(document.getElementById('piechart-all'));
  chartAllUser.draw(allUserData, optionsAllUser);
}
