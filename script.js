// Example data
const examples = {
  'find-navigate': {
    category: 'Find / navigate',
    query: '"Where do I find API keys?"',
    user: 'Where do I find my API keys?',
    answer: 'You can find API keys in Settings.',
    guidance: 'Settings > Developer > API Keys',
    nextStep: 'Open API Keys'
  },
  'learn-guidance': {
    category: 'Learn / guidance',
    query: '"How do I void a label?"',
    user: 'How do I void a label?',
    answer: 'You can void a label within 30 days of purchase.',
    guidance: 'Go to Shipments > find the label > click Void',
    nextStep: 'Go to Shipments'
  },
  'support-troubleshooting': {
    category: 'Support / troubleshooting',
    query: '"Why can\'t I connect my store?"',
    user: 'Why can\'t I connect my store?',
    answer: 'This is usually an auth or permissions issue.',
    guidance: 'Check store credentials and reconnect in Settings > Stores',
    nextStep: 'Go to Store Settings'
  },
  'search': {
    category: 'Search',
    query: '"Find orders from John Smith last week."',
    user: 'Find orders from John Smith last week.',
    answer: 'Found 3 orders from John Smith.',
    guidance: 'Showing results from June 1–7',
    nextStep: 'View all orders'
  },
  'ask-data': {
    category: 'Ask my data',
    query: '"What product cost me the most?"',
    user: 'What product cost me the most?',
    answer: 'Your highest cost product was Priority Mail at $142.',
    guidance: 'Based on orders from the last 30 days',
    nextStep: 'View cost report'
  },
  'unsupported': {
    category: 'Unsupported / unknown',
    query: '"Can you fix this carrier outage?"',
    user: 'Can you fix this carrier outage?',
    answer: 'I\'m not able to fix carrier outages directly.',
    guidance: 'Check the carrier status page for updates',
    nextStep: 'Contact Support'
  }
};

// Update the detail panel
function updateDetailPanel(exampleId) {
  const data = examples[exampleId];

  document.querySelector('.user-query').textContent = data.user;
  document.querySelector('.response-text').textContent = data.answer;
  document.querySelectorAll('.response-text')[1].textContent = data.guidance;
  document.querySelector('.response-action').textContent = data.nextStep;
}

// Set active example
function setActiveExample(exampleId) {
  // Remove active class from all examples
  document.querySelectorAll('.example-category').forEach(el => {
    el.classList.remove('active');
  });

  // Add active class to selected example
  const activeElement = document.querySelector(`[data-example="${exampleId}"]`);
  if (activeElement) {
    activeElement.classList.add('active');
  }

  // Update the detail panel
  updateDetailPanel(exampleId);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add data attributes and click handlers to example categories
  const exampleElements = document.querySelectorAll('.example-category');
  const exampleIds = ['find-navigate', 'learn-guidance', 'support-troubleshooting', 'search', 'ask-data', 'unsupported'];

  exampleElements.forEach((el, index) => {
    const exampleId = exampleIds[index];
    el.setAttribute('data-example', exampleId);
    el.style.cursor = 'pointer';

    el.addEventListener('click', () => {
      setActiveExample(exampleId);
    });
  });

  // Set first example as active by default
  setActiveExample('find-navigate');
});
