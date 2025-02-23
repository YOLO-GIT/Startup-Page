const userName = "Balls"; // Replace with dynamic user data

function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = "Welcome Back, " + userName + "!";

  if (hour < 12) {
    greeting = `Good Morning, ${userName}! ☀️`;
  } else if (hour < 18) {
    greeting = `Good Afternoon, ${userName}! 🌤️`;
  } else {
    greeting = `Good Evening, ${userName}! 🌙`;
  }

  document.getElementById("greeting").textContent = greeting;
}

updateGreeting();
