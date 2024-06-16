import Role from "./layouts/Role";
import { ThemeProvider } from "@material-tailwind/react";

const App = () => {
  return (
    <ThemeProvider>
      <Role />
    </ThemeProvider>
  );
};

export default App;
