# AI Response Playbook

A comprehensive guide for designing AI assistant interactions, including response patterns, UI components, and guardrails.

## 📚 Documentation Site

View the full playbook at the GitHub Pages URL.

## 🎨 Component Library (Storybook)

We've created a React component library based on the design patterns in this playbook. Access the Storybook at `/storybook/` when deployed.

### Components Available

- **Button** - Standard button component with variants (primary, secondary) and sizes
- **FeedbackBar** - Thumbs up/down feedback component with optional text feedback
- **AIThinking** - Animated loading indicator for AI processing states
- **ResponseLabel** - Labeled sections for AI responses (Answer, Guidance, Action)
- **PromptChip** - Interactive prompt suggestion chips

## 🚀 Development

### Run Documentation Site

Simply open `index.html` in a browser.

### Run Storybook

```bash
npm install
npm run storybook
```

### Build Storybook for Production

```bash
npm run build-storybook
```

This creates a static build in `storybook-static/` directory.

## 🧪 Testing

Stories include automated tests using Vitest:

```bash
npx vitest --project=storybook run
```

## 📦 Deployment

The project automatically deploys to GitHub Pages via GitHub Actions:
- Main site at root `/`
- Storybook at `/storybook/`

## 🎯 Design Tokens

All components use the design tokens defined in `tokens.css`, including:
- Colors (grey, blue, green, indigo scales)
- Spacing (1-32)
- Typography (font sizes, weights, line heights)
- Border radius values
- Semantic color tokens for status, surfaces, borders

## 📝 License

ISC
