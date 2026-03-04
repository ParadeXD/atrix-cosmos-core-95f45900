import Layout from "@/components/Layout";
import PlanCard from "@/components/PlanCard";
import SectionHeading from "@/components/SectionHeading";

const plans = [
  { name: "Starter", icon: "💠", tagline: "Affordable start for small bots", ram: "1 GB", cpu: "1 vCore", storage: "5 GB", price: "₹35" },
  { name: "Basic", icon: "💠", tagline: "More room to grow", ram: "2 GB", cpu: "1 vCore", storage: "10 GB", price: "₹65" },
  { name: "Pro", icon: "💠", tagline: "Priority performance", ram: "3 GB", cpu: "2 vCores", storage: "15 GB", price: "₹100", popular: true },
  { name: "Ultimate", icon: "🔥", tagline: "Maximum performance & priority support", ram: "4 GB", cpu: "2 vCores", storage: "25 GB", price: "₹150" },
];

const BotHosting = () => (
  <Layout>
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeading
        title="Discord Bot Hosting"
        subtitle="Affordable · Reliable · 24/7 Online"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((p, i) => (
          <PlanCard key={p.name} {...p} index={i} />
        ))}
      </div>

      <div className="mt-12 text-center glass-panel p-8 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-foreground text-xl mb-2">🎟️ Ready to get started?</h3>
        <p className="text-muted-foreground text-sm mb-4">Open a ticket on Discord to purchase your plan. Fast setup, reliable hosting.</p>
        <a
          href="https://discord.gg/9Dhjwy3g"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block glow-button bg-primary text-primary-foreground font-display font-semibold px-8 py-3 rounded-2xl text-sm"
        >
          Open Ticket on Discord
        </a>
      </div>
    </section>
  </Layout>
);

export default BotHosting;
