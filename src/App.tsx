import { RecoilRoot } from "recoil";
import Router from "./components/Router";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Router />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
