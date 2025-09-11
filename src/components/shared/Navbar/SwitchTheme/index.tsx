import {Switch} from "@heroui/react";
import {useTheme} from "next-themes";
import {Moon, Sun} from "phosphor-react";
import React, {useEffect, useState} from "react";

export const SwitchTheme = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  // Chờ component mount trên client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Tránh hydration mismatch - render placeholder trước
  if (!mounted) {
    return (
      <div>
        <Switch
          size="lg"
          color="default"
          isSelected={false}
          isDisabled
          thumbIcon={() => <Sun weight="fill" />}
        />
      </div>
    );
  }

  return (
    <div>
      <Switch
        size="lg"
        color="default"
        thumbIcon={({isSelected, className}) =>
          isSelected ? (
            <Moon weight="fill" className={className} />
          ) : (
            <Sun weight="fill" className={className} />
          )
        }
        isSelected={theme === "dark"}
        onValueChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};
