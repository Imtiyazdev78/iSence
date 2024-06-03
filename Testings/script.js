


document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var icon = dropdown.querySelector('.fas');
  
    // Toggle dropdown and change icon when the button is clicked
    dropdown.addEventListener('click', function() {
      dropdown.classList.toggle('active');
      icon.classList.toggle('fa-rotate-90');
    });
  
    // Close dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
        icon.classList.remove('fa-rotate-90');
      }
    });
  });
  

  