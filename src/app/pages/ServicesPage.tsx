import { motion } from "motion/react";
import { ServiceCard } from "../components/ServiceCard";

export function ServicesPage() {
  const allServices = [
    {
      image: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBtYXNzYWdlJTIwcmVsYXhhdGlvbiUyMHdvbWFufGVufDF8fHx8MTc3Mzc2NzA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Massage toàn thân",
      description: "Massage thư giãn toàn thân với tinh dầu thiên nhiên, giúp giảm căng thẳng và mệt mỏi",
      price: "Từ 500.000đ / 60 phút",
      showButton: true
    },
    {
      image: "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB0cmVhdG1lbnQlMjBmYWNpYWx8ZW58MXx8fHwxNzczODExNjk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Chăm sóc da mặt cao cấp",
      description: "Làm sạch sâu, tẩy tế bào chết, massage mặt và đắp mặt nạ chuyên nghiệp",
      price: "Từ 700.000đ / 90 phút",
      showButton: true
    },
    {
      image: "https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBzdG9uZSUyMG1hc3NhZ2UlMjB0aGVyYXB5fGVufDF8fHx8MTc3Mzc1NDk2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Trị liệu đá nóng",
      description: "Liệu pháp massage bằng đá nóng, cân bằng năng lượng và tuần hoàn máu",
      price: "Từ 800.000đ / 90 phút",
      showButton: true
    },
    {
      image: "https://images.unsplash.com/photo-1581514439794-f9777f7c22eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBhcm9tYXRoZXJhcHklMjBlc3NlbnRpYWwlMjBvaWxzfGVufDF8fHx8MTc3MzgxMTY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Aromatherapy",
      description: "Liệu pháp hương thơm với tinh dầu thiên nhiên, giúp thư giãn tinh thần",
      price: "Từ 600.000đ / 60 phút",
      showButton: true
    },
    {
      image: "https://images.unsplash.com/photo-1712482937676-398342a92e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBza2luY2FyZSUyMHRyZWF0bWVudCUyMHdvbWFufGVufDF8fHx8MTc3MzgxMTY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Điều trị mụn chuyên sâu",
      description: "Liệu trình điều trị mụn hiệu quả với công nghệ hiện đại và sản phẩm y học",
      price: "Từ 900.000đ / buổi",
      showButton: true
    },
    {
      image: "https://images.unsplash.com/photo-1700882304335-34d47c682a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXNzYWdlJTIwdGhlcmFwaXN0fGVufDF8fHx8MTc3MzgxMTY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Massage trị liệu y khoa",
      description: "Massage trị liệu chuyên sâu cho các vấn đề về cơ xương khớp",
      price: "Từ 650.000đ / 60 phút",
      showButton: true
    },
    {
      image: "https://images.unsplash.com/photo-1769989110684-cef477e44c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmFucXVpbCUyMHBvb2wlMjB3YXRlcnxlbnwxfHx8fDE3NzM4MTE2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Liệu pháp thủy trị liệu",
      description: "Thư giãn trong bồn tắm khoáng nóng với muối biển và thảo dược",
      price: "Từ 750.000đ / 45 phút",
      showButton: true
    },
    {
      image: "https://images.unsplash.com/photo-1762254840019-ac371b4e5482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwdHJlYXRtZW50JTIwb3JnYW5pY3xlbnwxfHx8fDE3NzM4MTE3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Chăm sóc body toàn diện",
      description: "Tẩy tế bào chết, dưỡng ẩm và massage body với sản phẩm organic",
      price: "Từ 850.000đ / 120 phút",
      showButton: true
    },
    {
      image: "https://images.unsplash.com/photo-1693959312828-19805835ab1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHJlbGF4YXRpb24lMjBjYW5kbGVzfGVufDF8fHx8MTc3MzgxMTY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Gói trải nghiệm VIP",
      description: "Trọn gói 3 giờ: massage, facial, body treatment và aromatherapy",
      price: "Từ 2.500.000đ / 180 phút",
      showButton: true
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1772616748528-0b2bb2a91e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBpbnRlcmlvciUyMHplbiUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MzgxMTY5OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
            Dịch vụ của chúng tôi
          </h1>
          <p className="text-xl text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            Khám phá đầy đủ các liệu trình chăm sóc cao cấp
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

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
              Bạn cần tư vấn?
            </h2>
            <p className="text-lg text-muted-foreground mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn để bạn chọn được liệu trình phù h��p nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02812345678"
                className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Gọi ngay: (028) 1234 5678
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
