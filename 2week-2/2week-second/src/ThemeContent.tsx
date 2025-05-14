import clsx from 'clsx';
import { THEME, useTheme } from "./context/ThemeProvider";

export default function ThemeContent() {

    const { theme, toggleTheme } = useTheme();

    const isLightMode = theme === THEME.LIGHT;

    return (
    <div
        className={clsx('p-4 h-dvh w-full', isLightMode ? 'bg-gray-800' : 'bg-white')}
        >
         <h1
            className={clsx('text-2xl font-bold', isLightMode ? 'text-white' : 'text-black'
            )}  
        > 
            ThemeContent
        </h1>
        <p className={clsx('mt-2', isLightMode ? 'text-white' : 'text-black')}>
            This is the page that makes light and dark mode.
        </p>    
        </div>
    );

}