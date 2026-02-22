import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../contexts/ThemeContext';
import { RootStackParamList } from '../types/navigation';
import { TAB_CONFIG } from './tabConfig';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TAB_BAR_BASE_HEIGHT = 64;
const TAB_BAR_BASE_PADDING_BOTTOM = 10;

const AppNavigator: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const insets = useSafeAreaInsets();
  const tabBarBg = isDark ? '#0b1222' : '#ffffff';
  const tabBarBorder = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.08)';
  const tabInactive = isDark ? '#94a3b8' : '#64748b';
  const tabBarPaddingBottom = TAB_BAR_BASE_PADDING_BOTTOM + insets.bottom;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: tabBarBg,
            borderTopColor: tabBarBorder,
            height: TAB_BAR_BASE_HEIGHT + insets.bottom,
            paddingBottom: tabBarPaddingBottom,
          },
          tabBarActiveTintColor: '#38bdf8',
          tabBarInactiveTintColor: tabInactive,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarIcon: ({ color, size }) => {
            const item = TAB_CONFIG.find((c) => c.name === route.name);
            const iconSize = size ?? 22;
            return (
              <Ionicons
                name={(item?.icon ?? 'ellipse-outline') as any}
                size={iconSize}
                color={color}
              />
            );
          },
        })}
      >
        {TAB_CONFIG.map(({ name, component, labelKey }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title: t(labelKey),
              tabBarLabel: t(labelKey),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
