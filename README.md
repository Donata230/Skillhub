🎓 SkillHub – Learning Dashboard Web App

🚀 Project Overview

SkillHub is a modern, responsive learning dashboard web application built using HTML, CSS, and JavaScript.
It allows users to register, log in, explore courses, and view detailed course information using external APIs.

This project demonstrates real-world frontend development skills including authentication flow, API integration, responsive UI design, and dynamic content rendering.



🌐 Live Demo

🔗 (https://skill-hu.netlify.app/)

📂 GitHub Repository

🔗 (https://github.com/Donata230/Skillhub)



✨ Features

🔐 Authentication System


User Sign Up

User Login

Token-based session (stored in localStorage)

Protected Dashboard (redirects if not logged in)





🏠 Landing Page


Hero section with call-to-action

Features section

About section

Contact form

Footer with social links





📊 Dashboard


Sidebar navigation

Topbar with search and user icon

Dynamic course listing (fetched from API)

Responsive card layout

AI Learning Suggestions section





📘 Course Details Page


Displays full course information

Dynamic content based on selected course

Back navigation to dashboard





🔁 Navigation Flow


Login → Dashboard

Dashboard → Course Details

Logout → Login page





🔗 APIs Used

1. Authentication API

Base URL:
https://simple-crud-backend-6o49.onrender.com





2. Courses API (Fake Store API)

https://fakestoreapi.com/products


Fetch all courses

Fetch single course by ID





🛠️ Technologies Used


HTML5

CSS3 (Custom Styling + Responsive Design)

JavaScript (Vanilla JS)

Fetch API

LocalStorage

Font Awesome Icons





📱 Responsiveness

The application is fully responsive and works across:


📱 Mobile devices

💻 Desktops





🎨 UI/UX Design


Dark modern theme

Clean dashboard layout

Smooth hover effects and transitions

Card-based design system





🔐 Authentication Logic


User logs in via API

Token is stored in localStorage

Dashboard access is protected using token check

Logout removes token and redirects user





📁 Project Structure

📦 SkillHub
 ┣ 📄 index.html (Landing Page)
 ┣ 📄 login-form.html
 ┣ 📄 sign-up.html
 ┣ 📄 dashboard.html
 ┣ 📄 course-details.html
 ┣ 📄 index.css
 ┣ 📄 script.js
 ┗ 📁 assets/




⚠️ Limitations


Forgot password is simulated (backend does not support it)

No real user profile system yet

Courses are from a mock API (not real courses)


👩‍💻 Author

Georgewill Donata Divine
Frontend Developer 



