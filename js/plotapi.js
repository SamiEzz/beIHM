
var chartId="myChart";
var x,y;
var lelabel = "Courant DC";
var ymax=1200;
// plot (chartId,x,y,lelabel,ymax)
var canvas = document.getElementById(chartId);
var data = {
  labels: x,
    datasets: [
        {
            label: lelabel,
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            aspectRatio:4,
            data: [],
        }
    ]
};
var nextval=0;
var mdata=[0,30,55,70,80,85,87,88,89,90,91,92,93,94,95,96,97,98,99,100,100,100,100,100,100,100,300,550,750,890,990,1000];
var t=[];
var alldata=[];

var option = {
  showLines: true,
  scales: {
    yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                //steps: 10,
               // stepValue: 5,
                max:ymax,
            }
        }]
},
};
//option.scales.yAxes[ticks].max
function adddata(){
  var chartLen=mdata.length-1;
  var step=1;
  t[t.length]= t.length ;
  if(t.length<mdata.length){
    alldata[alldata.length] = mdata[nextval];
    myLineChart.data.datasets[0].data[myLineChart.data.labels.length]=mdata[nextval];
    myLineChart.data.labels[myLineChart.data.labels.length]=myLineChart.data.labels.length;
    nextval+=1;
    //myLineChart.data.datasets[0].data[myLineChart.data.labels.length] = 1000*Math.exp(1-myLineChart.data.labels[myLineChart.data.labels.length-1]);
    
  }
  else{
    alldata[alldata.length] = 950 + 100*Math.random();
    myLineChart.data.datasets[0].data=alldata.slice(alldata.length-chartLen,alldata.length);
    myLineChart.data.labels=t.slice(t.length-chartLen,t.length);
  }

  myLineChart.update();
  setTimeout(adddata, 200);
}

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