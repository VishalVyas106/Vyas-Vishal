import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  
  useEffect(() => {
    const NewFollower = document.querySelector('.NewFollower');
    const Footer = document.querySelector('#Footer');
    const BigFollowerElements = document.querySelectorAll('.followerElement');

    // Initialize follower
    gsap.set(NewFollower, { scale: 0, opacity: 1, backgroundColor: 'red' });

    const moveFollower = (event) => {
      gsap.to(NewFollower, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.8, // Smoother and faster movement
        ease: 'power2.out',
        backgroundColor: `hsl(${(event.clientX / window.innerWidth) * 360}, 100%, 50%)`, // Color transition based on mouse position
      });
    };

    document.addEventListener('mousemove', moveFollower);

    const BigupdateFollowerScale = () => {
      gsap.to(NewFollower, { 
        scale: 1, 
        backgroundColor: 'linear-gradient(to right, #ff7e5f, #feb47b)' // Gradient on hover state
      });
    };

    Footer.addEventListener('mouseenter', BigupdateFollowerScale);

    const MakeFollowerBig = () => {
      gsap.to(NewFollower, { 
        scale: 5, 
        backgroundColor: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)' // Multi-color gradient for big follower
      });
    };

    const ResetFollower = () => {
      gsap.to(NewFollower, { 
        scale: 0, 
        backgroundColor: 'linear-gradient(to left, #ff9a9e, #fad0c4)' // Reset color with a softer gradient
      });
    };

    // Loop through each BigFollowerElement and add the event listeners
    BigFollowerElements.forEach((element) => {
      element.addEventListener('mouseenter', MakeFollowerBig);
      element.addEventListener('mouseleave', ResetFollower); // Reset on mouse leave
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', moveFollower);
      Footer.removeEventListener('mouseenter', BigupdateFollowerScale);
      BigFollowerElements.forEach((element) => {
        element.removeEventListener('mouseenter', MakeFollowerBig);
        element.removeEventListener('mouseleave', ResetFollower);
      });
    };
  }, []);

  return (
    <footer id="Footer">
      <div className="FooterOne followerElement">
        <div id="End" className="EndFollower">
          <div className="EndFoll NewFollower"></div>
          End
        </div>

        <div className="EndRight">
          <span>For You</span>
          <p>If you like my work, you can contact me here.</p>
        </div>
      </div>

      <div className="FooterBLast">

        <div className="FooterlastBox">
          
        </div>

      <div className="EndSecond">
        <button>
          <div className="text">
            <span>My</span>
            <span>Gmail</span>
            <span>Account</span>
          </div>
          <div className="clone">
            <span>vyasvishal</span>
            <span>.work</span>
            <span>@gmail.com</span>
          </div>
          <svg
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinejoin="round"
              strokeLinecap="round"
              ></path>
          </svg>
        </button>
      </div>


              </div>



      <div className="FooterLast">
        copyright &copy; By Vyas Vishal
      </div>
    </footer>
  );
};

export default Footer;
