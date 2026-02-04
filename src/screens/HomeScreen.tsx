import React, { useState } from 'react';
import { Linking, Modal, View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Trans, useTranslation } from 'react-i18next';

const HomeScreen: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = (i18n.language || 'en').slice(0, 2);
  const repoUrl = 'https://github.com/zumrakb/reactnativecli-nativewind-boilerplate';
  const [isRepoModalVisible, setRepoModalVisible] = useState(false);

  const featureCards = [
    {
      key: 'typescript',
      title: t('home.typescript'),
      description: t('home.fullTypeSafety'),
      icon: 'TS',
      accent: '#38bdf8',
      bg: 'rgba(56, 189, 248, 0.12)',
      border: 'rgba(56, 189, 248, 0.35)',
    },
    {
      key: 'reactNavigation',
      title: t('home.reactNavigation'),
      description: t('home.typeSafeRouting'),
      icon: '🧭',
      accent: '#6366f1',
      bg: 'rgba(99, 102, 241, 0.12)',
      border: 'rgba(99, 102, 241, 0.35)',
    },
    {
      key: 'nativeWind',
      title: t('home.nativeWind'),
      description: t('home.tailwindCss'),
      icon: '🎨',
      accent: '#a855f7',
      bg: 'rgba(168, 85, 247, 0.12)',
      border: 'rgba(168, 85, 247, 0.35)',
    },
    {
      key: 'i18n',
      title: t('home.i18nLibrary'),
      description: t('home.localizationSupport'),
      icon: '🌍',
      accent: '#22c55e',
      bg: 'rgba(34, 197, 94, 0.12)',
      border: 'rgba(34, 197, 94, 0.35)',
    },
    {
      key: 'storage',
      title: t('home.asyncStorage'),
      description: t('home.asyncStorageDesc'),
      icon: '💾',
      accent: '#eab308',
      bg: 'rgba(234, 179, 8, 0.12)',
      border: 'rgba(234, 179, 8, 0.35)',
    },
    {
      key: 'icons',
      title: t('home.vectorIcons'),
      description: t('home.vectorIconsDesc'),
      icon: '🧩',
      accent: '#f43f5e',
      bg: 'rgba(244, 63, 94, 0.12)',
      border: 'rgba(244, 63, 94, 0.35)',
    },
  ];

  const languageButtons = [
    { code: 'en', label: t('languages.english'), flag: '🇺🇸' },
    { code: 'tr', label: t('languages.turkish'), flag: '🇹🇷' },
    { code: 'hi', label: t('languages.hindi'), flag: '🇮🇳' },
    { code: 'pt', label: t('languages.portuguese'), flag: '🇵🇹' },
  ];

  const featureRows: typeof featureCards[] = [];
  for (let i = 0; i < featureCards.length; i += 2) {
    featureRows.push(featureCards.slice(i, i + 2));
  }

  const languageRows: typeof languageButtons[] = [];
  for (let i = 0; i < languageButtons.length; i += 2) {
    languageRows.push(languageButtons.slice(i, i + 2));
  }

  const handleOpenRepo = () => {
    setRepoModalVisible(true);
  };

  const handleConfirmRepo = () => {
    setRepoModalVisible(false);
    Linking.openURL(repoUrl);
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#0a0e27' }}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0e27" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-8 pb-12">
          <View className="mb-8">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-white text-3xl font-bold">
                {t('home.welcome')}
              </Text>
              <TouchableOpacity
                onPress={handleOpenRepo}
                activeOpacity={0.85}
                className="px-3 py-1 rounded-full border border-white/15 bg-white/5"
              >
                <Text className="text-xs uppercase tracking-widest text-slate-200">
                  {t('home.boilerplateBadge')}
                </Text>
              </TouchableOpacity>
            </View>
            <Text className="text-slate-300 text-base">
              {t('home.subtitle')}
            </Text>
          </View>

          <View className="rounded-3xl bg-white/5 p-6 mb-8">
            <Text className="text-white text-lg font-semibold mb-4">
              <Trans
                i18nKey="home.languageTestLine"
                components={[
                  <Text className="text-sky-300" />,
                  <Text className="text-emerald-300" />,
                ]}
              />
            </Text>
            <View>
              {languageRows.map((row, rowIndex) => (
                <View key={`lang-row-${rowIndex}`} className="flex-row justify-between mb-3">
                  {row.map(button => {
                    const isActive = currentLanguage === button.code;
                    return (
                      <TouchableOpacity
                        key={button.code}
                        onPress={() => i18n.changeLanguage(button.code)}
                        className="w-[48%] rounded-2xl px-4 py-3 border"
                        style={{
                          backgroundColor: isActive ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                          borderColor: isActive ? 'rgba(56, 189, 248, 0.7)' : 'rgba(255, 255, 255, 0.15)',
                        }}
                        activeOpacity={0.85}
                      >
                        <Text className="text-white text-base font-semibold">
                          {button.flag} {button.label}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ))}
            </View>
          </View>

          <View className="rounded-3xl  bg-white/5 p-6 mb-8">
            <Text className="text-white text-xl font-semibold">
              {t('home.whatsIncluded')}
            </Text>
            <Text className="text-slate-300 text-sm mt-2">
              {t('home.includedHint')}
            </Text>
            <View className="mt-5">
              {featureRows.map((row, rowIndex) => (
                <View key={`feature-row-${rowIndex}`} className="flex-row justify-between mb-4">
                  {row.map(card => (
                    <View
                      key={card.key}
                      className="w-[48%] rounded-2xl border p-4"
                      style={{
                        backgroundColor: card.bg,
                        borderColor: card.border,
                      }}
                    >
                      <View
                        className="w-10 h-10 rounded-xl items-center justify-center mb-3"
                        style={{ backgroundColor: card.border }}
                      >
                        <Text className="text-white text-lg">{card.icon}</Text>
                      </View>
                      <Text className="text-white text-base font-semibold">
                        {card.title}
                      </Text>
                      <Text className="text-slate-200 text-sm mt-1">
                        {card.description}
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>

          <View className="rounded-3xl  bg-white/5 p-6">
            <View className="flex-row items-center mb-4">
              <View
                className="w-12 h-12 rounded-2xl items-center justify-center mr-4"
                style={{ backgroundColor: 'rgba(250, 204, 21, 0.2)' }}
              >
                <Text className="text-yellow-300 text-2xl">⭐</Text>
              </View>
              <View className="flex-1">
                <Text className="text-white text-lg font-semibold">
                  {t('home.repoTitle')}
                </Text>
                <Text className="text-slate-300 text-sm mt-1">
                  {t('home.repoBody')}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={handleOpenRepo}
              activeOpacity={0.85}
              className="rounded-2xl px-4 py-3 border border-white/15"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
            >
              <Text className="text-white text-base font-semibold text-center">
                ⭐ {t('home.repoButton')} 🖱️
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        transparent
        animationType="fade"
        visible={isRepoModalVisible}
        onRequestClose={() => setRepoModalVisible(false)}
      >
        <View className="flex-1 items-center justify-center px-6" style={{ backgroundColor: 'rgba(8, 12, 28, 0.6)' }}>
          <View className="w-full rounded-3xl border border-white/10 bg-[#10162b] p-6">
            <View className="flex-row items-center mb-4">
              <View className="w-10 h-10 rounded-xl items-center justify-center bg-white/10 mr-3">
                <Text className="text-white text-lg">🔗</Text>
              </View>
              <Text className="text-white text-lg font-semibold">
                {t('home.repoModalTitle')}
              </Text>
            </View>
            <Text className="text-slate-300 text-sm leading-5 mb-6">
              {t('home.repoModalBody')}
            </Text>
            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={() => setRepoModalVisible(false)}
                className="w-[48%] rounded-2xl px-4 py-3 border border-white/15"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
                activeOpacity={0.85}
              >
                <Text className="text-white text-center font-semibold">
                  {t('common.cancel')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleConfirmRepo}
                className="w-[48%] rounded-2xl px-4 py-3"
                style={{ backgroundColor: '#38bdf8' }}
                activeOpacity={0.85}
              >
                <Text className="text-slate-900 text-center font-semibold">
                  {t('common.open')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;
