# Guardrails

Guardrails define when AI should pause, clarify, state a boundary, or route the user instead of continuing with a normal response pattern.

---

## Clarification

Use clarification when the AI needs required information before it can continue.

### Two types

**Intent clarification** — Use when the user's request could mean more than one product area, task, or response pattern. Helps AI determine what the user is trying to do before responding.

| | |
|---|---|
| Example | "Show me performance." |
| Question | "What performance do you want to review?" |
| Options | Shipping performance, Carrier performance, Store performance, API performance |

**Configuration clarification** — Use when the user's intent is clear, but required details are missing before AI can continue. Helps AI collect the information needed to draft, preview, or complete the task.

| | |
|---|---|
| Example | "Create a report for delayed shipments." |
| Question | "What date range should this report include?" |


**When to use:**
- The user's request could go in multiple directions
- Required information is missing
- The AI needs the user to choose a path before responding

**Structure:**
1. Acknowledge intent
2. Ask clarifying question
3. Offer options (as prompt chips or a refinement card)

**Examples:**

| User query | AI response | Options offered |
|---|---|---|
| "Help me improve shipping costs" | I can help improve shipping costs. What would you like to look at first? | Compare rates / Review shipping zones / Reduce packaging costs / Balance delivery speed and cost |
| "Fix this issue" | I'd like to help. Can you tell me more about what's happening? | Label not printing / Store not connecting / Order not syncing / Carrier error |
| "Create a rule" | Sure! What should this rule do? | Route orders by carrier / Apply insurance automatically / Filter by order weight / Set default packaging |
| "Help with labels" | Happy to help with labels. What do you need? | Void a label / Reprint a label / Fix a label error / Bulk print labels |
| "Optimize my workflow" | I can help optimize your workflow. Where would you like to start? | Automate order routing / Reduce manual steps / Speed up label creation / Review carrier performance |

### Choosing the right method

| Pattern | Use when | Best for |
|---|---|---|
| **Text asking** | AI needs one open-ended or custom answer. | Light clarification |
| **Prompt chips** | AI is offering optional follow-up paths. | Fast path selection |
| **Refinement card** | AI needs required structured input before it can continue. | Bigger clarification moment |

Do not use prompt chips for required setup details or system-changing decisions.

**Clarification card vs. prompt chips:**
- Use **prompt chips** when the AI already understands intent and wants to help the user choose a next step (optional shortcuts)
- Use a **refinement card** when multiple structured choices are needed or the decision has meaningful consequences (required before proceeding)

---

## Capability Boundary

**When to use:**
- AI cannot perform the requested action
- AI does not have access to the required data or system
- The request requires human support
- The action is outside the product's current AI capability
- The safest path is to guide, route, or escalate instead

**Structure:**
1. Acknowledge the limitation clearly. Do not apologize excessively.
2. Give actionable steps with **bold labels** so the user can scan what to do
3. Offer to help with a workaround or related next step

**Rules:**
- Be direct about what AI can't do. Don't hedge.
- Always give the user somewhere to go or something to try.
- Bold the action label in each step, not the whole sentence.
- End with an offer to help with a related action if one exists.

**Example: Carrier outage**

> That's outside what I can fix directly — carrier outages are managed by the carriers themselves.
>
> Here are a few steps to investigate:
> - **Check ShipStation's status page** for any reported issues with carrier integrations.
> - **Check the carrier's status page directly** — UPS, FedEx, and USPS all have service alert pages.
> - **Contact ShipStation support** if the outage is affecting your fulfillment workflows. They can often provide ETAs on resolution.

Then offer prompt chips: **Check carrier status** / **Get Support** / **Pause fulfillment rules**

---

## Escalation

**When to use:**
- The issue remains unresolved after guidance or retry
- The request involves billing, refunds, compliance, or sensitive changes
- The user is blocked and cannot continue
- The user explicitly asks for support

**Structure:**
1. Acknowledge intent
2. Explain why escalation is needed
3. Route to support

**Examples:**

| Scenario | Response | CTA |
|---|---|---|
| Billing issue | Here's the Help Center where you can contact support: | Navigate to Help Center |
| Direct support request | Here's where you can get help: | Get Support |

**Rules:**
- Do not leave the user without a next step
- Always route to a specific destination (Help Center, support chat, billing page). Never leave the user without a next step.
