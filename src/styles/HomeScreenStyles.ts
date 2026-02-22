import { getThemeColors } from './themeColors';

export function getHomeScreenStyles(isDark: boolean) {
  const c = getThemeColors(isDark);
  return {
    screen: { backgroundColor: c.screenBg },
    title: { color: c.textPrimary },
    subtitle: { color: c.textSecondary },
    sectionTitle: { color: c.textPrimary },
    sectionHint: { color: c.textSecondary },
    card: { backgroundColor: c.cardBg, borderColor: c.border },
    cardTitle: { color: c.textPrimary },
    cardDesc: { color: c.textSecondary },
  };
}
