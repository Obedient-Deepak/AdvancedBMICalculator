# 🧠 Advanced BMI & Health Calculator

An advanced, modern, and beautifully designed **BMI & Health Metrics Calculator** built using **Flask, HTML, CSS (Tailwind), and JavaScript**.
<p align="center"> <img src="assets/Screenshot 2025-07-08 082832.png" width="100%"></img>

---

## 🌟 Why This Project Stands Out

Most BMI calculators just give you a number — **this one tells a full story about your health.**

### ✅ Highlights

✨ **Visually Stunning Interface**: Dynamic animated backgrounds, interactive gauge meters, and modern input fields give it a polished, app-like look.

🧠 **Scientifically Accurate Calculations**: Body Fat %, BMR, and Ideal Weight are calculated using standard health formulas like Deurenberg and Harris-Benedict.

📊 **Dashboard-Like Output**: User gets not just BMI but an entire health analysis — risks, goals, calorie suggestions, tips.

📱 **Responsive & Animated**: Designed to run smoothly across screens with subtle animations for a professional feel.

🎯 **Built for Recruiters**: This app highlights full-stack abilities with focus on usability, user experience, and core health logic.

> 💡 This isn’t just a BMI calculator — it's a **Mini Digital Health Dashboard** built with ❤️ and design in mind.

---

## 📂 Project Structure

```bash
AdvancedBMICalculator/
├── assets/                         # Screen recordings and visual demos
│   ├── Recording 2025-07-08 083013.gif
│   └── Recording 2025-07-08 083241.mp4
├── static/
│   └── script.js                   # Frontend logic & animations
├── templates/
│   └── index.html                 # UI layout using Tailwind CSS
├── app.py                         # Flask backend API
```

---

## 🚀 How It Works

### 🧩 Backend (Flask)

* Handles route `/calculate` to compute BMI and Body Fat %
* Validates inputs and returns structured JSON
* Uses Deurenberg formula for **Body Fat %**:

  * `Male: 1.20 * BMI + 0.23 * Age - 16.2`
  * `Female: 1.20 * BMI + 0.23 * Age - 5.4`

### 🎨 Frontend (HTML + Tailwind CSS + JS)

* Stylish input form with animated components
* On form submission:

  * JavaScript sends data to Flask backend
  * Updates animated **gauge meter**, **BMI cards**, **body fat**, **BMR**, and more
* Smooth result transitions using `.show` animation classes

---

## 💡 Features in Detail

| Feature                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| 🎨 Dynamic Background  | CSS-animated gradient for a modern, clean aesthetic   |
| ⚙️ Gauge Meter         | Conic-gradient gauge with real-time BMI visualization |
| 📈 Body Fat %          | Uses Deurenberg formula based on age and gender       |
| 🔥 BMR & Calorie Needs | Harris-Benedict-based daily energy needs              |
| 🎯 Ideal Weight Range  | Personalized weight range using WHO standards         |
| 📉 Health Risks        | Provides contextual risk analysis based on BMI        |
| 🧠 Tips & Suggestions  | Offers actionable tips for user wellness goals        |

---

## 📸 Demo

> Below is a visual walk-through of how this app works!

### 🖼️ Real GIF Snapshot:

![App Working Demo](assets/Recording%202025-07-08%20083013.gif)

### 📹 Full Interaction (MP4):

[▶ Watch Full Demo Video](assets/Recording%202025-07-08%20083241.mp4)

---

## 🛠️ Technologies Used

* 🐍 **Python (Flask)** – Lightweight backend API
* 🌐 **HTML5 / CSS3** – Structured UI layout
* 🎨 **Tailwind CSS** – For rapid UI development and modern styling
* ⚙️ **Vanilla JavaScript** – Form handling, animations, logic
* ⭐ **Font Awesome** – Beautiful icons to enhance UX

---

## 📦 How to Run

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/AdvancedBMICalculator
cd AdvancedBMICalculator

# 2. Install dependencies
pip install flask

# 3. Run the server
python app.py

# 4. Visit
http://localhost:5000
```

---

## 🤖 Complexity Made Simple

This app is not just a calculator. It merges **frontend animation**, **health science logic**, and **responsive design** into one user-friendly dashboard.

> 🧠 **What This Shows Recruiters:**
>
> * Practical use of health equations and data validation
> * Frontend finesse with animations and clean UX
> * Full-stack capability with API handling
> * Responsive design for real-world product development

---

## 🙋‍♂️ Made With Passion By

**Aayush Kadam**
*Final Year AI & Robotics Enthusiast*
🔗 [GitHub](https://github.com/yourusername) | 📧 [Email](mailto:your.email@example.com)

---

## 📌 To-Do (Future Enhancements)

* [ ] Save BMI history locally (LocalStorage)
* [ ] PDF Export for reports
* [ ] Add voice input for accessibility
* [ ] Connect with smart devices APIs (Fitbit, Apple Health)
