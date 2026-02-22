import { getThemeColors } from './themeColors';

export function getAboutScreenStyles(isDark: boolean) {
  const c = getThemeColors(isDark);
  return {
    screen: { backgroundColor: c.screenBg },
    title: { color: c.textPrimary },
    subtitle: { color: c.textSecondary },
    card: { backgroundColor: c.cardBg, borderColor: c.border },
    iconBox: { backgroundColor: c.iconBg },
    cardTitle: { color: c.textPrimary },
    cardBody: { color: c.textSecondary },
  };
}
