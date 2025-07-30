import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook, Mail, Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-secondary">
                <Scissors className="h-5 w-5 text-secondary-foreground" />
              </div>
              <span className="font-poppins font-bold text-xl">Mirror & Mane</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium unisex salon offering exceptional hair and beauty services in a luxurious, modern environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="mailto:info@mirrorandmane.com" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Services', href: '/services' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Booking', href: '/booking' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Hair Cut & Styling</li>
              <li>Hair Coloring</li>
              <li>Bridal Makeup</li>
              <li>Hair Spa Treatment</li>
              <li>Professional Makeup</li>
              <li>Hair Extensions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-secondary" />
                <div className="text-sm text-primary-foreground/80">
                  <p>123 Beauty Street</p>
                  <p>Fashion District, City 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1 text-secondary" />
                <div className="text-sm text-primary-foreground/80">
                  <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Mirror & Mane. All rights reserved. | Premium Beauty & Hair Salon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;