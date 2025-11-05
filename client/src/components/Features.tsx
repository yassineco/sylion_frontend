import AnimatedList from "./animations/AnimatedList";

export default function Features() {
  const items = [
    "Assistant IA pour vos sites et apps",
    "RAG-as-a-Service hébergé localement",
    "Intégrations CRM / CMI / WhatsApp",
  ];

  return (
    <section className="py-24 bg-background text-foreground text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12" data-testid="text-features-title">
        Nos Solutions
      </h2>
      <div className="flex flex-col items-center px-6">
        <AnimatedList items={items} animation="slideUp" />
      </div>
    </section>
  );
}
