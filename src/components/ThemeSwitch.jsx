"use client";
import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch>
      {({ isSelected }) => (
        <>
          <Switch.Control
            className={`h-[31px] w-[51px] bg-[#3A6B6F] ${isSelected ? "bg-[#3A6B6F] " : ""}`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Switch.Thumb
              className={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
            >
              <Switch.Icon>{isSelected ? <Moon/> : <Sun />}</Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
}
