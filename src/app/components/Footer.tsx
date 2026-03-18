import { Link } from "react-router";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Serenity Spa
            </h3>
            <p className="text-muted-foreground mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
              Nơi mang đến sự thư giãn tuyệt đối và nâng niu vẻ đẹp tự nhiên của bạn.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Liên kết nhanh
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/dich-vu" className="text-muted-foreground hover:text-primary transition-colors">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link to="/gioi-thieu" className="text-muted-foreground hover:text-primary transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="text-muted-foreground hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Dịch vụ
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <li className="text-muted-foreground">Massage trị liệu</li>
              <li className="text-muted-foreground">Chăm s��c da mặt</li>
              <li className="text-muted-foreground">Điều trị body</li>
              <li className="text-muted-foreground">Aromatherapy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Liên hệ
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <li className="flex items-start text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>123 Đường Nguyễn Huệ, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>(028) 1234 5678</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>info@serenityspa.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
          <p>&copy; 2026 Serenity Spa. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
