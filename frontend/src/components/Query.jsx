import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Query = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Query;
