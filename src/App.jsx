import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayouts from "./layouts/Applayouts";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Schedules from "./pages/Schedules";
import Statistics from "./pages/Statistics";
import Community from "./pages/Community";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Applayouts />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="schedules" element={<Schedules />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="community" element={<Community />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          sucess: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
