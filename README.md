<div align="center">
  <h1>React Native CLI NativeWind Boilerplate</h1>
  <p>Modern, minimal React Native CLI starter with NativeWind, React Navigation, i18n and theme (dark/light/system).</p>

  <p>
    <a href="https://github.com/zumrakb/reactnativecli-nativewind-boilerplate/stargazers">
      <img alt="Stars" src="https://img.shields.io/github/stars/zumrakb/reactnativecli-nativewind-boilerplate?color=22c55e&style=for-the-badge" />
    </a>
    <a href="https://github.com/zumrakb/reactnativecli-nativewind-boilerplate">
      <img alt="Top Language" src="https://img.shields.io/github/languages/top/zumrakb/reactnativecli-nativewind-boilerplate?color=38bdf8&style=for-the-badge" />
    </a>
    <a href="https://github.com/zumrakb/reactnativecli-nativewind-boilerplate">
      <img alt="Repo" src="https://img.shields.io/badge/GitHub-Repository-6366f1?style=for-the-badge" />
    </a>
    <a href="./LICENSE">
      <img alt="License" src="https://img.shields.io/badge/License-MIT-f59e0b?style=for-the-badge" />
    </a>
  </p>
</div>

## Overview
This boilerplate helps you start fast with a clean architecture, a modern UI baseline, and the essential tooling already configured. Copy the repo for a new project and follow "Yeni proje için" below.

## Features
- ✅ React Native CLI with TypeScript
- 🎨 NativeWind (Tailwind CSS for React Native)
- 🧭 React Navigation with bottom tabs (config in `src/navigation/tabConfig.tsx`)
- 🌍 i18n (EN/TR) with persistent language selection
- 🌓 Theme: system / dark / light with persistence
- 🧩 Vector icons for tabs and UI
- 💾 AsyncStorage for preferences
- 📁 Styles in `src/styles/` (theme-aware)

## Requirements
- Node 20+
- Android Studio (Android), Xcode (iOS, macOS)
- Java 17 (Android)
- React Native CLI environment (official Quickstart)

## Quick Start
```bash
git clone https://github.com/zumrakb/reactnativecli-nativewind-boilerplate.git
cd reactnativecli-nativewind-boilerplate
npm install
```

### iOS (before first run)
```bash
cd ios && pod install && cd ..
```

### Run
```bash
npm start
# In another terminal:
npm run android   # or  npm run ios
```

## Project Structure
| Path | Description |
|------|-------------|
| `src/navigation/` | Tab config (`tabConfig.tsx`), `AppNavigator` |
| `src/screens/` | App screens (Home, About, Privacy, Settings) |
| `src/styles/` | Screen styles + `themeColors.ts` |
| `src/contexts/` | `ThemeContext` (theme + isDark) |
| `src/i18n/` | i18n setup and `translations/` (en, tr) |
| `src/types/` | `navigation.ts` (Screen type, RootStackParamList) |
| `global.css` | NativeWind; `App.tsx` app entry |

## Adding a new tab/screen
1. **Types:** In `src/types/navigation.ts`, add the screen name to `Screen` and to `RootStackParamList` (e.g. `NewScreen: undefined`).
2. **Config:** In `src/navigation/tabConfig.tsx`, add an entry: `name`, `component`, `labelKey`, `icon` (Ionicons name string).
3. **Screen:** Create the screen component in `src/screens/` and optionally a style file in `src/styles/`.

## Localization (i18n)
Edit `src/i18n/translations/en.json` and `tr.json`. Add new keys as needed. Language is chosen in Settings and persisted.

## Theme
Settings page: theme can be **System**, **Dark**, or **Light**. Stored in AsyncStorage. Use `useTheme()` for `isDark` and `theme` in components; styles use `src/styles/themeColors.ts`.

## Yeni proje için (template checklist)
1. **Uygulama adı:** `app.json` içinde `name` ve `displayName` güncelle. İstersen native projelerde (iOS/Android) uygulama adını da değiştir.
2. **Demo içerik:** Kodda `ŞABLON DEMO` yorumlarıyla işaretli bölümleri sil:
   - **HomeScreen:** `FEATURE_CARDS`, rows döngüsü ve "Neler var" kutuları
   - **AboutScreen:** İki demo kartı (Başlangıç–Bitiş arası)
   - **PrivacyScreen:** İki demo kartı (Başlangıç–Bitiş arası)
3. **Ortam değişkenleri:** `.env.example` dosyasını `.env` olarak kopyala ve API URL / key vb. ekle. `.env` commit edilmez.

## Environment variables
Copy `.env.example` to `.env` and fill in values. Do not commit `.env`. Use a config module (e.g. `src/config/env.ts`) to read them if needed.

## Troubleshooting
- **Android:** Duplicate fonts after `npx react-native-asset` → remove duplicates in `android/app/src/main/assets/fonts`.
- **Gradle:** Clear `.gradle/caches` and rebuild if caches are corrupted.
- **Metro:** `npm start` with `--reset-cache` if bundler behaves oddly.

## License
MIT. See `LICENSE`.
