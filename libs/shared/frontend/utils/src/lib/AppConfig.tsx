import React, { useContext } from 'react';
import { useToggle } from '@monorepo-test/shared/frontend/hooks';

type SharedStateType = {
  appName?: string;
  variant?: 'music' | 'movie';
  drawerOpen: boolean;
  toggleDrawer?: () => void;
};

const SharedStateContext = React.createContext<SharedStateType>({
  appName: undefined,
  variant: 'movie',
  drawerOpen: true,
  toggleDrawer: undefined,
});

type Props = {
  appName: string;
  variant: 'music' | 'movie';
};

const AppConfig: React.FC<Props> = ({ children, appName, variant }) => {
  const [drawerOpen, toggleDrawer] = useToggle(true);

  return (
    <SharedStateContext.Provider
      value={{ appName, variant, drawerOpen, toggleDrawer }}
    >
      {children}
    </SharedStateContext.Provider>
  );
};

const useAppConfig = () => useContext(SharedStateContext);
const useDrawer = () => {
  const { drawerOpen, toggleDrawer } = useContext(SharedStateContext);

  return [drawerOpen, toggleDrawer] as [boolean, () => void];
};

export { AppConfig, useAppConfig, useDrawer };
