"use client";
import { Check, Moon, Power, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch>
      {({ isSelected }) => (
        <>
          <Switch.Control
            className={`h-[31px] w-[51px] bg-[#0D1B24] ${isSelected ? "bg-[#2A4F66] " : ""}`}
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
