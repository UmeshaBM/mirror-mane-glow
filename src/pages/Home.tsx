import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Star, Clock, Award, Users, Scissors, Heart, Sparkles, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-salon.jpg';

const Home = () => {
  const services = [
    { name: 'Hair Cut & Styling', price: 'From $45', icon: Scissors },
    { name: 'Hair Coloring', price: 'From $85', icon: Sparkles },
    { name: 'Bridal Package', price: 'From $250', icon: Heart },
    { name: 'Hair Spa Treatment', price: 'From $65', icon: Star },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely amazing! The staff is so professional and the atmosphere is so relaxing. My hair has never looked better!',
      service: 'Hair Cut & Color'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Best salon experience ever! The attention to detail and quality of service is unmatched. Highly recommend!',
      service: 'Hair Styling'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'My bridal makeup was absolutely perfect! The team made me feel like a queen on my special day.',
      service: 'Bridal Package'
    }
  ];

  const stats = [
    { label: 'Happy Clients', value: '2500+', icon: Users },
    { label: 'Years Experience', value: '8+', icon: Award },
    { label: 'Services', value: '15+', icon: Scissors },
    { label: 'Rating', value: '4.9★', icon: Star },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Mirror & Mane Premium Salon Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Premium Unisex Salon
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 fade-in">
              Mirror & Mane
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 fade-in">
              Where Beauty Meets Excellence. Experience luxury hair and beauty services in our premium salon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in">
              <Button asChild size="lg" className="btn-gradient text-lg px-8 py-4">
                <Link to="/booking">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 gradient-text">
              Our Premium Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our range of professional beauty and hair services designed to make you look and feel amazing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 glass">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent-rose to-accent-lavender mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-primary font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild className="btn-gradient">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book your appointment today and experience the luxury and quality that sets us apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;