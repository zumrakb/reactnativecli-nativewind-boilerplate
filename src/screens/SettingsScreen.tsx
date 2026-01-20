import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-emerald-600">
      <StatusBar barStyle="light-content" backgroundColor="#10b981" />
      
      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-5 pt-6 pb-8">
          {/* Header with back button */}
          <View className="flex-row items-center mb-8">
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center mr-4 border border-white/30"
              activeOpacity={0.7}
            >
              <Text className="text-white text-xl font-bold">←</Text>
            </TouchableOpacity>
            <Text className="text-white text-3xl font-bold">Settings</Text>
          </View>

          {/* Hero Section */}
          <View className="mb-8">
            <View className="bg-white/10 rounded-3xl p-6 border border-white/20">
              <Text className="text-white text-3xl font-bold mb-3">
                Preferences
              </Text>
              <Text className="text-emerald-50 text-base leading-6">
                Customize your experience with these interactive settings. All components are styled with NativeWind.
              </Text>
            </View>
          </View>

          {/* Settings Options */}
          <View className="bg-white/10 rounded-3xl p-6 mb-6 border border-white/20">
            <View className="flex-row items-center mb-6">
              <Text className="text-yellow-300 text-2xl mr-2">⚙️</Text>
              <Text className="text-white text-xl font-bold">
                App Settings
              </Text>
            </View>
            
            {/* Notification Toggle */}
            <View className="flex-row justify-between items-center py-5 border-b border-white/10">
              <View className="flex-1 mr-4">
                <View className="flex-row items-center mb-2">
                  <Text className="text-blue-300 text-lg mr-2">🔔</Text>
                  <Text className="text-white text-base font-semibold">
                    Push Notifications
                  </Text>
                </View>
                <Text className="text-emerald-100 text-sm leading-5">
                  Receive push notifications and updates
                </Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#4b5563', true: '#34d399' }}
                thumbColor="#ffffff"
                ios_backgroundColor="#4b5563"
              />
            </View>

            {/* Dark Mode Toggle */}
            <View className="flex-row justify-between items-center py-5 border-b border-white/10">
              <View className="flex-1 mr-4">
                <View className="flex-row items-center mb-2">
                  <Text className="text-purple-300 text-lg mr-2">🌙</Text>
                  <Text className="text-white text-base font-semibold">
                    Dark Mode
                  </Text>
                </View>
                <Text className="text-emerald-100 text-sm leading-5">
                  Use dark theme throughout the app
                </Text>
              </View>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#4b5563', true: '#34d399' }}
                thumbColor="#ffffff"
                ios_backgroundColor="#4b5563"
              />
            </View>

            {/* Biometric Toggle */}
            <View className="flex-row justify-between items-center py-5">
              <View className="flex-1 mr-4">
                <View className="flex-row items-center mb-2">
                  <Text className="text-pink-300 text-lg mr-2">🔐</Text>
                  <Text className="text-white text-base font-semibold">
                    Biometric Auth
                  </Text>
                </View>
                <Text className="text-emerald-100 text-sm leading-5">
                  Use Face ID or Touch ID to unlock
                </Text>
              </View>
              <Switch
                value={biometricEnabled}
                onValueChange={setBiometricEnabled}
                trackColor={{ false: '#4b5563', true: '#34d399' }}
                thumbColor="#ffffff"
                ios_backgroundColor="#4b5563"
              />
            </View>
          </View>

          {/* Action Buttons */}
          <View className="gap-4 mb-6">
            <TouchableOpacity 
              className="bg-white rounded-3xl p-5 shadow-2xl"
              onPress={() => {
                console.log('Settings saved!');
              }}
              activeOpacity={0.9}
              style={{
                shadowColor: '#ffffff',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.3,
                shadowRadius: 12,
                elevation: 8,
              }}
            >
              <View className="flex-row items-center justify-center">
                <Text className="text-emerald-600 text-center font-bold text-lg mr-2">
                  Save Settings
                </Text>
                <Text className="text-emerald-600 text-xl">✓</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              className="bg-white/20 rounded-3xl p-5 border-2 border-white/30"
              onPress={() => navigation.navigate('About')}
              activeOpacity={0.8}
            >
              <View className="flex-row items-center justify-center">
                <Text className="text-white text-center font-bold text-lg mr-2">
                  View About Page
                </Text>
                <Text className="text-white text-xl">→</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Navigation Card */}
          <View className="bg-white/10 rounded-3xl p-6 border border-white/20">
            <View className="flex-row items-center mb-4">
              <Text className="text-cyan-300 text-2xl mr-2">🧭</Text>
              <Text className="text-white text-lg font-bold">
                Navigation Demo
              </Text>
            </View>
            <Text className="text-emerald-100 text-sm leading-5 mb-4">
              Navigate between screens to see React Navigation in action. Each screen has a unique design showcasing different NativeWind patterns.
            </Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Dashboard')}
              className="bg-white/20 rounded-2xl p-4 border border-white/30"
              activeOpacity={0.8}
            >
              <View className="flex-row items-center justify-center">
                <Text className="text-white text-center font-semibold mr-2">
                  Go to Home
                </Text>
                <Text className="text-white text-lg">🏠</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
