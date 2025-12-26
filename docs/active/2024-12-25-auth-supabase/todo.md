# TODO: Supabase Authentication

## Database Setup (Manual in Supabase Dashboard)
- [ ] Create SQL script for tables
- [ ] User executes SQL in Supabase dashboard
- [ ] Verify tables created

## Auth Pages
- [ ] Create app/login/page.tsx
- [ ] Create auth-form.tsx component (login/signup tabs)
- [ ] Create app/api/auth/callback/route.ts

## Route Protection
- [ ] Create middleware.ts for protected routes
- [ ] Create lib/supabase/middleware.ts helper
- [ ] Update counter page to be protected

## User Session Management
- [ ] Create use-user.ts hook for session
- [ ] Create logout-button.tsx component
- [ ] Add logout to counter page

## Auth Flow
- [ ] Implement signup (email/password + username/country)
- [ ] Implement login (email/password)
- [ ] Implement logout
- [ ] Redirect logic (login → counter, logout → home)

## Testing
- [ ] Test signup flow
- [ ] Test login flow
- [ ] Test route protection
- [ ] Test logout
- [ ] Verify profile creation

## Commit
- [ ] Commit auth implementation
