import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '../src/routes'
import DefaultLayout from '../src/components/Layout/DefaultLayout';
import HeaderOnly from '../src/components/Layout/HeaderOnly';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {

            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            const Page = route.component;
            return <Route path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            }
              key={index} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
