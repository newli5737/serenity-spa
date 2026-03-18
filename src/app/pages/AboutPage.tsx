import { motion } from "motion/react";
import { Award, Heart, Users, Sparkles } from "lucide-react";

export function AboutPage() {
  const stats = [
    { number: "10+", label: "Năm kinh nghiệm" },
    { number: "50+", label: "Chuyên gia" },
    { number: "10,000+", label: "Khách hàng" },
    { number: "15+", label: "Giải thưởng" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Tận tâm",
      description: "Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu, luôn lắng nghe và thấu hiểu nhu cầu của bạn."
    },
    {
      icon: Award,
      title: "Chất lượng",
      description: "Sử dụng sản phẩm cao cấp, công nghệ hiện đại và quy trình chuẩn quốc tế."
    },
    {
      icon: Users,
      title: "Chuyên nghiệp",
      description: "Đội ngũ được đào tạo bài bản, có chứng chỉ hành nghề và nhiều năm kinh nghiệm."
    },
    {
      icon: Sparkles,
      title: "Đổi mới",
      description: "Không ngừng cập nhật và áp dụng các liệu pháp spa tiên tiến nhất trên thế giới."
    }
  ];

  const team = [
    {
      name: "Nguyễn Thu Hà",
      role: "Giám đốc & Chuyên gia spa",
      image: "https://images.unsplash.com/photo-1712482937676-398342a92e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBza2luY2FyZSUyMHRyZWF0bWVudCUyMHdvbWFufGVufDF8fHx8MTc3MzgxMTY5OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Trần Minh Anh",
      role: "Chuyên viên massage trị liệu",
      image: "https://images.unsplash.com/photo-1700882304335-34d47c682a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXNzYWdlJTIwdGhlcmFwaXN0fGVufDF8fHx8MTc3MzgxMTY5OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Lê Phương Linh",
      role: "Chuyên viên chăm sóc da",
      image: "https://images.unsplash.com/photo-1762254840019-ac371b4e5482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwdHJlYXRtZW50JTIwb3JnYW5pY3xlbnwxfHx8fDE3NzM4MTE3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Phạm Hoàng Nam",
      role: "Chuyên viên trị liệu",
      image: "https://images.unsplash.com/photo-1700882304335-34d47c682a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXNzYWdlJTIwdGhlcmFwaXN0fGVufDF8fHx8MTc3MzgxMTY5OXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const certifications = [
    "Chứng nhận ISO 9001:2015",
    "Giấy phép kinh doanh spa hợp pháp",
    "Chứng chỉ đào tạo quốc tế CIDESCO",
    "Top 10 spa uy tín Việt Nam 2025",
    "Giải thưởng Dịch vụ xuất sắc"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1772616748528-0b2bb2a91e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBpbnRlcmlvciUyMHplbiUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MzgxMTY5OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Về chúng tôi
          </h1>
          <p className="text-xl text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
            Hành trình mang đến vẻ đẹp và sự thư giãn
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Câu chuyện của chúng tôi
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground text-left" style={{ fontFamily: 'var(--font-sans)' }}>
              <p>
                Serenity Spa được thành lập vào năm 2016 với sứ mệnh mang đến cho khách hàng những trải nghiệm 
                spa đẳng cấp quốc tế ngay tại Việt Nam. Chúng tôi tin rằng mỗi người đều xứng đáng được chăm sóc 
                và yêu thương bản thân mình.
              </p>
              <p>
                Với hơn 10 năm kinh nghiệm, Serenity Spa tự hào là một trong những địa chỉ spa uy tín hàng đầu 
                tại TP.HCM. Chúng tôi không ngừng đầu tư vào cơ sở vật chất, công nghệ và đào tạo đội ngũ để 
                mang đến dịch vụ tốt nhất cho khách hàng.
              </p>
              <p>
                Không gian của chúng tôi được thiết kế theo phong cách tối giản, sang trọng với tông màu nhẹ nhàng, 
                tạo cảm giác thư giãn tuyệt đối. Mỗi chi tiết đều được chăm chút kỹ lưỡng để bạn có thể tận hưởng 
                những giây phút bình yên, tái tạo năng lượng và nâng niu vẻ đẹp tự nhiên của mình.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {stat.number}
                </div>
                <div className="text-lg opacity-90" style={{ fontFamily: 'var(--font-sans)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Giá trị cốt lõi
            </h2>
            <p className="text-lg text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
              Những điều chúng tôi tin tưởng và thực hiện mỗi ngày
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-muted p-8 rounded-3xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Đội ngũ chuyên gia
            </h2>
            <p className="text-lg text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
              Những người tận tâm chăm sóc sức khỏe và sắc đẹp của bạn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl mb-1 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl mb-12 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Chứng chỉ & Uy tín
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center bg-muted p-6 rounded-2xl"
                >
                  <Award className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                  <span className="text-left" style={{ fontFamily: 'var(--font-sans)' }}>
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
