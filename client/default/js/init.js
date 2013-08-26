$fh.ready(function() {
  $("#progress").innerHTML = "<p>upload a new file</p>";
  
  $("#uploadFile").bind('click', function() {
    $fh.act({
     act:'upload',
     data: {
       'filepath':
     }
    )});
  }
 });
  
 