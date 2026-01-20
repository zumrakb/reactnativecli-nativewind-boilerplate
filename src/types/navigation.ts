export type Screen = 'Dashboard';

export type RootStackParamList = {
  Dashboard: undefined;
  // Add more screen types here as you create new screens
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
