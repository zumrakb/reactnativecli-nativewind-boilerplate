import type { ThemeMode } from '../contexts/ThemeContext';
import { getThemeColors } from './themeColors';

export function getSettingsScreenStyles(isDark: boolean, _theme: ThemeMode) {
  const c = getThemeColors(isDark);
  return {
    screen: { backgroundColor: c.screenBg },
    title: { color: c.textPrimary },
    subtitle: { color: c.textSecondary },
    card: { backgroundColor: c.cardBg, borderColor: c.border },
    iconBox: { backgroundColor: c.iconBg },
    selectTrigger: {
      backgroundColor: c.inputBg,
      borderColor: c.border,
    },
    modalContent: {
      backgroundColor: c.modalBg,
      borderTopWidth: 1,
      borderTopColor: c.border,
    },
    modalOption: {
      backgroundColor: c.inputBg,
      borderColor: 'transparent' as const,
    },
    modalOptionActive: {
      backgroundColor: c.accentBg,
      borderColor: c.accentBorder,
    },
    modalOptionText: { color: c.textPrimary },
    modalOptionTextActive: { color: c.accent },
  };
}
