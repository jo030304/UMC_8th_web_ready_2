import { createContext, PropsWithChildren, useContext, useState } from 'react';

export enum THEME {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

type TTheme = THEME.LIGHT | THEME.DARK;

interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
}

//
export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

// ThemeProvider 컴포넌트
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<TTheme>(THEME.LIGHT);

  const toggleTheme = (): void => {
    setTheme((prevTheme) =>
      prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


//오류 방지
export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}