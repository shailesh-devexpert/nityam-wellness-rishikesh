import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Heart, Users, Target, Award, Sparkles } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Dr. Rajesh Sharma",
      title: "Chief Ayurvedic Physician",
      experience: "25+ Years",
      specialization: "Panchakarma & Chronic Diseases"
    },
    {
      name: "Dr. Priya Gupta", 
      title: "Senior Ayurvedic Doctor",
      experience: "15+ Years",
      specialization: "Women's Health & Rejuvenation"
    },
    {
      name: "Yoga Master Ananda",
      title: "Head Yoga Instructor", 
      experience: "20+ Years",
      specialization: "Hatha & Ashtanga Yoga"
    },
    {
      name: "Therapist Sunita",
      title: "Senior Massage Therapist",
      experience: "12+ Years", 
      specialization: "Abhyanga & Therapeutic Massage"
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
            <a href="/about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-earth bg-clip-text text-transparent">
            About Nityam Wellness
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rooted in ancient wisdom, dedicated to modern healing. 
            Discover our story of transformation and wellness.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Philosophy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Nityam Wellness, we believe that true healing comes from understanding the 
                interconnectedness of mind, body, and spirit. Our approach combines the 
                time-tested principles of Ayurveda with modern wellness practices.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We honor the ancient texts while embracing contemporary insights, creating a 
                healing environment that respects tradition while meeting modern needs.
              </p>
              <div className="flex items-center gap-4">
                <Heart className="h-8 w-8 text-primary" />
                <span className="text-lg font-semibold text-foreground">Healing with Love and Wisdom</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 h-96 flex items-center justify-center">
              <p className="text-center text-muted-foreground">
                [Beautiful philosophy imagery]
                <br />
                Traditional Ayurvedic symbols and nature
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  To provide authentic Ayurvedic healing experiences that restore balance, 
                  promote wellness, and awaken the natural healing potential within each individual, 
                  while preserving and sharing the sacred wisdom of our ancestors.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="text-center">
                <Sparkles className="h-12 w-12 text-accent-sage mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  To be a global beacon of authentic Ayurvedic wisdom, inspiring people worldwide 
                  to embrace holistic wellness practices and live in harmony with their true nature, 
                  creating a healthier and more conscious world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Meet Our Healing Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced practitioners bring decades of knowledge and compassionate care 
              to guide you on your wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <Award className="h-4 w-4 inline mr-1" />
                    {member.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.specialization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Healing Sanctuary</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience tranquility in our thoughtfully designed spaces, 
              where every detail supports your journey to wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <p className="text-muted-foreground">[Treatment Rooms]</p>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Treatment Spaces</h3>
                <p className="text-sm text-muted-foreground">
                  Serene treatment rooms designed for deep relaxation and healing
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-earth/20 flex items-center justify-center">
                <p className="text-muted-foreground">[Yoga Hall]</p>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Yoga & Meditation Hall</h3>
                <p className="text-sm text-muted-foreground">
                  Spacious hall with mountain views for yoga and meditation practice
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-earth/20 to-secondary/20 flex items-center justify-center">
                <p className="text-muted-foreground">[Garden]</p>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Healing Gardens</h3>
                <p className="text-sm text-muted-foreground">
                  Medicinal herb gardens and peaceful spaces for contemplation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary-warm text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Connect with our team to learn more about our approach and 
            discover how we can support your wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;