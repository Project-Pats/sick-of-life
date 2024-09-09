import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <>
      <header className="mb-8 mt-12 flex flex-col items-center w-full relative z-10">
        <div className="mb-2 flex flex-row justify-between items-center w-full">
          <div className="flex flex-col">
            <h1 className="text-6xl font-extrabold mb-2 font-sans">
              kitakitsune
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              sleep deprivased developer
            </p>
          </div>
        </div>

        <div className="flex space-x-6 mt-8 justify-start w-full">
          <Button variant="outline" size="sm">
            about me
          </Button>
          <Button variant="ghost" size="sm">
            blog
          </Button>
          <Button variant="ghost" size="sm">
            services
          </Button>
        </div>
      </header>
    </>
  );
}
