import React, { useState } from 'react';
import { expect } from 'storybook/test';
import { ClarificationCard } from './ClarificationCard';

const meta = {
  component: ClarificationCard,
  tags: ['ai-generated'],
};

export default meta;

const shippingOptions = [
  { value: 'reduce-cost',  label: 'Help me reduce shipping costs' },
  { value: 'compare',      label: 'Compare carrier rates' },
  { value: 'automation',   label: 'Set up shipping automation' },
  { value: 'troubleshoot', label: 'Troubleshoot a shipping issue' },
];

export const Default = {
  args: {
    question: 'What would you like help with for shipping?',
    options: shippingOptions,
  },
  play: async ({ canvas }) => {
    const first = canvas.getAllByRole('button')[0];
    await expect(first).toBeVisible();
  },
};

export const WithSelection = {
  args: {
    question: 'What would you like help with for shipping?',
    options: shippingOptions,
    selected: 'reduce-cost',
  },
};

export const CreateRule = {
  args: {
    question: 'What kind of rule would you like to create?',
    options: [
      { value: 'carrier',   label: 'Carrier selection rule' },
      { value: 'packaging', label: 'Packaging rule' },
      { value: 'rate',      label: 'Rate shopping rule' },
    ],
  },
};

export const Interactive = {
  render: () => {
    const [selected, setSelected] = useState(null);
    return (
      <div>
        <ClarificationCard
          question="What would you like help with for shipping?"
          options={shippingOptions}
          selected={selected}
          onSelect={(opt) => setSelected(opt ? opt.value : null)}
        />
        {selected && (
          <p style={{ marginTop: 12, fontSize: 13, color: '#656C76' }}>
            Selected: <strong>{selected}</strong>
          </p>
        )}
      </div>
    );
  },
};
