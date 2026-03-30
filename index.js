const logoutBtn= document.querySelector("#logoutBtn");

// ===============================
// RUN AFTER PAGE LOAD
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  
  handleSignup();
  handleLogin();
  handleForgotPassword();
  loadCourses();
  loadSingleCourse();
  protectDashboard();

  
});


// ===============================
// 🔐 SIGNUP
// ===============================
function handleSignup() {
  const form = document.getElementById("signupForm");
  
  if (!form) return;
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    try {
      const res = await fetch("https://simple-crud-backend-6o49.onrender.com/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      
      const data = await res.json();
      console.log(data.token)
      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }
      
      alert("Signup successful 🎉");
      window.location.href = "login-form.html";
      
    } catch (err) {
      alert("Error occurred");
    }
  });
}


// ===============================
// 🔐 LOGIN
// ===============================
function handleLogin() {
  const form = document.getElementById("loginForm");
  
  if (!form) return;
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
   
    
    try {
      const res = await fetch("https://simple-crud-backend-6o49.onrender.com/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      
      const data = await res.json();
      console.log(data.token)
      
      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }
      
      // ✅ SAVE TOKEN
      localStorage.setItem("token", data.token);
      
      alert("Login successful 🚀");
      window.location.href = "dashboard.html";
      
    } catch (err) {
      alert("Error occurred");
    }
  });
}


// ===============================
// 🔐 FORGOT PASSWORD
// ===============================
function handleForgotPassword() {
  const form = document.getElementById("forgotForm");
  
  if (!form) return;
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    
    try {
      const res = await fetch("https://simple-crud-backend-6o49.onrender.com/api/v1/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        alert(data.message || "Failed");
        return;
      }
      
      alert("Reset link sent 📧");
      
    } catch (err) {
      alert("Error occurred");
    }
  });
}


// ===============================
// 📊 DASHBOARD - LOAD COURSES
// ===============================

// 🔐 PROTECT DASHBOARD
function protectDashboard() {
  const token = localStorage.getItem("token");
  
  const isDashboard = document.body.classList.contains("dashboard-page");
  
  if (isDashboard && !token) {
    alert("Please login first");
    window.location.href = "login-form.html";
  }
}


// 📦 LOAD COURSES
async function loadCourses() {
  const container = document.getElementById("courseContainer"); // ✅ FIXED

  try {
const res = await fetch("https://fakestoreapi.com/products")
const data = await res.json()
console.log(data)

     container.innerHTML = "";
      
     data.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
          <img src="${course.image}">
          <h4>${course.title.substring(0, 40)}...</h4>
          <p class="price">$${course.price}</p>
          <button onclick="viewCourse(${course.id})">View</button>
        `;
        
        container.appendChild(card);
      });
  } catch(err){
      container.innerHTML = "<p>Error loading courses</p>";
}
}

//LOGOUT 
  
  
  
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
  localStorage.removeItem("token");
    
    alert("Logged out successfully");
    
    window.location.href = "login-form.html";
    console.log("logout")
  });


// ===============================
// 📘 COURSE DETAILS
// ===============================
function loadSingleCourse() {
  const container = document.getElementById("courseDetails");
  
  if (!container) return;
  
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  
  if (!id) {
    container.innerHTML = "<p>No course found</p>";
    return;
  }
  
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(course => {
      container.innerHTML = `
        <div class="card">
          <img src="${course.image}">
          <h2>${course.title}</h2>
          <p>${course.description}</p>
          <h3>$${course.price}</h3>
          <button onclick="goBack()">Back</button>
        </div>
      `;
    })
    .catch(() => {
      container.innerHTML = "<p>Error loading course</p>";
    });
}


// ===============================
// 🔁 NAVIGATION FUNCTIONS
// ===============================
function viewCourse(id) {
  window.location.href = `course-details.html?id=${id}`;
}

function goBack() {
  window.location.href = "dashboard.html";
} condition ? true : false


/*function logout() {
  localStorage.removeItem("token");
  alert("Logged out successfully");
  window.location.href = "login.html";
}*/
