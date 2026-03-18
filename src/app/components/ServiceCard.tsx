import { motion } from "motion/react";
import { Link } from "react-router";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
  showButton?: boolean;
}

export function ServiceCard({ image, title, description, price, showButton = false }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {showButton && (
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link
              to="/dat-lich"
              className="px-6 py-3 bg-white text-primary rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Xem chi tiết
            </Link>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-3 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
          {description}
        </p>
        {price && (
          <p className="text-primary" style={{ fontFamily: 'var(--font-sans)' }}>
            {price}
          </p>
        )}
      </div>
    </motion.div>
  );
}
