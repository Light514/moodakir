export const vibrationPatterns = {
  slow: [200, 400], // 200ms on, 400ms off (1 beat/0.6s)
  medium: [150, 250], // 150ms on, 250ms off (1 beat/0.4s)
  fast: [100, 200], // 100ms on, 200ms off (1 beat/0.3s)
  tap: [50], // Single 50ms pulse
  milestone: [100, 50, 100, 50, 100], // Triple pulse celebration
} as const;

export type VibrationSpeed = keyof typeof vibrationPatterns;

export function vibrate(pattern: VibrationSpeed | number[]) {
  if (!navigator.vibrate) {
    console.warn('Vibration API not supported');
    return false;
  }

  const vibrationPattern = Array.isArray(pattern)
    ? pattern
    : vibrationPatterns[pattern];

  return navigator.vibrate(vibrationPattern);
}

export function stopVibration() {
  if (!navigator.vibrate) {
    return false;
  }
  return navigator.vibrate(0);
}
