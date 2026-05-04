import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
import { validate } from '@/functions';
import {
  ThemeBackground,
  AppLogo,
  StreakBadge,
  GlassInput,
  GlassButton,
} from '@/components';
import { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const { theme } = useTheme();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string | null; password?: string | null }>({});

  const handleLogin = async () => {
    const { errors: e, isValid } = validate.form({
      email: validate.email(email),
      password: validate.password(password),
    });
    setErrors(e);
    if (!isValid) return;

    setLoading(true);
    try {
      await signIn(email, password);
    } catch (err: any) {
      Alert.alert('Sign in failed', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        {/* Header */}
        <View style={styles.header}>
          <AppLogo size={52} />
          <StreakBadge count={3} />
        </View>

        <View style={styles.spacer} />

        {/* Form */}
        <View style={styles.form}>
          <GlassInput
            icon="mail-outline"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            error={errors.email}
          />
          <GlassInput
            icon="lock-closed-outline"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoComplete="password"
            error={errors.password}
            rightIcon={showPassword ? 'eye-off-outline' : 'eye-outline'}
            onRightIconPress={() => setShowPassword((s) => !s)}
          />

          <GlassButton
            label="Log In"
            onPress={handleLogin}
            loading={loading}
            style={styles.button}
          />

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotWrap}>
            <Text style={[styles.forgot, { color: theme.colors.textOnSurface }]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.spacer} />

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: theme.colors.textOnSurface }]}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[styles.footerLink, { color: theme.colors.link }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ThemeBackground>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  spacer: { flex: 1 },
  form: { gap: 16 },
  button: { marginTop: 8 },
  forgotWrap: { alignItems: 'center', marginTop: 12 },
  forgot: { fontSize: 14 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 32,
  },
  footerText: { fontSize: 14 },
  footerLink: { fontSize: 14, fontWeight: '600' },
});
