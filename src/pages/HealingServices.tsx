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
      image: "/src/assets/tibetan-singing-bowl.jpg",
      duration: "45 minutes",
      price: "₹3,500",
      description: "Experience the ancient power of Tibetan singing bowls that create therapeutic frequencies for chakra balancing.",
      benefits: ["Chakra alignment", "Energy clearing", "Deep meditation", "Pain relief"],
      category: "Sound Healing"
    },
    {
      id: 3,
      name: "Panchakarma Detox Program",
      image: "/src/assets/panchakarma.jpg",
      duration: "7 days",
      price: "₹25,000",
      description: "Complete Ayurvedic detoxification program including five traditional therapies for deep cleansing and rejuvenation.",
      benefits: ["Complete detox", "Cellular renewal", "Digestive reset", "Mental clarity"],
      category: "Ayurvedic Healing"
    },
    {
      id: 4,
      name: "Chakra Balancing Therapy",
      image: "/src/assets/chakra-balancing.jpg",
      duration: "90 minutes",
      price: "₹5,500",
      description: "Holistic chakra alignment using crystals, sound frequencies, and energy healing techniques for complete balance.",
      benefits: ["Energy alignment", "Emotional stability", "Spiritual clarity", "Physical wellness"],
      category: "Energy Healing"
    },
    {
      id: 5,
      name: "Meditation Instruments Training",
      image: "/src/assets/meditation-instruments.jpg",
      duration: "2 hours",
      price: "₹3,000",
      description: "Learn to use traditional meditation instruments including singing bowls, bells, and chimes for personal practice.",
      benefits: ["Skill development", "Personal practice", "Mindfulness training", "Inner peace"],
      category: "Training"
    },
    {
      id: 6,
      name: "Holistic Wellness Program",
      image: "/src/assets/holistic-wellness.jpg",
      duration: "30 days",
      price: "₹35,000",
      description: "Comprehensive wellness program combining Ayurveda, yoga, meditation, and sound healing for complete transformation.",
      benefits: ["Complete transformation", "Lifestyle change", "Health optimization", "Spiritual growth"],
      category: "Wellness Programs"
    },
    {
      id: 7,
      name: "Gong Meditation",
      image: "/src/assets/yoga-meditation.jpg",
      duration: "30 minutes",
      price: "₹2,500",
      description: "Traditional gong therapy that creates powerful sound waves for profound healing and transformation.",
      benefits: ["Nervous system reset", "Trauma release", "Spiritual awakening", "Enhanced intuition"],
      category: "Sound Healing"
    },
    {
      id: 8,
      name: "Crystal Sound Healing",
      image: "/src/assets/crystal-healing.jpg",
      duration: "75 minutes",
      price: "₹6,000",
      description: "Combination of crystal bowls and gemstone therapy for multi-dimensional healing experience.",
      benefits: ["Cellular regeneration", "Aura cleansing", "Manifestation boost", "Higher consciousness"],
      category: "Crystal Therapy"
    },
    {
      id: 9,
      name: "Voice Activation Therapy",
      image: "/src/assets/voice-therapy.jpg",
      duration: "50 minutes",
      price: "₹4,000",
      description: "Use your own voice as a healing instrument through guided toning and chanting techniques.",
      benefits: ["Throat chakra opening", "Self-expression", "Confidence building", "Vocal healing"],
      category: "Voice Therapy"
    }
  ];

  const specialPrograms = [
    {
      id: 1,
      title: "Panchakarma Detox Program",
      description: "Panchakarma is the crown jewel of Ayurvedic healing, a comprehensive detoxification and rejuvenation program that cleanses the body at the deepest cellular level. This ancient five-action therapy includes Vamana (therapeutic vomiting), Virechana (purgation), Basti (medicated enemas), Nasya (nasal medication), and Raktamokshana (bloodletting). Our 7-21 day programs are customized based on individual constitution and health needs, providing profound healing and transformation.",
      benefits: ["Complete cellular detox", "Immune system boost", "Mental clarity enhancement", "Digestive system reset", "Stress elimination", "Chronic disease management"],
      image: "/src/assets/panchakarma-rishikesh.jpg"
    },
    {
      id: 2,
      title: "Tibetan Singing Bowls Mastery",
      description: "Discover the ancient art of Tibetan singing bowls, sacred instruments that have been used for meditation and healing for over 2,500 years. Made from seven sacred metals representing celestial bodies, these bowls produce pure harmonic overtones that synchronize brain waves and promote deep healing. Our training covers bowl selection, playing techniques, therapeutic applications, and creating healing sessions for others.",
      benefits: ["Sound healing mastery", "Meditation enhancement", "Stress reduction", "Energy balancing", "Therapeutic skills", "Spiritual awakening"],
      image: "/src/assets/tibetan-bowls.jpg"
    },
    {
      id: 3,
      title: "Sacred Meditation Instruments",
      description: "Learn the traditional use of sacred meditation instruments including crystal bowls, Tibetan bells, chimes, gongs, and didgeridoos. Each instrument carries unique frequencies that affect different aspects of consciousness and healing. Our comprehensive training covers the history, spiritual significance, and practical application of these powerful tools for personal practice and healing others.",
      benefits: ["Instrument mastery", "Frequency healing", "Meditation deepening", "Cultural wisdom", "Healing techniques", "Sound therapy skills"],
      image: "/src/assets/meditation-tools.jpg"
    },
    {
      id: 4,
      title: "Chakra Balancing & Energy Healing",
      description: "Experience profound transformation through our comprehensive chakra balancing program that combines ancient wisdom with modern energy healing techniques. Using crystals, sound frequencies, color therapy, and meditation, we help align your seven energy centers for optimal physical, emotional, and spiritual health. Each session is customized to address specific imbalances and promote holistic wellness.",
      benefits: ["Energy alignment", "Emotional healing", "Physical wellness", "Spiritual growth", "Mental clarity", "Life force enhancement"],
      image: "/src/assets/chakra-healing.jpg"
    },
    {
      id: 5,
      title: "Holistic Wellness Programs",
      description: "Our signature holistic wellness programs integrate the best of Eastern and Western healing modalities for complete mind-body-spirit transformation. Combining Ayurveda, yoga, meditation, sound healing, nutrition, and lifestyle counseling, these intensive programs are designed to create lasting positive changes in your health and consciousness. Available in 7, 14, 21, and 30-day formats.",
      benefits: ["Complete transformation", "Lifestyle optimization", "Health restoration", "Spiritual awakening", "Stress mastery", "Life purpose clarity"],
      image: "/src/assets/wellness-program.jpg"
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
                      <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">
                          <span>📖 More Details</span>
                        </button>
                        <button className="btn btn-primary btn-sm">
                          <span>💳 Buy Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="py-5" style={{ background: 'rgba(248, 250, 252, 0.8)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 font-heading fw-bold mb-4" style={{ color: '#1A2B42' }}>
              🌟 Specialized Wellness Programs
            </h2>
            <p className="fs-5" style={{ color: '#1A2B42', opacity: '0.7', maxWidth: '800px', margin: '0 auto' }}>
              Comprehensive healing programs designed for deep transformation and lasting wellness
            </p>
          </div>
          
          <div className="row g-5">
            {specialPrograms.map((program, index) => (
              <div key={program.id} className="col-lg-12">
                <div className={`row align-items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  <div className="col-lg-6">
                    <div className="pe-lg-4">
                      <h3 className="display-6 font-heading fw-bold mb-4" style={{ color: '#1A2B42' }}>
                        {program.title}
                      </h3>
                      <p className="fs-5 mb-4" style={{ color: '#1A2B42', opacity: '0.8', lineHeight: '1.7' }}>
                        {program.description}
                      </p>
                      <div className="row g-3 mb-4">
                        {program.benefits.map((benefit, idx) => (
                          <div key={idx} className="col-md-6">
                            <div className="d-flex align-items-center">
                              <span className="me-2">✨</span>
                              <span style={{ color: '#1A2B42', fontSize: '0.95rem' }}>{benefit}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="d-flex gap-3 flex-wrap">
                        <button className="btn btn-primary">
                          <span>📞 Learn More</span>
                        </button>
                        <button className="btn btn-outline-primary">
                          <span>💳 Enroll Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="position-relative">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="img-fluid rounded-4 shadow-lg"
                        style={{ 
                          width: '100%',
                          height: '400px',
                          objectFit: 'cover'
                        }}
                      />
                      <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4" style={{
                        background: 'linear-gradient(45deg, rgba(26, 43, 66, 0.1) 0%, rgba(232, 244, 253, 0.1) 100%)'
                      }}></div>
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