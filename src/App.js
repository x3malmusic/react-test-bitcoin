import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import routes from "./routes";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import History from "./components/History";
import RouterView from "./components/RouterView/RouterView";
import { history } from "./utils/history";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") history.push(routes[0].path)
  }, [location]);

  return (
    <>
      <ReactNotification />
      <Header />
      <Box display="flex">
        <Sidebar />
        <RouterView>
          {routes.map(({ path, component }) => (
            <Route
              key={path}
              path={path}
              component={component}
            />
          ))}
        </RouterView>
        <History />
      </Box>
    </>
  );
}

export default App;
