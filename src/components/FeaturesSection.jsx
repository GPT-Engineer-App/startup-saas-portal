import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Feature One",
    description: "Description for feature one.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
  {
    title: "Feature Two",
    description: "Description for feature two.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
  {
    title: "Feature Three",
    description: "Description for feature three.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
  {
    title: "Feature Four",
    description: "Description for feature four.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="mb-8 text-3xl font-bold text-center">Features</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>{feature.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;