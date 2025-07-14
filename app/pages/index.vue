<script>
// Redirect to the simple wake-up page
window.location.href = '/wake-up-page.html'
</script>

<style scoped>
.wake-up-page {
  min-height: 100vh;
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  position: relative;
  z-index: 10;
}

.main-title {
  font-size: clamp(2rem, 8vw, 4rem);
  color: #fff;
  text-shadow: 3px 3px 0px #000;
  margin-bottom: 20px;
  animation: bounce 1s infinite;
  transform-origin: center bottom;
}

.coffee-cup {
  font-size: 60px;
  animation: steam 2s ease-in-out infinite;
  margin: 20px 0;
}

.message {
  background: rgba(255,255,255,0.9);
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0;
  font-size: clamp(1rem, 3vw, 1.3rem);
  color: #333;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  max-width: 90%;
  animation: wiggle 0.5s ease-in-out infinite alternate;
}

.wake-up-btn {
  background: linear-gradient(45deg, #ff4757, #ff3838);
  color: white;
  border: none;
  padding: 20px 40px;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  border-radius: 50px;
  cursor: pointer;
  margin: 10px;
  box-shadow: 0 8px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
  font-weight: bold;
  text-transform: uppercase;
}

.wake-up-btn:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 25px rgba(0,0,0,0.4);
}

.blog-link {
  margin-top: 30px;
}

.blog-btn {
  background: linear-gradient(45deg, #2ecc71, #27ae60);
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  font-size: clamp(1rem, 3vw, 1.2rem);
  border-radius: 25px;
  display: inline-block;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  font-weight: bold;
}

.blog-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.sleepy-detector {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ff4757;
  color: white;
  padding: 10px 15px;
  border-radius: 25px;
  font-size: 14px;
  animation: blink 1s infinite;
  z-index: 100;
  display: none;
}

/* Animations */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}

@keyframes steam {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes wiggle {
  0% { transform: rotate(-2deg); }
  100% { transform: rotate(2deg); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
  
  .wake-up-btn {
    padding: 15px 30px;
    margin: 8px;
  }
  
  .message {
    padding: 15px;
    margin: 15px 0;
  }
}

@media (max-width: 480px) {
  .wake-up-btn {
    padding: 12px 25px;
    margin: 5px;
  }
  
  .message {
    padding: 12px;
    margin: 10px 0;
  }
}
</style>

<style>
/* Global styles for effects */
body.gradient-bg {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7) !important;
  background-size: 400% 400% !important;
  animation: gradientShift 3s ease infinite !important;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.shake-screen {
  animation: shake 0.5s ease-in-out !important;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

.emoji-rain {
  position: fixed;
  top: -50px;
  font-size: 30px;
  animation: fall linear infinite;
  z-index: 1;
  pointer-events: none;
}

@keyframes fall {
  to { transform: translateY(100vh); }
}

.floating-emoji {
  position: fixed;
  font-size: 40px;
  animation: float 3s ease-in-out infinite;
  z-index: 5;
  pointer-events: none;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}
</style>
