import React from 'react';

const HealingServices = () => {
  const services = [
    {
      id: 1,
      name: "Sound Bath Therapy",
      image: "/src/assets/sound-healing.jpg",
      duration: "60 minutes",
      price: "₹4,500",
      description: "Immerse yourself in healing vibrations from crystal bowls, gongs, and chimes that promote deep relaxation and cellular healing.",
      benefits: ["Stress reduction", "Better sleep", "Mental clarity", "Emotional balance"],
      category: "Sound Healing"
    },
    {
      id: 2,
      name: "Tibetan Singing Bowl Session",
      image: "/src/assets/ayurveda-symbols.jpg",
      duration: "45 minutes",
      price: "₹3,500",
      description: "Experience the ancient power of Tibetan singing bowls that create therapeutic frequencies for chakra balancing.",
      benefits: ["Chakra alignment", "Energy clearing", "Deep meditation", "Pain relief"],
      category: "Sound Healing"
    },
    {
      id: 3,
      name: "Gong Meditation",
      image: "/src/assets/yoga-meditation.jpg",
      duration: "30 minutes",
      price: "₹2,500",
      description: "Traditional gong therapy that creates powerful sound waves for profound healing and transformation.",
      benefits: ["Nervous system reset", "Trauma release", "Spiritual awakening", "Enhanced intuition"],
      category: "Sound Healing"
    },
    {
      id: 4,
      name: "Crystal Sound Healing",
      image: "/src/assets/yoga-rishikesh.jpg",
      duration: "75 minutes",
      price: "₹6,000",
      description: "Combination of crystal bowls and gemstone therapy for multi-dimensional healing experience.",
      benefits: ["Cellular regeneration", "Aura cleansing", "Manifestation boost", "Higher consciousness"],
      category: "Crystal Therapy"
    },
    {
      id: 5,
      name: "Voice Activation Therapy",
      image: "/src/assets/testimonial-1.jpg",
      duration: "50 minutes",
      price: "₹4,000",
      description: "Use your own voice as a healing instrument through guided toning and chanting techniques.",
      benefits: ["Throat chakra opening", "Self-expression", "Confidence building", "Vocal healing"],
      category: "Voice Therapy"
    },
    {
      id: 6,
      name: "Group Sound Circle",
      image: "/src/assets/testimonial-2.jpg",
      duration: "90 minutes",
      price: "₹2,000",
      description: "Join a community sound healing circle for shared healing energy and collective transformation.",
      benefits: ["Community connection", "Shared energy", "Group healing", "Social support"],
      category: "Group Sessions"
    }
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg fixed-top" style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(232, 244, 253, 0.3)'
      }}>
        <div className="container">
          <a className="navbar-brand font-heading fw-bold fs-3" href="/" style={{ color: '#1A2B42' }}>
            <span className="glow">🧘‍♀️ Nityam Wellness</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ borderColor: '#E8EDF5' }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fw-medium" href="/" style={{ color: '#1A2B42' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="/#products" style={{ color: '#1A2B42' }}>Sacred Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium active" href="/healing-services" style={{ color: '#1A2B42' }}>Healing Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="/#services" style={{ color: '#1A2B42' }}>Wellness</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" style={{ 
        background: 'linear-gradient(135deg, rgba(232, 244, 253, 0.6) 0%, rgba(255, 248, 220, 0.4) 50%, rgba(209, 236, 241, 0.6) 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8F4FD' fill-opacity='0.2'%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='51' cy='51' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        minHeight: '60vh',
        paddingTop: '100px'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-2 font-heading fw-bold mb-4" style={{ 
                color: '#1A2B42',
                fontSize: '4rem',
                lineHeight: '1.1'
              }}>
                🎵 Sound Healing Services
              </h1>
              <p className="fs-4 mb-5" style={{ 
                color: '#1A2B42',
                opacity: '0.7',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Discover the transformative power of sound healing through our specialized therapy sessions designed to restore harmony and balance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={service.id} className="col-lg-6 col-md-6">
                <div className="card service-card h-100" style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.8s ease-out both',
                  border: 'none',
                  borderRadius: '25px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 40px rgba(26, 43, 66, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}>
                  <div className="position-relative">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="card-img-top"
                      style={{ 
                        height: '250px',
                        objectFit: 'cover',
                        borderRadius: '25px 25px 0 0'
                      }}
                    />
                    <div className="position-absolute top-0 start-0 m-3">
                      <span className="badge" style={{ 
                        background: 'rgba(255, 255, 255, 0.9)',
                        color: '#1A2B42',
                        borderRadius: '15px',
                        padding: '8px 15px',
                        fontSize: '0.75rem',
                        border: '1px solid #E8EDF5',
                        backdropFilter: 'blur(10px)'
                      }}>{service.category}</span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge" style={{ 
                        background: 'linear-gradient(135deg, #F8FBFF, #E8F4FD)',
                        color: '#1A2B42',
                        borderRadius: '15px',
                        padding: '8px 15px',
                        fontSize: '0.75rem',
                        border: '1px solid #E8EDF5'
                      }}>{service.duration}</span>
                    </div>
                  </div>
                  
                  <div className="card-body p-4">
                    <h4 className="card-title font-heading fw-bold mb-3" style={{ color: '#1A2B42' }}>
                      {service.name}
                    </h4>
                    <p className="card-text mb-4" style={{ color: '#1A2B42', opacity: '0.7', lineHeight: '1.6' }}>
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <h6 className="fw-bold mb-3" style={{ color: '#1A2B42' }}>Benefits:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span key={idx} className="badge" style={{
                            background: 'linear-gradient(135deg, #E8F4FD, #D1ECF1)',
                            color: '#1A2B42',
                            borderRadius: '12px',
                            padding: '6px 12px',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}>
                            ✨ {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold fs-4" style={{ color: '#1A2B42' }}>{service.price}</span>
                      </div>
                      <button className="btn btn-primary">
                        <span>🎵 Book Session</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, rgba(232, 244, 253, 0.4) 0%, rgba(255, 248, 220, 0.3) 50%, rgba(209, 236, 241, 0.4) 100%)'
      }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-4 font-heading fw-bold mb-4" style={{ color: '#1A2B42' }}>
                ✨ Begin Your Healing Journey Today
              </h2>
              <p className="fs-5 mb-5" style={{ color: '#1A2B42', opacity: '0.7' }}>
                Experience the profound transformation that sound healing can bring to your life
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn btn-primary btn-lg">
                  <span>📞 Book Consultation</span>
                </button>
                <a href="/" className="btn btn-outline-primary btn-lg">
                  <span>🏠 Return Home</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 text-center" style={{ background: '#1A2B42', color: 'white' }}>
        <div className="container">
          <p className="mb-0">© 2024 Nityam Wellness. Transforming lives through sacred sound.</p>
        </div>
      </footer>
    </>
  );
};

export default HealingServices;