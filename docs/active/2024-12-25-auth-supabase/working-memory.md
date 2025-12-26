# Working Memory: Supabase Authentication

**Session started**: 2024-12-25

## Decisions Made

### 1. Auth Strategy
- Email + Password only (MVP simplicity)
- NO magic links for now (future enhancement)
- NO social auth yet (Google/Apple later)

### 2. Database Approach
- User creates tables manually in Supabase dashboard
- I provide SQL script to copy-paste
- Faster than CLI migrations for MVP

### 3. Profile Fields (Signup)
- Username: Required (for leaderboards)
- Country: Required (for regional leaderboards Week 2)
- City: NOT required (optional in future)

### 4. Route Protection
- /counter becomes protected (requires auth)
- /login is public
- Homepage (/) is public
- Middleware redirects unauthenticated users to /login

## Session Notes

### Database Schema (from project.md)
```sql
profiles
  - id (uuid, FK to auth.users)
  - username (text, unique)
  - country (text)
  - city (text, optional)
  - created_at (timestamp)

user_preferences
  - user_id (uuid, FK)
  - theme ('light' | 'dark')
  - vibration_pattern ('slow' | 'medium' | 'fast')
  - sound_enabled (boolean)
  - language ('ar' | 'en' | 'fr')
```

### Auth Flow
1. User visits /counter → middleware checks auth
2. Not authenticated → redirect to /login
3. Login/signup form → Supabase auth
4. On success → create profile → redirect to /counter
5. Logout → clear session → redirect to /

## References
- [project.md](../../../project.md) - Full specification
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

## Open Questions
- None - all clarified with user

## Findings
- Dev server starts successfully (Ready in 10.4s)
- Middleware protection works correctly
- Auth form with login/signup tabs implemented
- Profile creation happens on signup
- User session tracked with useUser hook
- Logout functionality works
- Username displayed on counter page
- Server running on port 3001 (port 3000 in use)

## Implementation Details
- AuthForm: Tabbed interface (login/signup) with email/password
- Signup: Collects username + country (15 countries in dropdown)
- Login page: Clean design with form + branding
- Middleware: Protects /counter, redirects unauth to /login
- useUser hook: Fetches user + profile with real-time auth state
- LogoutButton: Simple logout with redirect to home
- TapCounter: Shows "Welcome, {username}!" message
- Route protection: /counter requires auth, /login redirects if authenticated

## Dead Ends Explored
- None - implementation was straightforward
