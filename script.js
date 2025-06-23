// script.js
function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = `
      <span>&#8220;</span>
      ${recommendation.value}
      <span>&#8221;</span>
    `;
    
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);
    
    // Reset the value of the textarea
    recommendation.value = "";
    
    // Show popup
    showPopup(true);
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
    // Add fade-in animation
    document.getElementById('popup').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('popup').style.opacity = '1';
    }, 50);
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Add animation to skills when they come into view
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('skill-animate');
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);
document.querySelectorAll('.skill').forEach(skill => {
  observer.observe(skill);
});

// Form validation
document.querySelector('button#recommend_btn').addEventListener('click', function(e) {
  const messageField = document.getElementById('new_recommendation');
  if (!messageField.value.trim()) {
    e.preventDefault();
    messageField.style.borderColor = 'red';
    alert('Please enter a recommendation message');
    return false;
  }
});