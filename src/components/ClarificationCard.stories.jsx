import { expect } from 'storybook/test';
import { ClarificationCard } from './ClarificationCard';

const meta = {
  component: ClarificationCard,
  tags: ['ai-generated'],
};

export default meta;

export const WithImage = {
  args: {
    title: 'Clarification',
    description: 'Narrows broad, ambiguous, or incomplete requests before choosing a response pattern.',
    imageSrc: '/img/clarificationcard.svg',
  },
  play: async ({ canvas }) => {
    const title = canvas.getByText('Clarification');
    await expect(title).toBeVisible();
  },
};

export const WithoutImage = {
  args: {
    title: 'Clarification',
    description: 'Narrows broad, ambiguous, or incomplete requests before choosing a response pattern.',
  },
};

export const WithReviewButton = {
  args: {
    title: 'Clarification',
    description: 'Narrows broad, ambiguous, or incomplete requests before choosing a response pattern.',
    imageSrc: '/img/clarificationcard.svg',
    onReview: () => alert('Review clicked'),
  },
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: /review/i });
    await expect(btn).toBeVisible();
  },
};

export const CustomContent = {
  args: {
    title: 'Improve shipping costs',
    description: 'The user\'s request could go in multiple directions — ask before proceeding.',
    imageSrc: '/img/clarificationcard.svg',
  },
};
