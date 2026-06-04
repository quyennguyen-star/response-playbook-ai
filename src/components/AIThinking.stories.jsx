import { expect } from 'storybook/test';
import { AIThinking } from './AIThinking';

const meta = {
  component: AIThinking,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    const thinking = canvas.getByText(/thinking/i);
    await expect(thinking).toBeVisible();
  },
};

export const CustomText = {
  args: { text: 'Processing your request...' },
};

export const Analyzing = {
  args: { text: 'Analyzing data...' },
};
