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

type AboutScreenNavigationProp = StackNavigationProp<RootStackParamList, 'About'>;

const AboutScreen: React.FC = () => {
  const navigation = useNavigation<AboutScreenNavigationProp>();

  return (
    <SafeAreaView className="flex-1 bg-blue-600">
      <StatusBar barStyle="light-content" backgroundColor="#2563eb" />
      
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
            <Text className="text-white text-3xl font-bold">About</Text>
          </View>

          {/* Hero Section */}
          <View className="mb-8">
            <View className="bg-white/10 rounded-3xl p-6 mb-6 border border-white/20">
              <Text className="text-white text-3xl font-bold mb-3">
                About This Boilerplate
              </Text>
              <Text className="text-blue-50 text-base leading-6">
                A production-ready React Native CLI starter template designed to help you build beautiful, performant mobile apps with modern tooling and best practices.
              </Text>
            </View>
          </View>

          {/* Features List */}
          <View className="bg-white/10 rounded-3xl p-6 mb-6 border border-white/20">
            <View className="flex-row items-center mb-5">
              <Text className="text-yellow-300 text-2xl mr-2">✨</Text>
              <Text className="text-white text-xl font-bold">
                Key Features
              </Text>
            </View>
            <View className="gap-4">
              <View className="flex-row items-start">
                <View className="w-8 h-8 rounded-lg bg-blue-500/30 items-center justify-center mr-3 mt-0.5">
                  <Text className="text-blue-200 text-sm font-bold">1</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-white text-base font-semibold mb-1">
                    React Navigation
                  </Text>
                  <Text className="text-blue-100 text-sm leading-5">
                    Stack navigator with full TypeScript support and smooth transitions
                  </Text>
                </View>
              </View>
              <View className="flex-row items-start">
                <View className="w-8 h-8 rounded-lg bg-purple-500/30 items-center justify-center mr-3 mt-0.5">
                  <Text className="text-purple-200 text-sm font-bold">2</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-white text-base font-semibold mb-1">
                    NativeWind
                  </Text>
                  <Text className="text-blue-100 text-sm leading-5">
                    Tailwind CSS for React Native - style with utility classes
                  </Text>
                </View>
              </View>
              <View className="flex-row items-start">
                <View className="w-8 h-8 rounded-lg bg-cyan-500/30 items-center justify-center mr-3 mt-0.5">
                  <Text className="text-cyan-200 text-sm font-bold">3</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-white text-base font-semibold mb-1">
                    TypeScript
                  </Text>
                  <Text className="text-blue-100 text-sm leading-5">
                    Complete type safety for navigation, props, and state
                  </Text>
                </View>
              </View>
              <View className="flex-row items-start">
                <View className="w-8 h-8 rounded-lg bg-emerald-500/30 items-center justify-center mr-3 mt-0.5">
                  <Text className="text-emerald-200 text-sm font-bold">4</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-white text-base font-semibold mb-1">
                    Safe Area Context
                  </Text>
                  <Text className="text-blue-100 text-sm leading-5">
                    Proper handling for notches, status bars, and device edges
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Tech Stack */}
          <View className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 mb-6 border border-white/20">
            <View className="flex-row items-center mb-5">
              <Text className="text-orange-300 text-2xl mr-2">🛠️</Text>
              <Text className="text-white text-xl font-bold">
                Tech Stack
              </Text>
            </View>
            <View className="gap-3">
              <View className="flex-row items-center bg-white/5 rounded-xl p-3">
                <View className="w-2 h-2 rounded-full bg-blue-400 mr-3" />
                <Text className="text-blue-50 text-sm font-medium">React Native 0.81.4</Text>
              </View>
              <View className="flex-row items-center bg-white/5 rounded-xl p-3">
                <View className="w-2 h-2 rounded-full bg-purple-400 mr-3" />
                <Text className="text-blue-50 text-sm font-medium">React Navigation 7.x</Text>
              </View>
              <View className="flex-row items-center bg-white/5 rounded-xl p-3">
                <View className="w-2 h-2 rounded-full bg-cyan-400 mr-3" />
                <Text className="text-blue-50 text-sm font-medium">NativeWind 4.x</Text>
              </View>
              <View className="flex-row items-center bg-white/5 rounded-xl p-3">
                <View className="w-2 h-2 rounded-full bg-emerald-400 mr-3" />
                <Text className="text-blue-50 text-sm font-medium">TypeScript 5.x</Text>
              </View>
            </View>
          </View>

          {/* Navigation Button */}
          <TouchableOpacity 
            onPress={() => navigation.navigate('Settings')}
            className="bg-white rounded-3xl p-5 shadow-2xl"
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
              <Text className="text-blue-600 text-center font-bold text-lg mr-2">
                Explore Settings
              </Text>
              <Text className="text-blue-600 text-xl">→</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;
