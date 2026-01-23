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
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#0a0e27' }}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0e27" />
      
      {/* Background Gradient Effect */}
      <View 
        className="absolute inset-0"
        style={{
          backgroundColor: '#0a0e27',
        }}
      />
      <View 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
        style={{ backgroundColor: '#6366f1' }}
      />
      <View 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15"
        style={{ backgroundColor: '#8b5cf6' }}
      />
      
      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className="flex-1 px-6 pt-4 pb-8">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-8 mt-2">
            <View className="flex-1">
              <Text className="text-white text-4xl font-extrabold mb-2 tracking-tight">
                Welcome 👋
              </Text>
              <Text className="text-slate-400 text-base font-medium">
                React Native Boilerplate
              </Text>
            </View>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Settings')}
              className="w-14 h-14 rounded-2xl items-center justify-center"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.15)',
              }}
              activeOpacity={0.7}
            >
              <Text className="text-white text-2xl">⚙️</Text>
            </TouchableOpacity>
          </View>

          {/* Hero Section */}
          <View className="mb-8">
            <View 
              className="rounded-3xl p-7 border overflow-hidden"
              style={{
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                borderColor: 'rgba(139, 92, 246, 0.3)',
                borderWidth: 1,
              }}
            >
              <View className="flex-row items-center mb-4">
                <View 
                  className="w-14 h-14 rounded-2xl items-center justify-center mr-4"
                  style={{ backgroundColor: 'rgba(139, 92, 246, 0.3)' }}
                >
                  <Text className="text-3xl">🚀</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-white text-2xl font-bold mb-1">
                    Get Started Fast
                  </Text>
                  <Text className="text-slate-300 text-sm font-medium">
                    Modern • Fast • Beautiful
                  </Text>
                </View>
              </View>
              <Text className="text-slate-200 text-base leading-6 font-normal">
                A modern React Native CLI boilerplate with React Navigation and NativeWind. Everything you need to build beautiful, production-ready apps.
              </Text>
            </View>
          </View>

          {/* Navigation Cards */}
          <View className="mb-8">
            <Text className="text-white text-2xl font-bold mb-6">
              Explore Screens
            </Text>
            
            <View className="gap-4">
              {/* About Card */}
              <TouchableOpacity 
                className="rounded-3xl p-6 overflow-hidden"
                onPress={() => navigation.navigate('About')}
                activeOpacity={0.85}
                style={{
                  backgroundColor: '#3b82f6',
                  shadowColor: '#3b82f6',
                  shadowOffset: { width: 0, height: 12 },
                  shadowOpacity: 0.4,
                  shadowRadius: 16,
                  elevation: 12,
                }}
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-1">
                    <View className="flex-row items-center mb-4">
                      <View 
                        className="w-14 h-14 rounded-2xl items-center justify-center mr-4"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                      >
                        <Text className="text-white text-2xl">ℹ️</Text>
                      </View>
                      <Text className="text-white text-2xl font-bold">
                        About
                      </Text>
                    </View>
                    <Text className="text-blue-50 text-base leading-6 font-medium">
                      Discover features, tech stack, and what makes this boilerplate special
                    </Text>
                  </View>
                  <View 
                    className="w-12 h-12 rounded-full items-center justify-center ml-4"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                  >
                    <Text className="text-white text-2xl font-bold">→</Text>
                  </View>
                </View>
              </TouchableOpacity>

              {/* Settings Card */}
              <TouchableOpacity
                className="rounded-3xl p-6 overflow-hidden"
                onPress={() => navigation.navigate('Settings')}
                activeOpacity={0.85}
                style={{
                  backgroundColor: '#10b981',
                  shadowColor: '#10b981',
                  shadowOffset: { width: 0, height: 12 },
                  shadowOpacity: 0.4,
                  shadowRadius: 16,
                  elevation: 12,
                }}
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-1">
                    <View className="flex-row items-center mb-4">
                      <View 
                        className="w-14 h-14 rounded-2xl items-center justify-center mr-4"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                      >
                        <Text className="text-white text-2xl">⚙️</Text>
                      </View>
                      <Text className="text-white text-2xl font-bold">
                        Settings
                      </Text>
                    </View>
                    <Text className="text-emerald-50 text-base leading-6 font-medium">
                      Interactive components and NativeWind styling examples
                    </Text>
                  </View>
                  <View 
                    className="w-12 h-12 rounded-full items-center justify-center ml-4"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                  >
                    <Text className="text-white text-2xl font-bold">→</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Features Grid */}
          <View className="mb-8">
            <Text className="text-white text-2xl font-bold mb-6">
              What's Included
            </Text>
            <View className="flex-row flex-wrap gap-4">
              <View 
                className="rounded-2xl p-5 flex-1 min-w-[47%] border"
                style={{
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  borderColor: 'rgba(34, 197, 94, 0.2)',
                  borderWidth: 1,
                }}
              >
                <View 
                  className="w-12 h-12 rounded-xl items-center justify-center mb-3"
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}
                >
                  <Text className="text-green-400 text-2xl">✓</Text>
                </View>
                <Text className="text-white text-base font-bold mb-1.5">
                  React Navigation
                </Text>
                <Text className="text-slate-400 text-xs font-medium">
                  Type-safe routing
                </Text>
              </View>
              
              <View 
                className="rounded-2xl p-5 flex-1 min-w-[47%] border"
                style={{
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  borderColor: 'rgba(168, 85, 247, 0.2)',
                  borderWidth: 1,
                }}
              >
                <View 
                  className="w-12 h-12 rounded-xl items-center justify-center mb-3"
                  style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                >
                  <Text className="text-purple-400 text-2xl">🎨</Text>
                </View>
                <Text className="text-white text-base font-bold mb-1.5">
                  NativeWind
                </Text>
                <Text className="text-slate-400 text-xs font-medium">
                  Tailwind CSS
                </Text>
              </View>
              
              <View 
                className="rounded-2xl p-5 flex-1 min-w-[47%] border"
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  borderColor: 'rgba(59, 130, 246, 0.2)',
                  borderWidth: 1,
                }}
              >
                <View 
                  className="w-12 h-12 rounded-xl items-center justify-center mb-3"
                  style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                >
                  <Text className="text-blue-400 text-2xl">🔷</Text>
                </View>
                <Text className="text-white text-base font-bold mb-1.5">
                  TypeScript
                </Text>
                <Text className="text-slate-400 text-xs font-medium">
                  Full type safety
                </Text>
              </View>
              
              <View 
                className="rounded-2xl p-5 flex-1 min-w-[47%] border"
                style={{
                  backgroundColor: 'rgba(236, 72, 153, 0.1)',
                  borderColor: 'rgba(236, 72, 153, 0.2)',
                  borderWidth: 1,
                }}
              >
                <View 
                  className="w-12 h-12 rounded-xl items-center justify-center mb-3"
                  style={{ backgroundColor: 'rgba(236, 72, 153, 0.2)' }}
                >
                  <Text className="text-pink-400 text-2xl">📱</Text>
                </View>
                <Text className="text-white text-base font-bold mb-1.5">
                  Safe Area
                </Text>
                <Text className="text-slate-400 text-xs font-medium">
                  Device ready
                </Text>
              </View>
            </View>
          </View>

          {/* Quick Info */}
          <View 
            className="rounded-3xl p-6 border"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1,
            }}
          >
            <View className="flex-row items-center mb-4">
              <View 
                className="w-12 h-12 rounded-xl items-center justify-center mr-3"
                style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}
              >
                <Text className="text-yellow-400 text-2xl">💡</Text>
              </View>
              <Text className="text-white text-xl font-bold">
                Quick Tip
              </Text>
            </View>
            <Text className="text-slate-300 text-base leading-6 font-normal">
              Each screen has a unique design to showcase different NativeWind patterns. Navigate between them to see React Navigation in action!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;