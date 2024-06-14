import View from "./routes/View";
import { ThemeProvider } from "@material-tailwind/react";

const App = () => {
  return (
    <ThemeProvider>
      <View />
    </ThemeProvider>
  );
};

export default App;
