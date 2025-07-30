import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Star, Scissors, Palette, Heart, Sparkles, Crown, Waves } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Hair Services',
      icon: Scissors,
      color: 'from-primary to-primary-light',
      services: [
        {
          name: 'Classic Hair Cut',
          description: 'Professional haircut tailored to your face shape and style preferences',
          duration: '45 min',
          price: 'From $45',
          popular: false
        },
        {
          name: 'Premium Hair Cut & Styling',
          description: 'Luxury haircut with professional styling and finishing touches',
          duration: '60 min',
          price: 'From $65',
          popular: true
        },
        {
          name: 'Hair Wash & Blow Dry',
          description: 'Deep cleansing shampoo with professional blow dry and styling',
          duration: '30 min',
          price: 'From $35',
          popular: false
        },
        {
          name: 'Hair Extensions',
          description: 'Premium quality hair extensions for length and volume',
          duration: '120 min',
          price: 'From $150',
          popular: false
        }
      ]
    },
    {
      title: 'Hair Coloring',
      icon: Palette,
      color: 'from-secondary to-secondary-light',
      services: [
        {
          name: 'Full Hair Color',
          description: 'Complete hair coloring with premium products and color protection',
          duration: '120 min',
          price: 'From $85',
          popular: true
        },
        {
          name: 'Highlights & Lowlights',
          description: 'Professional highlighting techniques for natural-looking dimension',
          duration: '150 min',
          price: 'From $110',
          popular: false
        },
        {
          name: 'Balayage & Ombre',
          description: 'Modern coloring techniques for a natural, sun-kissed look',
          duration: '180 min',
          price: 'From $135',
          popular: true
        },
        {
          name: 'Color Correction',
          description: 'Expert color correction and restoration services',
          duration: '240 min',
          price: 'From $200',
          popular: false
        }
      ]
    },
    {
      title: 'Spa Treatments',
      icon: Waves,
      color: 'from-accent to-accent-lavender',
      services: [
        {
          name: 'Hair Spa Treatment',
          description: 'Relaxing deep conditioning treatment with scalp massage',
          duration: '60 min',
          price: 'From $65',
          popular: true
        },
        {
          name: 'Keratin Treatment',
          description: 'Smoothing treatment for frizz-free, manageable hair',
          duration: '180 min',
          price: 'From $180',
          popular: false
        },
        {
          name: 'Scalp Treatment',
          description: 'Therapeutic scalp treatment for health and hair growth',
          duration: '45 min',
          price: 'From $55',
          popular: false
        },
        {
          name: 'Hot Oil Treatment',
          description: 'Nourishing hot oil treatment for dry and damaged hair',
          duration: '30 min',
          price: 'From $40',
          popular: false
        }
      ]
    },
    {
      title: 'Makeup Services',
      icon: Sparkles,
      color: 'from-accent-rose to-secondary',
      services: [
        {
          name: 'Professional Makeup',
          description: 'Professional makeup for special events and occasions',
          duration: '60 min',
          price: 'From $80',
          popular: false
        },
        {
          name: 'Bridal Makeup',
          description: 'Complete bridal makeup with trial session included',
          duration: '90 min',
          price: 'From $150',
          popular: true
        },
        {
          name: 'Party Makeup',
          description: 'Glamorous makeup perfect for parties and celebrations',
          duration: '45 min',
          price: 'From $65',
          popular: false
        },
        {
          name: 'Natural Day Makeup',
          description: 'Fresh, natural makeup for everyday elegance',
          duration: '30 min',
          price: 'From $45',
          popular: false
        }
      ]
    },
    {
      title: 'Bridal Packages',
      icon: Crown,
      color: 'from-primary to-accent-rose',
      services: [
        {
          name: 'Complete Bridal Package',
          description: 'Full bridal hair and makeup with trial sessions',
          duration: '180 min',
          price: 'From $250',
          popular: true
        },
        {
          name: 'Bridal Hair Styling',
          description: 'Elegant bridal hairstyling with accessories',
          duration: '90 min',
          price: 'From $120',
          popular: false
        },
        {
          name: 'Engagement Makeup',
          description: 'Special makeup for engagement ceremonies',
          duration: '75 min',
          price: 'From $100',
          popular: false
        },
        {
          name: 'Mehendi Makeup',
          description: 'Traditional makeup for mehendi ceremonies',
          duration: '60 min',
          price: 'From $85',
          popular: false
        }
      ]
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 gradient-text">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of premium beauty and hair services. Each service is performed by our skilled professionals using the finest products and techniques.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} mb-4`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-poppins font-bold mb-4">{category.title}</h2>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                        Popular
                      </Badge>
                    )}
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="text-lg font-semibold text-primary">
                          {service.price}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center glass p-8 rounded-2xl">
          <h3 className="text-2xl font-poppins font-bold mb-4">
            Ready to Book Your Service?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Choose from our wide range of premium services and let our expert team transform your look. Book your appointment today for an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-gradient">
              <Link to="/booking">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;