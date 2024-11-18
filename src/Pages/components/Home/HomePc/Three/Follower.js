// const elements = document.querySelectorAll(".PageThree");
// const follower = document.getElementById('follower');
// let isInside = false;

// // Initialize follower
// gsap.set(follower, { scale: 1, opacity: 1, backgroundColor: "red", color: "" });
// follower.innerHTML = "";

// // Function to move the follower element smoothly towards the mouse position
// function moveFollower(event) {
//     gsap.to(follower, {
//         x: event.clientX,
//         y: event.clientY,
//         duration: 0.5, // Adjust the duration for smoother movement
//         ease: "power2.out"
//     });
//     // Check if the follower is inside any of the containers
//     isInside = Array.from(elements).some(element => element === event.target || element.contains(event.target));
//     updateFollowerScale();
// }


// // Function to handle mouseenter event
// function handleMouseEnter(event) {
//     isInside = true;
//     updateFollowerScale();
//     // gsap.to(follower, { backgroundColor: event.target.dataset.bgcolor, color: event.target.dataset.textcolor });
//     // follower.innerText = event.target.dataset.text; 
//     gsap.to(follower, { backgroundColor: "red", color: "white" });
//     follower.innerText = "click";
// }

// // Function to handle mouseleave event
// function handleMouseLeave() {
//     isInside = false;
//     updateFollowerScale();
//     gsap.to(follower, { backgroundColor: "red", color: "" });
//     follower.innerText = "";
// }

// // Function to toggle follower state on click
// function handleClick(event) {
//     isInside = !isInside;
//     updateFollowerScale();
// }

// // Function to update follower scale based on whether it's inside or outside any container
// function updateFollowerScale() {
//     gsap.to(follower, {
//         scale: isInside ? 5 : 1,
//         duration: 2, // Adjust the duration for smoother scaling
//         ease: "power2.out"
//     });
// }

// // Add event listeners for mouse movement, mouseenter, mouseleave, and click events to each element
// document.addEventListener('mousemove', moveFollower);
// elements.forEach(element => {
//     element.addEventListener('mouseenter', handleMouseEnter);
//     element.addEventListener('mouseleave', handleMouseLeave);
//     element.addEventListener('click', handleClick);
// });

