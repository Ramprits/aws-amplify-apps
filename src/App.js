import React from 'react';
import { Refine } from "@pankod/refine-core";
import routerProvider, {
  HashRouterComponent,
} from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import IndexPage from './pages/Index.js';
import LoginPage from './pages/Login.js';
import RegisterPage from './pages/Register.js';
import ContactPage from './pages/Contact.js';

import { axiosInstance } from './utils/index.js';
import { authProvider } from './utils/authProvider.js';

export default function App() {
  return (
    <Refine
      routerProvider={{
        ...routerProvider, routes: [
          {
            element: <LoginPage />,
            path: "/login"
          },
          {
            element: <RegisterPage />,
            path: "/register"
          },
          {
            element: <ContactPage />,
            path: "/contact",
          }
        ],
        RouterComponent: HashRouterComponent,
      }}
      authProvider={authProvider}
      dataProvider={dataProvider(axiosInstance)}
      resources={[{ name: "home", list: IndexPage }]}
      ReadyPage={IndexPage}
      options={{ disableTelemetry: true }}
    />
  );
}
