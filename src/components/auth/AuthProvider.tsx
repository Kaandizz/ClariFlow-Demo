"use client";

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const { initialize } = useAuthStore();

  useEffect(() => {
    // Initialize auth state when the app loads
    initialize();
  }, [initialize]);

  return <>{children}</>;
} 