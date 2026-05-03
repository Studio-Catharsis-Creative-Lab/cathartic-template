import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
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

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export function SignUpScreen({ navigation }: Props) {
  const { theme } = useTheme();
  const { signUp } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const handleSignUp = async () => {
    const { errors: e, isValid } = validate.form({
      name: validate.name(name),
      email: validate.email(email),
      password: validate.password(password),
    });
    setErrors(e);
    if (!isValid) return;

    setLoading(true);
    try {
      await signUp(name, email, password, location || undefined);
    } catch (err: any) {
      Alert.alert('Sign up failed', err.message);
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
        <View style={styles.header}>
          <AppLogo size={52} />
          <StreakBadge count={3} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <GlassInput
            icon="person-outline"
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            autoComplete="name"
            error={errors.name}
          />
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
            icon="location-outline"
            placeholder="Location (Geographic)"
            value={location}
            onChangeText={setLocation}
            autoCapitalize="words"
          />
          <GlassInput
            icon="lock-closed-outline"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoComplete="new-password"
            error={errors.password}
            rightIcon={showPassword ? 'eye-off-outline' : 'eye-outline'}
            onRightIconPress={() => setShowPassword((s) => !s)}
          />

          <GlassButton
            label="Sign Up"
            onPress={handleSignUp}
            loading={loading}
            style={styles.button}
          />

          <View style={styles.loginRow}>
            <Text style={[styles.footerText, { color: theme.colors.textOnSurface }]}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[styles.footerLink, { color: theme.colors.link }]}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Terms */}
        <View style={styles.terms}>
          <Text style={[styles.termsText, { color: theme.colors.textOnSurface }]}>
            By signing up, you agree to our{' '}
          </Text>
          <TouchableOpacity>
            <Text style={[styles.termsLink, { color: theme.colors.link }]}>Terms & Privacy</Text>
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
    marginBottom: 24,
  },
  scroll: { paddingBottom: 16 },
  button: { marginTop: 8 },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  footerText: { fontSize: 14 },
  footerLink: { fontSize: 14, fontWeight: '600' },
  terms: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  termsText: { fontSize: 12 },
  termsLink: { fontSize: 12, fontWeight: '600' },
});
