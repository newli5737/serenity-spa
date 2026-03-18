import { motion } from "motion/react";
import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail } from "lucide-react";

export function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Massage toàn thân",
    "Chăm sóc da mặt cao cấp",
    "Trị liệu đá nóng",
    "Aromatherapy",
    "Điều trị mụn chuyên sâu",
    "Massage trị liệu y khoa",
    "Liệu pháp thủy trị liệu",
    "Chăm sóc body toàn diện",
    "Gói trải nghiệm VIP"
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00",
    "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-muted">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white rounded-3xl p-12 text-center shadow-lg"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
            Đặt lịch thành công!
          </h2>
          <p className="text-lg text-muted-foreground mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
            Cảm ơn {formData.name}! Chúng tôi đã nhận được yêu cầu đặt lịch của bạn.<br />
            Nhân viên sẽ liên hệ với bạn qua số điện thoại {formData.phone} để xác nhận trong thời gian sớm nhất.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Đặt lịch khác
          </button>
        </motion.div>
      </div>
    );
  }

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
            Đặt lịch hẹn
          </h1>
          <p className="text-xl text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            Chỉ vài bước đơn giản để trải nghiệm dịch vụ spa cao cấp
          </p>
        </motion.div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="flex items-center mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  <User className="w-5 h-5 mr-2 text-primary" />
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
                  placeholder="Nhập họ và tên của bạn"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="flex items-center mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="0901 234 567"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-center mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="email@example.com"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  Chọn dịch vụ *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <option value="">-- Chọn dịch vụ --</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="flex items-center mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Chọn ngày *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              {/* Time */}
              <div>
                <label htmlFor="time" className="flex items-center mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Chọn giờ *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <option value="">-- Chọn giờ --</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-lg"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Xác nhận đặt lịch
              </button>

              <p className="text-sm text-muted-foreground text-center" style={{ fontFamily: 'var(--font-sans)' }}>
                * Thông tin bắt buộc
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Thông tin quan trọng
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                  Chính sách đặt lịch
                </h3>
                <ul className="space-y-2 text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  <li>• Vui lòng đến trước 10 phút</li>
                  <li>• Hủy lịch trước 2 giờ để tránh phí</li>
                  <li>• Liên hệ: (028) 1234 5678</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                  Giờ làm việc
                </h3>
                <ul className="space-y-2 text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  <li>• Thứ 2 - Thứ 6: 09:00 - 20:00</li>
                  <li>• Thứ 7 - Chủ nhật: 09:00 - 21:00</li>
                  <li>• Mở cửa cả ngày lễ</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
