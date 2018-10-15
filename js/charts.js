 
var canvas = document.getElementById('myChart');
var data = {
  labels1: ["January", "February", "March", "April", "May", "June", "July"],
  labels: [0],
    
    datasets: [
        {
            label: "Courant DC",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#000",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [0],
        }
    ]
};
var nextval=0;
var mdata=[0,30,55,70,80,85,87,88,89,90,300,550,750,890,990,1000];

function adddata(){
  var mvariance=0.1;
  var step=1;
  if(myLineChart.data.labels.length<mdata.length){
    myLineChart.data.datasets[0].data[myLineChart.data.labels.length] = mdata[nextval];
    //myLineChart.data.datasets[0].data[myLineChart.data.labels.length] = 1000*Math.exp(1-myLineChart.data.labels[myLineChart.data.labels.length-1]);
    
  }
  else{
    myLineChart.data.datasets[0].data[myLineChart.data.labels.length] = 990 + 20*Math.random();
  }
  myLineChart.data.labels[myLineChart.data.labels.length] = myLineChart.data.labels.length ;
  nextval+=1;
  myLineChart.update();
  setTimeout(adddata, 1000);
}

var option = {
    showLines: true
};
var myLineChart = Chart.Line(canvas,{
    data:data,
  options:option
});

// tell the embed parent frame the height of the content
    if (window.parent && window.parent.parent){
      window.parent.parent.postMessage(["resultsFrame", {
        height: document.body.getBoundingClientRect().height,
        slug: "u5aanta8"
      }], "*")
    }
