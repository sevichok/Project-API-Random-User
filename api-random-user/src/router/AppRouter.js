import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RandomUsersPage from '../pages/RandomUsersPage';

const AppRouter = () => {
    return (<>
        <Routes>
            <Route index element={<RandomUsersPage />} />
        </Routes>
    </>
    )
}

export default AppRouter