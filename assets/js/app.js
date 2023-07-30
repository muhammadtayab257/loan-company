
document.addEventListener('DOMContentLoaded', function() {
    var rangeInput = document.getElementById('customRange1');
    var rangeValue = document.getElementById('rangeValue');
  
    rangeInput.addEventListener('input', function() {
      var value = rangeInput.value;
      rangeValue.textContent = '£' + value;
    });
  });
  


  const menuBtn = document.getElementById('btnHamberger')
  const navMain = document.getElementById('nav-main')


  menuBtn.addEventListener('click', () => {
    console.log("Ddddddddddddddddddddddddddddddddddd");
    navMain.classList.toggle('active')
  })

  console.log(navMain);