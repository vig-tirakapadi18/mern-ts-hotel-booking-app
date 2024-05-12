import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <h1>Home Page!</h1>
                    </Layout>
                }
            />
            <Route
                path="/search"
                element={
                    <Layout>
                        <h1>Search Page!</h1>
                    </Layout>
                }
            />
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    );
};

export default App;
