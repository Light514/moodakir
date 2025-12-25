# Spec: Core Counter - Tap Interface with Animations

**Objective**: Build the main counter component with satisfying tap animations, increment/decrement functionality, and visual feedback.

**Context**:
- Link to: [project.md](../../../project.md#phase-1-core-counter-week-1---days-1-2)
- Current state: Fresh Next.js app with placeholder homepage
- Motivation: Counter is the core feature of Moodakir - users need a delightful, responsive tap experience

**Scope**:
- In:
  - Counter component with large tap button
  - Count display (large, prominent numbers)
  - Increment/decrement functionality
  - Tap animations (Framer Motion spring physics)
  - Visual feedback (scale, glow pulse)
  - Haptic feedback (vibration on tap)
  - Reset counter button
  - Local state management (no persistence yet)
  - Basic layout with clean design
  - Light theme implementation (dark mode later)

- Out:
  - Cloud sync (Phase 2)
  - Auth (Phase 2)
  - Dhikr selector (Phase 2)
  - No-tap mode (Phase 3)
  - Stats dashboard (Phase 3)
  - Theme switcher (Phase 2)
  - Persistence/localStorage (Phase 2)

**Files**:
- `app/page.tsx` - Update to show counter or redirect
- `app/counter/page.tsx` - Main counter page (NEW)
- `components/counter/tap-counter.tsx` - Counter component (NEW)
- `components/counter/counter-button.tsx` - Tap button with animations (NEW)
- `components/counter/count-display.tsx` - Large number display (NEW)
- `lib/hooks/use-counter.ts` - Counter state hook (NEW)

**Proof**:
```bash
npm run dev
# Manual test:
# 1. Navigate to /counter
# 2. Tap the button - count increments
# 3. Animations are smooth (60fps)
# 4. Vibration works on tap (mobile/supported browsers)
# 5. Reset button works
# Expected: Delightful, responsive counter experience
```

**Risk**: Low
- No database changes
- No auth required
- Pure frontend component
- Using established Framer Motion patterns

**Time**: 45-60 minutes
- Counter hook: 10 min
- Counter button with animations: 15 min
- Count display: 10 min
- Main counter page: 10 min
- Styling & polish: 15 min

**Approval**: ✅ Auto-approved (low risk)
