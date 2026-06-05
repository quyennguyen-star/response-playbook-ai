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
- The chips are optional shortcuts — the user does not need to answer them to continue
- When the AI has enough context to respond and wants to help the user explore, refine, or act

**Do not use prompt chips when:**
- The AI is actually missing required information to respond — use Clarification instead

---

## Buttons & CTAs

Action buttons that navigate users to specific pages or trigger system actions.

**Rules:**
- Use action verbs (Go to, View, Contact, Get)
- Keep text clear and destination-focused
- Use buttons instead of prompt chips for navigation
- Limit to 1–3 button options per response

---

## Refinement Card

A card component that presents structured choices when the AI needs the user to decide before moving forward.

**Variants:**
- **Checkbox** (multi-select): "Select all that apply" — use when multiple selections are valid
- **Radio card** (single-select): Title + optional description per option — use when only one selection is valid and options benefit from description

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
- When the AI can safely continue without the user's input — use prompt chips instead
- For simple one-missing-detail clarification — ask inline conversationally

---

## Typing Text

Animates AI-generated text as it streams word by word, giving users a sense of the response being composed in real time.

**When to use:**
- Streaming text from the AI response as it is generated
- Showing that AI is actively writing, not stuck or loading

**Guidelines:**
- Use AI Thinking before text begins
- Stream only text-based responses (not tables or structured data)
