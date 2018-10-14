 
                var canvas = document.getElementById('myChart');
                var data = {
                  labels1: ["January", "February", "March", "April", "May", "June", "July"],
                  labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
                    
                    datasets: [
                        {
                            label: "Courant DC",
                            fill: false,
                            lineTension: 0.1,
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
                            data: [0,30,55,70,80,85,87,88,89,90,300,550,700,800,850,870,880,890,900,900],
                        }
                    ]
                };
                var u=0;
                function adddata(){
                    myLineChart.data.datasets[0].data[7] = u;
                    u+=10;
                  myLineChart.data.labels[7] = "Newly Added";
                  myLineChart.update();
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