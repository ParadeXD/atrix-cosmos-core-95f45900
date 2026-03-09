import Layout from "@/components/Layout";
import PageHeroBanner from "@/components/PageHeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const methods = [
  { icon: "🏦", label: "UPI" },
  { icon: "📱", label: "Wallets (if applicable)" },
  { icon: "💰", label: "Crypto (if accepted)" },
  { icon: "🇳🇵", label: "NPR (Nepali)" },
];

const PaymentMethods = () => (
  <Layout>
    <PageHeroBanner
      image={heroBg}
      title="Payment Methods"
      subtitle="💳 EB Nodes — Accepted Payment Options"
    />

    <section className="max-w-3xl mx-auto px-6 pb-16">
      <div className="glass-panel p-8">
        <h3 className="font-display font-bold text-foreground text-xl mb-6">We currently accept:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {methods.map((m) => (
            <div key={m.label} className="glass-panel px-5 py-4 flex items-center gap-3">
              <span className="text-2xl">{m.icon}</span>
              <span className="font-display font-semibold text-foreground">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 space-y-4">
          <h4 className="font-display font-bold text-foreground text-lg">📌 Important</h4>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              Payments are processed automatically.
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              Always include your Order ID in payment notes.
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              For manual payments, open a ticket after paying.
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default PaymentMethods;
