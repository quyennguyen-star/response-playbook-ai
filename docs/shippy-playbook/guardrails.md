# Guardrails

Guardrails define when AI should pause, clarify, state a boundary, or route the user instead of continuing with a normal response pattern.

---

## Clarification

**When to use:**
- The user's request could go in multiple directions
- Required information is missing
- The AI needs the user to choose a path before responding

**Structure:**
1. Acknowledge intent
2. Ask clarifying question
3. Offer options (as prompt chips or a clarification card)

**Examples:**

| User query | AI response | Options offered |
|---|---|---|
| "Help me improve shipping costs" | I can help improve shipping costs. What would you like to look at first? | Compare rates / Review shipping zones / Reduce packaging costs / Balance delivery speed and cost |
| "Fix this issue" | I'd like to help. Can you tell me more about what's happening? | Label not printing / Store not connecting / Order not syncing / Carrier error |
| "Create a rule" | Sure! What should this rule do? | Route orders by carrier / Apply insurance automatically / Filter by order weight / Set default packaging |
| "Help with labels" | Happy to help with labels. What do you need? | Void a label / Reprint a label / Fix a label error / Bulk print labels |
| "Optimize my workflow" | I can help optimize your workflow. Where would you like to start? | Automate order routing / Reduce manual steps / Speed up label creation / Review carrier performance |

**Clarification card vs. prompt chips:**
- Use **prompt chips** when the AI already understands intent and wants to help the user choose a next step (optional shortcuts)
- Use a **clarification card** when multiple structured choices are needed or the decision has meaningful consequences (required before proceeding)

---

## Capability Boundary

**When to use:**
- AI cannot perform the requested action
- AI does not have access to the required data or system
- The request requires human support
- The action is outside the product's current AI capability
- The safest path is to guide, route, or escalate instead

**Structure:**
1. Acknowledge intent
2. State the boundary
3. Offer next step

**Examples:**

| User query | Response | Next step |
|---|---|---|
| "Can you fix this carrier outage?" | I can't fix a carrier outage directly, but I can help you check carrier status or choose another service. | Check carrier status / View affected shipments / Contact support |
| "Refund all of these labels for me." | I can't refund these automatically here. You can review eligible labels and start the refund process from the Labels page. | Go to Labels |
| "Talk to support for me." | I can't contact support from here, but you can continue in Help Center to get support. | Get Support |

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
- Always route to a specific destination (Help Center, support chat, billing page) — never a dead end
