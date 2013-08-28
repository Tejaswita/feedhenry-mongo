var dbOps = {
	add : function() {
      $fh.act(
        {
          act:'addRecord'
        },
        function(res) {
          $("#db-message").html(JSON.stringify(res.data)); 
        },
        function(code, err, params) {
          alert('error in adding data');
        }
        );
	}
};