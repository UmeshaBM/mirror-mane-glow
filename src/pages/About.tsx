import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, Sparkles, Star, Clock, ShieldCheck } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Beauty',
      description: 'We believe beauty is an art form and every client deserves to feel their absolute best.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Our commitment to quality ensures every service meets the highest professional standards.'
    },
    {
      icon: Users,
      title: 'Client-Centered Approach',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver personalized experiences.'
    },
    {
      icon: Sparkles,
      title: 'Innovation & Trends',
      description: 'We stay ahead of the latest trends and techniques to offer cutting-edge beauty solutions.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Williams',
      role: 'Founder & Master Stylist',
      experience: '12+ years',
      specialties: ['Hair Cutting', 'Color Specialist', 'Bridal Styling'],
      description: 'Sarah founded Mirror & Mane with a vision to create a premium salon experience where artistry meets luxury.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Senior Hair Colorist',
      experience: '8+ years',
      specialties: ['Balayage', 'Color Correction', 'Highlights'],
      description: 'Michael is our color expert, known for creating stunning, natural-looking color transformations.'
    },
    {
      name: 'Emily Chen',
      role: 'Makeup Artist & Aesthetician',
      experience: '6+ years',
      specialties: ['Bridal Makeup', 'Special Events', 'Skincare'],
      description: 'Emily specializes in creating flawless looks for weddings and special occasions.'
    },
    {
      name: 'David Thompson',
      role: 'Master Barber & Stylist',
      experience: '10+ years',
      specialties: ['Men\'s Cuts', 'Beard Styling', 'Classic Cuts'],
      description: 'David brings precision and style to men\'s grooming with his expert cutting techniques.'
    }
  ];

  const achievements = [
    { year: '2017', milestone: 'Salon Founded' },
    { year: '2018', milestone: 'First Industry Award' },
    { year: '2020', milestone: '1000+ Happy Clients' },
    { year: '2022', milestone: 'Team Expansion' },
    { year: '2024', milestone: 'Premium Location' },
    { year: '2025', milestone: 'Excellence Recognition' }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 gradient-text">
            About Mirror & Mane
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the story behind our premium salon, our passionate team, and our commitment to bringing out your natural beauty through exceptional service and artistry.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Our Story</Badge>
              <h2 className="text-3xl font-poppins font-bold mb-6">
                Where Beauty Dreams Come True
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2017, Mirror & Mane began as a vision to create more than just a salon – we wanted to build a sanctuary where beauty, artistry, and exceptional service converge to create unforgettable experiences.
                </p>
                <p>
                  Our journey started with a simple belief: everyone deserves to feel confident and beautiful. What began as a small team of passionate professionals has grown into a premier destination for hair and beauty services, serving thousands of satisfied clients.
                </p>
                <p>
                  Today, we continue to push the boundaries of beauty excellence, combining traditional techniques with modern innovations to deliver results that exceed expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2500+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">8</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Services</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">4.9</div>
                    <div className="text-sm text-muted-foreground">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and help us deliver exceptional experiences to every client.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 glass text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented professionals bring years of experience and passion to every service, ensuring you receive the best care possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 glass">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="font-poppins font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <Badge variant="secondary" className="mb-3">{member.experience}</Badge>
                    <p className="text-muted-foreground text-sm mb-3">{member.description}</p>
                    <div className="space-y-1">
                      <p className="text-xs font-medium">Specialties:</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.specialties.map((specialty, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a premier beauty destination, here's our story of growth and excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">{achievement.year}</span>
                </div>
                <p className="text-sm font-medium">{achievement.milestone}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="glass p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-poppins font-bold mb-4">Why Choose Mirror & Mane?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-poppins font-semibold text-lg mb-2">Premium Products</h3>
                <p className="text-muted-foreground text-sm">We use only the finest, professional-grade products from trusted brands.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-poppins font-semibold text-lg mb-2">Expert Training</h3>
                <p className="text-muted-foreground text-sm">Our team regularly updates their skills with the latest techniques and trends.</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-poppins font-semibold text-lg mb-2">Flexible Hours</h3>
                <p className="text-muted-foreground text-sm">We offer convenient scheduling to fit your busy lifestyle.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center glass p-8 rounded-2xl">
          <h3 className="text-2xl font-poppins font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our family of satisfied clients and discover why Mirror & Mane is the premier choice for beauty and hair services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-gradient">
              <Link to="/booking">Book Your Visit</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;