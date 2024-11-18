import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Follower = () => {
  const followerRef = useRef(null);
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const follower = followerRef.current;
    const elements = document.querySelectorAll('.MainPart');
    const childrenOne = document.querySelectorAll('.OneLineBox');
    const childrenTwo = document.querySelectorAll('.TwoLineBox');
    const childrenThree = document.querySelectorAll('.ThreeLineBox');
    const childrenFour = document.querySelectorAll('.FourLineBox');

    const moveFollower = (event) => {
      gsap.to(follower, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.8,
        ease: 'power2.out',
      });

      const inside = Array.from(elements).some((element) =>
        element === event.target || element.contains(event.target)
      );
      setIsInside(inside);
      updateFollowerScale(inside);
    };

    const handleMouseEnter = (imageUrl) => {
      setIsInside(true);
      updateFollowerScale(true);
      gsap.to(follower, { backgroundColor: 'red', color: 'white' });
      follower.style.backgroundImage = `url('${imageUrl}')`;
      follower.style.backgroundSize = 'cover';
      follower.style.backgroundPosition = 'center';
      follower.style.backgroundRepeat = 'no-repeat';
    };

    const handleMouseLeave = () => {
      setIsInside(false);
      updateFollowerScale(false);
      gsap.to(follower, { backgroundColor: 'red', color: '' });
      follower.style.backgroundImage = '';
    };

    const updateFollowerScale = (inside) => {
      follower.style.display = inside ? 'flex' : 'none';
      gsap.to(follower, {
        scale: inside ? 5 : 1,
        duration: 2,
        ease: 'power2.out',
      });
    };

    const addListeners = (children, imageUrl) => {
      children.forEach((child) => {
        child.addEventListener('mouseenter', () => handleMouseEnter(imageUrl));
        child.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    addListeners(childrenOne, 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/Naruto-happy-in-Shippuden.jpg');
    addListeners(childrenTwo, 'https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?quality=90&resize=980,654');
    addListeners(childrenThree, 'https://preview.redd.it/is-naruto-a-good-hokage-v0-ajsifk35nr2b1.jpg?width=1080&crop=smart&auto=webp&s=4c6beec03d6d14e63a13d6f4086644f3936ea971');
    addListeners(childrenFour, 'https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?quality=90&resize=980,654');

    document.addEventListener('mousemove', moveFollower);

    elements.forEach((element) => {
      element.addEventListener('mouseenter', () => handleMouseEnter('https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?quality=90&resize=980,654'));
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveFollower);
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', () => handleMouseEnter('https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?quality=90&resize=980,654'));
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      childrenOne.forEach((child) => {
        child.removeEventListener('mouseenter', () => handleMouseEnter('https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/Naruto-happy-in-Shippuden.jpg'));
        child.removeEventListener('mouseleave', handleMouseLeave);
      });
      childrenTwo.forEach((child) => {
        child.removeEventListener('mouseenter', () => handleMouseEnter('https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?quality=90&resize=980,654'));
        child.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      id="follower"
      className="shadow-2xl"
      ref={followerRef}
      style={styles.follower}
    ></div>
  );
};

const styles = {
  follower: {
    position: 'fixed',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'red',
    textAlign: 'center',
    lineHeight: '50px',
    display: 'none',
    zIndex: 10,
    pointerEvents: 'none',
    border: '2px solid black',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
  },
};

export default Follower;
