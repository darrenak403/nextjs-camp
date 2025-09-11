// app/providers.tsx
"use client";

import {DiscloresuresProvider, SwrProvider} from "@/hook";
import {HeroUIProvider} from "@heroui/react";

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <HeroUIProvider>
      <DiscloresuresProvider>
        <SwrProvider>{children}</SwrProvider>
      </DiscloresuresProvider>
    </HeroUIProvider>
  );
}
