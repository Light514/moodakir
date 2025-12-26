-- Moodakir Database Schema
-- Execute this SQL in your Supabase Dashboard > SQL Editor

-- Enable UUID extension (if not already enabled)
create extension if not exists "uuid-ossp";

-- Profiles table (one-to-one with auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  country text not null,
  city text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,

  constraint username_length check (char_length(username) >= 3 and char_length(username) <= 30)
);

-- User preferences table
create table public.user_preferences (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  theme text check (theme in ('light', 'dark')) default 'light',
  vibration_pattern text check (vibration_pattern in ('slow', 'medium', 'fast')) default 'medium',
  sound_enabled boolean default false,
  language text check (language in ('ar', 'en', 'fr')) default 'en',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.user_preferences enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone"
  on public.profiles for select
  using (true);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- User preferences policies
create policy "Users can view their own preferences"
  on public.user_preferences for select
  using (auth.uid() = user_id);

create policy "Users can insert their own preferences"
  on public.user_preferences for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own preferences"
  on public.user_preferences for update
  using (auth.uid() = user_id);

-- Function to create default preferences when profile is created
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.user_preferences (user_id)
  values (new.id);
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to automatically create preferences on profile creation
create trigger on_profile_created
  after insert on public.profiles
  for each row execute procedure public.handle_new_user();

-- Indexes for performance
create index profiles_username_idx on public.profiles(username);
create index profiles_country_idx on public.profiles(country);
create index user_preferences_user_id_idx on public.user_preferences(user_id);
