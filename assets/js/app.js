AOS.init();


document.addEventListener('DOMContentLoaded', function() {
    var rangeInput = document.getElementById('customRange1');
    var rangeValue = document.getElementById('rangeValue');
  
    rangeInput.addEventListener('input', function() {
      var value = rangeInput.value;
      rangeValue.textContent = '£' + value;
    });
  });
  


  document.getElementById('b3').onclick = function(){
    swal("Sccess", "You wil contact you soon", "success");
  };