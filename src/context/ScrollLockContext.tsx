"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface ScrollLockContextType {
  lock: () => void;
  unlock: () => void;
  isLocked: boolean;
}

const ScrollLockContext = createContext<ScrollLockContextType | null>(null);

// Counter-based so multiple concurrent callers don't race each other
export function ScrollLockProvider({ children }: { children: React.ReactNode }) {
  const [lockCount, setLockCount] = useState(0);
  const lock = useCallback(() => setLockCount((p) => p + 1), []);
  const unlock = useCallback(() => setLockCount((p) => Math.max(0, p - 1)), []);
  const isLocked = lockCount > 0;

  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);

  return (
    <ScrollLockContext.Provider value={{ lock, unlock, isLocked }}>
      {children}
    </ScrollLockContext.Provider>
  );
}

export function useScrollLock() {
  const ctx = useContext(ScrollLockContext);
  if (!ctx) throw new Error("useScrollLock must be used within ScrollLockProvider");
  return ctx;
}

export function useScrollLockEffect(isOpen: boolean) {
  const { lock, unlock } = useScrollLock();
  useEffect(() => {
    if (!isOpen) return;
    lock();
    return () => unlock();
  }, [isOpen, lock, unlock]);
}
