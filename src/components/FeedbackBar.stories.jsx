import { expect, userEvent } from 'storybook/test';
import { FeedbackBar } from './FeedbackBar';

const meta = {
  component: FeedbackBar,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    const buttons = canvas.getAllByRole('button');
    await expect(buttons[0]).toBeVisible();
  },
};

export const ThumbsUpSelected = {
  play: async ({ canvas, userEvent }) => {
    const buttons = canvas.getAllByRole('button');
    await userEvent.click(buttons[0]);
    await expect(canvas.getByText(/add feedback/i)).toBeVisible();
  },
};

export const ThumbsDownSelected = {
  play: async ({ canvas, userEvent }) => {
    const buttons = canvas.getAllByRole('button');
    await userEvent.click(buttons[1]);
    await expect(canvas.getByText(/add feedback/i)).toBeVisible();
  },
};

export const WithFeedbackCallback = {
  args: {
    onFeedback: (feedback) => console.log('Feedback:', feedback),
  },
};
