'use client'

export default function NewsTheme({ themesList = [], activeTheme, setActiveTheme }) {
    
    // Обработчик клика
    const handleThemeClick = (themeName) => {
        // Если кликнули по активной теме, сбросить фильтр (установить null)
        const newTheme = (themeName === activeTheme) ? null : themeName;
        setActiveTheme(newTheme);
    };

    return(
        <>
            <h1 className="themes-title">По темам:</h1>
            <ul className="themes-list">
                {themesList.map((item, index) => {
                    const themeName = item.themeName;
                    
                    // Проверяем, активна ли тема
                    const isActive = themeName === activeTheme;

                    return (
                        <li 
                            key={index}
                            className={`theme ${isActive ? 'active' : ''}`}
                            onClick={() => handleThemeClick(themeName)}
                        >
                            {themeName}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}