import { expect } from 'storybook/test';
import { ResponseLabel } from './ResponseLabel';

const meta = {
  component: ResponseLabel,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  args: { children: 'Answer' },
  play: async ({ canvas }) => {
    const label = canvas.getByText(/answer/i);
    await expect(label).toBeVisible();
  },
};

export const Answer = {
  args: { children: 'Answer', type: 'answer' },
};

export const Guidance = {
  args: { children: 'Guidance', type: 'guidance' },
};

export const Action = {
  args: { children: 'Next step', type: 'action' },
};
