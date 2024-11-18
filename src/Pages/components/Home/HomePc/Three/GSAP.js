// gsap.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Function to animate the footer with GSAP and ScrollTrigger
export const animateFooter = () => {
//   gsap.fromTo('.Footer', 
//     { opacity: 0, y: 100 },
//     {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       scrollTrigger: {
//         trigger: '.End',
//         start: '-50% 80%', // Animation starts when the top of the element is 80% from the top of the viewport
//         end: 'bottom 60%', // Animation ends when the bottom of the element is 60% from the top of the viewport
//         scrub: true, // Smooths the animation based on scroll position
//         markers: true, // Shows start and end markers (for debugging)
//       },
//     }
//   );

    gsap.from(".End",{
        y: -200,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".End",
            start: "-50% 80%",
            end: "bottom 60%",
            scrub: true,
            markers: true,
        },
    }

    );
    }



// };

// Function to animate elements with the class .OpAnimetion
export const OpAnimation = () => {
  gsap.from('.OpAnimetion', {
    opacity: 1,
    stagger: {
      amount: 1,
      from: 'start',
    },
    duration: 1,
  });
};
