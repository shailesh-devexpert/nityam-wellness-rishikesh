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
import heroAyurvedaSpa from "@/assets/hero-ayurveda-spa.jpg";
import heroMeditationRishikesh from "@/assets/hero-meditation-rishikesh.jpg";
import heroAyurvedicHealing from "@/assets/hero-ayurvedic-healing.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Nityam Veda",
      subtitle: "Ancient Healing Wisdom",
      description: "Experience authentic Ayurvedic treatments and sacred sound healing in the spiritual heart of Rishikesh."
    },
    {
      title: "Sacred Sound Healing",
      subtitle: "Tibetan Singing Bowls",
      description: "Transform your life through the healing frequencies of traditional instruments."
    },
    {
      title: "Spiritual Wellness",
      subtitle: "Mind Body Soul",
      description: "Discover inner peace through time-tested Ayurvedic practices and meditation."
    }
  ];

  const musicProducts = [
    {
      id: 1,
      name: "7 Chakra Singing Bowl Set",
      price: "₹75,500",
      originalPrice: "₹95,000",
      image: copperWaterBottle,
      description: "Complete set of 7 chakra-tuned singing bowls for deep meditation",
      rating: 5
    },
    {
      id: 2,
      name: "Golden Healing Bowl",
      price: "₹8,500",
      originalPrice: "₹10,000",
      image: naturalPerfumes,
      description: "Premium brass singing bowl with rich harmonics",
      rating: 5
    },
    {
      id: 3,
      name: "Sacred Mantra Bowl",
      price: "₹6,500",
      originalPrice: "₹8,000",
      image: essentialOilsSet,
      description: "Hand-engraved bowl with sacred Sanskrit mantras",
      rating: 4
    },
    {
      id: 4,
      name: "Meditation Frame Drum",
      price: "₹4,500",
      originalPrice: "₹5,500",
      image: spiritualIncense,
      description: "Natural hide drum for rhythmic meditation",
      rating: 5
    }
  ];

  const yogaProducts = [
    {
      id: 1,
      name: "Cork Yoga Mat",
      price: "₹3,500",
      originalPrice: "₹4,500",
      image: corkYogaMat,
      description: "Eco-friendly cork yoga mat with superior grip"
    },
    {
      id: 2,
      name: "Yoga Blocks Set",
      price: "₹1,200",
      originalPrice: "₹1,600",
      image: yogaBlocks,
      description: "Premium foam blocks for perfect alignment"
    },
    {
      id: 3,
      name: "Yoga Belt",
      price: "₹450",
      originalPrice: "₹600",
      image: yogaBelt,
      description: "Durable cotton belt for assisted stretching"
    },
    {
      id: 4,
      name: "Jalneti Pot",
      price: "₹350",
      originalPrice: "₹500",
      image: jalnetiPot,
      description: "Traditional copper pot for nasal cleansing"
    }
  ];

  const wellnessProducts = [
    {
      id: 1,
      name: "Natural Perfumes",
      price: "₹1,800",
      originalPrice: "₹2,200",
      image: naturalPerfumes,
      description: "Handcrafted essential oil perfumes"
    },
    {
      id: 2,
      name: "Essential Oils Set",
      price: "₹3,200",
      originalPrice: "₹4,000",
      image: essentialOilsSet,
      description: "Pure therapeutic grade essential oils"
    },
    {
      id: 3,
      name: "Spiritual Incense",
      price: "₹480",
      originalPrice: "₹650",
      image: spiritualIncense,
      description: "Sacred incense sticks for meditation"
    },
    {
      id: 4,
      name: "Copper Water Bottle",
      price: "₹1,250",
      originalPrice: "₹1,600",
      image: copperWaterBottle,
      description: "Ayurvedic copper vessel for health"
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
                <a className="nav-link fw-medium" href="#gallery" style={{ color: 'var(--primary-text)' }}>Gallery</a>
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

      {/* Hero Carousel Section */}
      <div className="container-fluid p-0" id="home">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div 
                className="position-relative"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(139, 69, 19, 0.7), rgba(255, 215, 0, 0.5)), url(${heroAyurvedaSpa})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '100vh',
                  backgroundAttachment: 'fixed'
                }}
              >
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'linear-gradient(45deg, rgba(139, 69, 19, 0.4), rgba(218, 165, 32, 0.3))'}}></div>
                <div className="container position-relative" style={{paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
                  <div className="row align-items-center h-100">
                    <div className="col-lg-6">
                      <div className="text-white">
                        <h1 className="display-4 fw-bold mb-4" style={{fontFamily: '"Playfair Display", serif', textShadow: '2px 2px 4px rgba(0,0,0,0.7)', lineHeight: '1.2'}}>
                          Ancient Ayurvedic Healing in Sacred Rishikesh
                        </h1>
                        <p className="lead mb-4" style={{fontSize: '1.3rem', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', lineHeight: '1.6'}}>
                          Experience transformative healing through traditional Panchakarma treatments, authentic Ayurvedic therapies, and spiritual wellness practices in the yoga capital of the world.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                          <a href="#products" className="btn btn-warning btn-lg px-4 py-3 rounded-pill" style={{boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)', border: 'none', fontSize: '1.1rem', fontWeight: '600'}}>
                            Explore Treatments
                          </a>
                          <a href="/about" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill" style={{borderWidth: '2px', fontSize: '1.1rem', fontWeight: '600'}}>
                            Our Journey
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="text-center">
                        <div className="position-relative d-inline-block">
                          <div className="rounded-circle" style={{
                            width: '300px',
                            height: '300px',
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 215, 0, 0.25))',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                          }}>
                            <span style={{fontSize: '100px', textShadow: '0 0 20px rgba(255, 215, 0, 0.7)'}}>🕉️</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-item">
              <div 
                className="position-relative"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(25, 135, 84, 0.7), rgba(40, 167, 69, 0.5)), url(${heroMeditationRishikesh})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '100vh',
                  backgroundAttachment: 'fixed'
                }}
              >
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'linear-gradient(45deg, rgba(25, 135, 84, 0.4), rgba(40, 167, 69, 0.3))'}}></div>
                <div className="container position-relative" style={{paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
                  <div className="row align-items-center h-100">
                    <div className="col-lg-6 order-lg-2">
                      <div className="text-white">
                        <h1 className="display-4 fw-bold mb-4" style={{fontFamily: '"Playfair Display", serif', textShadow: '2px 2px 4px rgba(0,0,0,0.7)', lineHeight: '1.2'}}>
                          Sacred Sound Healing & Meditation
                        </h1>
                        <p className="lead mb-4" style={{fontSize: '1.3rem', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', lineHeight: '1.6'}}>
                          Discover the transformative power of Tibetan singing bowls, crystal healing, and meditation practices by the sacred Ganges river in the spiritual heart of the Himalayas.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                          <a href="#gallery" className="btn btn-success btn-lg px-4 py-3 rounded-pill" style={{boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)', border: 'none', fontSize: '1.1rem', fontWeight: '600'}}>
                            View Gallery
                          </a>
                          <a href="#healing" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill" style={{borderWidth: '2px', fontSize: '1.1rem', fontWeight: '600'}}>
                            Sound Healing
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                      <div className="text-center">
                        <div className="position-relative d-inline-block">
                          <div className="rounded-circle" style={{
                            width: '300px',
                            height: '300px',
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(40, 167, 69, 0.25))',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                          }}>
                            <span style={{fontSize: '100px', textShadow: '0 0 20px rgba(40, 167, 69, 0.7)'}}>🧘‍♀️</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-item">
              <div 
                className="position-relative"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(102, 16, 242, 0.7), rgba(149, 76, 233, 0.5)), url(${heroAyurvedicHealing})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '100vh',
                  backgroundAttachment: 'fixed'
                }}
              >
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'linear-gradient(45deg, rgba(102, 16, 242, 0.4), rgba(149, 76, 233, 0.3))'}}></div>
                <div className="container position-relative" style={{paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
                  <div className="row align-items-center h-100">
                    <div className="col-lg-12 text-center">
                      <div className="text-white">
                        <h1 className="display-3 fw-bold mb-4" style={{fontFamily: '"Playfair Display", serif', textShadow: '2px 2px 4px rgba(0,0,0,0.7)', lineHeight: '1.2'}}>
                          Transform Your Life Through Ancient Wisdom
                        </h1>
                        <p className="lead mb-5" style={{fontSize: '1.4rem', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto'}}>
                          Join thousands who have discovered inner peace, physical healing, and spiritual awakening through our authentic Ayurvedic treatments and yoga practices in the sacred land of Rishikesh.
                        </p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                          <a href="#gallery" className="btn btn-primary btn-lg px-5 py-3 rounded-pill" style={{background: 'linear-gradient(45deg, #6610f2, #954ce9)', border: 'none', boxShadow: '0 4px 15px rgba(102, 16, 242, 0.4)', fontSize: '1.1rem', fontWeight: '600'}}>
                            Begin Your Journey
                          </a>
                          <a href="/healing-services" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill" style={{borderWidth: '2px', fontSize: '1.1rem', fontWeight: '600'}}>
                            Book Consultation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="py-5" style={{ 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(232, 244, 253, 0.3) 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ 
              color: 'var(--primary)',
              fontFamily: '"Playfair Display", serif'
            }}>
              Sacred Wellness Collection
            </h2>
            <p className="lead" style={{ color: 'var(--text-secondary)' }}>
              Discover authentic healing instruments and wellness products from the Himalayas
            </p>
          </div>

          {/* Sacred Sound Healing Instruments */}
          <div className="mb-5">
            <h3 className="h2 fw-bold mb-4 text-center" style={{ color: 'var(--primary)' }}>
              🎵 Sacred Sound Healing Instruments
            </h3>
            <div className="row g-4">
              {musicProducts.map((product, index) => (
                <div key={product.id} className="col-lg-3 col-md-6">
                  <div 
                    className="card h-100 border-0 hover-scale" 
                    style={{
                      background: 'var(--gradient-card)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-elegant)',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    <div className="position-relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        style={{
                          width: '100%',
                          height: '250px',
                          objectFit: 'cover'
                        }}
                      />
                      <div className="position-absolute top-3 end-3">
                        <span className="badge" style={{
                          background: 'var(--gradient-warm)',
                          fontSize: '0.9rem',
                          padding: '8px 12px',
                          borderRadius: '20px'
                        }}>
                          {renderStars(product.rating)}
                        </span>
                      </div>
                      <div className="position-absolute top-3 start-3">
                        <span className="badge bg-success" style={{
                          fontSize: '0.8rem',
                          padding: '6px 10px',
                          borderRadius: '15px'
                        }}>
                          AUTHENTIC
                        </span>
                      </div>
                    </div>
                    
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-2" style={{ color: 'var(--primary-text)' }}>
                        {product.name}
                      </h5>
                      <p className="small mb-3" style={{ color: 'var(--secondary-text)' }}>
                        {product.description}
                      </p>
                      
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <span className="h5 fw-bold me-2" style={{ color: 'var(--accent)' }}>
                            {product.price}
                          </span>
                          <small className="text-decoration-line-through" style={{ color: 'var(--text-muted)' }}>
                            {product.originalPrice}
                          </small>
                        </div>
                        <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">
                          SALE
                        </span>
                      </div>
                      
                      <div className="d-flex gap-2">
                        <button className="btn flex-fill" style={{
                          background: 'var(--gradient-primary)',
                          border: 'none',
                          color: 'white',
                          borderRadius: '15px',
                          fontWeight: '600',
                          padding: '12px',
                          boxShadow: 'var(--shadow-primary)'
                        }}>
                          Add to Cart
                        </button>
                        <button className="btn btn-outline-primary" style={{
                          borderRadius: '15px',
                          padding: '12px 16px',
                          border: '2px solid var(--primary)'
                        }}>
                          ❤️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Yoga Accessories */}
          <div className="mb-5">
            <h3 className="h2 fw-bold mb-4 text-center" style={{ color: 'var(--primary)' }}>
              🧘‍♀️ Premium Yoga & Wellness Accessories
            </h3>
            <div className="row g-4">
              {yogaProducts.map((product, index) => (
                <div key={product.id} className="col-lg-3 col-md-6">
                  <div 
                    className="card h-100 border-0 hover-scale" 
                    style={{
                      background: 'var(--gradient-card)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-elegant)',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    <div className="position-relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        style={{
                          width: '100%',
                          height: '250px',
                          objectFit: 'cover'
                        }}
                      />
                      <div className="position-absolute top-3 start-3">
                        <span className="badge bg-info" style={{
                          fontSize: '0.8rem',
                          padding: '6px 10px',
                          borderRadius: '15px'
                        }}>
                          ECO-FRIENDLY
                        </span>
                      </div>
                    </div>
                    
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-2" style={{ color: 'var(--primary-text)' }}>
                        {product.name}
                      </h5>
                      <p className="small mb-3" style={{ color: 'var(--secondary-text)' }}>
                        {product.description}
                      </p>
                      
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <span className="h5 fw-bold me-2" style={{ color: 'var(--accent)' }}>
                            {product.price}
                          </span>
                          <small className="text-decoration-line-through" style={{ color: 'var(--text-muted)' }}>
                            {product.originalPrice}
                          </small>
                        </div>
                        <span className="badge bg-success text-white px-3 py-2 rounded-pill">
                          25% OFF
                        </span>
                      </div>
                      
                      <div className="d-flex gap-2">
                        <button className="btn flex-fill" style={{
                          background: 'var(--gradient-secondary)',
                          border: 'none',
                          color: 'white',
                          borderRadius: '15px',
                          fontWeight: '600',
                          padding: '12px',
                          boxShadow: 'var(--shadow-secondary)'
                        }}>
                          Add to Cart
                        </button>
                        <button className="btn btn-outline-secondary" style={{
                          borderRadius: '15px',
                          padding: '12px 16px',
                          border: '2px solid var(--secondary)'
                        }}>
                          ❤️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ayurvedic Wellness Products */}
          <div className="mb-5">
            <h3 className="h2 fw-bold mb-4 text-center" style={{ color: 'var(--primary)' }}>
              🌿 Authentic Ayurvedic Wellness Products
            </h3>
            <div className="row g-4">
              {wellnessProducts.map((product, index) => (
                <div key={product.id} className="col-lg-3 col-md-6">
                  <div 
                    className="card h-100 border-0 hover-scale" 
                    style={{
                      background: 'var(--gradient-card)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-elegant)',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    <div className="position-relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        style={{
                          width: '100%',
                          height: '250px',
                          objectFit: 'cover'
                        }}
                      />
                      <div className="position-absolute top-3 start-3">
                        <span className="badge bg-warning text-dark" style={{
                          fontSize: '0.8rem',
                          padding: '6px 10px',
                          borderRadius: '15px'
                        }}>
                          PURE & NATURAL
                        </span>
                      </div>
                    </div>
                    
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-2" style={{ color: 'var(--primary-text)' }}>
                        {product.name}
                      </h5>
                      <p className="small mb-3" style={{ color: 'var(--secondary-text)' }}>
                        {product.description}
                      </p>
                      
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <span className="h5 fw-bold me-2" style={{ color: 'var(--accent)' }}>
                            {product.price}
                          </span>
                          <small className="text-decoration-line-through" style={{ color: 'var(--text-muted)' }}>
                            {product.originalPrice}
                          </small>
                        </div>
                        <span className="badge bg-primary text-white px-3 py-2 rounded-pill">
                          LIMITED
                        </span>
                      </div>
                      
                      <div className="d-flex gap-2">
                        <button className="btn flex-fill" style={{
                          background: 'var(--gradient-warm)',
                          border: 'none',
                          color: 'white',
                          borderRadius: '15px',
                          fontWeight: '600',
                          padding: '12px',
                          boxShadow: 'var(--shadow-warm)'
                        }}>
                          Add to Cart
                        </button>
                        <button className="btn btn-outline-warning" style={{
                          borderRadius: '15px',
                          padding: '12px 16px',
                          border: '2px solid var(--warning)'
                        }}>
                          ❤️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a href="#gallery" className="btn btn-primary btn-lg px-5 py-3 rounded-pill" style={{
              background: 'var(--gradient-primary)',
              border: 'none',
              boxShadow: 'var(--shadow-elegant)',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              View Full Collection
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-5" style={{
        background: 'linear-gradient(135deg, var(--background-primary), var(--background-secondary))'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{
              color: 'var(--primary)',
              fontFamily: '"Playfair Display", serif'
            }}>
              Sacred Healing Gallery
            </h2>
            <p className="lead" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Explore our authentic collection of sacred healing instruments, Ayurvedic products, and spiritual wellness tools from the sacred lands of Rishikesh
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item position-relative overflow-hidden rounded-4 shadow-lg hover-scale" style={{
                height: '300px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <img 
                  src={heroAyurvedaSpa} 
                  alt="Sacred Tibetan Singing Bowls Collection"
                  className="w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end" style={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                }}>
                  <div className="p-4 text-white">
                    <h5 className="fw-bold mb-2">Ayurvedic Spa & Healing Center</h5>
                    <p className="mb-0 small">Sacred healing space with traditional Ayurvedic setup</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="gallery-item position-relative overflow-hidden rounded-4 shadow-lg hover-scale" style={{
                height: '300px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <img 
                  src={heroMeditationRishikesh} 
                  alt="Meditation by Ganges River in Rishikesh"
                  className="w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end" style={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                }}>
                  <div className="p-4 text-white">
                    <h5 className="fw-bold mb-2">Sacred Rishikesh Meditation</h5>
                    <p className="mb-0 small">Peaceful meditation by the holy Ganges river</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="gallery-item position-relative overflow-hidden rounded-4 shadow-lg hover-scale" style={{
                height: '300px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <img 
                  src={heroAyurvedicHealing} 
                  alt="Traditional Ayurvedic Healing Session"
                  className="w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end" style={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                }}>
                  <div className="p-4 text-white">
                    <h5 className="fw-bold mb-2">Ayurvedic Healing Therapy</h5>
                    <p className="mb-0 small">Traditional healing with herbal oils and sacred instruments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="gallery-item position-relative overflow-hidden rounded-4 shadow-lg hover-scale" style={{
                height: '300px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <img 
                  src={corkYogaMat} 
                  alt="Premium Yoga Equipment Collection"
                  className="w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end" style={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                }}>
                  <div className="p-4 text-white">
                    <h5 className="fw-bold mb-2">Yoga Equipment Collection</h5>
                    <p className="mb-0 small">Premium eco-friendly yoga accessories and tools</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="gallery-item position-relative overflow-hidden rounded-4 shadow-lg hover-scale" style={{
                height: '300px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <img 
                  src={naturalPerfumes} 
                  alt="Natural Essential Oils and Perfumes"
                  className="w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end" style={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                }}>
                  <div className="p-4 text-white">
                    <h5 className="fw-bold mb-2">Ayurvedic Aromatherapy</h5>
                    <p className="mb-0 small">Pure essential oils and natural perfumes for healing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="gallery-item position-relative overflow-hidden rounded-4 shadow-lg hover-scale" style={{
                height: '300px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <img 
                  src={copperWaterBottle} 
                  alt="Traditional Copper Healing Vessels"
                  className="w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end" style={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                }}>
                  <div className="p-4 text-white">
                    <h5 className="fw-bold mb-2">Sacred Copper Vessels</h5>
                    <p className="mb-0 small">Traditional copper instruments for Ayurvedic water therapy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/about" className="btn btn-primary btn-lg px-5 py-3 rounded-pill" style={{
              background: 'var(--gradient-primary)',
              border: 'none',
              boxShadow: 'var(--shadow-elegant)',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Visit Our Sacred Space
            </a>
          </div>
        </div>
      </section>

      {/* Sound Healing Section */}
      <section id="healing" className="py-5" style={{
        background: 'var(--gradient-primary)',
        color: 'var(--light-text)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{
              fontFamily: '"Playfair Display", serif'
            }}>
              Sacred Sound Healing Experience
            </h2>
            <p className="lead" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Transform your life through the ancient healing power of sound vibration and sacred instruments
            </p>
          </div>

          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h3 className="h2 fw-bold mb-4">The Science of Sound Healing</h3>
              <p className="mb-4">
                Sound healing is an ancient practice that uses vibrational frequencies to restore harmony to the body, mind, and spirit. 
                Our authentic Tibetan singing bowls, crystal chimes, and sacred instruments create therapeutic vibrations that:
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-3 flex-shrink-0">🎵</span>
                  <div>
                    <strong>Balance Chakras:</strong> Each instrument is tuned to specific frequencies that resonate with your energy centers
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-3 flex-shrink-0">🧘‍♀️</span>
                  <div>
                    <strong>Reduce Stress:</strong> Sound vibrations activate the parasympathetic nervous system, promoting deep relaxation
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-3 flex-shrink-0">💫</span>
                  <div>
                    <strong>Enhance Meditation:</strong> Sacred sounds help quiet the mind and achieve deeper states of consciousness
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-3 flex-shrink-0">🌟</span>
                  <div>
                    <strong>Promote Healing:</strong> Vibrational therapy supports cellular regeneration and emotional release
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div className="position-relative d-inline-block">
                  <div 
                    className="rounded-circle mx-auto shadow-lg" 
                    style={{
                      width: '400px',
                      height: '400px',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div className="text-center">
                      <span style={{ fontSize: '120px', opacity: '0.8' }}>🎶</span>
                      <div className="mt-3">
                        <p className="fw-bold mb-0">Sacred Vibrations</p>
                        <p className="small mb-0">432 Hz Healing Frequency</p>
                      </div>
                    </div>
                    
                    <div className="position-absolute" style={{ top: '20%', left: '15%', animationDelay: '0s' }}>
                      <span style={{ fontSize: '30px', opacity: '0.6' }}>🕉️</span>
                    </div>
                    <div className="position-absolute" style={{ top: '30%', right: '20%', animationDelay: '1s' }}>
                      <span style={{ fontSize: '25px', opacity: '0.5' }}>🔔</span>
                    </div>
                    <div className="position-absolute" style={{ bottom: '25%', left: '20%', animationDelay: '2s' }}>
                      <span style={{ fontSize: '35px', opacity: '0.7' }}>🎵</span>
                    </div>
                    <div className="position-absolute" style={{ bottom: '20%', right: '15%', animationDelay: '0.5s' }}>
                      <span style={{ fontSize: '28px', opacity: '0.6' }}>✨</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/healing-services" className="btn btn-warning btn-lg px-5 py-3 rounded-pill me-3" style={{
              boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Book Sound Healing Session
            </a>
            <a href="#products" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill" style={{
              borderWidth: '2px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Shop Instruments
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-5" style={{
        background: 'linear-gradient(135deg, var(--background-primary), var(--background-secondary))'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{
              color: 'var(--primary)',
              fontFamily: '"Playfair Display", serif'
            }}>
              Frequently Asked Questions
            </h2>
            <p className="lead" style={{ color: 'var(--text-secondary)' }}>
              Everything you need to know about our Ayurvedic treatments and sacred instruments
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
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
                      🏔️ Why choose Rishikesh for healing treatments?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ color: 'var(--secondary-text)' }}>
                      Rishikesh is known as the "Yoga Capital of the World" and sits at the foothills of the Himalayas beside 
                      the sacred Ganges River. The pure mountain air, spiritual energy, and ancient traditions create an ideal 
                      environment for healing and transformation that cannot be replicated elsewhere.
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
                      🎶 How do I choose the right singing bowl?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ color: 'var(--secondary-text)' }}>
                      Choose a singing bowl based on your intention and chakra focus. Each bowl resonates at specific frequencies 
                      that correspond to different energy centers. We provide detailed guidance and can help you select the perfect 
                      bowl for your healing journey through personal consultation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
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
                WebkitTextFillColor: 'transparent'
              }}>
                🧘‍♀️ Nityam Veda
              </h5>
              <p className="mb-4" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                Authentic Ayurvedic Treatment Center & Sound Healing Sanctuary in the sacred city of Rishikesh. 
                Experience ancient healing wisdom through traditional Panchakarma, sacred sound therapy, and spiritual wellness practices.
              </p>
              <div className="d-flex gap-3">
                <a href="#" style={{ 
                  color: 'var(--light-text)', 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease'
                }} className="hover:scale-110">📘</a>
                <a href="#" style={{ 
                  color: 'var(--light-text)', 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease'
                }} className="hover:scale-110">📷</a>
                <a href="#" style={{ 
                  color: 'var(--light-text)', 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease'
                }} className="hover:scale-110">🐦</a>
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