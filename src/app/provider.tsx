// app/providers.tsx
"use client";

import {DiscloresuresProvider} from "@/hook";
import {HeroUIProvider} from "@heroui/react";

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <HeroUIProvider>
      <DiscloresuresProvider>{children}</DiscloresuresProvider>
    </HeroUIProvider>
  );
}
