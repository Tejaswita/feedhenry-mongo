$fh.ready(function() {
  $("#download_progress").innerHTML = "<p>upload a new file</p>";  
  $("#uploadFile").bind('click', function() {
    console.info('in upload');
    uploadFromClient();   
  });

  $("#downloadFile").bind('click', function() {
    console.info('in download');
    downloadFromServer();
  });
 
 var uploadFromClient = function() {
    $fh.act({
     act:'upload'
    });
 };
 
 var downloadFromServer = function() {
    $fh.act({
     act:'download'
    });
};
)};