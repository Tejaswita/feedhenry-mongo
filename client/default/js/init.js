$fh.ready(function() {
  document.getElementById("progress").innerHTML = "<p>upload a new file</p>";
  
  document.getElementById("uploadFile").onclick = function() {
    $fh.act({
     act:'upload',
     data: {
       'filepath':
     }
    });
  }
 });
  
 