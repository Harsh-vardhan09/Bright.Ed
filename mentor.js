const mentorContainer = document.querySelector('.mentor-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const searchInput = document.getElementById('mentor-search');
const mentorCards = document.querySelectorAll('.mentor-card');

// Scroll Functionality
leftArrow.addEventListener('click', () => {
  mentorContainer.scrollBy({ left: -150, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  mentorContainer.scrollBy({ left: 150, behavior: 'smooth' });
});

// Search Functionality
// Search Functionality
function filterMentors() {
    const query = searchInput.value.toLowerCase();
  
    let matchFound = false;
  
    mentorCards.forEach(card => {
      const name = card.getAttribute('data-name').toLowerCase();
  
      if (name === query) { // Show only exact matches
        card.classList.add('show');
        matchFound = true;
      } else {
        card.classList.remove('show');
      }
    });
  
    // If no match is found, hide all cards
    if (!matchFound) {
      mentorCards.forEach(card => card.classList.remove('show'));
    }
  }
  
  // Show all mentors on load
  mentorCards.forEach(card => card.classList.add('show'));
  