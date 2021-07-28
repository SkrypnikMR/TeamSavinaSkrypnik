import React, { useEffect, useState } from 'react';

export const Theme = React.createContext({ theme: 'dark', changeTheme: () => { } });

export const withTheme = (Component: React.ComponentType<any>) => () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const changeTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <Theme.Provider value={{ theme, changeTheme }}>
      <Component />
    </Theme.Provider>
  );
};
