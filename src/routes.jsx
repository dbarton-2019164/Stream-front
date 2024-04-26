import { AuthPage } from "./pages/auth";
import { DashboardPage } from "./pages/dashboard";
const routes = [
  { path: "/auth", element: <AuthPage /> },
  { path: "/*", element: <DashboardPage /> },
];

export default routes;
