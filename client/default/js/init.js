$fh.ready(function() {
  $("#progress").innerHTML = "<p>upload a new file</p>";
  
  $("#uploadFile").bind('click', function() {
    console.info('in upload');
    $fh.act({
     act:'upload'
    });
  });

  $("#downloadFile").bind('click', function() {
    console.info('in download');
    $fh.act({
     act:'upload'
    });
  });
 });
 