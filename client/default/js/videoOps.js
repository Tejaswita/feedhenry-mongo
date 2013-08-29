var videoOps = {
		play : function(event) {
			console.log("playing video file");
			var file = $("input").get(0).files[0];
			var type = file.type;
			var canPlay = $("video").get(0).canPlayType(type);
			canPlay = (canPlay === '' ? 'no' : canPlay);
			var message = 'Can play type "' + type + '": ' + canPlay;
			var isError = canPlay === 'no';
			this.displayMessage(message, isError);
			if (isError) {
				return;
			}
			var fileURL = this.getUrl(file);
			$("video").attr("src", fileURL);
		},
		displayMessage: function(message, isError) {
			$("#video-message").html(message);
			var className = isError ? 'error' : 'info';
			$("#video-message").addClass(className);
		},
		getUrl : function(file){
			var URL = window.URL || window.webkitURL;
			var fileURL = URL.createObjectURL(file);
			if (!URL) {
				displayMessage('Your browser is not '
						+ '<a href="http://caniuse.com/bloburls">supported</a>!', true);

				return;
			}
			return fileURL;
		}
};
