import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const UserLoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  });

  const navigate = useNavigate("./dashboard")


  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      
      const particleCount = Math.min(
        Math.max(
          Math.floor((windowSize.width * windowSize.height) / 20000),
          30
        ),
        100
      );

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
        
          size: Math.random() * (windowSize.width > 1440 ? 15 : 10) + 3,
          duration: Math.random() * 20 + 10,
        
          xOffset: Math.random() * (windowSize.width > 1440 ? 30 : 20),
          yOffset: Math.random() * (windowSize.width > 1440 ? 25 : 15),
        });
      }

      setParticles(newParticles);
    };

    generateParticles();
  }, [windowSize]);

  const handleDiscordLogin = () => {
    setIsLoading(true);
    //redirect to Discord OAuth URL
    // window.location.href = `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=${encodeURIComponent(window.location.origin + '/auth/discord/callback')}&response_type=code&scope=identify%20email`;

  
    setTimeout(() => {
      console.log("Redirecting to Discord login...");
      setIsLoading(false);
      navigate("./dashboard")
    }, 1500);

  };

 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgb(79 70 229 / 0.6)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
    initial: {
      scale: 1,
    },
  };

  return (
   
    <div className="h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4 overflow-hidden fixed inset-0">
    
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800" />

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-20"
            initial={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              left: [
                `${particle.x}%`,
                `${(particle.x + particle.xOffset) % 100}%`,
                `${(particle.x - particle.xOffset / 2) % 100}%`,
                `${particle.x}%`,
              ],
              top: [
                `${particle.y}%`,
                `${(particle.y - particle.yOffset) % 100}%`,
                `${(particle.y + particle.yOffset / 2) % 100}%`,
                `${particle.y}%`,
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: particle.duration,
              ease: "linear",
            }}
          />
        ))}
      </div>

 
      <div className="flex justify-center items-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md relative z-10"
        >
          
          <motion.div
            className="w-full rounded-2xl overflow-hidden relative bg-purple-900 bg-opacity-30 backdrop-filter backdrop-blur-sm"
            variants={itemVariants}
          >
     
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              {particles.slice(0, 30).map((particle, idx) => (
                <motion.div
                  key={`inner-${idx}`}
                  className="absolute rounded-full bg-white opacity-10"
                  initial={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 8 + 2}px`,
                    height: `${Math.random() * 8 + 2}px`,
                  }}
                  animate={{
                    left: [
                      `${Math.random() * 100}%`,
                      `${Math.random() * 100}%`,
                      `${Math.random() * 100}%`,
                      `${Math.random() * 100}%`,
                    ],
                    top: [
                      `${Math.random() * 100}%`,
                      `${Math.random() * 100}%`,
                      `${Math.random() * 100}%`,
                      `${Math.random() * 100}%`,
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: Math.random() * 15 + 15,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            <div className="p-8 sm:p-12 relative z-10">
              <motion.div className="text-center" variants={itemVariants}>
                <motion.div
                  className="mx-auto w-20 h-20 mb-6 rounded-full bg-indigo-600 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                >
                  <svg
                    className="w-12 h-12 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 127.14 96.36"
                  >
                    <path
                      d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-3xl font-bold text-white mb-3"
                >
                  Welcome to the Community
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-indigo-200 mb-8 text-lg"
                >
                  Connect with other members by logging in with your Discord
                  account
                </motion.p>

                <motion.button
                  onClick={handleDiscordLogin}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full bg-indigo-600 text-white rounded-lg py-4 px-6 flex items-center justify-center gap-3 font-medium hover:bg-indigo-700 transition-colors duration-300 relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-50"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />

                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <>
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 127.14 96.36"
                      >
                        <path
                          d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="relative z-10">Login with Discord</span>
                    </>
                  )}
                </motion.button>

                <motion.p
                  variants={itemVariants}
                  className="mt-6 text-indigo-200 text-sm"
                >
                  By logging in, you agree to our{" "}
                  <a href="#" className="text-white underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-white underline">
                    Privacy Policy
                  </a>
                  .
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserLoginPage;
