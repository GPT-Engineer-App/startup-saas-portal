import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$10/month",
    features: ["Feature A", "Feature B", "Feature C"],
  },
  {
    name: "Pro",
    price: "$30/month",
    features: ["Feature A", "Feature B", "Feature C", "Feature D"],
  },
  {
    name: "Enterprise",
    price: "$50/month",
    features: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
  },
];

const PricingSection = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="mb-8 text-3xl font-bold text-center">Pricing</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <p className="text-2xl font-bold">{plan.price}</p>
            </CardHeader>
            <CardContent>
              <ul className="mb-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Button variant="primary">Choose Plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;