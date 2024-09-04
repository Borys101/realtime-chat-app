"use client";

import { ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
