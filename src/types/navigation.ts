/**
 * Alt tab ekranları. Yeni ekran eklerken bu tipe ve RootStackParamList'e ekleyin;
 * ardından src/navigation/tabConfig.tsx içinde ilgili kaydı oluşturun.
 */
export type Screen = 'Dashboard' | 'About' | 'Settings' | 'Privacy';

/** Her tab için route param tipi (çoğu ekran paramsız) */
export type RootStackParamList = {
  Dashboard: undefined;
  About: undefined;
  Settings: undefined;
  Privacy: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
