import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      
      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-5 pt-6 pb-8">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-10">
            <View>
              <Text className="text-white text-3xl font-bold mb-1">
                Welcome 👋
              </Text>
              <Text className="text-slate-400 text-sm">
                React Native Boilerplate
              </Text>
            </View>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Settings')}
              className="w-12 h-12 rounded-2xl bg-white/10 items-center justify-center border border-white/20"
              activeOpacity={0.7}
            >
              <Text className="text-white text-xl">⚙️</Text>
            </TouchableOpacity>
          </View>

          {/* Hero Section */}
          <View className="mb-8">
            <View className="bg-purple-600/20 rounded-3xl p-6 mb-6 border border-purple-500/30">
              <Text className="text-white text-2xl font-bold mb-2">
                Get Started Fast
              </Text>
              <Text className="text-slate-300 text-base leading-6">
                A modern React Native CLI boilerplate with React Navigation and NativeWind. Everything you need to build beautiful apps.
              </Text>
            </View>
          </View>

          {/* Navigation Cards */}
          <View className="mb-6">
            <Text className="text-white text-xl font-bold mb-5">
              Explore Screens
            </Text>
            
            <View className="gap-4">
              {/* About Card */}
              <TouchableOpacity 
                className="bg-blue-600 rounded-3xl p-6"
                onPress={() => navigation.navigate('About')}
                activeOpacity={0.9}
                style={{
                  shadowColor: '#3b82f6',
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.3,
                  shadowRadius: 12,
                  elevation: 8,
                }}
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-1">
                    <View className="flex-row items-center mb-3">
                      <View className="w-10 h-10 rounded-xl bg-white/20 items-center justify-center mr-3">
                        <Text className="text-white text-lg">ℹ️</Text>
                      </View>
                      <Text className="text-white text-xl font-bold">
                        About
                      </Text>
                    </View>
                    <Text className="text-blue-100 text-sm leading-5">
                      Discover features, tech stack, and what makes this boilerplate special
                    </Text>
                  </View>
                  <View className="w-10 h-10 rounded-full bg-white/20 items-center justify-center ml-3">
                    <Text className="text-white text-xl">→</Text>
                  </View>
                </View>
              </TouchableOpacity>

              {/* Settings Card */}
                      <TouchableOpacity
                className="bg-emerald-600 rounded-3xl p-6"
                onPress={() => navigation.navigate('Settings')}
                activeOpacity={0.9}
                style={{
                  shadowColor: '#10b981',
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.3,
                  shadowRadius: 12,
                  elevation: 8,
                }}
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-1">
                    <View className="flex-row items-center mb-3">
                      <View className="w-10 h-10 rounded-xl bg-white/20 items-center justify-center mr-3">
                        <Text className="text-white text-lg">⚙️</Text>
                      </View>
                      <Text className="text-white text-xl font-bold">
                        Settings
                      </Text>
                    </View>
                    <Text className="text-emerald-100 text-sm leading-5">
                      Interactive components and NativeWind styling examples
                    </Text>
                  </View>
                  <View className="w-10 h-10 rounded-full bg-white/20 items-center justify-center ml-3">
                    <Text className="text-white text-xl">→</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            </View>

          {/* Features Grid */}
          <View className="mb-6">
            <Text className="text-white text-xl font-bold mb-5">
              What's Included
            </Text>
            <View className="flex-row flex-wrap gap-3">
              <View className="bg-white/5 rounded-2xl p-4 flex-1 min-w-[45%] border border-white/10">
                <Text className="text-green-400 text-2xl mb-2">✓</Text>
                <Text className="text-white text-sm font-semibold mb-1">
                  React Navigation
                </Text>
                <Text className="text-slate-400 text-xs">
                  Type-safe routing
                </Text>
              </View>
              <View className="bg-white/5 rounded-2xl p-4 flex-1 min-w-[45%] border border-white/10">
                <Text className="text-purple-400 text-2xl mb-2">🎨</Text>
                <Text className="text-white text-sm font-semibold mb-1">
                  NativeWind
                </Text>
                <Text className="text-slate-400 text-xs">
                  Tailwind CSS
                </Text>
              </View>
              <View className="bg-white/5 rounded-2xl p-4 flex-1 min-w-[45%] border border-white/10">
                <Text className="text-blue-400 text-2xl mb-2">🔷</Text>
                <Text className="text-white text-sm font-semibold mb-1">
                  TypeScript
                </Text>
                <Text className="text-slate-400 text-xs">
                  Full type safety
                </Text>
              </View>
              <View className="bg-white/5 rounded-2xl p-4 flex-1 min-w-[45%] border border-white/10">
                <Text className="text-pink-400 text-2xl mb-2">📱</Text>
                <Text className="text-white text-sm font-semibold mb-1">
                  Safe Area
                </Text>
                <Text className="text-slate-400 text-xs">
                  Device ready
                  </Text>
              </View>
            </View>
          </View>

          {/* Quick Info */}
            <View className="bg-white/5 rounded-3xl p-6 border border-white/10">
            <View className="flex-row items-center mb-4">
              <Text className="text-white text-lg font-bold mr-2">💡</Text>
              <Text className="text-white text-lg font-bold">
                Quick Tip
              </Text>
            </View>
            <Text className="text-slate-300 text-sm leading-5">
              Each screen has a unique design to showcase different NativeWind patterns. Navigate between them to see React Navigation in action!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;