
int id = 0;

void setup() {
  // initialize serial:
  Serial.begin(9600);
  

}

void loop() {
  float ts = 1500;
  float cr = 20;
  float tp = 40;

  int seui1=10;
  if(id<seui1){
    ts = 100;
  }
  else if(id>seui1 && id < 2*seui1){
    ts = 1000;
  }
  else {
    ts=1500;
  };
  
  float tension, courant, tmp;
  
  id++;
  tension = ts*0.9 + random(0, ts) / 10;
  courant = cr*0.9 + random(0, cr) / 10;
  tmp     = tp*0.9 + random(0, tp)/10;
  Serial.print("('");
  Serial.print(tension);
  Serial.print("','");
  Serial.print(courant);
  Serial.print("','");
  Serial.print(tmp);
  Serial.print("')\n");
  delay(500);

}
