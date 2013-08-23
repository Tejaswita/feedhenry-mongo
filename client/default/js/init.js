$fh.ready(function() {
	var fileSrc = "http://url"
	var parts = fileSrc.split("/");
	var destFile = parts[parts.length-1];
	
	$fh.file({
		 act:"upload",
		 filepath:"/home/tejaswita/development/feedhenry/code.mp4",
		 server:"/upload"
	 }, function(response) {
		 console.log("upload status " + response.res + ". Data being sent :" + response.size);
	 }, function(msg, err){
		 alert("Error" + msg); 
	 });	 
	 
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
	 })	;
});


