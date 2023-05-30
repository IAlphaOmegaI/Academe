import { UserProvider } from "../context/index";
import Layout from "./_layout";

export default function App() {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
}
