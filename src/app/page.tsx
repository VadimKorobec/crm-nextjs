import ClientComponent from "@/components/client-component";
import ServerComponent from "@/components/server-component";



export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <ServerComponent />
      <ClientComponent/>
    </main>
  );
}
