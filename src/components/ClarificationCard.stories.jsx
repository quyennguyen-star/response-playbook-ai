import { expect } from 'storybook/test';
import { ClarificationCard } from './ClarificationCard';

const meta = {
  component: ClarificationCard,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  args: {
    imageSrc: '/img/clarificationcard.svg',
  },
};

export const NoImage = {
  args: {},
};
