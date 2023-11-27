import { RecoilRoot } from "recoil";
import Router from "./components/Router";
import Layout from "./components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <RecoilRoot>
      <Layout>
        <ToastContainer />
        <Router />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
