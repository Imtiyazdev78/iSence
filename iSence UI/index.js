


const sideArrow = document.querySelector('.sidebar_arrow');
const sideBar = document.querySelector('.sidebar');
const image = document.querySelector('#images')


const showHandler = () => {
    sideBar.style.width = '20%';
    image.setAttribute("value", "hide");
};

const hideHandler = () => {
    sideBar.style.width = '13%';
    image.setAttribute("value", "show");
};

const toggleHandler = () => {
    const getValue = image.getAttribute('value');
    getValue == 'show' ? showHandler() : hideHandler();
};

sideArrow.addEventListener('click', toggleHandler);




// DropDown Toggle Start here
// document.addEventListener('DOMContentLoaded', function () {
//     var dropdown = document.querySelector('.dropdown');
//     var icon = dropdown.querySelector('.fas');

//     // Toggle dropDown and change icon when the button is clicked
//     dropdown.addEventListener('click', function () {
//         dropdown.classList.toggle('active');
//         icon.classList.toggle('fa-rotate-270');
//     });

//     // Close dropDown when clicking outside of it
//     document.addEventListener('click', function (event) {
//         if (!dropdown.contains(event.target)) {
//             dropdown.classList.remove('active');
//             icon.classList.remove('fa-rotate-270');
//         }
//     });
// });


