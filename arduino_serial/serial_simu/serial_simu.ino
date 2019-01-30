void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.print("envoyez 'i' pour commencer\n\t'a' pour arreter ");
}
int incomingByte = 0;   // for incoming serial data
bool abort_sys=1;

bool check_abort(){
  if (Serial.available() > 0) {
    // read the incoming byte:
    incomingByte = Serial.read();
    
    if(incomingByte==97){
      //Serial.print("\nSTOP ");
      return 1;
    }
    if(incomingByte==105){
      //Serial.print("\nSTART ");
      return 0;
    }
    
  }
}
int id=0;
void loop() {

  // put your main code here, to run repeatedly:
  
  abort_sys=check_abort();
  
  if(abort_sys==1){
    id=0;
  }
  else{
    int seui1=10;
      
    float ts = 1500;
    float cr = 20;
    float tp = 40;
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
}
