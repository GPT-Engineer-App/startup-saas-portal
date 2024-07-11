import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This product is amazing! It has helped me manage my business efficiently.",
    photo: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    feedback: "I love using this SaaS product. It's user-friendly and very effective.",
    photo: "/placeholder.svg",
  },
  {
    name: "Sam Wilson",
    feedback: "Highly recommend this product to anyone looking to streamline their business processes.",
    photo: "/placeholder.svg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="mb-8 text-3xl font-bold text-center">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="mx-auto object-cover w-24 h-24 rounded-full"
              />
              <CardTitle>{testimonial.name}</CardTitle>
            </CardHeader>
            <CardContent>{testimonial.feedback}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;