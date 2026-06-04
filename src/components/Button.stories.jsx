import { expect } from 'storybook/test';
import { Button } from './Button';

const meta = {
  component: Button,
  tags: ['ai-generated'],
};

export default meta;

export const Primary = {
  args: { children: 'Click me' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /click me/i });
    await expect(button).toBeVisible();
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(255, 255, 255)');
  },
};

export const CssCheck = {
  args: { children: 'Submit' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /submit/i });
    await expect(getComputedStyle(button).borderColor).toBe('rgb(225, 228, 232)');
  },
};

export const Secondary = {
  args: { children: 'Cancel', variant: 'secondary' },
};

export const Small = {
  args: { children: 'Save', size: 'small' },
};

export const Large = {
  args: { children: 'Continue', size: 'large' },
};

export const Disabled = {
  args: { children: 'Disabled', disabled: true },
};
