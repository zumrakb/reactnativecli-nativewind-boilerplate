/**
 * Merkezi tema renkleri. Tüm ekran stilleri bu paleti kullanabilir.
 */
export function getThemeColors(isDark: boolean) {
  return {
    screenBg: isDark ? '#0a0e27' : '#f1f5f9',
    cardBg: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(15,23,42,0.04)',
    border: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15,23,42,0.08)',
    textPrimary: isDark ? '#fff' : '#0f172a',
    textSecondary: isDark ? '#94a3b8' : '#64748b',
    iconBg: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15,23,42,0.08)',
    inputBg: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.06)',
    accent: '#38bdf8',
    accentBg: 'rgba(56,189,248,0.2)',
    accentBorder: 'rgba(56,189,248,0.7)',
    modalBg: isDark ? '#10162b' : '#fff',
  };
}
