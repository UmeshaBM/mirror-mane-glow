import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 gradient-text">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our services or want to schedule an appointment? We'd love to hear from you. Reach out through any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="glass">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your inquiry..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-gradient" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Visit Our Salon</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">
                    123 Beauty Street<br />
                    Fashion District<br />
                    City, State 12345
                  </p>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Quick booking and inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@mirrorandmane.com</p>
                    <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span className="text-muted-foreground">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
                </div>
                <div className="mt-4 p-3 bg-accent/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Holiday Hours:</strong> Please call ahead during holidays as hours may vary.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 text-white hover:scale-110 transition-transform"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600 text-white hover:scale-110 transition-transform"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Stay updated with our latest work and special offers!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Action Section */}
        <div className="mt-16 text-center glass p-8 rounded-2xl">
          <h3 className="text-2xl font-poppins font-bold mb-4">
            Ready to Book Your Appointment?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Skip the form and book directly! Use our online booking system or call us now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient" size="lg">
              Book Online
            </Button>
            <Button variant="outline" size="lg">
              Call Now: (555) 123-4567
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white" size="lg">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;