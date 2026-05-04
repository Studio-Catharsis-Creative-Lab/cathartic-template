# Cathartic Template

A React Native (Expo) template for rapidly developing wellness mobile applications with a unified look and feel. This template provides authentication, theming, navigation, and backend integration out of the box.

## Quick Start

1. Clone this repository.
2. Copy `.env.example` to `.env` and fill in your API keys (Firebase, RevenueCat).
3. Edit `src/config.ts` to set your app name, bundle ID, etc.
4. Update `app.json` to match the config.
5. Run `npm install` then `npm start` to launch the app.

## Features

- **Authentication**: Login, signup, forgot password screens.
- **Theming**: Multiple themes (beach, desert, mountain, etc.) with glass UI components.
- **Navigation**: Bottom tab navigation with screens for home, settings, etc.
- **Backend**: Unified API for AI and database access.
- **Premium Features**: Subscription management via RevenueCat.
- **Analytics**: Firebase Analytics integration.
- **Haptics**: Vibration feedback.

## Setup

### Prerequisites

- Node.js
- Expo CLI
- Android Studio (for Android) or Xcode (for iOS)

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in:

- `EXPO_PUBLIC_API_URL`: Your backend API URL.
- Firebase keys: From your Firebase project.
- `EXPO_PUBLIC_REVENUECAT_IOS_KEY`: From RevenueCat.

### Configuration

Edit `src/config.ts`:

- Set `appName`, `appSlug`, `bundleId`.
- Choose `defaultTheme`.
- Enable/disable features.

Update `app.json` to match `config.ts` values.

## Adding a New Theme

1. Create `src/themes/{name}/DESIGN.md` following the spec.
2. Create `src/themes/{name}/tokens.ts` exporting a `Theme` object.
3. Add to `src/themes/index.ts`.
4. Add background image to `assets/backgrounds/{name}.jpg`.

## Adding a New Screen

1. Duplicate `src/screens/HomeScreen.tsx`.
2. Export from `src/screens/index.ts`.
3. Add to navigator in `src/navigation/AppNavigator.tsx`.

## Data Schema

Extend `BaseEntry` in `src/data/types.ts` for your app's data.

## Building and Running

```bash
npm start          # Start Expo dev server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web
```

## Contributing

This is a template for Studio Catharsis apps. Follow the architecture guide in `CLAUDE.md`.