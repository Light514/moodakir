# Moodakir - Digital Dhikr Companion

## Vision
Une PWA moderne de comptage de dhikr qui élimine la friction et crée de l'engagement communautaire. L'USP principal: mode no-tap avec vibration rythmique permettant de compter sans regarder/toucher son phone, combiné à une gamification sociale qui fédère les musulmans du monde entier autour de l'invocation.

## Objectifs MVP (Semaine 1)
- Ship dans 7 jours max
- Valider product-market fit avec 20-30 beta users
- Traction organique via partage social (mode no-tap = shareable)
- Poser les bases pour features sociales (leaderboards, goals)

## Stack Technique
- **Framework**: Next.js 15 + TypeScript + App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animation**: Framer Motion
- **Backend**: Supabase (Auth + Database + Realtime)
- **PWA**: next-pwa
- **Deploy**: Vercel
- **Domain**: moodakir.com + moodakir.app

## Architecture MVP

### Pages/Routes
```
/                    → Landing/Auth gate
/app                 → Main counter interface (protected)
/app/stats           → Stats dashboard
/app/leaderboard     → Regional/global leaderboards (Week 2)
/app/goals           → Collective goals tracker (Week 2)
/login               → Auth page
```

### Core Components
```
Counter              → Main tap interface with animations
NoTapMode           → Auto-increment with vibration rhythms
ThemeSwitcher       → Toggle light/dark
DhikrSelector       → Choose from preset dhikr
StatsCard           → Display today/week/month/all-time totals
LeaderboardCard     → Regional rankings (Week 2)
GlobalGoalProgress  → Collective goal tracker (Week 2)
StreakTracker       → Daily streak counter
```

### Database Schema (Supabase)
```sql
profiles
  - id (uuid, FK to auth.users)
  - username (text, unique)
  - country (text)
  - city (text, optional)
  - created_at (timestamp)

dhikr_counts
  - id (uuid)
  - user_id (uuid, FK)
  - dhikr_type (text)
  - count (integer)
  - date (date)
  - created_at (timestamp)
  - UNIQUE(user_id, dhikr_type, date)

user_preferences
  - user_id (uuid, FK)
  - theme ('light' | 'dark')
  - vibration_pattern ('slow' | 'medium' | 'fast')
  - sound_enabled (boolean)
  - language ('ar' | 'en' | 'fr')

streaks
  - user_id (uuid, FK)
  - current_streak (integer)
  - longest_streak (integer)
  - last_activity_date (date)

global_goals
  - id (uuid)
  - goal_type (text) -- e.g., 'forgiveness_100k', 'salawat_1m'
  - target_count (bigint)
  - current_count (bigint)
  - start_date (date)
  - end_date (date)
  - is_active (boolean)
```

## Features Prioritization

### MUST HAVE (Semaine 1)
✅ Counter avec tap animation satisfaisante
✅ Mode no-tap (vibration + auto-increment, 3 vitesses)
✅ Auth + cloud sync (Supabase)
✅ Light/Dark mode
✅ 5-7 dhikr pré-définis (multilingual)
✅ Stats basiques (today + this week total)
✅ PWA installable
✅ Country selection (pour leaderboards futurs)

### HIGH PRIORITY (Semaine 2)
🎯 Leaderboard régional (par pays)
🎯 Leaderboard global
🎯 Goal collectif (ex: "100K Astaghfirullah worldwide")
🎯 Streak tracking (jours consécutifs)
🎯 Multi-compteurs (dhikr simultanés)
🎯 Partage de stats (image export pour social)

### MEDIUM PRIORITY (Semaine 3-4)
📊 Wrapped generator (récap annuel/Ramadan)
📊 Bienfaits notifications (educational)
📊 Custom dhikr creation
📊 Challenges communautaires
📊 Badges/achievements

### FUTURE (Post-Ramadan)
- Friends system
- Private groups/circles
- Prayer time integration
- Qibla finder
- Audio dhikr guides

## Dhikr Data Reference

### Preset Dhikr (MVP)

1. **SubhanAllah wa bihamdihi**
   - AR: سُبْحَانَ اللهِ وَبِحَمْدِهِ
   - EN: Glory and praise to Allah
   - FR: Gloire et louange à Allah
   - Target: 100x
   - Benefit_EN: "A palm tree planted in Paradise for each recitation"
   - Benefit_FR: "Un palmier planté au Paradis pour chaque récitation"
   - Benefit_AR: "شجرة في الجنة لكل تسبيحة"

2. **La ilaha illa Llah wahdahu**
   - AR: لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
   - EN: None has the right to be worshipped except Allah alone, without partner. To Him belongs all sovereignty and praise, and He is capable of all things
   - FR: Nulle divinité digne d'adoration sauf Allah, Seul sans associé. À Lui la royauté et la louange, Il est capable de toute chose
   - Target: 100x
   - Benefit_EN: "Equivalent to freeing 10 slaves"
   - Benefit_FR: "Équivaut à affranchir 10 esclaves"
   - Benefit_AR: "كعتق عشر رقاب"

3. **Astaghfirullah**
   - AR: أَسْتَغْفِرُ اللّٰهَ
   - EN: I seek forgiveness from Allah
   - FR: Je demande pardon à Allah
   - Target: Unlimited
   - Benefit_EN: "Opens doors of provision and removes distress"
   - Benefit_FR: "Ouvre les portes de subsistance et dissipe l'angoisse"
   - Benefit_AR: "يفتح أبواب الرزق ويزيل الهم"

4. **Astaghfirullah wa atubu ilayh**
   - AR: أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ
   - EN: I seek forgiveness from Allah and repent to Him
   - FR: Je demande pardon à Allah et je me repens à Lui
   - Target: 70-100x/day
   - Benefit_EN: "The Prophet ﷺ sought forgiveness more than 70 times daily"
   - Benefit_FR: "Le Prophète ﷺ demandait pardon plus de 70 fois par jour"
   - Benefit_AR: "كان النبي ﷺ يستغفر أكثر من سبعين مرة في اليوم"

5. **Allahumma salli 'ala Muhammad**
   - AR: اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ
   - EN: O Allah, send prayers upon Muhammad
   - FR: Ô Allah, prie sur Muhammad
   - Target: Unlimited
   - Benefit_EN: "Allah sends blessings 10 times upon who sends blessings once upon the Prophet ﷺ"
   - Benefit_FR: "Allah prie 10 fois sur celui qui prie une fois sur le Prophète ﷺ"
   - Benefit_AR: "من صلى علي مرة صلى الله عليه عشرا"

6. **SubhanAllah**
   - AR: سُبْحَانَ اللهِ
   - EN: Glory to Allah
   - FR: Gloire à Allah
   - Target: 33x (after prayers)
   - Benefit_EN: "Light in the balance on Judgment Day"
   - Benefit_FR: "Lumière dans la balance au Jour du Jugement"
   - Benefit_AR: "نور في الميزان يوم القيامة"

7. **Alhamdulillah**
   - AR: ٱلْحَمْدُ لِلّٰهِ
   - EN: All praise to Allah
   - FR: Louange à Allah
   - Target: 33x (after prayers)
   - Benefit_EN: "Fills the scales of good deeds"
   - Benefit_FR: "Remplit les plateaux des bonnes actions"
   - Benefit_AR: "تملأ الميزان"

## Gamification System

### Leaderboards Structure

**Regional Leaderboards**:
- By Country (top 100)
- By City (if enough users)
- Reset: Weekly
- Metrics: Total dhikr count for the week

**Global Leaderboard**:
- Top 1000 worldwide
- All-time + monthly views
- Celebrate top performers

**Privacy**:
- Usernames only (no real names required)
- Opt-out option available
- Country/city optional

### Collective Goals

**Structure**:
```
Goal: "100K Astaghfirullah Worldwide"
Target: 100,000
Current: 47,382
Progress: 47.4%
Time remaining: 12 days
Contributors: 1,247 Muslims
```

**Examples**:
- Forgiveness Week: 100K Astaghfirullah
- Salawat Million: 1M prayers upon the Prophet ﷺ
- Ramadan Challenge: 10M+ dhikr collective
- Friday Blessings: 500K Salawat every Jumu'ah

**Psychology**: 
- Creates belonging (part of global ummah)
- Urgency (time-limited goals)
- Contribution visibility (you're helping)

### Streaks System

**Daily Streaks**:
- Track consecutive days of dhikr
- Minimum: 10+ dhikr to count
- Fire emoji visualization 🔥
- Protect streak: 1 grace day per week

**Milestones**:
- 7 days: 🌟 Week Warrior
- 30 days: 🏆 Month Master
- 100 days: 💎 Century Club
- 365 days: 👑 Year Champion

### Wrapped Generator (Post-Ramadan Feature)

**"Your Ramadan 2025 in Numbers"**:
```
Total Dhikr: 12,847
Most repeated: SubhanAllah (4,203x)
Longest streak: 28 days 🔥
Global rank: #1,247
You helped achieve: 3 collective goals
Contribution to ummah: 0.02%
```

**Shareable**:
- Beautiful gradient card
- Instagram story format
- Downloadable image
- Auto-generated video (Framer Motion)

## Design System

### Light Mode (Default)
```
Background: Pure white (#FFFFFF)
Surface: Light gray (#F9FAFB)
Primary: Emerald green (#10B981) - Islamic aesthetic
Secondary: Teal (#14B8A6)
Accent: Gold (#F59E0B) for achievements
Text Primary: Deep gray (#1F2937)
Text Secondary: Medium gray (#6B7280)
Border: Light gray (#E5E7EB)
Success: Green (#22C55E)
Error: Red (#EF4444)
```

### Dark Mode
```
Background: Deep navy (#0F172A)
Surface: Slate (#1E293B)
Primary: Soft emerald (#34D399)
Secondary: Soft teal (#2DD4BF)
Accent: Soft gold (#FCD34D)
Text Primary: Off-white (#F1F5F9)
Text Secondary: Light gray (#94A3B8)
Border: Slate border (#334155)
Success: Soft green (#4ADE80)
Error: Soft red (#F87171)
```

### Typography
```
Arabic: Amiri or Scheherazade (authentic, readable)
Latin: Inter or SF Pro (clean, modern)
Numbers: Tabular figures for counters
Sizes: 
  - Count display: 96px (ultra-prominent)
  - Dhikr text: 24px
  - Stats: 16-18px
```

### Animations
```
Tap feedback: 
  - Scale(0.95) → Scale(1.05) → Scale(1)
  - Glow pulse
  - Haptic buzz (200ms)

Count increment:
  - Number flip animation
  - Spring physics (stiffness: 300, damping: 30)
  - Confetti on milestones (100, 500, 1000)

No-tap mode:
  - Rhythmic pulse (scale + opacity)
  - Vibration sync with visual
  - Sound beep (optional)

Theme transition:
  - Smooth 300ms ease
  - No flash/FOUC
```

## Technical Implementation

### Multi-language Support
```typescript
interface DhikrData {
  id: string;
  arabic: string;
  transliteration?: string;
  translations: {
    en: string;
    fr: string;
    // Future: ur, tr, id, etc.
  };
  benefits: {
    en: string;
    fr: string;
    ar: string;
  };
  target?: number;
  category: 'morning' | 'evening' | 'general' | 'salat';
}
```

### Web Vibration API
```typescript
const vibrationPatterns = {
  slow: [200, 400], // 200ms on, 400ms off (1 beat/0.6s)
  medium: [150, 250], // 150ms on, 250ms off (1 beat/0.4s)
  fast: [100, 200], // 100ms on, 200ms off (1 beat/0.3s)
  tap: [50], // Single 50ms pulse
  milestone: [100, 50, 100, 50, 100], // Triple pulse celebration
};

// No-tap auto-increment
function startNoTapMode(speed: 'slow' | 'medium' | 'fast') {
  const interval = speed === 'slow' ? 600 : speed === 'medium' ? 400 : 300;
  const pattern = vibrationPatterns[speed];
  
  const timer = setInterval(() => {
    incrementCount();
    navigator.vibrate(pattern);
    playSound(); // if enabled
  }, interval);
  
  return timer;
}
```

### PWA Configuration
```json
{
  "name": "Moodakir - Digital Dhikr",
  "short_name": "Moodakir",
  "description": "Modern dhikr counter with global community features",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#0F172A",
  "theme_color": "#10B981",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "categories": ["lifestyle", "health"],
  "shortcuts": [
    {
      "name": "Start Counting",
      "url": "/app",
      "description": "Jump straight to counter"
    },
    {
      "name": "View Stats",
      "url": "/app/stats",
      "description": "Check your progress"
    }
  ]
}
```

### Offline Strategy
```
Cache Strategy:
- App shell: Cache-first
- Dhikr data: Cache-first (static)
- User counts: Network-first with queue
- Leaderboards: Network-first with stale-while-revalidate
- Images/assets: Cache-first with fallback

Sync Queue:
- Store increments locally when offline
- Batch sync when connection restored
- Conflict resolution: sum counts
- Show sync status to user
```

### Real-time Features (Supabase)
```typescript
// Listen to global goal updates
supabase
  .channel('global-goals')
  .on('postgres_changes', 
    { event: 'UPDATE', schema: 'public', table: 'global_goals' },
    (payload) => {
      updateGoalProgress(payload.new);
    }
  )
  .subscribe();

// Real-time leaderboard (throttled updates)
supabase
  .channel('leaderboard')
  .on('postgres_changes',
    { event: '*', schema: 'public', table: 'dhikr_counts' },
    debounce(() => refreshLeaderboard(), 5000)
  )
  .subscribe();
```

## File Structure
```
/app
  /app                  → Protected routes
    /page.tsx           → Main counter
    /stats/page.tsx     → Stats dashboard
    /leaderboard/page.tsx → Rankings (Week 2)
    /goals/page.tsx     → Collective goals (Week 2)
  /login/page.tsx       → Auth page
  /layout.tsx           → Root layout + theme provider
  /page.tsx             → Landing

/components
  /ui                   → shadcn components
  /counter
    /tap-counter.tsx    → Manual tap interface
    /no-tap-mode.tsx    → Auto-increment mode
  /stats
    /stats-card.tsx     → Individual stat display
    /streak-display.tsx → Fire emoji streak
    /progress-chart.tsx → Visual progress
  /leaderboard
    /leaderboard-card.tsx
    /user-rank.tsx
  /goals
    /goal-progress.tsx
    /goal-card.tsx
  /dhikr-selector.tsx
  /theme-switcher.tsx
  /language-switcher.tsx

/lib
  /supabase.ts          → Supabase client
  /dhikr-data.ts        → Dhikr presets (multilingual)
  /vibration.ts         → Vibration patterns
  /sounds.ts            → Audio feedback
  /analytics.ts         → Event tracking

/public
  /manifest.json
  /icon-192.png
  /icon-512.png
  /sounds
    /tap.mp3
    /milestone.mp3
```

## Success Metrics

### Week 1 (MVP)
- 20+ daily active users
- Avg session: 3+ minutes
- 50+ dhikr counts per user per day
- No-tap mode: 40%+ adoption
- PWA install rate: 20%+

### Week 2 (Leaderboards)
- 100+ daily actives
- 10+ countries represented
- First collective goal reached
- 20%+ users check leaderboard daily

### Week 3-4 (Pre-Ramadan)
- 500+ daily actives
- 3+ collective goals completed
- 100+ social shares (Wrapped feature)
- 30+ day streak: 10%+ of users

### Ramadan Peak
- 5K+ daily actives
- Top 10 in Islamic app rankings
- Viral moment: Wrapped generator
- Revenue test: Premium features

## Monetization Strategy

### Freemium Model

**Free Forever**:
- Single counter
- All preset dhikr
- Basic stats (today/week)
- Light/dark mode
- Leaderboard viewing

**Premium ($2.99/month or $19.99/year)**:
- Unlimited multi-counters
- Advanced stats & analytics
- Custom dhikr creation
- Ad-free experience
- Early access to new features
- Premium themes
- Export all data
- Wrapped generator with video
- Private groups

**Alternative: Sadaqa Model**
- 100% free app
- Optional donation (any amount)
- Donors get badge (not special features)
- Transparent: "Donations fund servers + development"
- May resonate better with Muslim audience

### Revenue Timeline
- Week 1-4: 100% free (build user base)
- Week 5+: Introduce premium (soft launch)
- Post-Ramadan: Donation drive with Wrapped campaign
- Year 1 goal: $500/month (sustainable)

## Marketing & Distribution

### Target Audience
- Muslims worldwide (all ages, all levels of practice)
- Primary: 18-45, digital natives
- Secondary: 45+, seeking modern tools
- Tertiary: Non-Muslims interested in mindfulness/meditation

### Launch Timeline

**Week 1-2**: Silent Beta
- 20-30 close contacts
- Mosque community testing
- Bug fixes + UX iteration

**Week 3-4**: Public Beta
- Social media announcement
- Islamic influencer outreach
- Reddit r/islam, r/MuslimLounge
- ProductHunt launch

**Week 5-6**: Pre-Ramadan Push
- Ramadan preparation content
- Daily challenges setup
- Influencer partnerships
- Paid ads (Facebook/Instagram - Muslim targeting)

**Ramadan**: Peak Engagement
- Daily collective goals
- Community highlights
- User testimonials
- Press coverage (Muslim media)

**Post-Ramadan**: Wrapped Campaign
- "Your Ramadan 2025" generator
- Massive social sharing
- Conversion push (free → premium)
- Retention focus (maintain habits)

### Content Strategy

**TikTok/Reels/Shorts** (3-5 per week):
1. "Count dhikr hands-free while driving" → no-tap demo
2. "I'm rank #47 in Canada 🇨🇦" → leaderboard flex
3. "We hit 100K Astaghfirullah as an ummah!" → collective goal celebration
4. "My 90-day streak 🔥" → motivation
5. Time-lapse: "1000 dhikr in 30 minutes"
6. Before/after: Traditional tasbih vs Moodakir UX
7. "Dark mode is 🔥" → aesthetic showcase

**Blog/SEO Content**:
- "Best dhikr for morning/evening"
- "How to build a daily dhikr habit"
- "Benefits of consistent remembrance"
- "Digital vs traditional tasbih"

**Community Building**:
- Discord server (early adopters)
- Weekly challenges
- User spotlights
- Feature voting

### Influencer Strategy

**Micro-influencers** (5K-50K followers):
- Send early access
- Ask for honest review
- Offer affiliate link (20% revenue share)
- No payment required

**Islamic Educators**:
- Sheikhs/scholars with social media
- Islamic content creators
- Quran reciters
- Offer to customize goals for their audience

**Target Regions** (Priority):
1. North America (US, Canada) - English
2. France - French
3. UK - English
4. MENA (Saudi, UAE, Egypt) - Arabic
5. Southeast Asia (Indonesia, Malaysia) - Future

## Technical Roadmap

### Phase 1: Core (Week 1)
- [ ] Next.js + TypeScript setup
- [ ] PWA configuration
- [ ] Supabase auth + database
- [ ] Counter component (tap + animations)
- [ ] No-tap mode (vibration + auto-increment)
- [ ] Light/dark theme
- [ ] 5-7 preset dhikr (AR, EN, FR)
- [ ] Basic stats (today, week)
- [ ] Deploy to Vercel

### Phase 2: Social (Week 2)
- [ ] Country selection on signup
- [ ] Leaderboard (regional + global)
- [ ] Collective goals system
- [ ] Real-time goal updates
- [ ] Multi-counter support
- [ ] Share stats (image export)
- [ ] Streak tracking

### Phase 3: Engagement (Week 3-4)
- [ ] Wrapped generator
- [ ] Achievements/badges
- [ ] Custom dhikr creation
- [ ] Notifications system
- [ ] Challenge framework
- [ ] Bienfaits educational content
- [ ] Analytics dashboard

### Phase 4: Polish (Week 5-6)
- [ ] Onboarding flow
- [ ] Native app wrapper
- [ ] App Store submission
- [ ] Premium features
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Performance optimization

### Future Enhancements
- [ ] Prayer times integration
- [ ] Qibla compass
- [ ] Friends/following system
- [ ] Private groups
- [ ] Audio dhikr guides
- [ ] Widget support (iOS/Android)
- [ ] Apple Watch / Wear OS
- [ ] Multi-language UI (beyond dhikr text)

## Critical Success Factors

1. **Timing**: Ship before Ramadan preparation starts (3-4 weeks before)
2. **No-tap mode**: Must be flawless - this is the differentiator
3. **Community**: Leaderboards + goals create belonging
4. **Shareability**: Wrapped must be beautiful and viral
5. **Performance**: 60fps animations, <1s load time
6. **Respect**: Authentic Islamic aesthetic, accurate translations
7. **Privacy**: Clear data policies, opt-out options
8. **Marketing**: Organic > paid, community > ads

## Notes & Philosophy

- **Speed over perfection**: Ship fast, iterate based on feedback
- **Community first**: Users are not customers, they're the ummah
- **Gamification = engagement**: It's about motivation, not manipulation
- **Open to feedback**: Muslim community will tell us what they need
- **Sustainable**: Free tier generous, premium is value-add not paywall
- **Global mindset**: Design for diversity (age, culture, language)
- **Long-term vision**: Not a Ramadan app, a daily habit builder

---

**Last updated**: December 25, 2024
**Status**: Ready to build
**First commit**: Let's go! 🚀