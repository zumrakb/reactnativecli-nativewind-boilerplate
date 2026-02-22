import React from 'react';
import type { Screen } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type TabConfigItem = {
  name: Screen;
  component: React.ComponentType<any>;
  labelKey: string;
  icon: string;
};

/**
 * Alt sekme navigasyonu için global konfigürasyon.
 * Yeni sekme eklemek için:
 * 1. src/types/navigation.ts içinde Screen tipine ve RootStackParamList'e ekle
 * 2. Buraya aşağıdaki formatta yeni item ekle
 * 3. Ekran bileşenini oluştur
 */
export const TAB_CONFIG: TabConfigItem[] = [
  {
    name: 'Dashboard',
    component: HomeScreen,
    labelKey: 'common.home',
    icon: 'home-outline',
  },
  {
    name: 'About',
    component: AboutScreen,
    labelKey: 'common.about',
    icon: 'information-circle-outline',
  },
  {
    name: 'Privacy',
    component: PrivacyScreen,
    labelKey: 'common.privacy',
    icon: 'lock-closed-outline',
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    labelKey: 'common.settings',
    icon: 'settings-outline',
  },
];
