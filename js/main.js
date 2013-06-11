$(function(){
  // Get Canvas element
  var canvas = document.getElementById('colored_sketch');
 
  // Send IT
  $("#upCanvas").on("click", function(){
    // Convert Canvas DataURL
    var dataURL= canvas.toDataURL();
		var artistName = $("#nameof").val();

    $.ajax({
       url: "http://seconds.dontexist.org/canvas/uploadFile.php",
       type: "POST",
       data: {image: dataURL, artistName: artistName}
    }).done(function(respond){
   });
  });

});
