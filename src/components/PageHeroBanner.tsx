import { motion } from "framer-motion";

interface PageHeroBannerProps {
  image: string;
  title: string;
  subtitle: string;
}

const PageHeroBanner = ({ image, title, subtitle }: PageHeroBannerProps) => (
  <section className="relative h-64 md:h-80 flex items-end overflow-hidden mb-10">
    <motion.img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-shimmer font-display text-3xl md:text-5xl font-bold mb-2"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-muted-foreground text-sm md:text-base max-w-xl"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

export default PageHeroBanner;
