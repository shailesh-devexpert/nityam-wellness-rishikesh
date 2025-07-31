import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Flower2, Heart, Sun, Mountain, Droplets, Flower, Waves } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "Panchakarma",
      description: "Complete detoxification and rejuvenation therapy",
      icon: Flower2,
      services: [
        {
          name: "Abhyanga + Swedana",
          description: "Full body oil massage followed by herbal steam therapy",
          duration: "90 mins",
          price: "₹3,500"
        },
        {
          name: "Shirodhara",
          description: "Continuous oil pouring therapy for mental clarity and relaxation",
          duration: "60 mins", 
          price: "₹2,800"
        },
        {
          name: "Nasya",
          description: "Nasal administration of medicated oils for respiratory health",
          duration: "45 mins",
          price: "₹1,800"
        },
        {
          name: "Basti (Enema Therapy)",
          description: "Medicated enema for digestive and nervous system balance",
          duration: "75 mins",
          price: "₹3,200"
        }
      ]
    },
    {
      title: "Massage Therapies", 
      description: "Traditional healing massages for deep relaxation",
      icon: Heart,
      services: [
        {
          name: "Abhyanga Massage",
          description: "Traditional full-body oil massage for overall wellness",
          duration: "75 mins",
          price: "₹2,500"
        },
        {
          name: "Pizhichil",
          description: "Royal treatment with continuous oil pouring and massage",
          duration: "90 mins",
          price: "₹4,500"
        },
        {
          name: "Udvartana",
          description: "Herbal powder massage for weight management and skin health",
          duration: "60 mins",
          price: "₹2,200"
        },
        {
          name: "Pada Abhyanga",
          description: "Therapeutic foot massage for grounding and relaxation",
          duration: "45 mins",
          price: "₹1,500"
        }
      ]
    },
    {
      title: "Specialized Therapies",
      description: "Targeted treatments for specific health concerns", 
      icon: Sun,
      services: [
        {
          name: "Karna Purana",
          description: "Ear therapy with medicated oils for hearing and balance",
          duration: "30 mins",
          price: "₹1,200"
        },
        {
          name: "Netra Tarpana",
          description: "Eye therapy with medicated ghee for vision improvement",
          duration: "45 mins", 
          price: "₹2,000"
        },
        {
          name: "Hridaya Basti",
          description: "Heart region therapy for cardiovascular wellness",
          duration: "60 mins",
          price: "₹2,800"
        },
        {
          name: "Janu Basti",
          description: "Knee therapy for joint health and mobility",
          duration: "45 mins",
          price: "₹2,200"
        }
      ]
    },
    {
      title: "Detox Programs",
      description: "Comprehensive cleansing and purification therapies",
      icon: Droplets,
      services: [
        {
          name: "3-Day Mini Detox",
          description: "Gentle introduction to Ayurvedic cleansing practices",
          duration: "3 Days",
          price: "₹15,000"
        },
        {
          name: "7-Day Complete Detox", 
          description: "Comprehensive Panchakarma detoxification program",
          duration: "7 Days",
          price: "₹35,000"
        },
        {
          name: "14-Day Deep Cleanse",
          description: "Intensive purification for chronic conditions",
          duration: "14 Days",
          price: "₹65,000"
        },
        {
          name: "21-Day Transformation",
          description: "Complete lifestyle reset and health restoration",
          duration: "21 Days",
          price: "₹95,000"
        }
      ]
    },
    {
      title: "Rejuvenation",
      description: "Anti-aging and vitality enhancement treatments",
      icon: Flower,
      services: [
        {
          name: "Rasayana Therapy",
          description: "Rejuvenation therapy for longevity and vitality",
          duration: "90 mins",
          price: "₹4,000"
        },
        {
          name: "Golden Facial",
          description: "Anti-aging facial with gold and herbal ingredients",
          duration: "75 mins",
          price: "₹3,500"
        },
        {
          name: "Hair & Scalp Treatment",
          description: "Comprehensive therapy for hair health and growth",
          duration: "60 mins",
          price: "₹2,800"
        },
        {
          name: "Beauty Enhancement Package",
          description: "Complete beauty therapy for skin and hair rejuvenation",
          duration: "120 mins",
          price: "₹5,500"
        }
      ]
    },
    {
      title: "Yoga & Meditation",
      description: "Mind-body practices for inner harmony",
      icon: Mountain,
      services: [
        {
          name: "Hatha Yoga Class",
          description: "Traditional yoga practice for flexibility and strength",
          duration: "75 mins",
          price: "₹800"
        },
        {
          name: "Pranayama Session",
          description: "Breathing techniques for mental clarity and energy",
          duration: "45 mins",
          price: "₹600"
        },
        {
          name: "Meditation Workshop",
          description: "Guided meditation for stress relief and mindfulness",
          duration: "60 mins",
          price: "₹700"
        },
        {
          name: "Private Yoga Session",
          description: "Personalized yoga practice tailored to your needs",
          duration: "60 mins",
          price: "₹1,500"
        }
      ]
    },
    {
      title: "Lifestyle Coaching",
      description: "Personalized guidance for healthy living",
      icon: Waves,
      services: [
        {
          name: "Ayurvedic Consultation",
          description: "Comprehensive health assessment and treatment plan",
          duration: "90 mins",
          price: "₹2,000"
        },
        {
          name: "Nutrition Counseling",
          description: "Personalized diet plan based on your constitution",
          duration: "60 mins",
          price: "₹1,500"
        },
        {
          name: "Lifestyle Design Session",
          description: "Daily routine optimization for optimal health",
          duration: "75 mins",
          price: "₹1,800"
        },
        {
          name: "Follow-up Consultation",
          description: "Progress review and treatment adjustments",
          duration: "45 mins",
          price: "₹1,200"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Nityam Wellness</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-earth bg-clip-text text-transparent">
            Our Healing Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the transformative power of authentic Ayurvedic treatments, 
            each designed to restore balance and promote deep healing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <category.icon className="h-12 w-12 text-primary" />
                    <h2 className="text-4xl font-bold text-foreground">{category.title}</h2>
                  </div>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="group hover:shadow-warm transition-all duration-300 cursor-pointer">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg leading-tight">{service.name}</CardTitle>
                          <Badge variant="secondary" className="shrink-0">
                            {service.duration}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{service.price}</span>
                          <Button size="sm" className="group-hover:shadow-lg transition-all">
                            Book Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of authentic Ayurvedic care with modern comfort and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardHeader>
                <Flower2 className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Authentic Traditions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All treatments follow traditional Ayurvedic methods passed down through generations of healers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <Heart className="h-16 w-16 text-accent-sage mx-auto mb-4" />
                <CardTitle className="text-xl">Personalized Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every treatment is customized based on your unique constitution and specific health needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <Sun className="h-16 w-16 text-secondary-warm mx-auto mb-4" />
                <CardTitle className="text-xl">Expert Practitioners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our experienced doctors and therapists bring decades of knowledge and compassionate care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary-warm text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a consultation to discover which treatments are perfect for your unique needs and wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;