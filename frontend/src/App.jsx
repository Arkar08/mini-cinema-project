import LoginContextProvider from "./context/LoginContext";
import Role from "./layouts/Role";
import { ThemeProvider } from "@material-tailwind/react";

const App = () => {
  return (
    <ThemeProvider>
      <LoginContextProvider>
        <Role />
      </LoginContextProvider>
    </ThemeProvider>
  );
};

export default App;
