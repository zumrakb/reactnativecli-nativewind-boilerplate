import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { getHomeScreenStyles } from '../styles/HomeScreenStyles';

// -------- ŞABLON DEMO: Anasayfa özellik kutuları - Başlangıç --------
// Yeni projede sil: FEATURE_CARDS, rows döngüsü (satır 24-27) ve aşağıdaki "Neler var" View bloğu
const FEATURE_CARDS = [
  { key: 'typescript', titleKey: 'home.typescript' as const, descKey: 'home.fullTypeSafety' as const, icon: 'TS', bg: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.35)', iconBg: 'rgba(56,189,248,0.35)' },
  { key: 'reactNavigation', titleKey: 'home.reactNavigation' as const, descKey: 'home.typeSafeRouting' as const, icon: '🧭', bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.35)', iconBg: 'rgba(99,102,241,0.35)' },
  { key: 'nativeWind', titleKey: 'home.nativeWind' as const, descKey: 'home.tailwindCss' as const, icon: '🎨', bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.35)', iconBg: 'rgba(168,85,247,0.35)' },
  { key: 'i18n', titleKey: 'home.i18nLibrary' as const, descKey: 'home.localizationSupport' as const, icon: '🌍', bg: 'rgba(34,197,94,0.12)', border: 'rgba(34,197,94,0.35)', iconBg: 'rgba(34,197,94,0.35)' },
  { key: 'storage', titleKey: 'home.asyncStorage' as const, descKey: 'home.asyncStorageDesc' as const, icon: '💾', bg: 'rgba(234,179,8,0.12)', border: 'rgba(234,179,8,0.35)', iconBg: 'rgba(234,179,8,0.35)' },
  { key: 'icons', titleKey: 'home.vectorIcons' as const, descKey: 'home.vectorIconsDesc' as const, icon: '🧩', bg: 'rgba(244,63,94,0.12)', border: 'rgba(244,63,94,0.35)', iconBg: 'rgba(244,63,94,0.35)' },
] as const;
// -------- ŞABLON DEMO: Anasayfa özellik kutuları verisi - Bitiş --------

const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const styles = getHomeScreenStyles(isDark);

  // ŞABLON DEMO: rows - "Neler var" bloğu silinince bu 4 satırı da sil
  const rows: (typeof FEATURE_CARDS)[number][][] = [];
  for (let i = 0; i < FEATURE_CARDS.length; i += 2) {
    rows.push([...FEATURE_CARDS.slice(i, i + 2)]);
  }

  return (
    <SafeAreaView className="flex-1" style={styles.screen}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={styles.screen.backgroundColor}
      />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-6 pb-12">
          <View className="mb-6">
            <Text className="text-2xl font-bold" style={styles.title}>
              {t('home.welcome')}
            </Text>
            <Text className="text-sm mt-1" style={styles.subtitle}>
              {t('home.subtitle')}
            </Text>
          </View>

          {/* -------- ŞABLON DEMO: Anasayfa özellik kutuları (Neler var) - Başlangıç - Yeni projede silinebilir -------- */}
          <View className="rounded-2xl border p-5 mb-3" style={styles.card}>
            <Text className="text-lg font-semibold mb-1" style={styles.sectionTitle}>
              {t('home.whatsIncluded')}
            </Text>
            <Text className="text-sm mb-4" style={styles.sectionHint}>
              {t('home.includedHint')}
            </Text>
            <View style={{ gap: 16 }}>
              {rows.map((row, rowIndex) => (
                <View
                  key={`row-${rowIndex}`}
                  className="flex-row"
                  style={{ gap: 10 }}
                >
                  {row.map((card) => (
                    <View
                      key={card.key}
                      className="flex-1 rounded-xl border p-4"
                      style={[styles.card, { backgroundColor: card.bg, borderColor: card.border }]}
                    >
                      <View
                        className="w-9 h-9 rounded-lg items-center justify-center mb-2"
                        style={{ backgroundColor: card.iconBg }}
                      >
                        <Text className="text-white text-sm font-semibold">{card.icon}</Text>
                      </View>
                      <Text className="text-sm font-semibold" style={styles.cardTitle}>
                        {t(card.titleKey)}
                      </Text>
                      <Text className="text-xs mt-0.5" style={styles.cardDesc}>
                        {t(card.descKey)}
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>
          {/* -------- ŞABLON DEMO: Anasayfa özellik kutuları - Bitiş -------- */}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
