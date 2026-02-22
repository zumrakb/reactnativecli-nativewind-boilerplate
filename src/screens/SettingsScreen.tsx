import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
  ScrollView,
  Pressable,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import type { ThemeMode } from '../contexts/ThemeContext';
import { getSettingsScreenStyles } from '../styles/SettingsScreenStyles';

const LANGUAGE_OPTIONS = [
  { code: 'en', labelKey: 'languages.english', flag: '🇺🇸' },
  { code: 'tr', labelKey: 'languages.turkish', flag: '🇹🇷' },
] as const;

const THEME_OPTIONS: { value: ThemeMode; labelKey: 'theme.system' | 'theme.dark' | 'theme.light'; icon: string }[] = [
  { value: 'system', labelKey: 'theme.system', icon: '📱' },
  { value: 'dark', labelKey: 'theme.dark', icon: '🌙' },
  { value: 'light', labelKey: 'theme.light', icon: '☀️' },
];

const SettingsScreen: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme, isDark } = useTheme();
  const insets = useSafeAreaInsets();
  const currentLanguage = (i18n.language || 'en').slice(0, 2);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [themeModalVisible, setThemeModalVisible] = useState(false);

  const currentLanguageOption = LANGUAGE_OPTIONS.find((o) => o.code === currentLanguage)
    ?? LANGUAGE_OPTIONS[0];
  const currentThemeOption = THEME_OPTIONS.find((o) => o.value === theme) ?? THEME_OPTIONS[0];

  const styles = getSettingsScreenStyles(isDark, theme);

  return (
    <SafeAreaView className="flex-1" style={styles.screen}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={styles.screen.backgroundColor}
      />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-6 pb-16">
          {/* Başlık ve sayfa açıklaması */}
          <View className="mb-8">
            <Text className="text-2xl font-bold" style={styles.title}>
              {t('settings.title')}
            </Text>
            <Text className="text-sm mt-2 leading-5" style={styles.subtitle}>
              {t('settings.description')}
            </Text>
          </View>

          {/* Dil selectbox */}
          <View className="rounded-2xl border p-5 mb-4" style={styles.card}>
            <View className="flex-row items-center mb-3">
              <View className="w-9 h-9 rounded-lg items-center justify-center mr-3" style={styles.iconBox}>
                <Text className="text-base">🌐</Text>
              </View>
              <Text className="text-base font-semibold" style={styles.title}>
                {t('settings.languageLabel')}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setLanguageModalVisible(true)}
              activeOpacity={0.85}
              className="rounded-xl border px-4 py-3 flex-row items-center justify-between"
              style={styles.selectTrigger}
            >
              <Text className="text-sm font-medium" style={styles.title}>
                {currentLanguageOption.flag} {t(currentLanguageOption.labelKey)}
              </Text>
              <Text className="opacity-50 text-sm">▼</Text>
            </TouchableOpacity>
          </View>

          {/* Tema selectbox */}
          <View className="rounded-2xl border p-5" style={styles.card}>
            <View className="flex-row items-center mb-3">
              <View className="w-9 h-9 rounded-lg items-center justify-center mr-3" style={styles.iconBox}>
                <Text className="text-base">🌓</Text>
              </View>
              <Text className="text-base font-semibold" style={styles.title}>
                {t('settings.themeLabel')}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setThemeModalVisible(true)}
              activeOpacity={0.85}
              className="rounded-xl border px-4 py-3 flex-row items-center justify-between"
              style={styles.selectTrigger}
            >
              <Text className="text-sm font-medium" style={styles.title}>
                {currentThemeOption.icon} {t(currentThemeOption.labelKey)}
              </Text>
              <Text className="opacity-50 text-sm">▼</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Dil seçim modal */}
      <Modal
        transparent
        animationType="fade"
        visible={languageModalVisible}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <Pressable
          className="flex-1 justify-end"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onPress={() => setLanguageModalVisible(false)}
        >
          <Pressable
            className="rounded-t-2xl border-t pt-4 px-5"
            style={[
              styles.modalContent,
              { paddingBottom: Math.max(insets.bottom, 20) },
            ]}
            onPress={(e) => e.stopPropagation()}
          >
            <Text className="text-base font-semibold mb-4" style={styles.title}>
              {t('settings.languageLabel')}
            </Text>
            {LANGUAGE_OPTIONS.map((opt) => {
              const isActive = currentLanguage === opt.code;
              return (
                <TouchableOpacity
                  key={opt.code}
                  onPress={() => {
                    i18n.changeLanguage(opt.code);
                    setLanguageModalVisible(false);
                  }}
                  activeOpacity={0.85}
                  className="rounded-xl px-4 py-3 mb-2 flex-row items-center border"
                  style={[
                    isActive ? styles.modalOptionActive : styles.modalOption,
                    { borderWidth: 1 },
                  ]}
                >
                  <Text className="text-base mr-2">{opt.flag}</Text>
                  <Text
                    className="text-sm font-medium"
                    style={isActive ? styles.modalOptionTextActive : styles.modalOptionText}
                  >
                    {t(opt.labelKey)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </Pressable>
        </Pressable>
      </Modal>

      {/* Tema seçim modal */}
      <Modal
        transparent
        animationType="fade"
        visible={themeModalVisible}
        onRequestClose={() => setThemeModalVisible(false)}
      >
        <Pressable
          className="flex-1 justify-end"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onPress={() => setThemeModalVisible(false)}
        >
          <Pressable
            className="rounded-t-2xl border-t pt-4 px-5"
            style={[
              styles.modalContent,
              { paddingBottom: Math.max(insets.bottom, 20) },
            ]}
            onPress={(e) => e.stopPropagation()}
          >
            <Text className="text-base font-semibold mb-4" style={styles.title}>
              {t('settings.themeLabel')}
            </Text>
            {THEME_OPTIONS.map((opt) => {
              const isActive = theme === opt.value;
              return (
                <TouchableOpacity
                  key={opt.value}
                  onPress={() => {
                    setTheme(opt.value);
                    setThemeModalVisible(false);
                  }}
                  activeOpacity={0.85}
                  className="rounded-xl px-4 py-3 mb-2 flex-row items-center border"
                  style={[
                    isActive ? styles.modalOptionActive : styles.modalOption,
                    { borderWidth: 1 },
                  ]}
                >
                  <Text className="text-base mr-2">{opt.icon}</Text>
                  <Text
                    className="text-sm font-medium"
                    style={isActive ? styles.modalOptionTextActive : styles.modalOptionText}
                  >
                    {t(opt.labelKey)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default SettingsScreen;
