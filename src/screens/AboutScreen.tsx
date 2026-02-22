import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { getAboutScreenStyles } from '../styles/AboutScreenStyles';

const AboutScreen: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const styles = getAboutScreenStyles(isDark);

  return (
    <SafeAreaView className="flex-1" style={styles.screen}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={styles.screen.backgroundColor}
      />

      <View className="flex-1 px-6 pt-10">
        <View className="mb-6">
          <Text className="text-3xl font-bold" style={styles.title}>
            {t('about.title')}
          </Text>
          <Text className="text-sm mt-2" style={styles.subtitle}>
            {t('common.navBody')}
          </Text>
        </View>

        {/* -------- ŞABLON DEMO: Hakkımızda demo içeriği - Başlangıç - Yeni projede silinebilir -------- */}
        <View className="rounded-3xl border p-6 mb-4" style={styles.card}>
          <View className="flex-row items-center mb-3">
            <View className="w-10 h-10 rounded-xl items-center justify-center" style={styles.iconBox}>
              <Text className="text-lg">✅</Text>
            </View>
            <Text className="text-lg font-semibold ml-3" style={styles.cardTitle}>
              {t('common.navTitle')}
            </Text>
          </View>
          <Text className="text-base leading-6" style={styles.cardBody}>
            {t('common.navBody')}
          </Text>
        </View>

        <View className="rounded-3xl border p-6" style={styles.card}>
          <View className="flex-row items-center mb-3">
            <View className="w-10 h-10 rounded-xl items-center justify-center" style={styles.iconBox}>
              <Text className="text-lg">🌐</Text>
            </View>
            <Text className="text-lg font-semibold ml-3" style={styles.cardTitle}>
              {t('common.languageTitle')}
            </Text>
          </View>
          <Text className="text-base leading-6" style={styles.cardBody}>
            {t('common.languageBody')}
          </Text>
        </View>
        {/* -------- ŞABLON DEMO: Hakkımızda demo içeriği - Bitiş -------- */}

      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
