import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from './components/Button';
import { FeedbackBar } from './components/FeedbackBar';
import { AIThinking } from './components/AIThinking';
import { ResponseLabel } from './components/ResponseLabel';
import { PromptChip } from './components/PromptChip';

// Import all CSS
import './components/Button.css';
import './components/FeedbackBar.css';
import './components/AIThinking.css';
import './components/ResponseLabel.css';
import './components/PromptChip.css';

// Export components globally so they can be used from HTML
window.PlaybookComponents = {
  Button,
  FeedbackBar,
  AIThinking,
  ResponseLabel,
  PromptChip,
  React,
  createRoot
};

// Helper function to mount components
window.mountComponent = (componentName, elementId, props = {}) => {
  const Component = window.PlaybookComponents[componentName];
  const element = document.getElementById(elementId);

  if (!Component || !element) {
    console.error(`Component ${componentName} or element ${elementId} not found`);
    return;
  }

  const root = createRoot(element);
  root.render(React.createElement(Component, props));
};

console.log('Playbook Components loaded:', Object.keys(window.PlaybookComponents));
