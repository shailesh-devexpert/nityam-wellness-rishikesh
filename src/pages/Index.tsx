import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Ancient Sound Healing in Sacred Rishikesh",
      subtitle: "Transform Your Life Through Sacred Vibrations",
      description: "Experience the profound healing power of traditional sound therapy in the spiritual heart of India."
    },
    {
      title: "Authentic Ayurvedic Treatments",
      subtitle: "5000 Years of Healing Wisdom",
      description: "Discover personalized treatments that restore balance to your mind, body, and spirit."
    },
    {
      title: "Sacred Sound Instruments & Healing",
      subtitle: "Premium Quality Meditation Tools",
      description: "Handcrafted instruments that carry the vibrations of ancient healing traditions."
    }
  ];

  const products = [
    {
      id: 1,
      name: "Sacred Singing Bowls Set",
      price: "₹12,500",
      originalPrice: "₹15,000",
      image: "/lovable-uploads/4b8fcfd3-b526-4b15-8f68-399b04fb870c.png",
      description: "Complete set of 7 chakra-tuned singing bowls for deep meditation",
      rating: 5
    },
    {
      id: 2,
      name: "Golden Healing Bowl",
      price: "₹8,500",
      originalPrice: "₹10,000",
      image: "/lovable-uploads/2b295614-5e8d-4fc2-b6bb-c0cc5da21207.png",
      description: "Premium brass singing bowl with rich harmonics",
      rating: 5
    },
    {
      id: 3,
      name: "Sacred Mantra Bowl",
      price: "₹6,500",
      originalPrice: "₹8,000",
      image: "/lovable-uploads/020beefc-689d-42c9-b3ac-960b27771eac.png",
      description: "Hand-engraved bowl with sacred Sanskrit mantras",
      rating: 4
    },
    {
      id: 4,
      name: "Meditation Frame Drum",
      price: "₹4,500",
      originalPrice: "₹5,500",
      image: "/lovable-uploads/6d7dd870-772e-4eb6-9760-f899167cc391.png",
      description: "Natural hide drum for rhythmic meditation",
      rating: 5
    },
    {
      id: 5,
      name: "Om Sacred Drum",
      price: "₹7,500",
      originalPrice: "₹9,000",
      image: "/lovable-uploads/aedf52bd-5343-4dd1-8358-32385b90ceda.png",
      description: "Beautifully decorated drum with Om symbol",
      rating: 5
    },
    {
      id: 6,
      name: "Meditation Chimes Set",
      price: "₹3,500",
      originalPrice: "₹4,200",
      image: "/lovable-uploads/e40369e2-28b1-4440-a2dd-8ffd000d9606.png",
      description: "Crystal-clear chimes for space clearing",
      rating: 4
    },
    {
      id: 7,
      name: "Healing Harmonium",
      price: "₹25,000",
      originalPrice: "₹30,000",
      image: "/lovable-uploads/61ad40c8-bbac-47a3-ba41-f7ef2ad2ca68.png",
      description: "Professional harmonium for chanting and healing",
      rating: 5
    },
    {
      id: 8,
      name: "Sacred Kalimba",
      price: "₹2,500",
      originalPrice: "₹3,000",
      image: "/lovable-uploads/edd5c3f6-868f-4040-bf2c-94a190f27462.png",
      description: "Thumb piano for gentle meditation music",
      rating: 4
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-warning" : "text-muted"}>★</span>
    ));
  };

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: 'rgba(139, 69, 19, 0.95)' }}>
        <div className="container">
          <a className="navbar-brand font-heading fw-bold fs-3" href="#">
            <span className="glow">🕉️ Rishikesh Healing</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className="hero-content text-white">
                <h1 className="display-3 font-heading fw-bold mb-4 floating">
                  {heroSlides[currentSlide].title}
                </h1>
                <h2 className="fs-2 font-accent mb-4 text-warning glow">
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className="fs-5 mb-5 opacity-90">
                  {heroSlides[currentSlide].description}
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="#products" className="btn btn-primary btn-lg">
                    🛒 Shop Sacred Instruments
                  </a>
                  <a href="#services" className="btn btn-outline-light btn-lg">
                    🧘‍♀️ Healing Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-5" style={{ background: 'rgba(245, 245, 220, 0.9)' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-4 font-heading fw-bold text-primary mb-3">
                🎵 Sacred Sound Healing Instruments
              </h2>
              <p className="fs-5 text-muted">
                Handcrafted authentic instruments for meditation, healing, and spiritual practice
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {products.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-6">
                <div className="card product-card h-100">
                  <div className="position-relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image"
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-success">Authentic</span>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title font-heading fw-bold">{product.name}</h5>
                    <p className="card-text text-muted flex-grow-1">{product.description}</p>
                    <div className="mb-2">
                      {renderStars(product.rating)}
                      <small className="text-muted ms-2">({product.rating}/5)</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <span className="price-tag">{product.price}</span>
                        <small className="text-muted text-decoration-line-through ms-2">
                          {product.originalPrice}
                        </small>
                      </div>
                    </div>
                    <button className="btn btn-primary w-100">
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sound Healing Feature Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(210, 105, 30, 0.1))' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img 
                src="/src/assets/sound-healing.jpg" 
                alt="Sound Healing Session"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <h2 className="display-5 font-heading fw-bold text-primary mb-4">
                  🎶 Transformative Sound Healing
                </h2>
                <p className="fs-5 mb-4">
                  Experience the profound healing power of sacred sound vibrations. Our authentic instruments 
                  create resonances that restore harmony to your energy centers and promote deep relaxation.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <span className="fs-3 me-3">🧘‍♀️</span>
                      <span>Deep Meditation</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <span className="fs-3 me-3">💆‍♀️</span>
                      <span>Stress Relief</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <span className="fs-3 me-3">⚡</span>
                      <span>Energy Healing</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <span className="fs-3 me-3">🌟</span>
                      <span>Chakra Balancing</span>
                    </div>
                  </div>
                </div>
                <a href="#services" className="btn btn-primary btn-lg">
                  Book Sound Healing Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-4 font-heading fw-bold text-primary mb-3">
                🌿 Healing Services
              </h2>
              <p className="fs-5 text-muted">
                Ancient wisdom meets modern wellness in our comprehensive healing programs
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="mb-4">
                  <img src="/src/assets/panchakarma-rishikesh.jpg" alt="Panchakarma" className="img-fluid rounded-3 mb-3" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                </div>
                <h4 className="font-heading fw-bold text-primary mb-3">🌿 Panchakarma Detox</h4>
                <p className="mb-4">Complete Ayurvedic detoxification and rejuvenation program for mind, body, and spirit.</p>
                <div className="price-tag mb-3">From ₹15,000</div>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="mb-4">
                  <img src="/src/assets/abhyanga-rishikesh.jpg" alt="Abhyanga" className="img-fluid rounded-3 mb-3" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                </div>
                <h4 className="font-heading fw-bold text-primary mb-3">💆‍♀️ Abhyanga Massage</h4>
                <p className="mb-4">Traditional full-body oil massage using warm herbal oils for deep relaxation.</p>
                <div className="price-tag mb-3">From ₹3,500</div>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="mb-4">
                  <img src="/src/assets/shirodhara-rishikesh.jpg" alt="Shirodhara" className="img-fluid rounded-3 mb-3" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                </div>
                <h4 className="font-heading fw-bold text-primary mb-3">🧘‍♀️ Shirodhara Therapy</h4>
                <p className="mb-4">Continuous pouring of warm oil on the forehead for mental clarity and peace.</p>
                <div className="price-tag mb-3">From ₹4,500</div>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5" style={{ background: 'linear-gradient(135deg, rgba(210, 105, 30, 0.1), rgba(205, 133, 63, 0.1))' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-4 font-heading fw-bold text-primary mb-3">
                ⭐ Transformational Stories
              </h2>
              <p className="fs-5 text-muted">
                Real experiences from our healing community
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="testimonial-card text-center">
                <div className="mb-3">
                  <img src="/src/assets/testimonial-1.jpg" alt="Sarah" className="rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                </div>
                <div className="mb-3">
                  {renderStars(5)}
                </div>
                <h5 className="font-heading fw-bold">Sarah Johnson</h5>
                <p className="text-muted mb-3">Yoga Teacher, California</p>
                <p className="font-accent fst-italic">
                  "The sound healing session completely transformed my meditation practice. 
                  The singing bowl I purchased creates the most beautiful vibrations."
                </p>
                <div className="badge bg-success">Verified Purchase</div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="testimonial-card text-center">
                <div className="mb-3">
                  <img src="/src/assets/testimonial-2.jpg" alt="Michael" className="rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                </div>
                <div className="mb-3">
                  {renderStars(5)}
                </div>
                <h5 className="font-heading fw-bold">Michael Chen</h5>
                <p className="text-muted mb-3">Meditation Practitioner, Singapore</p>
                <p className="font-accent fst-italic">
                  "After years of chronic stress, the Panchakarma treatment here gave me 
                  a new lease on life. Truly life-changing experience."
                </p>
                <div className="badge bg-success">Verified Treatment</div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="testimonial-card text-center">
                <div className="mb-3">
                  <img src="/src/assets/testimonial-3.jpg" alt="Priya" className="rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                </div>
                <div className="mb-3">
                  {renderStars(5)}
                </div>
                <h5 className="font-heading fw-bold">Priya Sharma</h5>
                <p className="text-muted mb-3">Wellness Coach, Mumbai</p>
                <p className="font-accent fst-italic">
                  "The authentic instruments and genuine healing approach make this place special. 
                  I've recommended it to all my clients."
                </p>
                <div className="badge bg-success">Return Customer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="font-heading fw-bold mb-4 text-warning">🕉️ Rishikesh Healing Center</h5>
              <p className="mb-3">
                Authentic Ayurvedic treatments and sacred sound healing instruments 
                in the spiritual heart of India.
              </p>
              <div className="d-flex gap-3">
                <span className="fs-4">📧</span>
                <span className="fs-4">📱</span>
                <span className="fs-4">🌐</span>
                <span className="fs-4">📍</span>
              </div>
            </div>
            
            <div className="col-lg-2">
              <h6 className="fw-bold mb-3 text-warning">Services</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white-50 text-decoration-none">Sound Healing</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Panchakarma</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Abhyanga</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Shirodhara</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Yoga Therapy</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2">
              <h6 className="fw-bold mb-3 text-warning">Products</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white-50 text-decoration-none">Singing Bowls</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Meditation Drums</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Sacred Chimes</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Harmoniums</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Kalimbas</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2">
              <h6 className="fw-bold mb-3 text-warning">Keywords</h6>
              <ul className="list-unstyled small">
                <li className="text-white-50">Rishikesh Healing</li>
                <li className="text-white-50">Sound Therapy</li>
                <li className="text-white-50">Ayurveda Treatment</li>
                <li className="text-white-50">Meditation Tools</li>
                <li className="text-white-50">Spiritual Healing</li>
                <li className="text-white-50">Chakra Balancing</li>
                <li className="text-white-50">Yoga Rishikesh</li>
              </ul>
            </div>
            
            <div className="col-lg-2">
              <h6 className="fw-bold mb-3 text-warning">Contact</h6>
              <ul className="list-unstyled small">
                <li className="text-white-50">📍 Rishikesh, Uttarakhand</li>
                <li className="text-white-50">📞 +91 9876543210</li>
                <li className="text-white-50">📧 info@rishikeshhealing.com</li>
                <li className="text-white-50">🕐 9 AM - 6 PM IST</li>
              </ul>
            </div>
          </div>
          
          <hr className="my-4 opacity-25" />
          
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0 text-white-50">
                © 2024 Rishikesh Healing Center. Authentic Ayurvedic treatments & sacred sound healing instruments.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;