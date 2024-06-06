import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import { AdminRouter } from "./routers";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {AdminRouter.map((route, index) => {
            let Layout = AdminLayout;
            let Page = route.component;
            if (index >= 2) {
              return (
                <Route
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            } else {
              return <Route path={route.path} element={<Page />} />;
            }
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
