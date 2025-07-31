import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useAuth } from '@/hooks/useAuth';
import { Loader2, LogOut, Leaf, Star, Quote, Phone, Heart, Flower2, Sun, Mountain } from 'lucide-react';

const Index = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const services = [
    {
      title: "Panchakarma",
      description: "Complete detoxification and rejuvenation therapy",
      icon: Flower2,
      color: "text-primary"
    },
    {
      title: "Abhyanga Massage",
      description: "Traditional full-body oil massage for deep relaxation",
      icon: Heart,
      color: "text-accent-sage"
    },
    {
      title: "Shirodhara",
      description: "Continuous oil pouring therapy for mental clarity",
      icon: Sun,
      color: "text-secondary-warm"
    },
    {
      title: "Yoga & Meditation",
      description: "Ancient practices for mind-body harmony",
      icon: Mountain,
      color: "text-earth"
    }
  ];

  const packages = [
    {
      title: "7-Day Detox Retreat",
      description: "Complete Panchakarma detoxification program",
      duration: "7 Days",
      price: "₹35,000"
    },
    {
      title: "14-Day Rejuvenation",
      description: "Comprehensive wellness and rejuvenation package",
      duration: "14 Days", 
      price: "₹65,000"
    },
    {
      title: "21-Day Transformation",
      description: "Complete lifestyle transformation journey",
      duration: "21 Days",
      price: "₹95,000"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "California, USA",
      text: "The most transformative experience of my life. The authentic Ayurvedic treatments and serene environment of Rishikesh helped me find my inner peace.",
      rating: 5
    },
    {
      name: "Michael Chen", 
      location: "Singapore",
      text: "Incredible expertise and personalized care. My chronic stress completely disappeared after the 14-day program.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      location: "London, UK", 
      text: "The perfect blend of traditional wisdom and modern comfort. Every detail was carefully crafted for healing.",
      rating: 5
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">
              Nityam Wellness
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user.email}
              </span>
              <Button variant="outline" size="sm" onClick={signOut} className="gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          ) : (
            <Button onClick={() => navigate('/auth')} className="gap-2">
              Sign In
            </Button>
          )}
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary-warm to-earth bg-clip-text text-transparent">
            Ancient Wisdom
            <br />
            Modern Healing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience authentic Ayurvedic treatments in the spiritual heart of Rishikesh. 
            Your journey to holistic wellness begins here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-warm">
              <Phone className="mr-2 h-5 w-5" />
              Book a Session
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Welcome to Our Wellness Sanctuary
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nestled in the sacred mountains of Rishikesh, our center combines 5000 years of 
                Ayurvedic wisdom with modern wellness practices. We offer personalized healing 
                journeys that restore balance to your mind, body, and spirit.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our experienced practitioners use traditional diagnostic methods to create 
                customized treatment plans that address your unique constitution and health goals.
              </p>
              <Button variant="outline" className="gap-2">
                Watch Our Story
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 h-96 flex items-center justify-center">
              <p className="text-center text-muted-foreground">
                [Video/Slider Placeholder]
                <br />
                Beautiful imagery of our center and treatments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Signature Treatments</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the healing power of authentic Ayurvedic therapies, 
              performed by expert practitioners in a serene environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <service.icon className={`h-12 w-12 mx-auto mb-4 ${service.color}`} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                  <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary/10">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Packages */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Signature Wellness Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healing programs designed to transform your health and well-being
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-warm transition-all duration-300">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-bl-lg">
                  {pkg.duration}
                </div>
                <CardHeader className="pt-12">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-lg">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                  <Button className="w-full group-hover:shadow-lg transition-all">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Healing Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real transformations from our wellness community
            </p>
          </div>
          
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="mx-4">
                    <CardContent className="p-8 text-center">
                      <Quote className="h-8 w-8 text-primary mx-auto mb-6" />
                      <p className="text-lg mb-6 text-muted-foreground italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-primary fill-current" />
                        ))}
                      </div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Ayurveda Philosophy */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-earth/10 to-primary/10 rounded-2xl p-8 h-96 flex items-center justify-center">
              <p className="text-center text-muted-foreground">
                [Beautiful Ayurveda illustration]
                <br />
                Traditional symbols and elements
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                The Science of Life
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ayurveda, the world's oldest healing system, teaches us that health is not merely 
                the absence of disease, but a state of vibrant vitality where mind, body, and 
                consciousness work in perfect harmony.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Through understanding your unique constitution (Prakriti) and current imbalances 
                (Vikriti), we create personalized treatment protocols that restore your natural 
                state of wellness.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Years of Wisdom</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-sage">100%</div>
                  <div className="text-sm text-muted-foreground">Natural Healing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-warm">∞</div>
                  <div className="text-sm text-muted-foreground">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary-warm text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Plan Your Healing Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards transformation. Our wellness consultants are here 
            to create a personalized healing plan just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Call +91 98765 43210
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth text-earth-light py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6" />
                <h3 className="text-lg font-semibold">Nityam Wellness</h3>
              </div>
              <p className="text-earth-light/80">
                Ancient Ayurvedic wisdom meets modern wellness in the heart of Rishikesh.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-earth-light/80">
                <li><a href="/about" className="hover:text-earth-light transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-earth-light transition-colors">Services</a></li>
                <li><a href="/packages" className="hover:text-earth-light transition-colors">Packages</a></li>
                <li><a href="/contact" className="hover:text-earth-light transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-earth-light/80">
                <li>Panchakarma</li>
                <li>Abhyanga Massage</li>
                <li>Shirodhara</li>
                <li>Yoga & Meditation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-earth-light/80">
                <p>Rishikesh, Uttarakhand, India</p>
                <p>+91 98765 43210</p>
                <p>info@nityamwellness.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-earth-light/20 mt-8 pt-8 text-center text-earth-light/60">
            <p>&copy; 2024 Nityam Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
