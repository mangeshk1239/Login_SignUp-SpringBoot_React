import * as Router from "react-router-dom";
import * as Page from "./pages/pages";

export default function App(): JSX.Element {
  return (
    <Router.BrowserRouter>
      <Router.Routes>
        <Router.Route path="/register" element={<Page.Register />} />
        <Router.Route path="/login" element={<Page.Login />} />
      </Router.Routes>
    </Router.BrowserRouter>
  )
}