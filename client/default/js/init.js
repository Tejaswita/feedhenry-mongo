$fh.ready(function() {
  $("#download_progress").html = "<p>upload a new file</p>";  
  $("#uploadFile").bind('click', function() {
    console.info('in upload');
    uploadFromClient();   
  });

 
  $("#downloadFile").bind('click', function() {
    console.info('in download');
    downloadFromServer();
  });
 
 var uploadFromClient = function() {
    $fh.env({}, function(props) {
    console.log("env properties: " + JSON.stringify(props));
   });
 };

 var downloadFromServer = function() {
    $fh.act({
     act:'download'
    });
 };
});
