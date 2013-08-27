//var config = {
//  host: "https://hpcs.feedhenry.com",
//  appid: "GcvuuaX99JRyhS4ybCRetsAC",
//  appkey: "ec2615c6e7da4e64f473da469cafcef6bb767a27",
//  mode: "dev"
//};
//    $fh.init(config, function(res) {
//        alert("fh initialised");
//    }, function(err) {
//        alert("fh initialisation error");
//    });
    
 $fh.ready(function() {
    $("#config").bind('click', function() {
      console.info('get config');
      fileOps.getConfig();   
    }); 
    $("#download_progress").html = "<p>upload a new file</p>";  
    $("#uploadFile").bind('click', function() {
      console.info('in upload');
      fileOps.uploadToServer();   
    }); 
    $("#downloadFile").bind('click', function() {
      console.info('in download');
      fileOps.downloadFromServer();
    });
    $("#playVideo").bind('click', function(event){
        console.info('playing video');
        console.info(JSON.stringify(event));
        mediaOps.play();
    });
  });
