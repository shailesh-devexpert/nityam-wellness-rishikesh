import React from 'react';

const About = () => {
  return (
    <div style={{ background: 'var(--gradient-hero)', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg fixed-top" style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(102, 126, 234, 0.2)'
      }}>
        <div className="container">
          <a className="navbar-brand font-heading fw-bold fs-3" href="/" style={{ 
            background: 'var(--gradient-primary)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <span>🧘‍♀️ Nityam Wellness</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fw-medium" href="/" style={{ color: 'var(--primary-text)' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#about" style={{ color: 'var(--primary-text)' }}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="/healing-services" style={{ color: 'var(--primary-text)' }}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#contact" style={{ color: 'var(--primary-text)' }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-5" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-3 font-heading fw-bold mb-4" style={{
                background: 'var(--gradient-primary)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                About Nityam Wellness
              </h1>
              <p className="fs-5 mb-4" style={{ color: 'var(--secondary-text)', lineHeight: '1.8' }}>
                Founded in the spiritual heart of Rishikesh, Nityam Wellness embodies the ancient wisdom of Ayurveda, 
                sound healing, and holistic wellness practices. Our journey began with a vision to bridge traditional 
                healing arts with modern wellness needs.
              </p>
              <div className="d-flex gap-3 mb-5">
                <button className="btn btn-primary">
                  <span>✨ Our Services</span>
                </button>
                <button className="btn btn-outline-primary">
                  <span>📞 Contact Us</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src="/src/assets/yoga-rishikesh.jpg"
                  alt="Yoga practice in Rishikesh - Nityam Wellness spiritual healing center"
                  className="img-fluid shadow-lg"
                  style={{ 
                    borderRadius: '30px',
                    filter: 'drop-shadow(0 20px 40px rgba(102, 126, 234, 0.3))'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--gradient-card)',
                  borderRadius: '20px',
                  padding: '15px 20px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🏔️</span>
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--primary-text)', fontSize: '0.9rem' }}>Rishikesh</div>
                      <div style={{ color: 'var(--secondary-text)', fontSize: '0.8rem' }}>Yoga Capital</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-4 font-heading fw-bold mb-5" style={{
                background: 'var(--gradient-secondary)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Our Sacred Journey
              </h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100" style={{ 
                    background: 'var(--gradient-card)',
                    border: 'none',
                    borderRadius: '20px',
                    boxShadow: 'var(--shadow-gradient)'
                  }}>
                    <div className="card-body text-center p-4">
                      <div style={{ 
                        fontSize: '3rem',
                        background: 'var(--gradient-warm)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem'
                      }}>🧘‍♀️</div>
                      <h5 className="font-heading fw-bold mb-3" style={{ color: 'var(--primary-text)' }}>
                        Ancient Wisdom
                      </h5>
                      <p style={{ color: 'var(--secondary-text)' }}>
                        Rooted in 5000+ years of Ayurvedic tradition and sound healing practices passed down through generations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100" style={{ 
                    background: 'var(--gradient-card)',
                    border: 'none',
                    borderRadius: '20px',
                    boxShadow: 'var(--shadow-gradient)'
                  }}>
                    <div className="card-body text-center p-4">
                      <div style={{ 
                        fontSize: '3rem',
                        background: 'var(--gradient-accent)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem'
                      }}>🎵</div>
                      <h5 className="font-heading fw-bold mb-3" style={{ color: 'var(--primary-text)' }}>
                        Sound Healing
                      </h5>
                      <p style={{ color: 'var(--secondary-text)' }}>
                        Authentic Tibetan singing bowls, crystal bowls, and sacred instruments for vibrational therapy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100" style={{ 
                    background: 'var(--gradient-card)',
                    border: 'none',
                    borderRadius: '20px',
                    boxShadow: 'var(--shadow-gradient)'
                  }}>
                    <div className="card-body text-center p-4">
                      <div style={{ 
                        fontSize: '3rem',
                        background: 'var(--gradient-luxury)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem'
                      }}>🌿</div>
                      <h5 className="font-heading fw-bold mb-3" style={{ color: 'var(--primary-text)' }}>
                        Holistic Approach
                      </h5>
                      <p style={{ color: 'var(--secondary-text)' }}>
                        Integrating mind, body, and spirit healing through personalized wellness programs and therapies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 font-heading fw-bold mb-3" style={{
                background: 'var(--gradient-primary)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Our Healing Masters
              </h2>
              <p className="fs-5" style={{ color: 'var(--secondary-text)', maxWidth: '600px', margin: '0 auto' }}>
                Certified practitioners with decades of experience in Ayurveda, yoga, and sound healing therapies.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card" style={{ 
                background: 'var(--gradient-card)',
                border: 'none',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-gradient)',
                overflow: 'hidden'
              }}>
                <img 
                  src="/src/assets/testimonial-1.jpg"
                  alt="Dr. Priya Sharma - Ayurveda Expert"
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="font-heading fw-bold mb-2" style={{ color: 'var(--primary-text)' }}>
                    Dr. Priya Sharma
                  </h5>
                  <p className="text-muted mb-3">Ayurveda & Panchakarma Specialist</p>
                  <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem' }}>
                    25+ years experience in traditional Ayurvedic medicine and detoxification therapies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card" style={{ 
                background: 'var(--gradient-card)',
                border: 'none',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-gradient)',
                overflow: 'hidden'
              }}>
                <img 
                  src="/src/assets/testimonial-2.jpg"
                  alt="Master Rajesh - Sound Healing Expert"
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="font-heading fw-bold mb-2" style={{ color: 'var(--primary-text)' }}>
                    Master Rajesh
                  </h5>
                  <p className="text-muted mb-3">Sound Healing & Meditation Master</p>
                  <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem' }}>
                    Expert in Tibetan singing bowls, crystal healing, and vibrational therapy techniques.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card" style={{ 
                background: 'var(--gradient-card)',
                border: 'none',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-gradient)',
                overflow: 'hidden'
              }}>
                <img 
                  src="/src/assets/testimonial-3.jpg"
                  alt="Yoga Master Ananya - Wellness Coach"
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="font-heading fw-bold mb-2" style={{ color: 'var(--primary-text)' }}>
                    Yoga Master Ananya
                  </h5>
                  <p className="text-muted mb-3">Yoga & Wellness Coach</p>
                  <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem' }}>
                    Certified in Hatha, Vinyasa, and therapeutic yoga with holistic wellness expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img 
                src="/src/assets/yoga-meditation.jpg"
                alt="Meditation and mindfulness practice - Nityam Wellness mission"
                className="img-fluid shadow-lg"
                style={{ 
                  borderRadius: '30px',
                  filter: 'drop-shadow(0 20px 40px rgba(240, 147, 251, 0.3))'
                }}
              />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h2 className="display-4 font-heading fw-bold mb-4" style={{
                background: 'var(--gradient-secondary)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Our Mission & Values
              </h2>
              <p className="fs-5 mb-4" style={{ color: 'var(--secondary-text)', lineHeight: '1.8' }}>
                To create a sanctuary where ancient healing wisdom meets modern wellness needs, 
                fostering transformation and inner peace for every soul that enters our space.
              </p>
              
              <div className="row g-3">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <div style={{ 
                      background: 'var(--gradient-warm)',
                      borderRadius: '15px',
                      padding: '12px',
                      marginRight: '15px',
                      fontSize: '1.2rem'
                    }}>💎</div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: 'var(--primary-text)' }}>Authenticity</h6>
                      <small style={{ color: 'var(--secondary-text)' }}>
                        Preserving traditional healing practices with genuine care and respect
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <div style={{ 
                      background: 'var(--gradient-accent)',
                      borderRadius: '15px',
                      padding: '12px',
                      marginRight: '15px',
                      fontSize: '1.2rem'
                    }}>🌱</div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: 'var(--primary-text)' }}>Growth</h6>
                      <small style={{ color: 'var(--secondary-text)' }}>
                        Supporting personal transformation and spiritual evolution
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <div style={{ 
                      background: 'var(--gradient-luxury)',
                      borderRadius: '15px',
                      padding: '12px',
                      marginRight: '15px',
                      fontSize: '1.2rem'
                    }}>🤝</div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: 'var(--primary-text)' }}>Compassion</h6>
                      <small style={{ color: 'var(--secondary-text)' }}>
                        Providing healing with empathy, understanding, and unconditional love
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;