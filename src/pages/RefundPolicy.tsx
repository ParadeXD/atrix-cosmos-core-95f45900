import Layout from "@/components/Layout";
import PageHeroBanner from "@/components/PageHeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const RefundPolicy = () => (
  <Layout>
    <PageHeroBanner
      image={heroBg}
      title="Refund Policy"
      subtitle="We believe in fair service. Clear rules. No confusion."
    />

    <section className="max-w-3xl mx-auto px-6 pb-16">
      <div className="space-y-6">
        <div className="glass-panel p-6">
          <h3 className="font-display font-bold text-foreground text-lg mb-4">🕒 12-Hour Refund Window</h3>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              You may request a full refund within 12 hours of purchase.
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              Requests submitted after 12 hours will not be eligible for refunds.
            </li>
          </ul>
        </div>

        <div className="glass-panel p-6">
          <h3 className="font-display font-bold text-foreground text-lg mb-4">🔁 After 12 Hours</h3>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              Refunds are not available beyond the 12-hour window.
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              If an issue is caused by our infrastructure, you may receive service replacement or account credit.
            </li>
          </ul>
        </div>

        <div className="glass-panel p-6">
          <h3 className="font-display font-bold text-foreground text-lg mb-4">⚠️ Important Conditions</h3>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              Refunds apply only if there is no abuse or Terms violation.
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              Any misuse, exploitation, or intentional damage will void refund eligibility immediately.
            </li>
          </ul>
        </div>

        <div className="glass-panel p-6">
          <h3 className="font-display font-bold text-foreground text-lg mb-4">📩 How to Request</h3>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              Open a ticket in your support channel
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              Or contact us via Discord support
            </li>
          </ul>
        </div>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">⚡ EB Nodes — Powering Your Digital Universe</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default RefundPolicy;
