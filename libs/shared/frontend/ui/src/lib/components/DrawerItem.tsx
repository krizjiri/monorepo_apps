import React, { ReactChild } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

type Props = {
  label: string;
  icon: ReactChild;
  link?: string;
};

const DrawerItem: React.FC<Props> = ({ label, icon, link }) => {
  const history = useHistory();

  const handleClick = () => {
    if (link) {
      history.push(link);
    }
  };

  return (
    <ListItem button key={label} onClick={handleClick} disabled={!link}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};

export { DrawerItem, Props as DrawerItemProps };
