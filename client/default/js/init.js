$fh.ready(function() {
  $("#progress").innerHTML = "<p>upload a new file</p>";
  
  $("#uploadFile").bind('click', function() {
    console.info('in upload');
    $fh.act({
     act:'upload'
    });
  });

    $("#uploadFile").bind('click', function() {
    console.info('in upload');
    $fh.act({
     act:'upload'
    });
  });
 });
 