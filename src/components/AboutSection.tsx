import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // ===== DESKTOP: Full cinematic pinned experience =====
        "(min-width: 768px)": function () {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top top',
              end: '+=130%',
              pin: true,
              scrub: 0.6,
            }
          });

          // Entry phase (0 → 0.5)
          scrollTl
            .fromTo('.about-bg-img',
              { scale: 1.12, y: '8vh', opacity: 0.5 },
              { scale: 1.0, y: 0, opacity: 1, ease: 'none' },
              0
            )
            .fromTo('.about-label',
              { opacity: 0, y: -12 },
              { opacity: 1, y: 0, ease: 'none' },
              0.04
            )
            .fromTo('.about-headline',
              { opacity: 0, x: '-10vw', rotateY: 20 },
              { opacity: 1, x: 0, rotateY: 0, ease: 'none' },
              0.06
            )
            .fromTo('.about-body',
              { opacity: 0, x: '8vw' },
              { opacity: 1, x: 0, ease: 'none' },
              0.10
            )
            .fromTo('.about-caption',
              { opacity: 0, y: 16 },
              { opacity: 0.6, y: 0, ease: 'none' },
              0.16
            )
            // Exit phase (0.65 → 1.0)
            .to('.about-headline',
              { opacity: 0, x: '-12vw', ease: 'power2.in' },
              0.65
            )
            .to('.about-body',
              { opacity: 0, x: '6vw', ease: 'power2.in' },
              0.65
            )
            .to('.about-bg-img',
              { scale: 1.08, y: '-6vh', ease: 'power2.in' },
              0.65
            );
        },

        // ===== MOBILE: Simple in-view animation =====
        "(max-width: 767px)": function () {
          gsap.fromTo('.about-mobile-img',
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.8,
              scrollTrigger: {
                trigger: '.about-mobile-img',
                start: 'top 80%',
              }
            }
          );

          gsap.fromTo('.about-mobile-content',
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.8, delay: 0.1,
              scrollTrigger: {
                trigger: '.about-mobile-content',
                start: 'top 80%',
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ===== DESKTOP VERSION: Full Screen Cinematic ===== */}
      <section ref={aboutRef} id="about" className="section-pinned z-20 hidden md:block">
        {/* Background Image */}
        <img
          src="/about-chef.jpg"
          alt="Nosso Chef"
          className="about-bg-img bg-image"
        />
        <div className="overlay-cinematic" />

        {/* Top Label */}
        <div className="about-label absolute top-[6vh] left-1/2 -translate-x-1/2 text-white text-center">
          <p className="micro-label text-[#D4A853] opacity-80">NOSSA HISTÓRIA</p>
          <div className="w-[12vw] h-px bg-[#D4A853]/30 mt-2 mx-auto" />
        </div>

        {/* Left: Headline */}
        <div className="absolute left-[7vw] top-1/2 -translate-y-1/2" style={{ perspective: '800px' }}>
          <h2 className="about-headline headline-section text-white">
            <span className="block text-[clamp(36px,5vw,80px)]">Um Legado</span>
            <span className="block text-[clamp(36px,5vw,80px)]">de Excelência</span>
            <span className="block text-[clamp(36px,5vw,80px)] gold-text">Culinária</span>
          </h2>
        </div>

        {/* Right: Body Text */}
        <div className="about-body absolute left-[56vw] top-1/2 -translate-y-1/2 w-[37vw] text-white">
          <p className="text-base lg:text-lg leading-relaxed text-white/80">
            La Maison nasceu de uma visão simples: criar uma experiência 
            gastronômica inesquecível que combina tradições culinárias autênticas 
            com inovação moderna.
          </p>
          <p className="text-base lg:text-lg leading-relaxed text-white/80 mt-5">
            Fundada em 2015, crescemos de um pequeno estabelecimento familiar 
            para um dos restaurantes mais amados da cidade. Nossa equipe de chefs 
            apaixonados seleciona os melhores ingredientes, elaborando cada prato 
            com atenção meticulosa aos detalhes.
          </p>
          <p className="text-base lg:text-lg leading-relaxed text-white/80 mt-5">
            Cada receita conta uma história — misturando técnicas consagradas 
            com criatividade contemporânea para criar algo verdadeiramente extraordinário.
          </p>
        </div>

        {/* Bottom Caption */}
        <div className="about-caption absolute left-[7vw] bottom-[6vh] text-white">
          <p className="micro-label text-white/50">Fundada em 2015 · São Paulo</p>
        </div>
      </section>

      {/* ===== MOBILE VERSION: Stacked Layout ===== */}
      <section id="about-mobile" className="md:hidden py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-10">
            {/* Image */}
            <div className="about-mobile-img relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/about-chef.jpg"
                  alt="Nosso Chef"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#D4A853]/30 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="about-mobile-content">
              <p className="text-[#D4A853] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                Nossa História
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-6">
                Um Legado de Excelência <span className="gold-text">Culinária</span>
              </h2>

              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  La Maison nasceu de uma visão simples: criar uma experiência gastronômica inesquecível 
                  que combina tradições culinárias autênticas com inovação moderna.
                </p>
                <p>
                  Fundada em 2015, crescemos de um pequeno estabelecimento familiar para um dos 
                  restaurantes mais amados da cidade.
                </p>
                <p>
                  Nossa equipe de chefs apaixonados seleciona os melhores ingredientes, elaborando cada 
                  prato com atenção meticulosa aos detalhes. Cada receita conta uma história, misturando 
                  técnicas consagradas com criatividade contemporânea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
