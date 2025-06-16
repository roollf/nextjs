// component
import { LoginCardContainer } from "@/containers/login-card-container/login-card-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <LoginCardContainer />
    </main>
  );
}
