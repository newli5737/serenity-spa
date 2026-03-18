import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh"
    },
    {
      icon: Phone,
      title: "Điện thoại",
      content: "(028) 1234 5678"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@serenityspa.vn"
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "Thứ 2 - CN: 09:00 - 21:00"
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
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            Chúng tôi luôn sẵn sàng lắng nghe bạn
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-muted p-8 rounded-3xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {info.title}
                </h3>
                <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  {info.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
                Gửi tin nhắn
              </h2>
              <p className="text-muted-foreground mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
                Có câu hỏi hoặc góp ý? Hãy để lại lời nhắn, chúng tôi sẽ phản hồi sớm nhất.
              </p>

              {submitted ? (
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Gửi thành công!
                  </h3>
                  <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Gửi tin nhắn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Nhập họ và tên"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="email@example.com"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="0901 234 567"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                      Nội dung *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Nhập nội dung tin nhắn..."
                      style={{ fontFamily: 'var(--font-sans)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Gửi tin nhắn
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full min-h-[500px]"
            >
              <div className="bg-muted rounded-3xl overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4956492973937!2d106.70291731480155!3d10.772799192320952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0x5d8e533c5be8720e!2zxJDGsOG7nW5nIE5ndXnhu4VuIEh14buHLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1647856789123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Serenity Spa Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Câu hỏi thường gặp
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "Tôi có cần đặt lịch trước không?",
                a: "Chúng tôi khuyến khích bạn đặt lịch trước để đảm bảo có chỗ. Tuy nhiên, chúng tôi cũng phục vụ khách vãng lai nếu có chỗ trống."
              },
              {
                q: "Các hình thức thanh toán được chấp nhận?",
                a: "Chúng tôi chấp nhận thanh toán bằng tiền mặt, thẻ tín dụng/ghi nợ, và chuyển khoản ngân hàng."
              },
              {
                q: "Chính sách hủy lịch như thế nào?",
                a: "Bạn có thể hủy hoặc đổi lịch hẹn miễn phí nếu thông báo trước ít nhất 2 giờ. Sau thời gian này, chúng tôi có thể áp dụng phí hủy."
              },
              {
                q: "Tôi có thể mua voucher quà tặng không?",
                a: "Có, chúng tôi có voucher quà tặng với nhiều mệnh giá khác nhau. Hãy liên hệ với chúng tôi để biết thêm chi tiết."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl"
              >
                <h3 className="text-lg mb-2 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
                  {faq.q}
                </h3>
                <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
