import Layout from "@/components/Layout";
import PlanCard from "@/components/PlanCard";
import SectionHeading from "@/components/SectionHeading";
import PageHeroBanner from "@/components/PageHeroBanner";
import vpsBanner from "@/assets/vps-banner.jpg";
import vpsNetwork from "@/assets/vps-network.jpg";
import vpsNova from "@/assets/plans/vps-nova.png";
import vpsIgnite from "@/assets/plans/vps-ignite.png";
import vpsStratos from "@/assets/plans/vps-stratos.png";
import vpsTitan from "@/assets/plans/vps-titan.png";
import vpsDominus from "@/assets/plans/vps-dominus.png";
import vpsOverdrive from "@/assets/plans/vps-overdrive.png";

const plans = [
  { name: "VPS Nova", iconImg: vpsNova, tagline: "Clean start. Silent power.", ram: "8 GB DDR4", cpu: "2 vCPU (Intel Xeon)", storage: "50 GB NVMe", bandwidth: "1 TB", price: "₹250", image: vpsNetwork },
  { name: "VPS Ignite", iconImg: vpsIgnite, tagline: "Smooth. Balanced. Reliable.", ram: "16 GB DDR4", cpu: "4 vCPU (Intel Xeon)", storage: "70 GB NVMe", bandwidth: "2 TB", price: "₹450", image: vpsNetwork },
  { name: "VPS Stratos", iconImg: vpsStratos, tagline: "Built to scale.", ram: "24 GB DDR4", cpu: "4 vCPU (Intel Xeon)", storage: "100 GB NVMe", bandwidth: "3 TB", price: "₹721", popular: true, image: vpsNetwork },
  { name: "VPS Titan X", iconImg: vpsTitan, tagline: "Heavy power. Zero compromise.", ram: "28 GB DDR4", cpu: "4 vCPU (Intel Xeon)", storage: "132 GB NVMe", bandwidth: "4 TB", price: "₹1,120", image: vpsNetwork },
  { name: "VPS Dominus", iconImg: vpsDominus, tagline: "Pure muscle.", ram: "32 GB DDR4", cpu: "6 vCPU (Intel Xeon)", storage: "150 GB NVMe", bandwidth: "5 TB", price: "₹1,980", image: vpsNetwork },
  { name: "VPS Overdrive", iconImg: vpsOverdrive, tagline: "Absolute control. Maximum authority.", ram: "64 GB DDR4", cpu: "10 vCPU (Intel Xeon)", storage: "165 GB NVMe", bandwidth: "Unlimited", price: "₹2,140", image: vpsNetwork },
];

const VPSHosting = () => (
  <Layout>
    <PageHeroBanner
      image={vpsBanner}
      title="VPS Hosting"
      subtitle="Intel Xeon Power · NVMe Speed · DDoS Protected · Full Root Access"
    />

    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <PlanCard key={p.name} {...p} index={i} />
        ))}
      </div>

      <div className="mt-12 text-center glass-panel p-8 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-foreground text-xl mb-2">Ryzen 5 VPS Plans Available!</h3>
        <p className="text-muted-foreground text-sm mb-4">Higher clock speeds · Better single-core performance · Ideal for gaming & heavy workloads</p>
        <a
          href="https://discord.gg/9Dhjwy3g"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block glow-button bg-primary text-primary-foreground font-display font-semibold px-8 py-3 rounded-2xl text-sm"
        >
          Request Ryzen 5 VPS
        </a>
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center">
        <SectionHeading title="Global Locations" />
        <div className="flex flex-wrap justify-center gap-4">
          {["India", "USA", "Singapore"].map((loc) => (
            <div key={loc} className="glass-panel px-6 py-3">
              <span className="font-display font-semibold text-foreground">{loc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default VPSHosting;
