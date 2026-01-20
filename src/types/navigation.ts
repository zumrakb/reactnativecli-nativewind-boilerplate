export type Screen = 'Dashboard' | 'About' | 'Settings';

export type RootStackParamList = {
  Dashboard: undefined;
  About: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
