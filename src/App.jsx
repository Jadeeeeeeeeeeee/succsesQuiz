import MainConnector from "./mainQconnector";
import { Analytics } from "@vercel/analytics/react"

function App() {

  return(<>
  <MainConnector/>
  <Analytics />
  </>);
}

export default App
