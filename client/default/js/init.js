$fh.ready(function() {
  $("#progress").innerHTML = "<p>upload a new file</p>";
  
  $("$uploadFile").onclick = function() {
    $fh.act({
     act:'upload',
     data: {
       'filepath':
     }
    });
  }
 });
  
 