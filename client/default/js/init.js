$fh.ready(function() {
  $("#download_progress").html = "<p>upload a new file</p>";  
  $("#uploadFile").bind('click', function() {
    console.info('in upload');
    fileOps.uploadToServer();   
  }); 
  $("#downloadFile").bind('click', function() {
    console.info('in download');
    fileOps.downloadFromServer();
  });
});
