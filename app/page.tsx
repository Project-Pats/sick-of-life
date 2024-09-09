import Component from "./Component";
import VpnComponent from "./VpnComponent";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Component />
      <VpnComponent />
      <h1 className="font-sans text-4xl">This uses Cloister Black</h1>
      <pre className="font-mono">This uses Fira Code</pre>
    </main>
  );
}
