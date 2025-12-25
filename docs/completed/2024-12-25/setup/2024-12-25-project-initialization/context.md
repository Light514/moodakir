# Spec: Moodakir MVP - Project Initialization

**Objective**: Set up complete technical stack for Moodakir PWA (Next.js 15 + TypeScript + Supabase + shadcn/ui + PWA) and establish Hybrid Documentation System.

**Context**:
- Link to: [project.md](../../../project.md) - Full project specification
- Current state: Empty repository with only project.md and hybrid_documentation_system.md
- Motivation: Need complete foundation before building features in iterative approach

**Scope**:
- In:
  - Hybrid Documentation System (NOW.md, STACK.md, CLAUDE.md, docs/)
  - Next.js 15 project initialization with App Router
  - TypeScript configuration
  - Tailwind CSS + shadcn/ui setup
  - Framer Motion for animations
  - Supabase client configuration (using user's existing project)
  - PWA configuration with next-pwa
  - Basic project structure (/app, /components, /lib, /public)
  - Git ignore for Next.js and env files

- Out:
  - Database schema creation (Phase 2)
  - Component development (Phase 2+)
  - Supabase auth setup (Phase 2)
  - Actual features (counter, stats, etc.)
  - Deployment (later)

**Files**:
- Root level: `NOW.md`, `STACK.md`, `CLAUDE.md` (created)
- `docs/active/2024-12-25-project-initialization/` (this folder)
- `package.json` (to be created by Next.js init)
- `next.config.js` (to be created)
- `tailwind.config.ts` (to be created)
- `.gitignore` (to be updated)
- `components.json` (shadcn/ui config)
- `lib/supabase/client.ts` (Supabase client)

**Proof**:
```bash
# Verify Next.js installation
npm run dev
# Expected: Development server starts on http://localhost:3000

# Verify TypeScript
npm run build
# Expected: No TypeScript errors, successful build

# Verify shadcn/ui
# Expected: components/ui folder exists with base components

# Verify PWA config
# Expected: public/manifest.json exists

# Manual verification
# Expected: Documentation files (NOW.md, STACK.md, CLAUDE.md) exist and are complete
```

**Risk**: Low
- Standard project initialization
- No existing code to break
- Using proven stack from project.md
- User has Supabase project ready

**Time**: 30-45 minutes
- Documentation: 10 minutes (done)
- Next.js init: 5 minutes
- Dependencies: 10 minutes
- Configuration: 10 minutes
- Verification: 5-10 minutes

**Approval**: ✅ User approved (low risk, auto-approved per CLAUDE.md)
