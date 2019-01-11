t_mesure = 3;
// -------------------------------------------------
// ---------------- AJAX
// -------------------------------------------------
var mysql_data=[];
function mysql_get_data(){
  
  $.post('ajax/get_current.php','arg1',function(data){
    document.getElementById("test_db").innerHTML = data;
    mysql_data = JSON.parse("[" + data + "]");
  });
  setTimeout(mysql_get_data,3000);
}


// -------------------------------------------------
// ---------------- Animations
// -------------------------------------------------

var canvas = document.getElementById('myChart');

var data = {
  labels: [],
    
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

var data2 = {
  labels1: ["January", "February", "March", "April", "May", "June", "July"],
  labels: [],
    
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
var mdata=[0,30,55,70,80,85];
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
                max:1800,
            }
        }]
},
};
//option.scales.yAxes[ticks].max
var instant_t=0;
function adddata(){
  var chartLen=10;
  //t[t.length]= instant_t;
  alldata=mysql_data.slice(0,chartLen);
  
  myLineChart.data.datasets[0].data=alldata.slice(alldata.length-chartLen,alldata.length);
  myLineChart.data.labels=[0,1,2,3,4,5,6,7,8,9];
  
  
  myLineChart.update();
  setTimeout(adddata, t_mesure*1000);
  instant_t+=t_mesure;
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

    function changecourantk(){
      document.getElementById("kicourant").innerHTML = document.getElementById("kic").value;
      document.getElementById("kpcourant").innerHTML = document.getElementById("kpc").value;
      
    }
    function changetensionk(){
      document.getElementById("kitension").innerHTML = document.getElementById("kit").value;
      document.getElementById("kptension").innerHTML = document.getElementById("kpt").value;
      
    }