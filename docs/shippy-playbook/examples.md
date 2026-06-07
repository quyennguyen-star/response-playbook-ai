# Examples

Real examples from the playbook. These are the source of truth for how the AI assistant should respond in each situation.

---

## Assist Examples

### Find / Navigate
**User:** "Where do I find my API keys?"
- **Answer:** You can find API keys in Settings.
- **Guidance:** Settings > Developer > API Keys
- **Next step:** Open API Keys

### Learn / Guidance
**User:** "How do I void a label?"
- **Answer:** You can void a label within 30 days of purchase — as long as it hasn't been picked up by the carrier.
- **Guidance (steps):** 1. Go to Shipments → 2. Find the label → 3. Click to open details → 4. Select Void label
- **Next step:** Go to Shipments

### Support / Troubleshooting
**User:** "Why can't I connect my store?"
- **Answer:** This is usually a credentials or permissions issue with your store.
- **Guidance (steps):** 1. Go to Settings > Stores → 2. Select your store and click Reconnect → 3. Re-enter your store credentials → 4. If error persists, check that API access is enabled in your store admin
- **Next step:** Go to Store Settings

### Search / Ask my data
**User:** "Find orders from John Smith last week."
- **Answer:** Found 3 orders from John Smith.
- **Guidance:** Showing results from June 1–7
- **Next step:** View all orders

**User:** "What product cost me the most?"
- **Answer:** Your highest cost product was Priority Mail at $142.
- **Guidance:** Based on orders from the last 30 days
- **Next step:** View cost report

### Unsupported
**User:** "Can you fix this carrier outage?"
- **Answer:** I'm not able to fix carrier outages directly.
- **Guidance:** Check the carrier status page for updates
- **Next step:** Get Support

---

## Configure Examples

### Create / Generate
**User:** "Create a rule to use UPS Ground for orders over $50"
- **Confirm intent:** Here is a draft of your automation rule based on the order total threshold you requested.
- **Preview:** Rule Name / Criteria: Order Total > $50 / Action: UPS Ground
- **Next steps:** Apply rule / Cancel

### Apply / Update
**User:** "Change these orders to FedEx Ground"
- **Confirm intent:** I'll update the selected orders to use FedEx Ground. Here's a summary of what will change.
- **Preview:** 12 orders affected / Change: FedEx Ground / Note: Rate differences may apply
- **Next steps:** Confirm update / Cancel

---

## Clarification Examples

### Shipping Costs
**User:** "Help me improve shipping costs"
**AI:** I can help improve shipping costs. What would you like to look at first?
**Chips:** Compare rates / Review shipping zones / Reduce packaging costs / Balance delivery speed and cost
*→ Routes to: Assist or Configure*

### Fix this issue
**User:** "Fix this issue"
**AI:** I'd like to help. Can you tell me more about what's happening?
**Chips:** Label not printing / Store not connecting / Order not syncing / Carrier error
*→ Routes to: Assist or Escalation*

### Refinement Card Example
**User:** "Help me fix my shipments"
**Card question:** "What do you want help with?"
**Options:** Delayed shipments / Failed label creation / Tracking not updating / Carrier exceptions

---

## Capability Boundary Examples

### Limitation message
**User:** "Can you fix this carrier outage?"
**AI:** That's outside what I can fix directly — carrier outages are managed by the carriers themselves.

Steps to investigate:
- **Check ShipStation's status page** for any reported issues with carrier integrations.
- **Check the carrier's status page directly** — UPS, FedEx, and USPS all have service alert pages.
- **Contact ShipStation support** if the outage is affecting your fulfillment workflows. They can often provide ETAs on resolution.

**Chips:** Check carrier status / Get Support / Pause fulfillment rules

### Deep link
**User:** "Refund all of these labels for me."
**AI:** I can't refund these automatically here. You can review eligible labels and start the refund process from the Labels page.
**Button:** Go to Labels

### Support handoff
**User:** "Talk to support for me."
**AI:** I can't contact support from here, but you can continue in Help Center to get support.
**Button:** Get Support

---

## Escalation Examples

### Billing or sensitive issue
**User:** "I need help with my billing issue"
**AI:** Here's the Help Center where you can contact support:
**Button:** Navigate to Help Center
From there you can browse help articles or reach out to Support directly via chat or email.

### Direct support request
**User:** "I need support"
**AI:** Here's where you can get help:
**Button:** Get Support
You can reach our support team via chat or email through the Help Center.

---

## Find Refunded Shipments (Playground Use Case)

### Few results
**User:** "Show all refunded shipments for this month."
**AI:** Found **4 refunded shipments** this month.
**CTA:** View refunded shipments
**Note:** Opens Shipments filtered by: Refunded · This month

### Many results
**User:** "Show all refunded shipments for this month."
**AI:** Found **32 refunded shipments** this month.
**CTA:** View refunded shipments
**Note:** Review, sort, and take action from the Shipments page.

### No results
**User:** "Show all refunded shipments for this month."
**AI:** No refunded shipments found for this month.
**CTA:** View Shipments
**Note:** Opens Shipments filtered by: Refunded · This month
