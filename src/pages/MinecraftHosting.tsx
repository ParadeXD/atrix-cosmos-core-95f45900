import Layout from "@/components/Layout";
import PlanCard from "@/components/PlanCard";
import SectionHeading from "@/components/SectionHeading";
import PageHeroBanner from "@/components/PageHeroBanner";
import minecraftBanner from "@/assets/minecraft-banner.jpg";
import minecraftWorld from "@/assets/minecraft-world.jpg";
import mcDirt from "@/assets/plans/mc-dirt.png";
import mcStone from "@/assets/plans/mc-stone.png";
import mcIron from "@/assets/plans/mc-iron.png";
import mcGold from "@/assets/plans/mc-gold.png";
import mcDiamond from "@/assets/plans/mc-diamond.png";
import mcNetherite from "@/assets/plans/mc-netherite.png";
import mcBedrock from "@/assets/plans/mc-bedrock.png";

const plans = [
  { name: "Dirt", iconImg: mcDirt, tagline: "Best for testing & small servers", ram: "2 GB", cpu: "80%", storage: "6 GB NVMe", ports: "1", databases: "1", backups: "1", price: "₹50", image: minecraftWorld },
  { name: "Stone", iconImg: mcStone, tagline: "Smooth gameplay for small communities", ram: "4 GB", cpu: "160%", storage: "12 GB NVMe", ports: "1", databases: "1", backups: "1", price: "₹132", image: minecraftWorld },
  { name: "Iron", iconImg: mcIron, tagline: "Power + Stability", ram: "6 GB", cpu: "220%", storage: "18 GB NVMe", ports: "2", databases: "1", backups: "2", price: "₹200", image: minecraftWorld },
  { name: "Gold", iconImg: mcGold, tagline: "High performance for growing servers", ram: "8 GB", cpu: "300%", storage: "24 GB NVMe", ports: "2", databases: "2", backups: "2", price: "₹354", popular: true, image: minecraftWorld },
  { name: "Diamond", iconImg: mcDiamond, tagline: "Maximum power for large communities", ram: "16 GB", cpu: "460%", storage: "30 GB NVMe", ports: "5", databases: "3", backups: "3", price: "₹585", image: minecraftWorld },
  { name: "Netherite", iconImg: mcNetherite, tagline: "Elite performance for serious networks", ram: "24 GB", cpu: "500%", storage: "50 GB NVMe", ports: "8", databases: "5", backups: "5", price: "₹675", image: minecraftWorld },
  { name: "Bedrock", iconImg: mcBedrock, tagline: "Ultimate power for massive servers", ram: "32 GB", cpu: "600%", storage: "75 GB NVMe", ports: "10", databases: "8", backups: "8", price: "₹950", image: minecraftWorld },
];

const MinecraftHosting = () => (
  <Layout>
    <PageHeroBanner
      image={minecraftBanner}
      title="Minecraft Server Hosting"
      subtitle="Starting at just ₹50/GB RAM · NVMe SSD · DDoS Protection · High Performance"
    />

    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plans.map((p, i) => (
          <PlanCard key={p.name} {...p} index={i} />
        ))}
      </div>

      <div className="mt-12 text-center glass-panel p-8 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-foreground text-xl mb-2">Need a Custom Plan?</h3>
        <p className="text-muted-foreground text-sm mb-4">Different RAM, CPU, or storage? We can create a plan tailored to your needs.</p>
        <a
          href="https://discord.gg/9Dhjwy3g"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block glow-button bg-primary text-primary-foreground font-display font-semibold px-8 py-3 rounded-2xl text-sm"
        >
          Request Custom Plan
        </a>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <SectionHeading title="Why EB Nodes for Minecraft?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Instant Setup", "Full Pterodactyl Panel Access", "Latest Minecraft Versions",
            "Paper / Purpur / Fabric / Forge Support", "India & Singapore Locations", "Custom Plans on Request"
          ].map((item) => (
            <div key={item} className="glass-panel px-4 py-3 flex items-center gap-3">
              <span className="text-primary">✓</span>
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default MinecraftHosting;
