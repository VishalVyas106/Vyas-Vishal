const EndFollower = document.getElementsByClassName('EndFollower')[0];
const NewFollower = document.getElementsByClassName('NewFollower')[0];
const elements = document.querySelectorAll(".PageThree"); // Assuming PageThree is the target element
const follower = document.getElementById('follower');
let isInside = false;

// Initialize follower
gsap.set(NewFollower, { scale: 1, opacity: 1, backgroundColor: "red", color: "" });
follower.innerHTML = "";  // Ensure 'follower' exists in the DOM

// Function to move the follower element smoothly towards the mouse position
function moveFollower(event) {
    gsap.to(NewFollower, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5, // Adjust the duration for smoother movement
        ease: "power2.out"
    });
    // Check if the follower is inside any of the containers
    isInside = Array.from(elements).some(element => element === event.target || element.contains(event.target));
    updateFollowerScale();
}

function updateFollowerScale() {
    gsap.to(NewFollower, { scale: isInside ? 1.5 : 1 });  // Adjust scale based on whether the mouse is inside elements
}

document.addEventListener('mousemove', moveFollower);

console.log("vishal");
