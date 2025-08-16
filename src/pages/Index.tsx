import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Nityam Wellness",
      subtitle: "Sacred Journey to Inner Peace",
      description: "Discover ancient healing wisdom through authentic Ayurvedic treatments and sound therapy in the serene landscapes of Rishikesh."
    },
    {
      title: "Holistic Healing Experience",
      subtitle: "Mind • Body • Spirit Harmony",
      description: "Transform your well-being through time-tested practices that nurture your complete self with gentle, natural healing."
    },
    {
      title: "Sacred Sound & Wellness",
      subtitle: "Vibrational Medicine for Modern Life",
      description: "Experience the profound healing power of ancient sound instruments designed to restore balance and inner tranquility."
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
      <nav className="navbar navbar-expand-lg fixed-top" style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(232, 244, 253, 0.3)'
      }}>
        <div className="container">
          <a className="navbar-brand font-heading fw-bold fs-3" href="#" style={{ color: '#1A2B42' }}>
            <span className="glow">🧘‍♀️ Nityam Wellness</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ borderColor: '#E8EDF5' }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#home" style={{ color: '#1A2B42' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#products" style={{ color: '#1A2B42' }}>Sacred Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#healing" style={{ color: '#1A2B42' }}>Sound Healing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#services" style={{ color: '#1A2B42' }}>Wellness</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#testimonials" style={{ color: '#1A2B42' }}>Stories</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section" style={{
        backgroundImage: `linear-gradient(135deg, rgba(232, 244, 253, 0.8) 0%, rgba(255, 248, 220, 0.6) 50%, rgba(209, 236, 241, 0.8) 100%), url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E8F4FD' fill-opacity='0.15'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='80' cy='30' r='4'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='40' cy='60' r='3'/%3E%3Ccircle cx='70' cy='70' r='2'/%3E%3Ccircle cx='30' cy='80' r='3'/%3E%3Ccircle cx='90' cy='90' r='2'/%3E%3Cpath d='M15 45 Q25 35 35 45 T55 45' stroke='%23D1ECF1' stroke-width='2' fill='none' stroke-opacity='0.3'/%3E%3Cpath d='M65 25 Q75 15 85 25 T105 25' stroke='%23E8F4FD' stroke-width='1.5' fill='none' stroke-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: 'cover, 120px 120px',
        backgroundPosition: 'center, 0 0',
        backgroundRepeat: 'no-repeat, repeat'
      }}>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-10 mx-auto text-center">
              <div className="hero-content">
                <h1 className="display-2 font-heading fw-bold mb-4 floating" style={{ 
                  color: '#1A2B42',
                  fontSize: '4.5rem',
                  lineHeight: '1.1'
                }}>
                  {heroSlides[currentSlide].title}
                </h1>
                <h2 className="fs-1 font-accent mb-4 glow" style={{ 
                  color: '#1A2B42',
                  fontSize: '2.5rem',
                  fontWeight: '300',
                  opacity: '0.8'
                }}>
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className="fs-4 mb-5" style={{ 
                  color: '#1A2B42',
                  opacity: '0.7',
                  maxWidth: '600px',
                  margin: '0 auto 3rem',
                  lineHeight: '1.6'
                }}>
                  {heroSlides[currentSlide].description}
                </p>
                <div className="d-flex gap-4 justify-content-center flex-wrap">
                  <a href="#products" className="btn btn-primary btn-lg">
                    <span>✨ Explore Sacred Tools</span>
                  </a>
                  <a href="/healing-services" className="btn btn-outline-primary btn-lg">
                    <span>🎵 Sound Healing</span>
                  </a>
                </div>
                
                {/* Slide Indicators */}
                <div className="d-flex justify-content-center mt-5 gap-2">
                  {heroSlides.map((_, index) => (
                    <div
                      key={index}
                      className={`rounded-circle ${index === currentSlide ? 'bg-primary' : 'bg-light'}`}
                      style={{ 
                        width: '12px', 
                        height: '12px',
                        opacity: index === currentSlide ? '1' : '0.3',
                        backgroundColor: index === currentSlide ? '#F8FBFF' : '#E8EDF5',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: '1px solid #E8EDF5'
                      }}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-5" style={{ 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(232, 244, 253, 0.3) 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-4 font-heading fw-bold mb-3 fade-in-up" style={{ color: '#1A2B42' }}>
                ✨ Sacred Wellness Tools
              </h2>
              <p className="fs-5 mb-4" style={{ color: '#1A2B42', opacity: '0.6', maxWidth: '600px', margin: '0 auto' }}>
                Handcrafted instruments that carry the ancient wisdom of sound healing and meditation practice
              </p>
              <div style={{ 
                width: '100px', 
                height: '2px', 
                background: 'linear-gradient(135deg, #F8FBFF, #F0F7FF)',
                margin: '2rem auto',
                borderRadius: '2px'
              }}></div>
            </div>
          </div>
          
          <div className="row g-4">
            {products.map((product, index) => (
              <div key={product.id} className="col-lg-3 col-md-6">
                <div className="card product-card h-100" style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.8s ease-out both'
                }}>
                  <div className="position-relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image"
                      style={{ position: 'relative', zIndex: '2' }}
                    />
                    <div className="position-absolute top-0 end-0 m-3" style={{ zIndex: '3' }}>
                      <span className="badge" style={{ 
                        background: 'rgba(255, 255, 255, 0.9)',
                        color: '#1A2B42',
                        borderRadius: '15px',
                        padding: '6px 12px',
                        fontSize: '0.75rem',
                        border: '1px solid #E8EDF5',
                        backdropFilter: 'blur(10px)'
                      }}>✨ Authentic</span>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column" style={{ position: 'relative', zIndex: '2' }}>
                    <h5 className="card-title font-heading fw-bold" style={{ color: '#1A2B42' }}>{product.name}</h5>
                    <p className="card-text flex-grow-1" style={{ color: '#1A2B42', opacity: '0.6' }}>{product.description}</p>
                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        {renderStars(product.rating)}
                        <small className="ms-2" style={{ color: '#1A2B42', opacity: '0.5' }}>({product.rating}/5)</small>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="fw-bold fs-5" style={{ color: '#1A2B42' }}>{product.price}</span>
                          <small className="text-decoration-line-through ms-2" style={{ opacity: '0.4' }}>
                            {product.originalPrice}
                          </small>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary w-100">
                      <span>✨ Add to Collection</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sound Healing Feature Section */}
      <section id="healing" className="py-5" style={{ 
        background: 'linear-gradient(135deg, rgba(232, 244, 253, 0.4) 0%, rgba(255, 248, 220, 0.3) 50%, rgba(209, 236, 241, 0.4) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(232, 244, 253, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(209, 236, 241, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-in-left">
              <div className="position-relative">
                <img 
                  src="/src/assets/sound-healing.jpg" 
                  alt="Sound Healing Session"
                  className="img-fluid shadow-lg"
                  style={{ 
                    borderRadius: '30px',
                    transform: 'perspective(1000px) rotateY(-5deg)',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '20px',
                  padding: '15px 20px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🎵</span>
                    <div>
                      <div style={{ fontWeight: '600', color: '#2C3E50', fontSize: '0.9rem' }}>Sacred Vibrations</div>
                      <div style={{ color: '#2C3E50', opacity: '0.7', fontSize: '0.8rem' }}>Healing Frequencies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 fade-in-right">
              <div className="ps-lg-5">
                <h2 className="display-4 font-heading fw-bold mb-4" style={{ color: '#2C3E50' }}>
                  🎶 Sacred Sound Healing Journey
                </h2>
                <p className="fs-5 mb-4" style={{ color: '#2C3E50', opacity: '0.8', lineHeight: '1.6' }}>
                  Immerse yourself in the profound healing power of ancient sound vibrations. Our carefully crafted 
                  instruments create therapeutic resonances that gently restore harmony to your mind, body, and spirit.
                </p>
                
                <div className="row g-4 mb-5">
                  <div className="col-6">
                    <div className="d-flex align-items-start">
                      <div style={{ 
                        background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)',
                        borderRadius: '15px',
                        padding: '15px',
                        marginRight: '15px',
                        fontSize: '1.5rem'
                      }}>🧘‍♀️</div>
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: '#2C3E50' }}>Deep Meditation</h6>
                        <small style={{ color: '#2C3E50', opacity: '0.7' }}>Inner stillness</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-start">
                      <div style={{ 
                        background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)',
                        borderRadius: '15px',
                        padding: '15px',
                        marginRight: '15px',
                        fontSize: '1.5rem'
                      }}>💆‍♀️</div>
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: '#2C3E50' }}>Stress Relief</h6>
                        <small style={{ color: '#2C3E50', opacity: '0.7' }}>Complete relaxation</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-start">
                      <div style={{ 
                        background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)',
                        borderRadius: '15px',
                        padding: '15px',
                        marginRight: '15px',
                        fontSize: '1.5rem'
                      }}>⚡</div>
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: '#2C3E50' }}>Energy Healing</h6>
                        <small style={{ color: '#2C3E50', opacity: '0.7' }}>Vitality restoration</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-start">
                      <div style={{ 
                        background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)',
                        borderRadius: '15px',
                        padding: '15px',
                        marginRight: '15px',
                        fontSize: '1.5rem'
                      }}>🌟</div>
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: '#2C3E50' }}>Chakra Balance</h6>
                        <small style={{ color: '#2C3E50', opacity: '0.7' }}>Energy alignment</small>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="d-flex gap-3 flex-wrap">
                  <a href="/healing-services" className="btn btn-primary btn-lg">
                    <span>🎵 Book Sound Session</span>
                  </a>
                  <a href="#products" className="btn btn-outline-primary">
                    <span>✨ Explore Instruments</span>
                  </a>
                </div>
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
                <a href="/healing-services" className="btn btn-outline-primary">Learn More</a>
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
                <a href="/healing-services" className="btn btn-outline-primary">Learn More</a>
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
                <a href="/healing-services" className="btn btn-outline-primary">Learn More</a>
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