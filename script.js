// Enhanced Feature Data with icons and extended information
const featureData = {
  'destination-guides': {
    title: 'Destination Guides',
    description: 'Explore detailed guides for the best destinations in Nepal, including cultural sites, natural wonders, and more.',
    icon: '🌄',
    extendedInfo: 'Our guides cover everything from popular spots like Kathmandu Valley and Pokhara to hidden gems in the Himalayas. Each guide includes cultural insights, best times to visit, and traveler tips.'
  },
  'offline-maps': {
    title: 'Offline Maps',
    description: 'Access interactive maps of Nepal even when you don\'t have an internet connection, ensuring you never get lost.',
    icon: '🗺️',
    extendedInfo: 'Download detailed topographic maps, trekking routes, and city maps before your trip. Includes points of interest, elevation data, and route planning tools.'
  },
  'custom-itineraries': {
    title: 'Custom Itineraries',
    description: 'Plan your trip with ease by creating personalized itineraries, selecting the best spots, activities, and accommodations.',
    icon: '✏️',
    extendedInfo: 'Our smart itinerary builder suggests routes based on your interests (trekking, culture, adventure), available time, and budget. Share plans with travel companions.'
  },
  'local-services': {
    title: 'Local Services',
    description: 'Find local services such as transportation, restaurants, hotels, and tour guides to make your trip more comfortable.',
    icon: '🛎️',
    extendedInfo: 'Verified listings with traveler reviews. Book directly through the app for homestays, local guides, and transportation services.'
  },
  'language-help': {
    title: 'Language Help',
    description: 'Overcome language barriers with easy-to-use translation tools, helping you communicate effectively with locals.',
    icon: '💬',
    extendedInfo: 'Essential Nepali phrases with audio pronunciation. Real-time translation for menus and signs. Cultural tips for respectful communication.'
  },
  'emergency-info': {
    title: 'Emergency Info',
    description: 'Stay safe with quick access to emergency contacts, hospitals, embassies, and other important safety information.',
    icon: '🆘',
    extendedInfo: 'Includes altitude sickness information, emergency evacuation contacts, police and medical services. Works offline for remote areas.'
  }
};

// DOM Elements
const cards = document.querySelectorAll('.card');
const featureDetails = document.getElementById('feature-details');
const featureTitle = document.getElementById('feature-title');
const featureDescription = document.getElementById('feature-description');
const featureExtendedInfo = document.createElement('p'); // For additional info
featureExtendedInfo.className = 'feature-extended';
featureDetails.appendChild(featureExtendedInfo);

// Track currently selected card
let currentSelectedCard = null;

// Add event listeners to cards
cards.forEach(card => {
  // Add icon to card
  const featureId = card.getAttribute('data-feature');
  const iconSpan = document.createElement('span');
  iconSpan.className = 'feature-icon';
  iconSpan.textContent = featureData[featureId].icon;
  card.insertBefore(iconSpan, card.firstChild);
  
  // Click handler
  card.addEventListener('click', function() {
    const featureId = this.getAttribute('data-feature');
    const feature = featureData[featureId];
    
    // Update feature details
    featureTitle.textContent = `${feature.icon} ${feature.title}`;
    featureDescription.textContent = feature.description;
    featureExtendedInfo.textContent = feature.extendedInfo;
    
    // Visual feedback
    if (currentSelectedCard) {
      currentSelectedCard.classList.remove('selected');
    }
    this.classList.add('selected');
    currentSelectedCard = this;
    
    // Show details with animation
    featureDetails.style.display = 'block';
    featureDetails.style.animation = 'fadeIn 0.5s ease';
    
    // Scroll to details if mobile
    if (window.innerWidth < 768) {
      featureDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
  
  // Keyboard accessibility
  card.setAttribute('tabindex', '0');
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

// Initialize with first feature
if (cards.length > 0) {
  cards[0].click();
}

// Close button functionality
const closeButton = document.createElement('button');
closeButton.className = 'close-button';
closeButton.innerHTML = '&times;';
closeButton.setAttribute('aria-label', 'Close details');
closeButton.addEventListener('click', () => {
  featureDetails.style.display = 'none';
  if (currentSelectedCard) {
    currentSelectedCard.classList.remove('selected');
  }
});
featureDetails.insertBefore(closeButton, featureDetails.firstChild);

// Add corresponding CSS for new elements
const style = document.createElement('style');
style.textContent = `
  .feature-icon {
    font-size: 2rem;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .selected {
    border: 2px solid var(--secondary-color) !important;
    background-color: #f8fafc;
  }
  
  .feature-extended {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px dashed #ddd;
    font-size: 0.9rem;
    color: #555;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--secondary-color);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
