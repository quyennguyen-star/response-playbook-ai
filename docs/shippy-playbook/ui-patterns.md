# UI Patterns

UI patterns are the components used to surface AI responses. Each pattern maps to a specific interaction type.

---

## Chain of Thought

Shows AI reasoning steps as the response is being generated.

**Loading state:** Animated dots + current step label (shimmer text) + expandable step details
**Completed state:** Checkmark + "N steps completed" + expandable step list

**When to use:**
- Complex tasks that benefit from showing reasoning steps
- Building user trust by revealing the AI's thought process
- Long-running operations where progress indication is valuable

---

## Feedback Bar

Collects user feedback on AI responses. Thumbs up / thumbs down with optional text feedback.

**States:**
- Default: two icon buttons (up / down)
- After selection: selected icon + "Add Feedback" button
- Modal: text area + Submit button (indigo-950)

**When to use:**
- After AI generates a response to gauge helpfulness
- To collect data for improving AI response quality

---

## AI Thinking

Animated loading indicator showing AI is processing. Three converging dots with shimmer text.

**When to use:**
- When AI is processing a request and the user needs visual feedback
- Before displaying a response to indicate work is in progress

---

## Generated Content

AI generates form field values based on context, order history, or user patterns. Fields animate with an indigo shimmer while generating, then populate with the value.

**When to use:**
- Prefilling ship-from address, carrier, or packaging based on history
- Reducing manual data entry in repetitive workflows

---

## Prompt Chips

Suggested follow-up actions presented as pill buttons after an AI response.

**When to use:**
- After AI has already responded and wants to offer helpful next actions
- The chips are optional shortcuts. The user does not need to select one to continue.
- When the AI has enough context to respond and wants to help the user explore, refine, or act

**Do not use prompt chips when:**
- The AI is missing required information to respond. Use text asking or a refinement card instead.
- The decision involves required setup details or system-changing actions.

---

## Response Actions

Action buttons route users to a product destination or review surface. Keep response actions separate from prompt chips and citations.

### Product deep link

Routes the user to an existing product area, page, setting, feature, or filtered view.

**Examples:** Go to Labels, Open shipping rules, View carrier settings, Go to automation settings

**Guidelines:**
- Use one destination per response.
- Label the destination clearly. Match the product's navigation language.
- Do not use product deep links for AI-generated output. Use a review action instead.

### Review action

Opens AI-generated output for review before anything is applied.

**Examples:** Review rule, Review changes, Review automation

**Guidelines:**
- Use "Review [object]" when AI has drafted or prepared something.
- Do not use Apply, Save, Enable, Send, Delete, or Overwrite before the user reviews the generated output.

### Buttons vs. citations

Keep product actions and source references separate.

- Use **buttons** when the user is being routed to a product destination or review surface.
- Use **citation components** when the AI is referencing supporting documentation, sources, or evidence.
- Do not use inline hyperlinks as the primary action.

### General rules
- Use action verbs: Go to, Open, View, Review, See
- Keep text short and destination-focused
- Use buttons instead of prompt chips when the action navigates the user somewhere
- Limit to 1–3 buttons per response

---

## Refinement Card

A card component that presents structured choices when the AI needs the user to decide before moving forward.

**Variants:**
- **Checkbox** (multi-select): "Select all that apply". Use when multiple selections are valid.
- **Radio card** (single-select): Title + optional description per option. Use when only one selection is valid and options benefit from description.

**Anatomy:**
- Step label (e.g. "Step 2 of 4")
- Question
- Options (radio or checkbox)
- Back / Next buttons (Next disabled until selection is made)

**When to use:**
- Multiple structured choices are required before the AI can proceed
- Higher-risk decision where the wrong assumption would cause confusion or extra work
- The AI needs the user to choose a scope, source, account, date range, carrier, or workflow

**When NOT to use:**
- When the AI can safely continue without the user's input. Use prompt chips instead.
- For simple one-missing-detail clarification. Ask inline conversationally.

---

## Typing Text

Animates AI-generated text as it streams word by word, giving users a sense of the response being composed in real time.

**When to use:**
- Streaming text from the AI response as it is generated
- Showing that AI is actively writing, not stuck or loading

**Guidelines:**
- Use AI Thinking before text begins
- Stream only text-based responses (not tables or structured data)
