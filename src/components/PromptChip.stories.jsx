import { expect, userEvent } from 'storybook/test';
import { PromptChip } from './PromptChip';

const meta = {
  component: PromptChip,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  args: { children: 'How do I ship internationally?' },
  play: async ({ canvas }) => {
    const chip = canvas.getByRole('button');
    await expect(chip).toBeVisible();
  },
};

export const QuickQuestion = {
  args: { children: 'Where are my API keys?' },
};

export const FollowUp = {
  args: { children: 'Show me more examples' },
};

export const Interactive = {
  args: {
    children: 'Click me',
    onClick: () => alert('Chip clicked!'),
  },
  play: async ({ canvas, userEvent }) => {
    const chip = canvas.getByRole('button');
    await expect(chip).toBeVisible();
  },
};
