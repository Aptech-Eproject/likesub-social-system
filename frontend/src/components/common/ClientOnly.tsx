"use client";

import { useSyncExternalStore } from "react";

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const mounted = useSyncExternalStore(
    () => () => { },
    () => true,
    () => false
  );

  return <>{children}</>;
}