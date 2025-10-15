import React, { useRef } from 'react';
import { performanceImages, performanceImgPositions } from '../constants';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const isMobile = useMediaQuery({ query: '(max-width:1024px)' });
  const sectionRef = useRef(null);

  useGSAP(() => {
    // --- Paragraph fade-in & move-up animation ---
    gsap.fromTo(
      '.content p',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true,
        },
      }
    );

    // --- Stop here for mobile ---
    if (isMobile) return;

    // --- Create scroll-tied timeline for images ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // Set initial states and add animations at time 0
    performanceImgPositions.forEach((pos) => {
      if (pos.id === 'p5') return;

      // Set initial state
      gsap.set(`.${pos.id}`, {
        y: 100,
        opacity: 0,
        position: 'absolute' // Ensure they can be positioned
      });

      // Build target animation vars
      const toVars = { 
        y: 0, 
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
      };
      if (pos.left !== undefined) toVars.left = `${pos.left}%`;
      if (pos.right !== undefined) toVars.right = `${pos.right}%`;
      if (pos.bottom !== undefined) toVars.bottom = `${pos.bottom}%`;
      if (pos.transform !== undefined) toVars.transform = pos.transform;

      // Add animation to timeline at time 0
      tl.to(`.${pos.id}`, toVars, 0);
    });

  }, { scope: sectionRef, dependencies: [isMobile] });

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.id}
            className={image.id}
          />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{' '}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{' '}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;