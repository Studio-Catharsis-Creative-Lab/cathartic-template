import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@/context/ThemeContext';
import { validate } from '@/functions';
import { authFunctions } from '@/functions/auth';
import { ThemeBackground, AppLogo, GlassInput, GlassButton } from '@/components';
import { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

export function ForgotPasswordScreen({ navigation }: Props) {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    const error = validate.email(email);
    if (error) return Alert.alert('Invalid email', error);

    setLoading(true);
    try {
      await authFunctions.forgotPassword(email);
      setSent(true);
    } catch (err: any) {
      Alert.alert('Error', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeBackground>
      <View style={styles.header}>
        <AppLogo size={44} />
      </View>

      <View style={styles.content}>
        {sent ? (
          <Text style={[styles.sent, { color: theme.colors.textOnSurface }]}>
            Check your email for a reset link.
          </Text>
        ) : (
          <>
            <GlassInput
              icon="mail-outline"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <GlassButton label="Send Reset Link" onPress={handleSubmit} loading={loading} />
          </>
        )}
        <GlassButton
          label="Back to Login"
          variant="ghost"
          onPress={() => navigation.navigate('Login')}
          style={styles.back}
        />
      </View>
    </ThemeBackground>
  );
}

const styles = StyleSheet.create({
  header: { paddingTop: 16, marginBottom: 32 },
  content: { flex: 1, justifyContent: 'center', gap: 12 },
  sent: { fontSize: 16, textAlign: 'center', lineHeight: 24 },
  back: { marginTop: 8 },
});
