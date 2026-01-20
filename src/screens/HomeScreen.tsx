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
    <SafeAreaView className="flex-1 bg-red-500">
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <ScrollView className="flex-1">
        <View className="flex-1 px-4 pt-4">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-8">
            <Text className="text-white text-2xl font-bold">Home</Text>
            <TouchableOpacity 
              className="w-10 h-10 rounded-full bg-zinc-900 items-center justify-center"
            >
              <Text className="text-white text-lg">⚙️</Text>
            </TouchableOpacity>
          </View>

          {/* Welcome Section */}
          <View className="mb-8">
            <Text className="text-white text-4xl font-bold mb-2">
              Welcome
            </Text>
            <Text className="text-gray-400 text-base">
              This is your React Native CLI boilerplate with NativeWind and React Navigation
            </Text>
          </View>

          {/* Example Cards */}
          <View className="mb-6">
            <Text className="text-white text-xl font-semibold mb-4">
              Quick Actions
            </Text>
            
            <View className="gap-4">
              <TouchableOpacity 
                className="bg-zinc-900 rounded-xl p-6"
                onPress={() => {
                  // Example navigation - add your routes here
                  console.log('Navigate to feature');
                }}
              >
                <Text className="text-white text-lg font-semibold mb-2">
                  Feature 1
                </Text>
                <Text className="text-gray-400 text-sm">
                  Tap to navigate or perform an action
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                className="bg-zinc-900 rounded-xl p-6"
                onPress={() => {
                  console.log('Navigate to feature');
                }}
              >
                <Text className="text-white text-lg font-semibold mb-2">
                  Feature 2
                </Text>
                <Text className="text-gray-400 text-sm">
                  Another example action card
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Info Section */}
          <View className="bg-zinc-900 rounded-xl p-6 mb-6">
            <Text className="text-white text-lg font-semibold mb-3">
              Boilerplate Info
            </Text>
            <View className="gap-2">
              <Text className="text-gray-400 text-sm">
                • React Native CLI
              </Text>
              <Text className="text-gray-400 text-sm">
                • NativeWind (Tailwind CSS)
              </Text>
              <Text className="text-gray-400 text-sm">
                • React Navigation
              </Text>
              <Text className="text-gray-400 text-sm">
                • TypeScript
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;