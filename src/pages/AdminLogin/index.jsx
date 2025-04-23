import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AdminLoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [particles, setParticles] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  });


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
      console.log("dndn",newParticles)
      setParticles(newParticles);
    };

    generateParticles();
  }, [windowSize]);


  const validateForm = () => {
    const newErrors = {};


    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }


    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

 
    setApiError("");

  
    const isValid = validateForm();

    if (isValid) {
      setIsLoading(true);

      try {
       
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Admin logged in successfully with:", { email, password });

      
        window.location.href = "/dashboard";
      } catch (err) {
        setApiError(err.message || "Login failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
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
    // Background container
    <div className="h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4 overflow-hidden fixed inset-0">
      {/* Fixed background gradient overlay - ensures full coverage */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800" />

      {/* Animated particles background */}
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

      {/* Content container with staggered animation - centered in the page */}
      <div className="flex justify-center items-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md relative z-10"
        >
          {/* Main container with transparent background and blur effect */}
          <motion.div
            className="w-full rounded-2xl overflow-hidden relative bg-purple-900 bg-opacity-30 backdrop-filter backdrop-blur-sm"
            variants={itemVariants}
          >
            {/* Inner particles */}
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
                {/* Logo and heading */}
                <motion.div
                  className="mx-auto w-20 h-20 mb-6 rounded-full bg-indigo-600 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                >
                  <svg
                    className="w-12 h-12 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-3xl font-bold text-white mb-3"
                >
                  Admin Login
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-indigo-200 mb-8 text-lg"
                >
                  Enter your credentials to access the dashboard
                </motion.p>

                {/* Admin login form */}
                <form onSubmit={handleSubmit}>
                  {apiError && (
                    <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-400 border-opacity-30 text-red-100 rounded-lg text-sm">
                      <div className="flex">
                        <svg
                          className="w-5 h-5 mr-2 text-red-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        {apiError}
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-indigo-100 text-sm font-medium mb-2 text-left"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-2 bg-indigo-800 bg-opacity-50 border ${
                          errors.email ? "border-red-400" : "border-indigo-600"
                        } rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200`}
                        placeholder="admin@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-red-400 text-sm text-left">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block text-indigo-100 text-sm font-medium mb-2 text-left"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full px-4 py-2 bg-indigo-800 bg-opacity-50 border ${
                          errors.password
                            ? "border-red-400"
                            : "border-indigo-600"
                        } rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-indigo-300 hover:text-white"
                      >
                        {showPassword ? (
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                      {errors.password && (
                        <p className="mt-1 text-red-400 text-sm text-left">
                          {errors.password}
                        </p>
                      )}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
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
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2"
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
                        <span className="relative z-10">Authenticating...</span>
                      </div>
                    ) : (
                      <>
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        <span className="relative z-10">
                          Login to Dashboard
                        </span>
                      </>
                    )}
                  </motion.button>
                </form>

                <motion.p
                  variants={itemVariants}
                  className="mt-6 text-indigo-200 text-sm"
                >
                  <span>
                    Need help with your admin account?{" "}
                    <a href="#" className="text-white underline">
                      Contact support
                    </a>
                  </span>
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Link back to user login */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-indigo-200 hover:text-white transition-colors duration-200"
            >
              Back to User Login
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
