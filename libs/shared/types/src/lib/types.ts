import { RouteProps } from 'react-router-dom';

type Id = string | number;

type RouteType = {
  name: string;
} & RouteProps;

export { Id, RouteType };
