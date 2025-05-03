// Select the MenuItems (ul) and set initial maxHeight to 0px (hidden)
var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

// Toggle function for opening/closing the menu
function menutoggle() {
  if (MenuItems.style.maxHeight == '0px') {
    MenuItems.style.maxHeight = '200px';  // Adjust based on the number of menu items
  } else {
    MenuItems.style.maxHeight = '0px';
  }
}

// Select the menu icon and the menu list
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('nav ul');

// Add an event listener to toggle the menu when the icon is clicked
menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');
});
