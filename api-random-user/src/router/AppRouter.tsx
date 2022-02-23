import React from "react";
import { Routes, Route } from "react-router-dom";
import RandomUsersPage from "../pages/RandomUsersPage";

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<RandomUsersPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
