import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ===== ENTRANCE ANIMATION (auto-play on load) =====
      const entranceTl = gsap.timeline();

      entranceTl
        .fromTo('.hero-bg-img',
          { opacity: 0, scale: 1.08 },
          { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' }
        )
        .fromTo('.hero-welcome',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo('.hero-title-line',
          { opacity: 0, y: 50, rotateX: 35 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo('.hero-subtitle',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo('.hero-ctas',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo('.hero-scroll-indicator',
          { opacity: 0 },
          { opacity: 0.5, duration: 0.8, ease: 'power2.out' },
          '-=0.2'
        )
        .fromTo('.hero-bottom-info',
          { opacity: 0, y: 10 },
          { opacity: 0.7, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        );

      // Only enable pinning on desktop

      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: '+=130%',
              pin: true,
              scrub: 0.6,
            }
          });

          scrollTl
            .fromTo('.hero-title-line, .hero-welcome',
              { opacity: 1, y: 0 },
              { opacity: 0, y: '-18vh', ease: 'power2.in' },
              0.65
            )
            .fromTo('.hero-subtitle, .hero-ctas',
              { opacity: 1, y: 0 },
              { opacity: 0, y: '10vh', ease: 'power2.in' },
              0.65
            )
            .fromTo('.hero-scroll-indicator, .hero-bottom-info',
              { opacity: 0.7 },
              { opacity: 0, ease: 'power2.in' },
              0.6
            )
            .fromTo('.hero-bg-img',
              { scale: 1, y: 0 },
              { scale: 1.1, y: '-8vh', ease: 'power2.in' },
              0.65
            );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <section ref={heroRef} id="hero" className="section-pinned z-10">
        {/* Background Image */}
        <img
          src="/hero-restaurant.jpg"
          alt="Restaurante La Maison"
          className="hero-bg-img bg-image"
        />
        <div className="overlay-cinematic" />

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <p className="hero-welcome micro-label text-[#D4A853] mb-6 tracking-[0.3em]">
            Bem-vindo ao
          </p>

          <h1 className="headline-hero text-white mb-4" style={{ perspective: '800px' }}>
            <span className="hero-title-line block text-[clamp(48px,10vw,120px)]">
              La Maison
            </span>
          </h1>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4A853] to-transparent mb-6 hero-subtitle" />

          <p className="hero-subtitle text-base sm:text-lg lg:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
            Gastronomia requintada, feita com paixão. Onde a arte culinária encontra momentos inesquecíveis.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToMenu} className="btn-primary text-base">
              Peça Online
            </button>
            <button onClick={scrollToContact} className="btn-outline text-base">
              Reservar Mesa
            </button>
          </div>
        </div>

        {/* Bottom Left Info */}
        <div className="hero-bottom-info absolute left-[4vw] bottom-[4vh] text-white hidden md:block">
          <p className="micro-label text-white/50">Rua da Gastronomia, 142 — São Paulo</p>
          <p className="micro-label text-white/50 mt-1">Reservas: (11) 9 8765-4321</p>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer" onClick={scrollToMenu}>
          <div className="flex flex-col items-center text-white/40 animate-bounce-subtle">
            <span className="text-xs uppercase tracking-[0.2em] mb-2 font-mono">Rolar</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>
    </div>
  );
}
