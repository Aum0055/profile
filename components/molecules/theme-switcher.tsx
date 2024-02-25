// app/components/ThemeSwitcher.tsx
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react';
import { Button, Link } from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {theme === 'light' ?
        <Button isIconOnly onClick={() => setTheme('dark')} variant="ghost" aria-label="Take a photo">
          <Moon />
        </Button> :
        <Button isIconOnly onClick={() => setTheme('light')} variant="ghost" aria-label="Take a photo">
          <Sun />
        </Button>
      }
    </>
  )
};