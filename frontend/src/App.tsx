import * as Router from "react-router-dom";
import * as Page from "./pages/pages";
import * as Component from "./assets/components/components";

export default function App(): JSX.Element {
  return (
    <Router.BrowserRouter>
      <Router.Routes>
        <Router.Route path="/register" element={<Page.Register />} />
        <Router.Route path="/login" element={<Page.Login />} />
        <Router.Route
          path="/dashboard"
          element={
            <Component.Authenticated>
              <Page.Home />
            </Component.Authenticated>
          } />
      </Router.Routes>
    </Router.BrowserRouter>
  )
}