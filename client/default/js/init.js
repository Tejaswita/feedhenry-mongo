
    
 $fh.ready(function() {
    $("#config").bind('click', function() {
        getConfig();    
    }); 
    $("#db-add").bind('click', function() {
        dbOps.add();    
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
    
    $("#playFile").bind('change', function(event){
        console.info('playing uploaded video file');
       // console.info(JSON.stringify(event));
        videoOps.play(event);
    });
    
    getConfig = function() {
      $fh.act(
        {
          act:'getConfig'
        },
        function(res) {
          $("#config-message").html(JSON.stringify(res.config)); 
        },
        function(code, err, params) {
          alert('error in reading config');
        }
        );
    };
  });
