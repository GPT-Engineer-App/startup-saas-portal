import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gray-100 md:flex-row md:text-left">
      <div className="flex flex-col items-center justify-center flex-1 space-y-4 md:items-start">
        <h1 className="text-4xl font-bold md:text-6xl">Welcome to Acme Inc</h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          The best SaaS product to manage your business efficiently.
        </p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </div>
      <div className="flex-1 mt-8 md:mt-0">
        <img
          src="/placeholder.svg"
          alt="placeholder"
          className="mx-auto object-cover w-full h-[400px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;