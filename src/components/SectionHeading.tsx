import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="text-shimmer font-display text-3xl md:text-4xl font-bold mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
