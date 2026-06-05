# Playground Rules

The playground is a behavior testing tool for product teams. It lets PMs select an AI use case and preview the recommended response. It is not a component picker.

---

## Purpose

Product teams use the playground to:
- See how AI *should* respond for a given use case
- Test different result states (few results, many results, no results)
- Compare response behavior across use cases before building
- Verify that a new use case fits an existing response pattern

---

## Structure

**Left rail — Use Case Library**
- Grouped by response pattern: Assist, Insight, Configure
- Each row shows: use case name + recommended UI + risk level

**Middle column — Test Setup**
- Use case name and user intent
- Example prompt
- Response pattern badge
- Recommended UI treatment
- Result state selector
- Surface selector (Sidebar / Sheet / Modal)
- Data source

**Right panel — AI Response Preview**
- Ask ShipStation side panel UI
- Empty state: icon + headline + example prompt as starter chip
- Active state: user message + scripted AI response + CTA + filter summary

---

## Use Cases Covered

| Use Case | Pattern | Recommended UI | States |
|---|---|---|---|
| Find refunded shipments | Assist | Result summary + CTA | Few (4), Many (32), No results |
| Show delayed shipments | Assist | Result summary + CTA | Few (3), Many (18), No results |
| Create a carrier rule | Configure | Preview + Confirm | Rule drafted, Conflict found |
| Shipping cost spike | Insight | Insight card + CTA | Spike detected, No change |

---

## Response Rules for "Find refunded shipments"

Do not render a shipments table inside the AI response. The AI should route users to the Shipments page as the source of truth.

**Few results (4):**
> Found 4 refunded shipments this month.
> [View refunded shipments]
> Opens Shipments filtered by: Refunded · This month

**Many results (32):**
> Found 32 refunded shipments this month.
> [View refunded shipments]
> Review, sort, and take action from the Shipments page.

**No results:**
> No refunded shipments found for this month.
> [View Shipments]
> Opens Shipments filtered by: Refunded · This month

---

## Adding a New Use Case to the Playground

1. Add an entry to the `UC` object in `playground.html` with: `shell`, `content`, `prompt`, and `states[]`
2. Each state needs: `label`, `msg` (supports `**bold**`), `cta`, `note`
3. Add a button to the left rail `<nav>` with `data-uc="your-id"`
4. The panel resets to empty state when switching use cases; result state tabs trigger `pgSetState(idx)`
