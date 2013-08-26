 var fileOps = {
      uploadToServer : function() {
       console.log("in file upload");
       $fh.file({
         act:"upload",
         filepath:"init.js",
         server:"https://hpcs-gcvuuax99jryhs4ybcretsac-dev_hpcs.df.dev.u101.feedhenry.net/upload"
    	 }, function(response) {
    		 console.log("upload status " + response.res + ". Data being sent :" + response.size);
    	 }, function(msg, err){
    		 alert("Error" + msg); 
    	 });	 
     },
     progressListener : function(progress) {
          //progress value that is passed here is a float number between 0 and 1
    	    //convert it to percentage
    	    $('#download_progress').innerHTML('<p> current progress: ' + progress * 100 + '%' + '</p>');
    },
    downloadFromServer : function() {
      var fileSrc = "http://url";
      var parts = fileSrc.split("/");
    	var destFile = parts[parts.length-1];	 
    	 $fh.file({
    		 act: 'download',
    		 src:  fileSrc,
    		 dest: destFile,
    		 progressListener:progressListener		 
    	 }, function(path) {
    		 $fh.webview({
    			 act:'open',
    			 url:path
    		 });
    	 }, function(msg, err) {
    		 alert(msg);
    	 });
     }   
 };



