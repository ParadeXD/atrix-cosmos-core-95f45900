import Layout from "@/components/Layout";
import PlanCard from "@/components/PlanCard";
import SectionHeading from "@/components/SectionHeading";
import PageHeroBanner from "@/components/PageHeroBanner";
import vpsBanner from "@/assets/vps-banner.jpg";
import vpsNetwork from "@/assets/vps-network.jpg";

const plans = [
  { name: "EB Node: Very Small", tagline: "Ideal for lightweight apps & bots", ram: "8 GB DDR4", cpu: "2 vCore (EPYC 7763)", storage: "48 GB NVMe", bandwidth: "500 GB", price: "₹899", image: vpsNetwork },
  { name: "EB Node: Small", tagline: "Smooth performance for growing projects", ram: "16 GB DDR4", cpu: "4 vCore (EPYC 7763)", storage: "96 GB NVMe", bandwidth: "500 GB", price: "₹1,699", image: vpsNetwork },
  { name: "EB Node: Medium Lite", tagline: "The perfect balance of power & cost", ram: "24 GB DDR4", cpu: "6 vCore (EPYC 7763)", storage: "112 GB NVMe", bandwidth: "500 GB", price: "₹2,399", popular: true, image: vpsNetwork },
  { name: "EB Node: Medium", tagline: "High-tier performance for databases & web", ram: "32 GB DDR4", cpu: "8 vCore (EPYC 7763)", storage: "128 GB NVMe", bandwidth: "500 GB", price: "₹2,999", image: vpsNetwork },
  { name: "EB Node: Large", tagline: "Maximum power for heavy workloads", ram: "48 GB DDR4", cpu: "12 vCore (EPYC 7763)", storage: "200 GB NVMe", bandwidth: "500 GB", price: "₹4,399", image: vpsNetwork },
  { name: "EB Node: Extra Large", tagline: "The Ultimate Beast - Elite Networking", ram: "64 GB DDR4", cpu: "16 vCore (EPYC 7763)", storage: "256 GB NVMe", bandwidth: "500 GB", price: "₹4,899", image: vpsNetwork },
];

const whyEBNodes = [
  "AMD EPYC™ 7763 (Zen 3 Architecture)",
  "Dedicated IPv4 Included",
  "Ultra-Fast NVMe Storage",
  "99.9% Uptime Guarantee",
  "Low Latency (Delhi, India Location)",
];

const AMDVPSHosting = () => (
  <Layout>
    <PageHeroBanner
      image={vpsBanner}
      title="AMD EPYC™ VPS Hosting"
      subtitle="Powered by AMD EPYC™ 7763 · NVMe SSD · Delhi, India · High Performance"
    />

    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <PlanCard key={p.name} {...p} index={i} />
        ))}
      </div>

      <div className="mt-12 text-center glass-panel p-8 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-foreground text-xl mb-2">Customizable Nodes Available!</h3>
        <p className="text-muted-foreground text-sm mb-4">Need more NVMe storage or extra Bandwidth? We can build a custom EB Node tailored to your needs!</p>
        <a
          href="https://discord.gg/9Dhjwy3g"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block glow-button bg-primary text-primary-foreground font-display font-semibold px-8 py-3 rounded-2xl text-sm"
        >
          Request Custom Node
        </a>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <SectionHeading title="Why EB Nodes?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whyEBNodes.map((item) => (
            <div key={item} className="glass-panel px-4 py-3 flex items-center gap-3">
              <span className="text-primary">✓</span>
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-muted-foreground">📍 All AMD VPS plans are hosted in Delhi, India</p>
      </div>
    </section>
  </Layout>
);

export default AMDVPSHosting;
