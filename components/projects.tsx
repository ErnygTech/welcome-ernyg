import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement[]>([]);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const contentRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLDivElement[]>([]);
  const descRef = useRef<HTMLDivElement[]>([]);
  const tagsRef = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLAnchorElement[]>([]);
  const introRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef(null);

  useGSAP(() => {
    const totalSlides = projectsRef.current.length + 1;

    const scrollTween = gsap.to([introRef.current, ...projectsRef.current], {
      xPercent: -100 * (totalSlides - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".projects-container",
        pin: true,
        start: "top top",
        end: () =>
          `+=${
            (document.querySelector(".projects-container") as HTMLDivElement)
              .offsetWidth *
            (totalSlides - 1)
          }`,
        scrub: 1,
        snap: {
          snapTo: 1 / (totalSlides - 1),
          duration: { min: 0.3, max: 0.8 },
          delay: 0.2,
          ease: "power2.out",
          inertia: false,
          directional: window.innerWidth >= 768, // Add directional property based on screen size
        },
        id: "projects-container",
      },
    });

    // Animate intro elements when section is approaching viewport
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-container", // Changed from introRef
        start: "top top+=300", // Start when top of section is 200px from bottom of viewport
        end: "top center",
        toggleActions: "play none none reverse",
      },
    });

    introTl
      .fromTo(
        ".intro-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      )
      .fromTo(
        ".intro-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 0.8, duration: 0.8, ease: "power2.out" },
        "-=0.8",
      )
      .fromTo(
        ".scroll-indicator",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 0.7, duration: 0.8, ease: "power2.out" },
        "-=0.6",
      );

    // Animate projects
    projectsRef.current.forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "left center",
          end: "right center",
          containerAnimation: scrollTween,
          toggleActions: "play none none reverse",
          //   markers: true,
        },
      });

      // Project animations remain the same
      tl.fromTo(
        imagesRef.current[index],
        {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          scale: 1.2,
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: 1.2,
          ease: "power2.inOut",
        },
        0,
      )
        .fromTo(
          titleRef.current[index],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          0.3,
        )
        .fromTo(
          descRef.current[index],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 0.8, duration: 0.8, ease: "power2.out" },
          0.5,
        )
        .fromTo(
          tagsRef.current[index].children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 0.7,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.6,
        )
        .fromTo(
          buttonRef.current[index],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
          0.8,
        );
    });

    // Add bounce animation for the last project's scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });

  return (
    <>
      {/* Intro Slide */}
      <div
        ref={introRef}
        className="w-full h-[100svh] overflow-hidden shrink-0 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center"
      >
        <h1 className="intro-title text-6xl md:text-7xl lg:text-8xl font-bold mb-8 font-mont">
          Projects
        </h1>
        <p className="intro-text text-xl md:text-2xl text-center max-w-2xl opacity-80 mb-12 font-mont">
          Explore our portfolio of innovative digital solutions and creative
          endeavors.
        </p>
        <div className="scroll-indicator flex items-center gap-4 opacity-70">
          <span className="text-lg">Scroll to explore</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      {/* Project Slides */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="w-full h-[100svh] overflow-hidden shrink-0 px-6 md:px-8 lg:px-16 relative"
          ref={(ref) => {
            if (ref) projectsRef.current[index] = ref;
          }}
        >
          <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Image Section */}
            <div
              className="w-full lg:w-1/2 h-[40svh] md:h-[45svh] lg:h-[60svh] relative rounded-2xl overflow-hidden"
              ref={(ref) => {
                if (ref) imagesRef.current[index] = ref;
              }}
            >
              <Image
                src={project.image}
                alt={project.projectName}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content Section */}
            <div
              className="w-full lg:w-1/2 space-y-6 max-w-3xl"
              ref={(ref) => {
                if (ref) contentRef.current[index] = ref;
              }}
            >
              <div
                className="space-y-2"
                ref={(ref) => {
                  if (ref) titleRef.current[index] = ref;
                }}
              >
                <h3 className="text-xl md:text-2xl font-medium opacity-70 font-mont">
                  {project.client}
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mont">
                  {project.projectName}
                </h2>
              </div>

              <p
                className="text-base sm:text-lg md:text-xl opacity-80 font-oxygen tracking-widest"
                ref={(ref) => {
                  if (ref) descRef.current[index] = ref;
                }}
              >
                {project.description}
              </p>

              <div
                className="flex flex-wrap gap-3"
                ref={(ref) => {
                  if (ref) tagsRef.current[index] = ref;
                }}
              >
                {project.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full text-base border border-current opacity-70 font-oxygen"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 rounded-full border border-white bg-white text-black
                         hover:bg-transparent hover:text-white transition-all duration-300 font-oxygen text-base tracking-wide font-semibold uppercase"
                ref={(ref) => {
                  if (ref) buttonRef.current[index] = ref;
                }}
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Scroll Indicators */}
          {index < projects.length - 1 ? (
            // Show "Scroll for next project" for all but last project
            <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 md:right-12 flex items-center gap-3 opacity-60">
              <span className="text-sm font-medium">
                Scroll for next project
              </span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          ) : (
            // Show "Scroll to contact" for the last project
            <div
              ref={scrollIndicatorRef}
              className="absolute bottom-4 sm:bottom-8 md:left-1/2 md:-translate-x-1/2 right-4 md:right-auto flex flex-col items-center gap-2 text-white/60
               transition-opacity duration-300 mb-safe"
            >
              <span className="text-sm sm:text-base font-medium tracking-wider">
                Scroll to blog
              </span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Projects;
