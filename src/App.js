import { Toaster } from "react-hot-toast";
import "./App.css";
import Routes from "./Router/Routes";

function App() {
  return (
    <div className="">
      <Routes></Routes>
      <Toaster
        toastOptions={{
          className: "mt-12 mr-6",
          style: {
            border: "1px solid #713200",
            padding: "24px",
          },
        }}
        duration="4000"
        position="top-center"
        reverseOrder={false}
      ></Toaster>
    </div>
  );
}

export default App;
