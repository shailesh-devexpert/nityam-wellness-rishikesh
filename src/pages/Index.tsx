import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import corkYogaMat from "@/assets/cork-yoga-mat.jpg";
import yogaBlocks from "@/assets/yoga-blocks.jpg";
import yogaBelt from "@/assets/yoga-belt.jpg";
import jalnetiPot from "@/assets/jalneti-pot.jpg";
import naturalPerfumes from "@/assets/natural-perfumes.jpg";
import essentialOilsSet from "@/assets/essential-oils-set.jpg";
import spiritualIncense from "@/assets/spiritual-incense.jpg";
import copperWaterBottle from "@/assets/copper-water-bottle.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Nityam Veda",
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
      price: "₹75,500",
      originalPrice: "₹95,000",
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
      price: "₹4,500",
      originalPrice: "₹6,000",
      image: "/lovable-uploads/aedf52bd-5343-4dd1-8358-32385b90ceda.png",
      description: "Beautifully decorated drum with Om symbol (6-inch)",
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
        borderBottom: '1px solid rgba(102, 126, 234, 0.2)'
      }}>
        <div className="container">
          <a className="navbar-brand font-heading fw-bold fs-3" href="#" style={{ 
            background: 'var(--gradient-primary)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <span className="glow">🧘‍♀️ Nityam Veda</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#home" style={{ color: 'var(--primary-text)' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#products" style={{ color: 'var(--primary-text)' }}>Sacred Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#healing" style={{ color: 'var(--primary-text)' }}>Sound Healing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="/about" style={{ color: 'var(--primary-text)' }}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#faq" style={{ color: 'var(--primary-text)' }}>FAQ</a>
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
                    <div className="d-flex gap-2 flex-column flex-sm-row">
                      <button className="btn btn-outline-primary btn-sm" style={{
                        fontSize: '0.8rem',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        transition: 'all 0.2s ease'
                      }}>
                        <span>📖 Details</span>
                      </button>
                      <button className="btn btn-primary btn-sm" style={{
                        fontSize: '0.8rem',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        transition: 'all 0.2s ease'
                      }}>
                        <span>💳 Buy Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Accessories Section */}
      <section id="yoga-accessories" className="py-5" style={{ 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.5) 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-4 font-heading fw-bold mb-3 fade-in-up" style={{ color: '#1A2B42' }}>
                🧘‍♀️ Yoga Accessories
              </h2>
              <p className="fs-5 mb-4" style={{ color: '#1A2B42', opacity: '0.6', maxWidth: '700px', margin: '0 auto' }}>
                Enhance your yoga practice with our premium collection of eco-friendly accessories. Each item is thoughtfully selected to support your journey towards physical wellness and spiritual growth.
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
            <div className="col-lg-3 col-md-6">
              <div className="card product-card h-100" style={{ 
                animation: 'fadeInUp 0.8s ease-out both'
              }}>
                <div className="position-relative">
                  <img 
                    src={corkYogaMat} 
                    alt="Cork Yoga Mat" 
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }} 
                  />
                  <div className="position-absolute top-0 end-0 m-3" style={{ zIndex: '3' }}>
                    <span className="badge" style={{ 
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#1A2B42',
                      borderRadius: '15px',
                      padding: '6px 12px',
                      fontSize: '0.75rem',
                      border: '1px solid #E8EDF5'
                    }}>🌱 Eco-Friendly</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-heading fw-bold" style={{ color: '#1A2B42' }}>Cork Yoga Mat</h5>
                  <p className="card-text flex-grow-1" style={{ color: '#1A2B42', opacity: '0.6' }}>Natural cork surface with excellent grip and antimicrobial properties</p>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning">★★★★★</span>
                      <small className="ms-2" style={{ color: '#1A2B42', opacity: '0.5' }}>(5/5)</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold fs-5" style={{ color: '#1A2B42' }}>₹3,500</span>
                        <small className="text-decoration-line-through ms-2" style={{ opacity: '0.4' }}>₹4,200</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 flex-column flex-sm-row">
                    <button className="btn btn-outline-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>📖 Details</button>
                    <button className="btn btn-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>💳 Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card product-card h-100" style={{ 
                animationDelay: '0.1s',
                animation: 'fadeInUp 0.8s ease-out both'
              }}>
                <div className="position-relative">
                  <img 
                    src={yogaBlocks} 
                    alt="Yoga Blocks Set" 
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }} 
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ 
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#1A2B42',
                      borderRadius: '15px',
                      padding: '6px 12px',
                      fontSize: '0.75rem'
                    }}>✨ Premium</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-heading fw-bold" style={{ color: '#1A2B42' }}>Yoga Blocks (Set of 2)</h5>
                  <p className="card-text flex-grow-1" style={{ color: '#1A2B42', opacity: '0.6' }}>High-density EVA foam blocks for perfect alignment and support</p>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning">★★★★★</span>
                      <small className="ms-2" style={{ color: '#1A2B42', opacity: '0.5' }}>(5/5)</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold fs-5" style={{ color: '#1A2B42' }}>₹1,200</span>
                        <small className="text-decoration-line-through ms-2" style={{ opacity: '0.4' }}>₹1,500</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 flex-column flex-sm-row">
                    <button className="btn btn-outline-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>📖 Details</button>
                    <button className="btn btn-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>💳 Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card product-card h-100" style={{ 
                animationDelay: '0.2s',
                animation: 'fadeInUp 0.8s ease-out both'
              }}>
                <div className="position-relative">
                  <img 
                    src={yogaBelt} 
                    alt="Yoga Belt" 
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }} 
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ 
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#1A2B42',
                      borderRadius: '15px',
                      padding: '6px 12px',
                      fontSize: '0.75rem'
                    }}>🔄 Adjustable</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-heading fw-bold" style={{ color: '#1A2B42' }}>Yoga Belt</h5>
                  <p className="card-text flex-grow-1" style={{ color: '#1A2B42', opacity: '0.6' }}>Durable cotton strap with adjustable buckle for deeper stretches</p>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning">★★★★☆</span>
                      <small className="ms-2" style={{ color: '#1A2B42', opacity: '0.5' }}>(4/5)</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold fs-5" style={{ color: '#1A2B42' }}>₹800</span>
                        <small className="text-decoration-line-through ms-2" style={{ opacity: '0.4' }}>₹1,000</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 flex-column flex-sm-row">
                    <button className="btn btn-outline-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>📖 Details</button>
                    <button className="btn btn-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>💳 Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card product-card h-100" style={{ 
                animationDelay: '0.3s',
                animation: 'fadeInUp 0.8s ease-out both'
              }}>
                <div className="position-relative">
                  <img 
                    src={jalnetiPot} 
                    alt="Jalneti Pot" 
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }} 
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ 
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#1A2B42',
                      borderRadius: '15px',
                      padding: '6px 12px',
                      fontSize: '0.75rem'
                    }}>🧼 Cleansing</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-heading fw-bold" style={{ color: '#1A2B42' }}>Jalneti Pot</h5>
                  <p className="card-text flex-grow-1" style={{ color: '#1A2B42', opacity: '0.6' }}>Traditional ceramic neti pot for nasal cleansing and respiratory health</p>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning">★★★★★</span>
                      <small className="ms-2" style={{ color: '#1A2B42', opacity: '0.5' }}>(5/5)</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold fs-5" style={{ color: '#1A2B42' }}>₹600</span>
                        <small className="text-decoration-line-through ms-2" style={{ opacity: '0.4' }}>₹750</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 flex-column flex-sm-row">
                    <button className="btn btn-outline-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>📖 Details</button>
                    <button className="btn btn-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>💳 Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Products Section */}
      <section id="natural-products" className="py-5" style={{ 
        background: 'linear-gradient(135deg, rgba(232, 244, 253, 0.3) 0%, rgba(255, 248, 220, 0.4) 50%, rgba(209, 236, 241, 0.3) 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-4 font-heading fw-bold mb-3 fade-in-up" style={{ color: '#1A2B42' }}>
                🌿 Natural Products
              </h2>
              <p className="fs-5 mb-4" style={{ color: '#1A2B42', opacity: '0.6', maxWidth: '700px', margin: '0 auto' }}>
                Experience the pure essence of nature with our collection of alcohol-free perfumes, therapeutic essential oils, handcrafted incense sticks infused with spiritual energy, and traditional Ayurvedic copper vessels for holistic wellness.
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
            <div className="col-lg-3 col-md-6">
              <div className="card product-card h-100" style={{ 
                animation: 'fadeInUp 0.8s ease-out both'
              }}>
                <div className="position-relative">
                  <img 
                    src={naturalPerfumes} 
                    alt="Natural Perfumes" 
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }} 
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ 
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#1A2B42',
                      borderRadius: '15px',
                      padding: '6px 12px',
                      fontSize: '0.75rem'
                    }}>🚫 Alcohol-Free</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-heading fw-bold" style={{ color: '#1A2B42' }}>Natural Perfumes</h5>
                  <p className="card-text flex-grow-1" style={{ color: '#1A2B42', opacity: '0.6' }}>Alcohol-free floral and herbal perfumes crafted from pure essential oils</p>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning">★★★★★</span>
                      <small className="ms-2" style={{ color: '#1A2B42', opacity: '0.5' }}>(5/5)</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold fs-5" style={{ color: '#1A2B42' }}>₹1,800</span>
                        <small className="text-decoration-line-through ms-2" style={{ opacity: '0.4' }}>₹2,200</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 flex-column flex-sm-row">
                    <button className="btn btn-outline-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>📖 Details</button>
                    <button className="btn btn-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>💳 Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card product-card h-100" style={{ 
                animationDelay: '0.1s',
                animation: 'fadeInUp 0.8s ease-out both'
              }}>
                <div className="position-relative">
                  <img 
                    src={essentialOilsSet} 
                    alt="Essential Oils Set" 
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }} 
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ 
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#1A2B42',
                      borderRadius: '15px',
                      padding: '6px 12px',
                      fontSize: '0.75rem'
                    }}>🌿 Pure</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-heading fw-bold" style={{ color: '#1A2B42' }}>Essential Oils Set</h5>
                  <p className="card-text flex-grow-1" style={{ color: '#1A2B42', opacity: '0.6' }}>Premium therapeutic grade essential oils for aromatherapy and healing</p>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning">★★★★★</span>
                      <small className="ms-2" style={{ color: '#1A2B42', opacity: '0.5' }}>(5/5)</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold fs-5" style={{ color: '#1A2B42' }}>₹2,500</span>
                        <small className="text-decoration-line-through ms-2" style={{ opacity: '0.4' }}>₹3,000</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 flex-column flex-sm-row">
                    <button className="btn btn-outline-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>📖 Details</button>
                    <button className="btn btn-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>💳 Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card product-card h-100" style={{ 
                animationDelay: '0.2s',
                animation: 'fadeInUp 0.8s ease-out both'
              }}>
                <div className="position-relative">
                  <img 
                    src={spiritualIncense} 
                    alt="Spiritual Incense Sticks" 
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }} 
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ 
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#1A2B42',
                      borderRadius: '15px',
                      padding: '6px 12px',
                      fontSize: '0.75rem'
                    }}>✋ Handmade</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-heading fw-bold" style={{ color: '#1A2B42' }}>Spiritual Incense Sticks</h5>
                  <p className="card-text flex-grow-1" style={{ color: '#1A2B42', opacity: '0.6' }}>Handcrafted essence sticks infused with spiritual energy for meditation</p>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning">★★★★☆</span>
                      <small className="ms-2" style={{ color: '#1A2B42', opacity: '0.5' }}>(4/5)</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold fs-5" style={{ color: '#1A2B42' }}>₹450</span>
                        <small className="text-decoration-line-through ms-2" style={{ opacity: '0.4' }}>₹600</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 flex-column flex-sm-row">
                    <button className="btn btn-outline-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>📖 Details</button>
                    <button className="btn btn-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>💳 Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card product-card h-100" style={{ 
                animationDelay: '0.3s',
                animation: 'fadeInUp 0.8s ease-out both'
              }}>
                <div className="position-relative">
                  <img 
                    src={copperWaterBottle} 
                    alt="Copper Water Bottle" 
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }} 
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ 
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#1A2B42',
                      borderRadius: '15px',
                      padding: '6px 12px',
                      fontSize: '0.75rem'
                    }}>🕉️ Ayurvedic</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-heading fw-bold" style={{ color: '#1A2B42' }}>Copper Water Bottle</h5>
                  <p className="card-text flex-grow-1" style={{ color: '#1A2B42', opacity: '0.6' }}>Traditional Ayurvedic copper vessel for storing and purifying water</p>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning">★★★★★</span>
                      <small className="ms-2" style={{ color: '#1A2B42', opacity: '0.5' }}>(5/5)</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold fs-5" style={{ color: '#1A2B42' }}>₹1,500</span>
                        <small className="text-decoration-line-through ms-2" style={{ opacity: '0.4' }}>₹1,800</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 flex-column flex-sm-row">
                    <button className="btn btn-outline-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>📖 Details</button>
                    <button className="btn btn-primary btn-sm" style={{
                      fontSize: '0.8rem',
                      padding: '6px 12px',
                      borderRadius: '8px'
                    }}>💳 Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Happy Clients Section */}
      <section id="testimonials" className="py-5" style={{ 
        background: 'linear-gradient(135deg, rgba(232, 244, 253, 0.6) 0%, rgba(255, 248, 220, 0.4) 50%, rgba(209, 236, 241, 0.6) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(255, 248, 220, 0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '8%',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(209, 236, 241, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 7s ease-in-out infinite reverse'
        }}></div>

        <div className="container">
          {/* Header Section */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-4 font-heading fw-bold mb-4" style={{ 
                color: '#1A2B42',
                textShadow: '0 2px 4px rgba(26, 43, 66, 0.1)'
              }}>
                😊 Happy Clients Community
              </h2>
              <div className="row justify-content-center mb-4">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap mb-3">
                    <div className="text-center">
                      <div style={{ 
                        fontSize: '3rem', 
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #1A2B42, #4A90E2)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>3600+</div>
                      <div style={{ color: '#1A2B42', fontWeight: '600' }}>Satisfied Clients</div>
                    </div>
                    <div style={{ width: '2px', height: '60px', background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)' }}></div>
                    <div className="text-center">
                      <div style={{ 
                        fontSize: '3rem', 
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #1A2B42, #4A90E2)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>50+</div>
                      <div style={{ color: '#1A2B42', fontWeight: '600' }}>Countries Served</div>
                    </div>
                    <div style={{ width: '2px', height: '60px', background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)' }}></div>
                    <div className="text-center">
                      <div style={{ 
                        fontSize: '3rem', 
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #1A2B42, #4A90E2)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>98%</div>
                      <div style={{ color: '#1A2B42', fontWeight: '600' }}>Success Rate</div>
                    </div>
                  </div>
                  <p className="fs-5 mb-4" style={{ 
                    color: '#1A2B42', 
                    opacity: '0.7',
                    lineHeight: '1.6'
                  }}>
                    Join thousands of individuals who have transformed their lives through our authentic Ayurvedic treatments, 
                    sound healing therapies, and sacred wellness practices. From stress relief to spiritual awakening, 
                    our clients experience profound healing in the heart of Rishikesh.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Client Cards Grid */}
          <div className="row g-4">
            {/* Row 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 hover:scale-105" style={{ 
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 244, 253, 0.5)',
                borderRadius: '20px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="text-center">
                  <div className="mb-3">
                    <img src="/src/assets/testimonial-1.jpg" alt="Sarah" className="rounded-circle" style={{ 
                      width: '80px', 
                      height: '80px', 
                      objectFit: 'cover',
                      border: '3px solid #E8F4FD'
                    }} />
                  </div>
                  <div className="mb-3">
                    {renderStars(5)}
                  </div>
                  <h5 className="font-heading fw-bold" style={{ color: '#1A2B42' }}>Sarah Johnson</h5>
                  <p className="mb-3" style={{ color: '#1A2B42', opacity: '0.6', fontSize: '0.9rem' }}>Yoga Teacher, California</p>
                  <p className="font-accent fst-italic" style={{ color: '#1A2B42', opacity: '0.8' }}>
                    "The sound healing session completely transformed my meditation practice. 
                    The singing bowl creates the most beautiful vibrations."
                  </p>
                  <div className="badge" style={{ 
                    background: 'linear-gradient(135deg, #4CAF50, #66BB6A)',
                    color: 'white',
                    borderRadius: '10px'
                  }}>✓ Verified Purchase</div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 hover:scale-105" style={{ 
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 244, 253, 0.5)',
                borderRadius: '20px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="text-center">
                  <div className="mb-3">
                    <img src="/src/assets/testimonial-2.jpg" alt="Michael" className="rounded-circle" style={{ 
                      width: '80px', 
                      height: '80px', 
                      objectFit: 'cover',
                      border: '3px solid #E8F4FD'
                    }} />
                  </div>
                  <div className="mb-3">
                    {renderStars(5)}
                  </div>
                  <h5 className="font-heading fw-bold" style={{ color: '#1A2B42' }}>Michael Chen</h5>
                  <p className="mb-3" style={{ color: '#1A2B42', opacity: '0.6', fontSize: '0.9rem' }}>Meditation Practitioner, Singapore</p>
                  <p className="font-accent fst-italic" style={{ color: '#1A2B42', opacity: '0.8' }}>
                    "After years of chronic stress, the Panchakarma treatment gave me 
                    a new lease on life. Truly life-changing experience."
                  </p>
                  <div className="badge" style={{ 
                    background: 'linear-gradient(135deg, #2196F3, #42A5F5)',
                    color: 'white',
                    borderRadius: '10px'
                  }}>🌟 Verified Treatment</div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 hover:scale-105" style={{ 
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 244, 253, 0.5)',
                borderRadius: '20px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="text-center">
                  <div className="mb-3">
                    <img src="/src/assets/testimonial-3.jpg" alt="Priya" className="rounded-circle" style={{ 
                      width: '80px', 
                      height: '80px', 
                      objectFit: 'cover',
                      border: '3px solid #E8F4FD'
                    }} />
                  </div>
                  <div className="mb-3">
                    {renderStars(5)}
                  </div>
                  <h5 className="font-heading fw-bold" style={{ color: '#1A2B42' }}>Priya Sharma</h5>
                  <p className="mb-3" style={{ color: '#1A2B42', opacity: '0.6', fontSize: '0.9rem' }}>Wellness Coach, Mumbai</p>
                  <p className="font-accent fst-italic" style={{ color: '#1A2B42', opacity: '0.8' }}>
                    "The authentic instruments and genuine healing approach make this place special. 
                    I've recommended it to all my clients."
                  </p>
                  <div className="badge" style={{ 
                    background: 'linear-gradient(135deg, #FF9800, #FFB74D)',
                    color: 'white',
                    borderRadius: '10px'
                  }}>🔄 Return Customer</div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 hover:scale-105" style={{ 
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 244, 253, 0.5)',
                borderRadius: '20px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="text-center">
                  <div className="mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                      width: '80px', 
                      height: '80px',
                      background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)',
                      margin: '0 auto',
                      fontSize: '2rem'
                    }}>👨‍💼</div>
                  </div>
                  <div className="mb-3">
                    {renderStars(5)}
                  </div>
                  <h5 className="font-heading fw-bold" style={{ color: '#1A2B42' }}>David Wilson</h5>
                  <p className="mb-3" style={{ color: '#1A2B42', opacity: '0.6', fontSize: '0.9rem' }}>Corporate Executive, London</p>
                  <p className="font-accent fst-italic" style={{ color: '#1A2B42', opacity: '0.8' }}>
                    "The chakra balancing session helped me find inner peace amidst my busy corporate life. 
                    I feel more centered and focused than ever."
                  </p>
                  <div className="badge" style={{ 
                    background: 'linear-gradient(135deg, #9C27B0, #BA68C8)',
                    color: 'white',
                    borderRadius: '10px'
                  }}>🧘 Chakra Healing</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 hover:scale-105" style={{ 
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 244, 253, 0.5)',
                borderRadius: '20px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="text-center">
                  <div className="mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                      width: '80px', 
                      height: '80px',
                      background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)',
                      margin: '0 auto',
                      fontSize: '2rem'
                    }}>👩‍🎨</div>
                  </div>
                  <div className="mb-3">
                    {renderStars(5)}
                  </div>
                  <h5 className="font-heading fw-bold" style={{ color: '#1A2B42' }}>Elena Rodriguez</h5>
                  <p className="mb-3" style={{ color: '#1A2B42', opacity: '0.6', fontSize: '0.9rem' }}>Artist & Healer, Barcelona</p>
                  <p className="font-accent fst-italic" style={{ color: '#1A2B42', opacity: '0.8' }}>
                    "The Tibetan singing bowls have become an integral part of my artistic process. 
                    They inspire creativity and bring such peaceful energy."
                  </p>
                  <div className="badge" style={{ 
                    background: 'linear-gradient(135deg, #E91E63, #F06292)',
                    color: 'white',
                    borderRadius: '10px'
                  }}>🎨 Creative Healing</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 hover:scale-105" style={{ 
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 244, 253, 0.5)',
                borderRadius: '20px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="text-center">
                  <div className="mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                      width: '80px', 
                      height: '80px',
                      background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)',
                      margin: '0 auto',
                      fontSize: '2rem'
                    }}>👨‍⚕️</div>
                  </div>
                  <div className="mb-3">
                    {renderStars(5)}
                  </div>
                  <h5 className="font-heading fw-bold" style={{ color: '#1A2B42' }}>Dr. Raj Patel</h5>
                  <p className="mb-3" style={{ color: '#1A2B42', opacity: '0.6', fontSize: '0.9rem' }}>Ayurvedic Doctor, Toronto</p>
                  <p className="font-accent fst-italic" style={{ color: '#1A2B42', opacity: '0.8' }}>
                    "As a practitioner myself, I can vouch for the authenticity and quality. 
                    The holistic wellness programs are excellently designed."
                  </p>
                  <div className="badge" style={{ 
                    background: 'linear-gradient(135deg, #00BCD4, #4DD0E1)',
                    color: 'white',
                    borderRadius: '10px'
                  }}>🩺 Professional Review</div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 hover:scale-105" style={{ 
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 244, 253, 0.5)',
                borderRadius: '20px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="text-center">
                  <div className="mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                      width: '80px', 
                      height: '80px',
                      background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)',
                      margin: '0 auto',
                      fontSize: '2rem'
                    }}>👩‍🏫</div>
                  </div>
                  <div className="mb-3">
                    {renderStars(5)}
                  </div>
                  <h5 className="font-heading fw-bold" style={{ color: '#1A2B42' }}>Anna Kowalski</h5>
                  <p className="mb-3" style={{ color: '#1A2B42', opacity: '0.6', fontSize: '0.9rem' }}>Mindfulness Teacher, Poland</p>
                  <p className="font-accent fst-italic" style={{ color: '#1A2B42', opacity: '0.8' }}>
                    "The meditation instruments collection has enriched my teaching practice tremendously. 
                    My students love the authentic sound healing sessions."
                  </p>
                  <div className="badge" style={{ 
                    background: 'linear-gradient(135deg, #8BC34A, #AED581)',
                    color: 'white',
                    borderRadius: '10px'
                  }}>🏫 Education Partner</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 hover:scale-105" style={{ 
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 244, 253, 0.5)',
                borderRadius: '20px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="text-center">
                  <div className="mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                      width: '80px', 
                      height: '80px',
                      background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)',
                      margin: '0 auto',
                      fontSize: '2rem'
                    }}>👨‍💻</div>
                  </div>
                  <div className="mb-3">
                    {renderStars(5)}
                  </div>
                  <h5 className="font-heading fw-bold" style={{ color: '#1A2B42' }}>James Thompson</h5>
                  <p className="mb-3" style={{ color: '#1A2B42', opacity: '0.6', fontSize: '0.9rem' }}>Tech Entrepreneur, Australia</p>
                  <p className="font-accent fst-italic" style={{ color: '#1A2B42', opacity: '0.8' }}>
                    "The stress relief from sound healing was immediate. I now use the techniques 
                    daily to maintain balance in my high-pressure work environment."
                  </p>
                  <div className="badge" style={{ 
                    background: 'linear-gradient(135deg, #FF5722, #FF8A65)',
                    color: 'white',
                    borderRadius: '10px'
                  }}>💼 Stress Relief</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 hover:scale-105" style={{ 
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 244, 253, 0.5)',
                borderRadius: '20px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="text-center">
                  <div className="mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                      width: '80px', 
                      height: '80px',
                      background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)',
                      margin: '0 auto',
                      fontSize: '2rem'
                    }}>👩‍🎤</div>
                  </div>
                  <div className="mb-3">
                    {renderStars(5)}
                  </div>
                  <h5 className="font-heading fw-bold" style={{ color: '#1A2B42' }}>Maria Santos</h5>
                  <p className="mb-3" style={{ color: '#1A2B42', opacity: '0.6', fontSize: '0.9rem' }}>Sound Therapist, Brazil</p>
                  <p className="font-accent fst-italic" style={{ color: '#1A2B42', opacity: '0.8' }}>
                    "The quality and authenticity of these instruments is unmatched. 
                    They've become the cornerstone of my professional healing practice."
                  </p>
                  <div className="badge" style={{ 
                    background: 'linear-gradient(135deg, #795548, #A1887F)',
                    color: 'white',
                    borderRadius: '10px'
                  }}>🎵 Professional Use</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div style={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 244, 253, 0.5)'
              }}>
                <h4 className="font-heading fw-bold mb-3" style={{ color: '#1A2B42' }}>
                  Join Our Growing Community of Happy Clients
                </h4>
                <p style={{ color: '#1A2B42', opacity: '0.7', marginBottom: '1.5rem' }}>
                  Experience the transformative power of authentic Ayurvedic healing and sound therapy
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="#products" className="btn btn-primary" style={{
                    borderRadius: '12px',
                    padding: '12px 24px'
                  }}>
                    <span>🛒 Shop Sacred Tools</span>
                  </a>
                  <a href="/healing-services" className="btn btn-outline-primary" style={{
                    borderRadius: '12px',
                    padding: '12px 24px'
                  }}>
                    <span>📅 Book Consultation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-5" style={{ 
        background: 'var(--gradient-overlay)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 font-heading fw-bold mb-3" style={{
                background: 'var(--gradient-primary)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                ❓ Frequently Asked Questions
              </h2>
              <p className="fs-5" style={{ color: 'var(--secondary-text)', maxWidth: '600px', margin: '0 auto' }}>
                Everything you need to know about our healing services and sacred instruments
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3" style={{ 
                  background: 'var(--gradient-card)',
                  border: 'none',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-gradient)'
                }}>
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" style={{
                      background: 'transparent',
                      border: 'none',
                      fontWeight: '600',
                      color: 'var(--primary-text)'
                    }}>
                      🎵 What is sound healing and how does it work?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ color: 'var(--secondary-text)' }}>
                      Sound healing uses vibrational frequencies from singing bowls, chimes, and other sacred instruments to 
                      restore balance to your body's energy systems. The therapeutic vibrations help reduce stress, promote 
                      deep relaxation, and facilitate emotional healing through resonance with your chakras.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3" style={{ 
                  background: 'var(--gradient-card)',
                  border: 'none',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-gradient)'
                }}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" style={{
                      background: 'transparent',
                      border: 'none',
                      fontWeight: '600',
                      color: 'var(--primary-text)'
                    }}>
                      🌿 What is Panchakarma treatment?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ color: 'var(--secondary-text)' }}>
                      Panchakarma is a comprehensive Ayurvedic detoxification and rejuvenation program that includes five 
                      therapeutic procedures. It eliminates toxins, balances doshas, strengthens immunity, and promotes 
                      overall wellness through personalized treatments tailored to your constitution.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3" style={{ 
                  background: 'var(--gradient-card)',
                  border: 'none',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-gradient)'
                }}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" style={{
                      background: 'transparent',
                      border: 'none',
                      fontWeight: '600',
                      color: 'var(--primary-text)'
                    }}>
                      ✨ Are your singing bowls authentic?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ color: 'var(--secondary-text)' }}>
                      Yes, all our singing bowls are handcrafted by traditional artisans using ancient techniques. Each bowl 
                      is made from seven sacred metals and tuned to specific chakra frequencies. We provide certificates of 
                      authenticity and detailed information about each instrument's origin and properties.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3" style={{ 
                  background: 'var(--gradient-card)',
                  border: 'none',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-gradient)'
                }}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" style={{
                      background: 'transparent',
                      border: 'none',
                      fontWeight: '600',
                      color: 'var(--primary-text)'
                    }}>
                      📍 Do you offer online consultations?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ color: 'var(--secondary-text)' }}>
                      Yes, we offer virtual Ayurvedic consultations and sound healing guidance sessions. Our experienced 
                      practitioners can provide personalized recommendations, dosha analysis, and teach you how to use 
                      our instruments for maximum healing benefit from anywhere in the world.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3" style={{ 
                  background: 'var(--gradient-card)',
                  border: 'none',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-gradient)'
                }}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" style={{
                      background: 'transparent',
                      border: 'none',
                      fontWeight: '600',
                      color: 'var(--primary-text)'
                    }}>
                      🏔️ Why choose Rishikesh for healing?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ color: 'var(--secondary-text)' }}>
                      Rishikesh is known as the "Yoga Capital of the World" and sits at the foothills of the Himalayas along 
                      the sacred Ganges River. The high vibrational energy, pure environment, and spiritual atmosphere create 
                      the perfect conditions for deep healing and transformation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Keywords and SEO */}
      <footer style={{ 
        background: 'var(--gradient-primary)',
        color: 'var(--light-text)',
        position: 'relative'
      }}>
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="font-heading fw-bold mb-4" style={{
                background: 'var(--gradient-warm)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.5rem'
              }}>
                🕉️ Nityam Wellness
              </h5>
              <p className="mb-4" style={{ lineHeight: '1.6' }}>
                Authentic Ayurvedic treatments, sound healing therapy, and sacred meditation instruments 
                in the spiritual heart of Rishikesh. Experience ancient wisdom for modern wellness.
              </p>
              <div className="d-flex gap-3 mb-4">
                <a href="#" style={{ 
                  color: 'var(--light-text)', 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease'
                }} className="hover:scale-110">📧</a>
                <a href="#" style={{ 
                  color: 'var(--light-text)', 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease'
                }} className="hover:scale-110">📱</a>
                <a href="#" style={{ 
                  color: 'var(--light-text)', 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease'
                }} className="hover:scale-110">🌐</a>
                <a href="#" style={{ 
                  color: 'var(--light-text)', 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease'
                }} className="hover:scale-110">📍</a>
              </div>
            </div>
            
            <div className="col-lg-2">
              <h6 className="fw-bold mb-3" style={{ 
                color: 'var(--light-text)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Healing Services</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/healing-services" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.8)' }}>🎵 Sound Healing Therapy</a></li>
                <li className="mb-2"><a href="/healing-services" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.8)' }}>🌿 Panchakarma Detox</a></li>
                <li className="mb-2"><a href="/healing-services" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.8)' }}>💆‍♀️ Abhyanga Massage</a></li>
                <li className="mb-2"><a href="/healing-services" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.8)' }}>🧘‍♀️ Shirodhara Therapy</a></li>
                <li className="mb-2"><a href="/healing-services" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.8)' }}>🕉️ Yoga & Meditation</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2">
              <h6 className="fw-bold mb-3" style={{ 
                color: 'var(--light-text)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Sacred Instruments</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#products" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.8)' }}>🎶 Tibetan Singing Bowls</a></li>
                <li className="mb-2"><a href="#products" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.8)' }}>🥁 Meditation Drums</a></li>
                <li className="mb-2"><a href="#products" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.8)' }}>🎐 Crystal Chimes</a></li>
                <li className="mb-2"><a href="#products" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.8)' }}>🎹 Harmoniums</a></li>
                <li className="mb-2"><a href="#products" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.8)' }}>🎵 Sacred Kalimbas</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2">
              <h6 className="fw-bold mb-3" style={{ 
                color: 'var(--light-text)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>SEO Keywords</h6>
              <ul className="list-unstyled small">
                <li className="mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Rishikesh Sound Healing</li>
                <li className="mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Ayurveda Treatment Center</li>
                <li className="mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Tibetan Singing Bowls</li>
                <li className="mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Panchakarma Therapy</li>
                <li className="mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Meditation Instruments</li>
                <li className="mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Spiritual Healing India</li>
                <li className="mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Chakra Balancing</li>
                <li className="mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Vibrational Therapy</li>
              </ul>
            </div>
            
            <div className="col-lg-2">
              <h6 className="fw-bold mb-3" style={{ 
                color: 'var(--light-text)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Contact Info</h6>
              <ul className="list-unstyled small">
                <li className="mb-2 d-flex align-items-center">
                  <span className="me-2">📍</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Rishikesh, Uttarakhand, India</span>
                </li>
                 <li className="mb-2 d-flex align-items-center">
                   <span className="me-2">📞</span>
                   <span style={{ color: 'rgba(255,255,255,0.8)' }}>+91-9897579168</span>
                 </li>
                 <li className="mb-2 d-flex align-items-center">
                   <span className="me-2">📧</span>
                   <span style={{ color: 'rgba(255,255,255,0.8)' }}>info@nityamveda.com</span>
                 </li>
                <li className="mb-2 d-flex align-items-center">
                  <span className="me-2">🕐</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>9 AM - 6 PM IST</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span className="me-2">🌐</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Worldwide Shipping</span>
                </li>
              </ul>
            </div>
          </div>
          
          <hr style={{ 
            margin: '3rem 0 2rem', 
            opacity: '0.3',
            background: 'var(--gradient-secondary)'
          }} />
          
          <div className="row">
            <div className="col-lg-8">
               <p className="mb-0 small" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                 © 2024 Nityam Veda - Authentic Ayurvedic Treatment Center & Sound Healing Therapy in Rishikesh. 
                 Specializing in Panchakarma detox, Tibetan singing bowls, meditation instruments, chakra balancing, 
                 and holistic wellness programs. Experience ancient healing wisdom in the yoga capital of the world.
               </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex justify-content-lg-end gap-3">
                <a href="/about" className="text-decoration-none small" style={{ color: 'rgba(255,255,255,0.8)' }}>About Us</a>
                <a href="#faq" className="text-decoration-none small" style={{ color: 'rgba(255,255,255,0.8)' }}>FAQ</a>
                <a href="#" className="text-decoration-none small" style={{ color: 'rgba(255,255,255,0.8)' }}>Privacy</a>
                <a href="#" className="text-decoration-none small" style={{ color: 'rgba(255,255,255,0.8)' }}>Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;