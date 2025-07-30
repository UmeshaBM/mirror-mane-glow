import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      value: "haircut",
      label: "Hair Cut & Styling - From $45",
      duration: "45 min",
    },
    {
      value: "hair-color",
      label: "Hair Coloring - From $85",
      duration: "120 min",
    },
    {
      value: "bridal-package",
      label: "Bridal Package - From $250",
      duration: "180 min",
    },
    {
      value: "hair-spa",
      label: "Hair Spa Treatment - From $65",
      duration: "60 min",
    },
    {
      value: "makeup",
      label: "Professional Makeup - From $80",
      duration: "60 min",
    },
    {
      value: "highlights",
      label: "Highlights & Lowlights - From $110",
      duration: "150 min",
    },
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const bookingData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      date: formData.get("date"),
      time: formData.get("time"),
      notes: formData.get("notes"),
    };
    formData.append("form-name", "charming-syrniki-733aff");

    try {
      const searchParams = new URLSearchParams();
      formData.forEach((value, key) => {
        searchParams.append(key, value.toString());
      });

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: searchParams.toString(),
      });
      console.log(bookingData);
      setIsSubmitted(true);
      toast({
        title: "Booking Confirmed! 🎉",
        description:
          "We'll contact you soon to confirm your appointment details.",
      });
    } catch (error) {
      toast({
        title: "Booking Failed",
        description:
          "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="glass p-8">
              <div className="text-6xl mb-6">✨</div>
              <h1 className="text-3xl font-poppins font-bold mb-4 gradient-text">
                Booking Confirmed!
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for choosing Mirror & Mane! We've received your
                booking request and will contact you within 24 hours to confirm
                your appointment details.
              </p>
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  <strong>What's Next?</strong>
                  <br />
                  Our team will call you to confirm your preferred date and
                  time, discuss any special requirements, and answer any
                  questions you might have.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-gradient"
                >
                  Book Another Appointment
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "tel:+1234567890")}
                >
                  Call Us Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 gradient-text">
            Book Your Appointment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready for your transformation? Fill out the form below and we'll get
            back to you to confirm your appointment details.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Book Your Session</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    name="charming-syrniki-733aff"
                    data-netlify="true"
                  >
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="service">Select Service *</Label>
                      <Select name="service" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem
                              key={service.value}
                              value={service.value}
                            >
                              <div className="flex flex-col">
                                <span>{service.label}</span>
                                <span className="text-xs text-muted-foreground">
                                  Duration: {service.duration}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select name="time" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Any special requests or preferences..."
                        rows={3}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full btn-gradient"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Book Appointment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Information */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground">
                      Quick booking via chat
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      info@mirrorandmane.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Policies */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Booking Policies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• Please arrive 10 minutes early for your appointment</p>
                  <p>• 24-hour cancellation notice required</p>
                  <p>• Late arrivals may result in shortened service time</p>
                  <p>• We'll confirm your appointment within 24 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
