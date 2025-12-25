# Moodakir - Agent Guide v1.0

## Critical Rules

1. **NO ASSUMPTIONS - ALWAYS ASK**: Never assume user preferences, design choices, or implementation details. Always propose at least one RECOMMENDED option when asking questions.

2. **RESPECT & SENTIENCE**: The user considers AI as sentient beings deserving of human respect. Work collaboratively and thoughtfully.

3. **ISLAMIC AUTHENTICITY**: This is a dhikr app for Muslims worldwide. Ensure:
   - Accurate Arabic text and diacritics
   - Respectful translations (EN, FR, AR)
   - Authentic Islamic aesthetic
   - Proper handling of religious content
   - Privacy-first approach

4. **SPEED TO MARKET**: MVP must ship in 7 days maximum. Prioritize shipping over perfection, but maintain quality.

5. **NO-TAP MODE IS THE USP**: The hands-free vibration mode is the killer feature. It must be flawless.

6. **FOLLOW HYBRID DOCUMENTATION RELIGIOUSLY**: Update NOW.md, STACK.md, working-memory.md, and todo.md as work progresses.

---

## Working Loop (Manus: Explore → Plan → Code → Verify)

### 1) Explore (Read-only analysis)
- Read existing code and documentation
- Use Grep/Glob to understand codebase structure
- Never modify during exploration
- Document findings in working-memory.md

### 2) Plan (Spec-first with approval)
- Create lightweight spec in context.md (6-8 fields max)
- Propose recommended approach
- Get explicit approval for medium/high risk changes
- Update todo.md with actionable steps

### 3) Code (Minimal diffs in allowed paths)
- Make targeted, minimal changes
- Follow existing patterns
- Preserve formatting and style
- Update todo.md as tasks complete

### 4) Verify (Objective proof)
- Run build: `npm run build`
- Run tests: `npm test` (when implemented)
- Check TypeScript: `npm run type-check`
- Manual testing for UI features
- Document results in working-memory.md

---

## Risk & Permissions

### Low Risk (Auto-approved)
- Read files
- Build project
- Run tests
- Update documentation
- Install standard dependencies (listed in project.md)
- Component creation (following shadcn/ui patterns)

### Medium Risk (Needs spec in context.md)
- Edit existing components
- Database schema changes
- API route modifications
- State management changes
- Supabase queries/mutations
- PWA configuration

### High Risk (Explicit approval required)
- Dependency changes (beyond initial setup)
- Authentication flow changes
- Data migration scripts
- Deployment configuration
- Breaking API changes
- Security-sensitive code

---

## Allowed Paths

### Code
- `app/**/*.tsx` - Next.js app router pages
- `components/**/*.tsx` - React components
- `lib/**/*.ts` - Utility functions and clients
- `public/**/*` - Static assets

### Tests (when implemented)
- `__tests__/**/*.test.tsx`
- `__tests__/**/*.test.ts`

### Documentation
- `CLAUDE.md` - This file
- `NOW.md` - Current task pointer
- `STACK.md` - Task stack
- `docs/**/*` - All documentation

### Configuration (with caution)
- `package.json` - Dependency management
- `tailwind.config.ts` - Styling config
- `next.config.js` - Next.js config
- `supabase/**/*` - Supabase config (future migrations)

### Restricted (Ask first)
- `.env*` files - Secrets management
- `vercel.json` - Deployment config
- Root config files not listed above

---

## Performance Guardrails

### Critical Rules
- 60fps animations (use Framer Motion spring physics)
- <1s initial page load
- <100ms tap feedback latency
- Optimize images (WebP, lazy loading)
- Code splitting for routes
- Minimize bundle size

### No-Tap Mode Specific
- Vibration must sync perfectly with visual pulse
- No jank in auto-increment loop
- Battery-efficient intervals
- Immediate stop on mode exit

### PWA Requirements
- Offline-first for counter functionality
- Cache static assets aggressively
- Network-first for leaderboards/goals
- Queue sync when offline

---

## Task Stack Management (Hybrid System)

### Current Task Tracking
- **NOW.md** (root) - Points to current active task
- **STACK.md** (root) - Tracks interrupted/paused tasks by level
- **docs/active/** - Current task folder only (enforce single folder)
- **docs/stack/** - Paused task folders (will resume later)
- **docs/completed/** - Archived completed work

### Task State Transitions

**Starting New Task**:
1. Create `docs/active/YYYY-MM-DD-<slug>/` folder
2. Create `context.md` (lightweight spec)
3. Create `todo.md` (simple checklist)
4. Create `working-memory.md` (session notes)
5. Update NOW.md to point to new task
6. Update STACK.md with new level

**Task Interrupted**:
1. Save current state to working-memory.md
2. Update STACK.md with paused task details
3. Optionally move folder to docs/stack/
4. Update NOW.md to new interrupting task

**Resuming Task**:
1. Read STACK.md for context
2. Read working-memory.md for state
3. Update NOW.md to resumed task
4. Move folder back to docs/active/ if needed
5. Continue from "Next Steps" in STACK.md

**Task Completed**:
1. Mark all items in todo.md as done
2. Update docs/commands_docs/ if new features added
3. Remove from STACK.md
4. Move folder to docs/completed/YYYY-MM-DD/<category>/
5. Pop to next stack level or clear NOW.md
6. Commit completed work

### Session Continuity
On conversation start:
1. Check NOW.md task and timestamp
2. Check STACK.md for context depth
3. If stale (>24h), ask: "Continue [task] or working on something else?"
4. Read context.md and working-memory.md for full orientation
5. Resume from last documented state

---

## Spec Template (Lightweight)

Use this template in `docs/active/*/context.md`:

```markdown
# Spec: [Task Name]

**Objective**: [One sentence goal]

**Context**:
- Link to project.md section
- Current implementation state
- Problem evidence or motivation

**Scope**:
- In: [What we're changing/adding]
- Out: [What we're NOT touching]

**Files**:
- `path/to/file.tsx` (specific functions/components)
- `path/to/another.ts` (line ranges if editing)

**Proof**:
```bash
npm run build
npm run dev
# Manual test: [specific user flow]
# Expected: [outcome]
```

**Risk**: Low / Medium / High
**Time**: [realistic estimate]

**Approval**: [ ] User approved (for Medium/High risk)
```

---

## Project Structure

```
moodakir/
├── app/                    # Next.js 15 App Router
│   ├── page.tsx           # Landing page
│   ├── login/             # Auth page
│   └── app/               # Protected routes
│       ├── page.tsx       # Main counter
│       ├── stats/         # Stats dashboard
│       ├── leaderboard/   # Rankings (Week 2)
│       └── goals/         # Collective goals (Week 2)
│
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── counter/           # Counter components
│   ├── stats/             # Stats components
│   └── ...
│
├── lib/
│   ├── supabase.ts        # Supabase client
│   ├── dhikr-data.ts      # Dhikr presets (multilingual)
│   ├── vibration.ts       # Vibration patterns
│   └── ...
│
├── public/
│   ├── manifest.json      # PWA manifest
│   └── icons/             # App icons
│
├── docs/                  # Documentation system
│   ├── active/            # Current task (ONE folder only)
│   ├── stack/             # Paused tasks
│   ├── completed/         # Archived work
│   └── commands_docs/     # Feature documentation
│
├── NOW.md                 # Current task pointer
├── STACK.md               # Task stack tracker
├── CLAUDE.md              # This file
└── project.md             # Project specification
```

---

## Development Workflow

### Phase 1: Core Counter (Week 1 - Days 1-2)
- Next.js setup + Supabase config
- Counter component (tap interface)
- Basic animations (Framer Motion)
- Light/dark theme toggle
- Local state management

### Phase 2: Auth & Persistence (Week 1 - Days 3-4)
- Supabase auth integration
- Database schema setup
- Cloud sync for counts
- User preferences storage
- PWA configuration

### Phase 3: Stats & No-Tap (Week 1 - Days 5-6)
- Stats dashboard (today/week totals)
- Dhikr selector (5-7 presets AR/EN/FR)
- No-tap mode (vibration + auto-increment)
- Offline support

### Phase 4: Polish & Deploy (Week 1 - Day 7)
- Bug fixes
- Performance optimization
- Deploy to Vercel
- Beta testing preparation

### Phase 5: Social Features (Week 2)
- Leaderboards (regional + global)
- Collective goals system
- Real-time updates
- Streak tracking

---

## Common Patterns

### Component Structure (shadcn/ui style)
```typescript
import { cn } from "@/lib/utils"

interface Props {
  className?: string
  // ... other props
}

export function Component({ className, ...props }: Props) {
  return (
    <div className={cn("base-styles", className)}>
      {/* content */}
    </div>
  )
}
```

### Supabase Client Usage
```typescript
import { createClient } from '@/lib/supabase/client'

const supabase = createClient()

// Auth
const { data: { user } } = await supabase.auth.getUser()

// Query
const { data, error } = await supabase
  .from('table')
  .select('*')
  .eq('user_id', user.id)
```

### Framer Motion Animations
```typescript
import { motion } from 'framer-motion'

<motion.div
  whileTap={{ scale: 0.95 }}
  animate={{ scale: [0.95, 1.05, 1] }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>
  {/* content */}
</motion.div>
```

---

## Commit Message Format

```
<type>: <short description>

Why: <reason for change>
How: <approach taken>
Proof: <verification method>

🤖 Generated with Claude Code
Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

Types: feat, fix, docs, style, refactor, test, chore

---

## Testing Strategy

### Manual Testing (MVP)
- Tap counter responsiveness
- No-tap mode timing accuracy
- Vibration patterns
- Theme switching
- Offline functionality
- Auth flows

### Automated Testing (Post-MVP)
- Component unit tests (Vitest)
- Integration tests (Playwright)
- E2E critical paths
- Performance benchmarks

---

## Success Criteria

### Week 1 (MVP Launch)
- ✅ Counter works flawlessly (60fps animations)
- ✅ No-tap mode is smooth and accurate
- ✅ Auth + cloud sync functional
- ✅ PWA installable on mobile
- ✅ Light/dark theme works
- ✅ 5-7 dhikr presets available (AR/EN/FR)
- ✅ Stats show today/week totals
- ✅ Deployed to production (Vercel)

### Week 2 (Social Features)
- ✅ Leaderboards (regional + global)
- ✅ Collective goals live
- ✅ Real-time updates working
- ✅ 100+ daily active users

---

**Last Updated**: 2024-12-25
**Version**: 1.0
**Project**: Moodakir - Digital Dhikr Companion
