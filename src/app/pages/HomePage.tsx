import { Link } from "react-router";
import { motion } from "motion/react";
import { ServiceCard } from "../components/ServiceCard";
import { Sparkles, Heart, Award, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomePage() {
  const features = [
    {
      icon: Sparkles,
      title: "Chất lượng cao cấp",
      description: "Sản phẩm và dịch vụ đạt tiêu chuẩn quốc tế"
    },
    {
      icon: Heart,
      title: "Tận tâm chăm sóc",
      description: "Đội ngũ chuyên gia giàu kinh nghiệm"
    },
    {
      icon: Award,
      title: "Uy tín hàng đầu",
      description: "Được tin tưởng bởi hàng ngàn khách hàng"
    },
    {
      icon: Clock,
      title: "Linh hoạt đặt lịch",
      description: "Mở cửa 7 ngày trong tuần"
    }
  ];

  const services = [
    {
      image: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBtYXNzYWdlJTIwcmVsYXhhdGlvbiUyMHdvbWFufGVufDF8fHx8MTc3Mzc2NzA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Massage toàn thân",
      description: "Thư giãn cơ thể, giảm căng thẳng với các kỹ thuật massage chuyên nghiệp"
    },
    {
      image: "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB0cmVhdG1lbnQlMjBmYWNpYWx8ZW58MXx8fHwxNzczODExNjk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Chăm sóc da mặt",
      description: "Làm sạch sâu, trẻ hóa làn da với công nghệ hiện đại"
    },
    {
      image: "https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBzdG9uZSUyMG1hc3NhZ2UlMjB0aGVyYXB5fGVufDF8fHx8MTc3Mzc1NDk2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Trị liệu đá nóng",
      description: "Cân bằng năng lượng, tuần hoàn máu với liệu pháp đá nóng"
    }
  ];

  const testimonials = [
    {
      name: "Nguyễn Minh Anh",
      content: "Không gian thư giãn tuyệt vời! Tôi cảm thấy hoàn toàn tái tạo năng lượng sau mỗi lần đến Serenity Spa.",
      avatar: "https://images.unsplash.com/photo-1712482937676-398342a92e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBza2luY2FyZSUyMHRyZWF0bWVudCUyMHdvbWFufGVufDF8fHx8MTc3MzgxMTY5OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Trần Thị Hương",
      content: "Dịch vụ chuyên nghiệp, nhân viên tận tâm. Làn da của tôi đã cải thiện rõ rệt sau liệu trình facial tại đây.",
      avatar: "https://images.unsplash.com/photo-1762254840019-ac371b4e5482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwdHJlYXRtZW50JTIwb3JnYW5pY3xlbnwxfHx8fDE3NzM4MTE3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Lê Văn Tuấn",
      content: "Massage trị liệu ở đây rất hiệu quả. Cơn đau lưng mãn tính của tôi đã giảm đáng kể.",
      avatar: "https://images.unsplash.com/photo-1700882304335-34d47c682a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXNzYWdlJTIwdGhlcmFwaXN0fGVufDF8fHx8MTc3MzgxMTY5OXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1772616748528-0b2bb2a91e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBpbnRlcmlvciUyMHplbiUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MzgxMTY5OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Spa Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Thư giãn – Tái tạo<br />Nâng niu vẻ đẹp tự nhiên
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
            Trải nghiệm không gian spa cao cấp, dịch vụ hoàn hảo
          </p>
          <Link
            to="/dat-lich"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-lg"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Đặt lịch ngay
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Chào mừng đến với Serenity Spa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
              Serenity Spa là điểm đến lý tưởng cho những ai tìm kiếm sự thư giãn tuyệt đối và chăm sóc sức khỏe toàn diện. 
              Với đội ngũ chuyên gia giàu kinh nghiệm, sản phẩm cao cấp và không gian sang trọng, chúng tôi cam kết mang đến 
              cho bạn những trải nghiệm spa đáng nhớ nhất.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Dịch vụ nổi bật
            </h2>
            <p className="text-lg text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
              Khám phá các liệu trình chăm sóc đặc biệt của chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/dich-vu"
              className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Xem tất cả dịch vụ
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Khách hàng nói gì về chúng tôi
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <h4 style={{ fontFamily: 'var(--font-serif)' }}>{testimonial.name}</h4>
                </div>
                <p className="text-muted-foreground italic" style={{ fontFamily: 'var(--font-sans)' }}>
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Ưu đãi đặc biệt
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90" style={{ fontFamily: 'var(--font-sans)' }}>
              Giảm 20% cho khách hàng mới khi đặt lịch trước ngày 31/03/2026
            </p>
            <Link
              to="/dat-lich"
              className="inline-block px-10 py-4 bg-white text-primary rounded-full hover:bg-white/90 transition-colors text-lg"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Nhận ưu đãi ngay
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Sẵn sàng trải nghiệm?
            </h2>
            <p className="text-lg text-muted-foreground mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Đặt lịch hẹn ngay hôm nay để bắt đầu hành trình chăm sóc bản thân
            </p>
            <Link
              to="/dat-lich"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-lg"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Đặt lịch ngay
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
