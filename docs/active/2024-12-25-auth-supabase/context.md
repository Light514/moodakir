# Spec: Supabase Authentication & User Profiles

**Objective**: Implement complete authentication flow with Supabase (signup, login, logout) and user profile management (username, country).

**Context**:
- Link to: [project.md](../../../project.md#phase-2-auth--persistence-week-1---days-3-4)
- Current state: Counter works but no user system or persistence
- Motivation: Need user accounts for cloud sync, stats tracking, and future social features (leaderboards)

**Scope**:
- In:
  - Supabase Auth setup (email/password)
  - Database schema: profiles, user_preferences tables
  - Login/Signup pages with forms
  - Protected routes (middleware)
  - Session management
  - User profile creation (username, country)
  - Logout functionality
  - Auth state management
  - Redirect flows (login → counter, logout → home)

- Out:
  - Counter persistence to database (next task after auth)
  - Password reset flow (future)
  - Social auth (Google, etc.) (future)
  - Email verification (future)
  - Profile editing page (future)

**Files**:
- `app/login/page.tsx` - Login/signup page (NEW)
- `app/api/auth/callback/route.ts` - Auth callback handler (NEW)
- `middleware.ts` - Route protection (NEW)
- `lib/supabase/middleware.ts` - Supabase middleware helper (NEW)
- `components/auth/auth-form.tsx` - Login/signup form component (NEW)
- `components/auth/logout-button.tsx` - Logout button (NEW)
- `lib/hooks/use-user.ts` - User session hook (NEW)
- `supabase/migrations/001_create_profiles.sql` - Database schema (NEW)

**Proof**:
```bash
# Supabase setup:
# 1. Create tables in Supabase dashboard
# 2. Enable email auth in Supabase settings

npm run dev
# Manual test:
# 1. Visit /login - see login/signup form
# 2. Create account - redirects to /counter
# 3. Visit /counter without auth - redirects to /login
# 4. Logout - redirects to home
# 5. Login with existing account - works
# Expected: Complete auth flow functional
```

**Risk**: Medium
- Database schema changes (requires Supabase dashboard work)
- Auth flow critical for app security
- Middleware affects all routes
- Need user approval for auth strategy

**Time**: 60-90 minutes
- Database schema: 15 min
- Auth pages: 20 min
- Middleware & route protection: 15 min
- Auth components: 20 min
- Session management: 10 min
- Testing: 10-20 min

**Approval**: ⏳ Needs user approval (Medium risk)
