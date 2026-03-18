import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import { useState } from "react";

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1772616748528-0b2bb2a91e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBpbnRlcmlvciUyMHplbiUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MzgxMTY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Không gian spa thư giãn"
    },
    {
      url: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBtYXNzYWdlJTIwcmVsYXhhdGlvbiUyMHdvbWFufGVufDF8fHx8MTc3Mzc2NzA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Dịch vụ massage"
    },
    {
      url: "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB0cmVhdG1lbnQlMjBmYWNpYWx8ZW58MXx8fHwxNzczODExNjk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Chăm sóc da mặt"
    },
    {
      url: "https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBzdG9uZSUyMG1hc3NhZ2UlMjB0aGVyYXB5fGVufDF8fHx8MTc3Mzc1NDk2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Trị liệu đá nóng"
    },
    {
      url: "https://images.unsplash.com/photo-1581514439794-f9777f7c22eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBhcm9tYXRoZXJhcHklMjBlc3NlbnRpYWwlMjBvaWxzfGVufDF8fHx8MTc3MzgxMTY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Aromatherapy"
    },
    {
      url: "https://images.unsplash.com/photo-1712482937676-398342a92e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBza2luY2FyZSUyMHRyZWF0bWVudCUyMHdvbWFufGVufDF8fHx8MTc3MzgxMTY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Điều trị da"
    },
    {
      url: "https://images.unsplash.com/photo-1693959312828-19805835ab1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHJlbGF4YXRpb24lMjBjYW5kbGVzfGVufDF8fHx8MTc3MzgxMTY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Không gian thư giãn"
    },
    {
      url: "https://images.unsplash.com/photo-1700882304335-34d47c682a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXNzYWdlJTIwdGhlcmFwaXN0fGVufDF8fHx8MTc3MzgxMTY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Chuyên viên massage"
    },
    {
      url: "https://images.unsplash.com/photo-1769989110684-cef477e44c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmFucXVpbCUyMHBvb2wlMjB3YXRlcnxlbnwxfHx8fDE3NzM4MTE2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Thủy trị liệu"
    },
    {
      url: "https://images.unsplash.com/photo-1762254840019-ac371b4e5482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwdHJlYXRtZW50JTIwb3JnYW5pY3xlbnwxfHx8fDE3NzM4MTE3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Chăm sóc tự nhiên"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
            Thư viện hình ảnh
          </h1>
          <p className="text-xl text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            Khám phá không gian và dịch vụ của chúng tôi
          </p>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Masonry columnsCount={1} gutter="1.5rem" className="md:hidden">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="cursor-pointer group relative overflow-hidden rounded-3xl"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </Masonry>
          
          <Masonry columnsCount={2} gutter="1.5rem" className="hidden md:block lg:hidden">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="cursor-pointer group relative overflow-hidden rounded-3xl"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </Masonry>
          
          <Masonry columnsCount={3} gutter="1.5rem" className="hidden lg:block">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="cursor-pointer group relative overflow-hidden rounded-3xl"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-6xl max-h-[90vh]"
          >
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Trải nghiệm thực tế
            </h2>
            <p className="text-lg text-muted-foreground mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Hãy đến và tận hưởng không gian thư giãn tuyệt vời này
            </p>
            <a
              href="/dat-lich"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-lg"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Đặt lịch ngay
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}