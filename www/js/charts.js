t_mesure = 0.5;
// -------------------------------------------------
// ---------------- AJAX
// -------------------------------------------------
var mysql_data=[];
function mysql_get_data(){
  
  $.post('ajax/get_current.php','arg1',function(data){
    mysql_data = JSON.parse("[" + data + "]");
    
    document.getElementById("test_db").innerHTML = mysql_data;
  });
  //setTimeout(mysql_get_data,3000);
}
function mysql_correcteur_courant(){
  //wn_s_il ksi_il ki_il kp_il gw
  $.get('ajax/correcteur_courant.php','arg1');
  //setTimeout(mysql_get_data,3000);
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
  mysql_get_data();
  var chartLen=10;
  //t[t.length]= instant_t;
  alldata=mysql_data.slice(0,chartLen);
  alldata.reverse();
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

function correcteur_courant(){
  //document.getElementById("kpcourant").innerHTML = document.getElementById("Gw").value;
  //document.getElementById("kpcourant").innerHTML = document.getElementById("kpc").value;
  //alert();
  var get_query="ajax/correcteur_courant.php"+"?wn_s_il="+document.getElementById("wn_s_il").value+"&ksi_IL="+document.getElementById("ksi_IL").value+"&Ki_IL="+document.getElementById("Ki_IL").value+"&Kp_IL="+document.getElementById("Kp_IL").value+"&Gw="+document.getElementById("Gw").value;
  
  $.get(get_query, function( data ) {
    alert("Les parametres du correcteur du courant sont modifie avec succes !")
  });
 
}
function correcteur_tension(){
 
  //alert();
  var get_query="ajax/correcteur_tension.php"+"?wn_s_Vch="+document.getElementById("wn_s_Vch").value+"&ksi_Vch="+document.getElementById("ksi_Vch").value+"&Ki_Vch="+document.getElementById("Ki_Vch").value+"&Kp_Vch="+document.getElementById("Kp_Vch").value;
  
  $.get(get_query, function( data ) {
    alert("Les parametres du correcteur du tension sont modifie avec succes !")
  });
 
}
function abort(){
  $.get("ajax/abort.php");
  document.getElementById("sys_state").innerHTML="<i class='mdi mdi-flash-off text-danger icon-lg'></i>";
  alert("Le systeme est a l'etat d'arret !");
  
}
function init(){
  $.get("ajax/init.php");
  document.getElementById("sys_state").innerHTML="<i class='mdi mdi-flash text-success icon-lg'></i>";
  alert("Le systeme est a repris sont fonctionnement normal !")
}