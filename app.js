// https://mobilepalette.netlify.app/?color=5e69ee
$(document).ready(function() {
  for (var i=0;i < 5; i++) {
    $("<option value=" + i + ">Test "+ i +" </option>").appendTo(".wiw");
  }
  $(".what").append("<span>السلام عليكم</span>");

})
