$(function(){
  // Get Canvas element
  var canvas = document.getElementById('colored_sketch');
 
  // Send IT
  $("#upCanvas").on("click", function(){
    // Convert Canvas DataURL
    var dataURL= canvas.toDataURL();

    $.ajax({
       url: "uploadFile.php",
       type: "POST",
       data: {image: dataURL}
    }).done(function(respond){
   });
  });

});
