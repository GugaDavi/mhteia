import React from "react";

import BottomNavigatior from "./bottomNavigator";
import { useAuth } from "../store/user";
import Login from "../screens/Login";

const Routes: React.FC = () => {
  const { user } = useAuth();

  if (user.name !== undefined) {
    return <BottomNavigatior />;
  }
  return <Login />;
};

export default Routes;
