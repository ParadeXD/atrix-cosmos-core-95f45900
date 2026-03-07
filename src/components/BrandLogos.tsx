import { motion } from "framer-motion";
import cloudflareLogo from "@/assets/logos/cloudflare.png";
import oracleLogo from "@/assets/logos/oracle.png";
import awsLogo from "@/assets/logos/aws.png";
import intelLogo from "@/assets/logos/intel.png";
import amdLogo from "@/assets/logos/amd.png";
import nvidiaLogo from "@/assets/logos/nvidia.png";
import vultrLogo from "@/assets/logos/vultr.png";
import hetznerLogo from "@/assets/logos/hetzner.png";

const brands = [
  { name: "Cloudflare", logo: cloudflareLogo },
  { name: "Oracle", logo: oracleLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Intel", logo: intelLogo },
  { name: "AMD", logo: amdLogo },
  { name: "NVIDIA", logo: nvidiaLogo },
  { name: "Vultr", logo: vultrLogo },
  { name: "Hetzner", logo: hetznerLogo },
];

const BrandLogos = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8"
    >
      Powered by industry-leading technology
    </motion.p>
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {brands.map((b, i) => (
        <motion.div
          key={b.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="flex flex-col items-center gap-2 group"
        >
          <img
            src={b.logo}
            alt={b.name}
            className="h-10 md:h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
          />
        </motion.div>
      ))}
    </div>
  </section>
);

export default BrandLogos;
