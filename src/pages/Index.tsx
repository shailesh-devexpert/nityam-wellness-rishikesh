import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useAuth } from '@/hooks/useAuth';
import { Loader2, LogOut, Leaf, Star, Quote, Phone, Heart, Flower2, Sun, Mountain, Sparkles, Users, MapPin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import panchakarmaImg from '@/assets/panchakarma.jpg';
import abhyangaImg from '@/assets/abhyanga.jpg';
import shirodaraImg from '@/assets/shirodhara.jpg';
import yogaImg from '@/assets/yoga-meditation.jpg';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';
import ayurvedaSymbols from '@/assets/ayurveda-symbols.jpg';

const Index = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const services = [
    {
      title: "Panchakarma",
      description: "Complete detoxification and rejuvenation therapy using traditional five-fold purification process",
      icon: Flower2,
      color: "text-primary",
      image: panchakarmaImg,
      duration: "7-21 days",
      price: "From ₹15,000"
    },
    {
      title: "Abhyanga Massage",
      description: "Traditional full-body oil massage with warm herbal oils for deep relaxation and healing",
      icon: Heart,
      color: "text-accent-sage",
      image: abhyangaImg,
      duration: "60-90 min",
      price: "From ₹3,500"
    },
    {
      title: "Shirodhara",
      description: "Continuous oil pouring therapy for mental clarity, stress relief and spiritual awakening",
      icon: Sun,
      color: "text-secondary-warm",
      image: shirodaraImg,
      duration: "45-60 min",
      price: "From ₹4,500"
    },
    {
      title: "Yoga & Meditation",
      description: "Ancient practices for mind-body harmony in the serene Himalayan foothills",
      icon: Mountain,
      color: "text-earth",
      image: yogaImg,
      duration: "60-90 min",
      price: "From ₹1,500"
    }
  ];

  const packages = [
    {
      title: "7-Day Detox Retreat",
      description: "Complete Panchakarma detoxification program with personalized treatments, yoga, and meditation",
      duration: "7 Days",
      price: "₹35,000",
      features: ["Daily Panchakarma", "Yoga & Meditation", "Ayurvedic Meals", "Consultation"],
      badge: "Most Popular"
    },
    {
      title: "14-Day Rejuvenation",
      description: "Comprehensive wellness and rejuvenation package for complete mind-body transformation",
      duration: "14 Days", 
      price: "₹65,000",
      features: ["Extended Therapies", "Lifestyle Coaching", "Herb Garden Tours", "Spiritual Guidance"],
      badge: "Best Value"
    },
    {
      title: "21-Day Transformation",
      description: "Complete lifestyle transformation journey with deep healing and spiritual awakening",
      duration: "21 Days",
      price: "₹95,000",
      features: ["Complete Transformation", "Personal Guide", "Advanced Therapies", "Life Coaching"],
      badge: "Premium"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "California, USA",
      text: "The most transformative experience of my life. The authentic Ayurvedic treatments and serene environment of Rishikesh helped me find my inner peace and completely healed my chronic stress.",
      rating: 5,
      image: testimonial1
    },
    {
      name: "Michael Chen", 
      location: "Singapore",
      text: "Incredible expertise and personalized care. My chronic digestive issues completely disappeared after the 14-day program. The doctors here truly understand ancient healing.",
      rating: 5,
      image: testimonial2
    },
    {
      name: "Emma Thompson",
      location: "London, UK", 
      text: "The perfect blend of traditional wisdom and modern comfort. Every detail was carefully crafted for healing. I left feeling like a completely new person.",
      rating: 5,
      image: testimonial3
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center animated-bg">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-lg font-heading text-muted-foreground">Loading your wellness journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Beautiful Header with Lottie Animation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-lg">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Leaf className="h-10 w-10 text-primary animate-float" />
              <div className="absolute inset-0 h-10 w-10 text-primary/30 animate-pulse">
                <Leaf className="h-10 w-10" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold bg-gradient-to-r from-primary via-secondary-warm to-earth bg-clip-text text-transparent">
                Nityam Wellness
              </h1>
              <p className="text-xs text-muted-foreground font-accent">Ancient Wisdom • Modern Healing</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="font-medium text-primary hover:text-primary/80 transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/about" className="font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/services" className="font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/contact" className="font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          {user ? (
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <p className="text-sm font-medium text-foreground">Welcome back!</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
              <Button variant="outline" size="sm" onClick={signOut} className="gap-2 hover-lift">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => navigate('/auth')} className="hidden md:inline-flex">
                Sign In
              </Button>
              <Button onClick={() => navigate('/auth')} size="lg" variant="gradient">
                Get Started
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Beautiful Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
          <div className="absolute inset-0 animated-bg opacity-30"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-primary/20 animate-float" style={{ animationDelay: '0s' }}>
          <Flower2 className="h-16 w-16" />
        </div>
        <div className="absolute top-40 right-20 text-lotus/20 animate-float" style={{ animationDelay: '2s' }}>
          <Sun className="h-12 w-12" />
        </div>
        <div className="absolute bottom-40 left-20 text-accent-sage/20 animate-float" style={{ animationDelay: '4s' }}>
          <Mountain className="h-14 w-14" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-8 animate-fade-in-up">
              <span className="bg-gradient-to-r from-primary via-secondary-warm to-gold bg-clip-text text-transparent animate-glow">
                Ancient Wisdom
              </span>
              <br />
              <span className="bg-gradient-to-r from-earth via-accent-sage to-lotus bg-clip-text text-transparent">
                Modern Healing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto font-accent animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Experience authentic Ayurvedic treatments in the spiritual heart of Rishikesh. 
              Your journey to holistic wellness begins here, where ancient wisdom meets modern comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="xl" variant="gradient" className="text-xl px-12 py-8 shadow-warm hover-lift">
                <Phone className="mr-3 h-6 w-6" />
                Book Your Journey
              </Button>
              <Button variant="outline" size="xl" className="text-xl px-12 py-8 hover-lift border-2">
                <Sparkles className="mr-3 h-6 w-6" />
                Discover More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">5000+</div>
                <div className="text-sm md:text-base text-muted-foreground">Years of Wisdom</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent-sage">1000+</div>
                <div className="text-sm md:text-base text-muted-foreground">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary-warm">100%</div>
                <div className="text-sm md:text-base text-muted-foreground">Natural Healing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Video Section */}
      <section className="py-32 bg-pattern">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl font-heading font-bold mb-8 text-foreground">
                Welcome to Our
                <span className="block bg-gradient-to-r from-primary to-secondary-warm bg-clip-text text-transparent">
                  Wellness Sanctuary
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-accent leading-relaxed">
                Nestled in the sacred mountains of Rishikesh, our center combines 5000 years of 
                Ayurvedic wisdom with modern wellness practices. We offer personalized healing 
                journeys that restore balance to your mind, body, and spirit.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Our experienced practitioners use traditional diagnostic methods to create 
                customized treatment plans that address your unique constitution and health goals.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-primary" />
                  <span className="font-medium">Compassionate Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-accent-sage" />
                  <span className="font-medium">Sacred Space</span>
                </div>
              </div>
              
              <Button variant="gradient" size="lg" className="hover-lift">
                <Heart className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift">
                <img 
                  src={ayurvedaSymbols} 
                  alt="Our Wellness Center" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-heading font-bold mb-2">Sacred Healing Space</h3>
                  <p className="text-sm opacity-90">Where ancient traditions meet modern comfort</p>
                </div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" variant="ghost" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Signature Treatments - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary-warm to-accent-sage bg-clip-text text-transparent">
                Our Signature Treatments
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-accent leading-relaxed">
              Experience the healing power of authentic Ayurvedic therapies, 
              performed by expert practitioners in a serene environment
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover-lift bg-card/50 backdrop-blur-sm border border-primary/10 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {service.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon className="h-8 w-8 mb-2" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary/10 transition-all">
                    Learn More & Book
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Packages - Enhanced */}
      <section className="py-32 bg-gradient-to-r from-secondary/5 via-background to-lotus/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-earth via-gold to-lotus bg-clip-text text-transparent">
                Signature Wellness Packages
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-accent">
              Comprehensive healing programs designed to transform your health and well-being
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden group hover-lift transition-all duration-500 ${index === 1 ? 'scale-105 shadow-2xl border-primary/20' : ''} animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                {pkg.badge && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary-warm text-primary-foreground px-6 py-2 rounded-bl-2xl font-bold text-sm">
                    {pkg.badge}
                  </div>
                )}
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary-warm to-gold"></div>
                
                <CardHeader className="pt-16 text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      {pkg.duration}
                    </span>
                  </div>
                  <CardTitle className="text-3xl font-heading font-bold mb-4">{pkg.title}</CardTitle>
                  <CardDescription className="text-lg font-accent leading-relaxed">{pkg.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-6">{pkg.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-2 text-muted-foreground">
                        <Sparkles className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    size="lg" 
                    variant={index === 1 ? "gradient" : "default"} 
                    className="w-full hover-lift text-base"
                  >
                    Book This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="py-32 bg-pattern">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-gold to-secondary-warm bg-clip-text text-transparent">
                Healing Stories
              </span>
            </h2>
            <p className="text-xl text-muted-foreground font-accent">
              Real transformations from our wellness community
            </p>
          </div>
          
          <Carousel className="max-w-6xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="mx-4 overflow-hidden bg-card/80 backdrop-blur-sm border border-primary/10 hover-lift">
                    <CardContent className="p-12">
                      <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Photo */}
                        <div className="text-center">
                          <div className="relative">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-32 h-32 rounded-full object-cover mx-auto shadow-2xl"
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
                          </div>
                          
                          <div className="flex justify-center mt-6 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-gold fill-current" />
                            ))}
                          </div>
                          
                          <h4 className="font-heading font-bold text-xl text-foreground">{testimonial.name}</h4>
                          <p className="text-muted-foreground font-medium">{testimonial.location}</p>
                        </div>
                        
                        {/* Testimonial */}
                        <div className="md:col-span-2">
                          <Quote className="h-12 w-12 text-primary/30 mb-6" />
                          <p className="text-xl font-accent italic text-muted-foreground leading-relaxed mb-6">
                            "{testimonial.text}"
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              Verified Guest
                            </span>
                            <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                            <span>Transformed Life</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/20 hover:bg-primary/10" />
            <CarouselNext className="border-primary/20 hover:bg-primary/10" />
          </Carousel>
        </div>
      </section>

      {/* Ayurveda Philosophy */}
      <section className="py-32 bg-gradient-to-br from-earth/5 via-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-up">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift">
                <img 
                  src={ayurvedaSymbols} 
                  alt="Ayurveda Philosophy" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Years of Wisdom</div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-5xl font-heading font-bold mb-8">
                <span className="bg-gradient-to-r from-primary via-earth to-accent-sage bg-clip-text text-transparent">
                  The Science of Life
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-accent leading-relaxed">
                Ayurveda, the world's oldest healing system, teaches us that health is not merely 
                the absence of disease, but a state of vibrant vitality where mind, body, and 
                consciousness work in perfect harmony.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Through understanding your unique constitution (Prakriti) and current imbalances 
                (Vikriti), we create personalized treatment protocols that restore your natural 
                state of wellness.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="text-center p-4 bg-primary/5 rounded-2xl">
                  <div className="text-3xl font-heading font-bold text-primary animate-glow">∞</div>
                  <div className="text-sm text-muted-foreground font-medium">Possibilities</div>
                </div>
                <div className="text-center p-4 bg-accent-sage/5 rounded-2xl">
                  <div className="text-3xl font-heading font-bold text-accent-sage">100%</div>
                  <div className="text-sm text-muted-foreground font-medium">Natural Healing</div>
                </div>
                <div className="text-center p-4 bg-secondary-warm/5 rounded-2xl">
                  <div className="text-3xl font-heading font-bold text-secondary-warm">24/7</div>
                  <div className="text-sm text-muted-foreground font-medium">Support</div>
                </div>
              </div>
              
              <Button variant="gradient" size="lg" className="hover-lift">
                <Sparkles className="mr-2 h-5 w-5" />
                Discover Your Constitution
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-warm text-primary-foreground relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-float">
            <Flower2 className="h-24 w-24" />
          </div>
          <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '2s' }}>
            <Sun className="h-20 w-20" />
          </div>
          <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '4s' }}>
            <Mountain className="h-28 w-28" />
          </div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 animate-fade-in-up">
            Plan Your Healing Journey
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 font-accent leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Take the first step towards transformation. Our wellness consultants are here 
            to create a personalized healing plan that honors your unique journey to wellness.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button size="xl" variant="secondary" className="text-xl px-12 py-8 hover-lift bg-white text-primary hover:bg-white/90">
              <Phone className="mr-3 h-6 w-6" />
              Call +91 98765 43210
            </Button>
            <Button size="xl" variant="outline" className="text-xl px-12 py-8 border-white text-white hover:bg-white hover:text-primary hover-lift">
              <Sparkles className="mr-3 h-6 w-6" />
              Book Free Consultation
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 opacity-80">
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-5 w-5" />
              <span>info@nityamwellness.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-5 w-5" />
              <span>Rishikesh, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful Footer */}
      <footer className="bg-earth text-earth-light py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">Nityam Wellness</h3>
                  <p className="text-sm opacity-80">Ancient Wisdom • Modern Healing</p>
                </div>
              </div>
              <p className="text-earth-light/80 mb-6 leading-relaxed max-w-md">
                Ancient Ayurvedic wisdom meets modern wellness in the heart of Rishikesh. 
                Transform your life with authentic healing experiences.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-earth-light/60 hover:text-white">
                  <Users className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-earth-light/60 hover:text-white">
                  <Mail className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-earth-light/60 hover:text-white">
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-6 text-white text-lg">Quick Links</h4>
              <ul className="space-y-3 text-earth-light/80">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/packages" className="hover:text-white transition-colors">Packages</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-6 text-white text-lg">Services</h4>
              <ul className="space-y-3 text-earth-light/80">
                <li className="hover:text-white transition-colors cursor-pointer">Panchakarma</li>
                <li className="hover:text-white transition-colors cursor-pointer">Abhyanga Massage</li>
                <li className="hover:text-white transition-colors cursor-pointer">Shirodhara</li>
                <li className="hover:text-white transition-colors cursor-pointer">Yoga & Meditation</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-earth-light/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-earth-light/60 text-sm">
              &copy; 2024 Nityam Wellness. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-earth-light/60 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;