# Response Patterns

Response patterns define how the AI assistant should respond based on the interaction type. Choose the pattern based on what the user is trying to do, not what they said.

---

## Source rules

Use sources when the assistant is answering from product knowledge, policy, support guidance, developer documentation, help documentation, or account data.

Sources help users understand where the answer came from and whether they can trust it.

### Rule

- Include a source when the answer depends on documented knowledge.
- Use the most specific source available.
- Prefer internal product documentation, developer docs, help docs, support-approved content, or account data over general knowledge.
- Do not show a source if the response is only conversational, creative, or does not rely on product knowledge.
- If the source is unavailable or uncertain, state the limitation instead of implying confidence.

### Source types

| Source type | Use when | Example |
|---|---|---|
| **Developer docs** | The answer explains APIs, endpoints, authentication, webhooks, payloads, errors, or integration behavior. | Source: Developer Docs |
| **Help docs** | The answer explains product setup, settings, workflows, troubleshooting, or user-facing features. | Source: Help Center |
| **Product data** | The answer uses the user's account, orders, shipments, labels, analytics, or configuration. | Source: Your shipment data |
| **Policy / support guidance** | The answer depends on support policy, carrier rules, billing rules, limits, or eligibility. | Source: Support guidance |

### Placement

Show sources near the supporting detail, not as the main action.

For simple answers, sources can appear as a small link below the response.

For longer answers, sources can be attached to the specific section they support.

### Decision rule

If the assistant is using product knowledge, documentation, policy, or user data to support the answer, include a source. If the response is general conversation or does not depend on a documented source, do not add one.

---

## Voice and tone

Be friendly but efficient. Get to the point without warmup phrases.

- No filler: avoid "Sure!", "Got it!", "Of course!", or "Great question!"
- No unnecessary warmup before the actual response
- Short acknowledgment is fine when it adds clarity — but go straight to the ask or answer
- Conversational, not robotic — write like a knowledgeable colleague, not a help article

| Instead of | Use |
|---|---|
| "Sure! What should this rule do?" | "What should this rule do?" |
| "Got it. To set up this rule, I need a few details first." | "I can help set that up. What should the rule do?" |
| "Great! I found 3 orders." | "Found **3 orders** from John Smith." |
| "Of course, I'd be happy to help with that." | "Happy to help. Is this happening with a shipment, a label, or something else?" |

---

## Bold text in AI responses

Use bold text to make AI responses easier to scan. Bold should help users quickly identify the most important parts of the response without reading every line.

### Use bold for

- The main answer, result, status, or recommendation the user needs to notice first
- Important counts, totals, percentages, dates, amounts, statuses, or thresholds when they are central to the response
- Short section anchors that organize the response, such as dates, categories, statuses, carriers, locations, or workflow steps
- The primary item in a list, such as a shipment, order, customer, carrier, location, report, automation, or setting
- The main action the user can take when the action is written as part of the response

### Avoid bold for

- Supporting details that do not need extra emphasis
- Every value in a response
- Repeated labels unless they are functioning as section anchors
- Full sentences or paragraphs
- Decorative emphasis that does not improve scanning or decision-making

**Rule of thumb:** Bold only what helps the user answer: "What matters most here?"

---

## Formatting conventions

### Breadcrumbs vs. action sequences

Use `>` for navigation paths. These show a location the user needs to go to.

Use `→` for sequences of selections or steps within a workflow. These are actions the user takes in order.

| Use | When | Example |
|---|---|---|
| `>` | Showing a path to a location in the product | Settings > Developer > API Keys |
| `→` | Showing a sequence of selections or form steps | Set Carrier → UPS → UPS Ground |

**Rule:** If you could replace it with "go to," use `>`. If you could replace it with "then select" or "then choose," use `→`.

---

## Assist

**When to use:** User asks for help, guidance, explanation, search, or support context.

**Structure:**
1. Answer — Direct answer, summary, or limitation statement
2. Guidance — Path, steps, context, supporting detail, or source
3. Next step — Link, CTA, follow-up, fallback, or escalation

**Examples:**

| User query | Answer | Guidance | Next step |
|---|---|---|---|
| "Where do I find my API keys?" | You can find API keys in Settings. | **Settings > Developer > API Keys** | Open API Keys |
| "How do I void a label?" | You can void a label within **30 days of purchase**, as long as it hasn't been picked up by the carrier. | 1. Go to **Shipments** 2. Find the label 3. Click to open details 4. Select **Void label** | Go to Shipments |
| "Why can't I connect my store?" | This is usually a credentials or permissions issue with your store. | 1. Go to Settings > **Stores** 2. Select your store and click **Reconnect** 3. Re-enter credentials 4. Check that **API access is enabled** if error persists | Go to Store Settings |
| "Find orders from John Smith last week." | Found **3 orders** from John Smith. | Showing results from **June 1–7** | View all orders |
| "What product cost me the most?" | Your highest cost product was **Priority Mail at $142**. | Based on orders from the **last 30 days** | View cost report |
| "Can you fix this carrier outage?" | I'm not able to fix carrier outages directly. | Check the carrier status page for updates | Get Support |

**Rules:**
- Include steps, paths, or links when helpful
- State limitations clearly

**When the answer is a limitation or fallback:**
1. Acknowledge what's outside AI's control — directly, without over-apologizing
2. Give actionable steps with **bold labels** so the user can scan what to try
3. End with prompt chips or an offer to help with a related workaround

### Assist: Choosing the next step

Use the lightest next step that helps the user continue.

| End with | Use when | Example |
|---|---|---|
| **Answer only** | The answer fully resolves the user's request and no action is needed. | "Shipment status shows where the shipment is in the fulfillment and delivery process." |
| **CTA / deep link** | There is one clear place the user should go or one clear action to take. | **Open API Keys** |
| **Prompt chips** | The response is complete and the assistant is offering optional follow-up paths or lightweight ways to continue. | **Compare rates**, **Review zones**, **Packaging costs** |
| **Fallback / support route** | AI cannot complete or confidently resolve the request. | **Check carrier status**, **Get support** |

**Decision rule:** If the answer resolves the request, stop there. If there is one clear action, use a CTA. If there are optional ways to continue after the response is complete, use prompt chips. If AI cannot resolve the request, use a fallback or support route.

---

## Insight

**When to use:** AI proactively surfaces a trend, issue, risk, opportunity, savings opportunity, or workflow improvement.

**Structure:**
1. Insight — Observation based on a meaningful signal, trend, issue, or opportunity
2. Supporting signal/source — The data, documentation, or signal that explains why the insight is being shown
3. Recommendation — A suggested next step based on the insight
4. Next step — A CTA, deep link, review action, or follow-up

**Rules:**
- Make the insight proactive
- Support with data or signals

### Insight + Recommend: Proactive insight rules

Insight + Recommend is only used when the AI proactively surfaces a meaningful signal and recommends a next step.

Do not use Insight + Recommend for user-requested data questions. If the user asks for data, analysis, explanation, or a result, start with Assist.

| Situation | Pattern | Why |
|---|---|---|
| User asks, "What product cost me the most?" | Assist | The user requested a result. |
| User asks, "Why did shipping costs increase?" | Assist | The user requested an explanation. |
| AI detects shipping costs increased this week | Insight + Recommend | The AI proactively surfaced a signal. |
| AI detects label failures spiked | Insight + Recommend | The AI proactively surfaced an issue. |
| AI detects a possible automation opportunity | Insight + Recommend | The AI proactively surfaced an opportunity. |

### Proactive insight anatomy

An insight proactively surfaces a meaningful trend, risk, opportunity, savings, or workflow improvement before the user asks.

| Part | Purpose |
|---|---|
| **01 Insight** | What the AI noticed. |
| **02 Context** | Why the insight is being shown. Include supporting data or source when helpful. |
| **03 Recommendation / Next step** | What the user should do next. |

**Decision rule:** If the AI notices it first, use Insight + Recommend. If the user asks for it first, use Assist. If the user wants to apply or create something from the insight, move to Configure.

---

## Configure

**When to use:** User wants to create, apply, or generate something with AI.

**Structure:**
1. Confirm intent — Direct answer, scope confirmation
2. Plan / Preview — Show what will be created or changed
3. Execution / Next steps — Manual configuration instructions, follow-up options, support details

**Examples:**

| User query | Confirm intent | Plan preview | Next steps |
|---|---|---|---|
| "Create a rule to use UPS Ground for orders over $50" | Here is a draft of your automation rule based on the order total threshold you requested. | **Rule Name:** UPS Ground for High-Value Orders. **Criteria:** Order Total is greater than [Enter Dollar Amount]. **Actions:** Set Carrier → UPS → UPS Ground | Apply rule / Cancel |
| "Change these orders to FedEx Ground" | I'll update the selected orders to use FedEx Ground. Here's a summary of what will change. | **Orders affected:** 12 orders currently assigned to other carriers. **New carrier:** FedEx Ground. **Note:** Rate differences may apply. Review before confirming. | Confirm update / Cancel |

**Rules:**
- Always preview before applying
- Describe what changed after completion

### Clarification cards

Use when the assistant needs the user to choose between multiple valid interpretations before it can produce the right answer, chart, filtered view, or action.

#### Use when:

- A term has multiple meanings, like "print volume"
- The requested object is unclear, like "show me problem shipments"
- The scope is missing: location, timeframe, carrier, store, or account
- The AI needs a decision before taking action
- Guessing could produce the wrong data or wrong workflow

#### Avoid when:

- The AI can answer with a reasonable default
- The ambiguity is low risk
- Prompt chips would be enough for optional follow-up
- The user already provided enough context

**Key difference:** Clarification card = required input before continuing. Prompt chips = optional next steps after answering.

---

## Use Case Mapping

| Use Case | Example ask | Pattern | End State |
|---|---|---|---|
| Find / navigate | "Where do I find API keys?" | Assist | User gets the exact location, path, and link |
| Learn / guidance | "How do I void a label?" | Assist | User gets clear instructions with a path |
| Support / troubleshooting | "Why can't I connect my store?" | Assist | User understands the likely issue, fix steps, and where to go if unresolved |
| Human escalation | "I need to talk to a person." | Assist | User is routed to the right support path |
| Ask my data | "What product cost me the most?" | Assist | User gets the answer with supporting data |
| Create / generate | "Create a rule to use UPS Ground for orders over $50." | Configure | AI drafts the rule |
| Apply / update | "Change these orders to FedEx Ground." | Configure | AI summarizes affected items, previews change, requires confirmation |
| Proactive insight | Machine detects optimization or issue | Insight | User sees the alert/CTA and can review, act, or dismiss |
| Unsupported / unknown | "Can you fix this carrier outage?" | Assist | AI explains the limitation, provides the best available next step |
