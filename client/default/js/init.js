$fh.ready(function() {
  var url = ($fh.app_props.mode === "dev" ? $fh.cloud_props.hosts.debugCloudUrl : $fh.cloud_props.hosts.releaseCloudUrl);
  alert('url' + url);
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
    $fh.act({
     act:'upload'
    });
 };
 )};
 var downloadFromServer = function() {
    $fh.act({
     act:'download'
    });
};
