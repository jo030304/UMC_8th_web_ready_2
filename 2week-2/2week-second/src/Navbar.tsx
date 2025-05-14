import clsx from 'clsx';
import { THEME, useTheme } from "./context/ThemeProvider";
import ThemeToggleButton from "./ThemeToggleButton";


export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    const isLightMode = theme === THEME.LIGHT;

    console.log(theme);
    return (
    <nav className={clsx('p-4 w-full flex justify-end',
        isLightMode ? 'bg-gray-800' : 'bg-white'
    )}>
        <ThemeToggleButton />
    </nav>
    );
} 