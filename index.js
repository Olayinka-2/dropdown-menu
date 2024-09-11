const mainMenu = document.querySelectorAll('.main-menu');
let openDropdown = null; // Keep track of the currently open dropdown

function releaseDropDown(event) {
   let dropdown = event.target.nextElementSibling;

   if (!dropdown || !dropdown.classList.contains("dropdown-menu")) {
      return;
   }

   // Toggle dropdown visibility
   if (openDropdown && openDropdown !== dropdown) {
      openDropdown.style.display = 'none'; // Close the previously opened dropdown
   }

   dropdown.style.display = dropdown.style.display === 'block' ? "none" : "block";
   openDropdown = dropdown.style.display === 'block' ? dropdown : null; // Update open dropdown
}

// Add click listener to main menu items
Array.from(mainMenu).forEach(menu => {
   menu.addEventListener('click', releaseDropDown);
});

// Close dropdown when clicking outside of it
document.addEventListener('click', (event) => {
   if (openDropdown && !event.target.closest('.main-menu') && !event.target.closest('.dropdown-menu')) {
      openDropdown.style.display = 'none'; // Close the open dropdown
      openDropdown = null;
   }
});

console.log(mainMenu);
