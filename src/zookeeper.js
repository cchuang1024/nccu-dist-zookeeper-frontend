var Zookeeper=require('node-zookeeper-client');
var CONNECTION_STRING="172.28.205.255:2181";
var OPTIONS={
  sessionTimeout:5000
}
var zk = Zookeeper.createClient(CONNECTION_STRING,OPTIONS);
zk.on('connected',function(){
  //console.log("zk.session_id==" , zk.getSessionId());
  zk.close();
});

//获取节点数据
zk.getData('/zkApp/host',function(error,data){
  console.log(data.toString().substr(7,14));
});

zk.connect();