// Feature data
const featureData = {
  'destination-guides': {
    title: 'Destination Guides',
    description: 'Explore detailed guides for the best destinations in Nepal, including cultural sites, natural wonders, and more.'
  },
  'offline-maps': {
    title: 'Offline Maps',
    description: 'Access interactive maps of Nepal even when you don’t have an internet connection, ensuring you never get lost.'
  },
  'custom-itineraries': {
    title: 'Custom Itineraries',
    description: 'Plan your trip with ease by creating personalized itineraries, selecting the best spots, activities, and accommodations.'
  },
  'local-services': {
    title: 'Local Services',
    description: 'Find local services such as transportation, restaurants, hotels, and tour guides to make your trip more comfortable.'
  },
  'language-help': {
    title: 'Language Help',
    description: 'Overcome language barriers with easy-to-use translation tools, helping you communicate effectively with locals.'
  },
  'emergency-info': {
    title: 'Emergency Info',
    description: 'Stay safe with quick access to emergency contacts, hospitals, embassies, and other important safety information.'
  }
};

// Select all feature cards
const cards = document.querySelectorAll('.card');
const featureDetails = document.getElementById('feature-details');
const featureTitle = document.getElementById('feature-title');
const featureDescription = document.getElementById('feature-description');

// Add event listener for each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    const featureId = card.getAttribute('data-feature');
    const featureInfo = featureData[featureId];

    // Show feature details
    featureTitle.textContent = featureInfo.title;
    featureDescription.textContent = featureInfo.description;
    featureDetails.style.display = 'block';
  });
});
