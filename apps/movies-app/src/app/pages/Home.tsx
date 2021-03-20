import React, { useEffect } from 'react';
import { useFetch } from 'libs/hooks/src/lib/useFetch';
import { endpoints } from 'apps/movies-app/src/app/endpoints';
import { ResponseItem, SearchItemRequest } from 'libs/types/src';
import { List, ListItem, ListItemText, Paper } from '@material-ui/core';

type Props = {};

const Home: React.FC<Props> = () => {
  const params = { name: 'Spider' };

  const [fetchList, { data }] = useFetch<ResponseItem[], SearchItemRequest>({
    endpoint: endpoints.searchItems,
  });

  useEffect(() => {
    fetchList({ params });
  }, []);

  return (
    <Paper>
      Home Page
      <List>
        {data?.map(item => (
          <ListItem key={item.id || item.name}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export { Home };
