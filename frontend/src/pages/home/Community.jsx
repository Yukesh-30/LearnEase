import React from 'react'
import { motion } from "framer-motion"

function Community({isDark}) {
    const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Manager, Delhi Food Center",
      content:
          "This system has reduced our food wastage by 40% in just three months. The AI predictions are remarkably accurate and have transformed our operations completely.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Owner, Spice Garden Restaurant",
      content:
          "The inventory management and demand forecasting features have revolutionized how we operate. Our profit margins have increased by 25%. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Director, Gujarat Food Authority",
      content:
          "Emergency mode has been a game-changer during festivals when demand fluctuates dramatically. The redistribution network is incredibly efficient.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
    },
  ]
    
  return (

    <>
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className={`absolute inset-0`}>
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500 to-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-300 to-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              

              <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 font-heading mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Community
              </motion.h2>

              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`text-xl max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                See how government centers and restaurants are transforming their operations and achieving remarkable
                environmental results with FoodSaver's innovative sustainable solutions.
              </motion.p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${isDark ? "bg-gray-900" : "bg-white"}`}>
              {testimonials.map((testimonial, index) => (
                  <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className={`group relative rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-4 overflow-hidden ${isDark ? "bg-gray-800" : "bg-white"}`}
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-8">
                        <div className="relative">
                          <img
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-20 h-20 rounded-2xl mr-6 ring-4 ring-amber-100 group-hover:ring-orange-200 transition-all duration-300 shadow-lg"
                          />
                          
                        </div>
                        <div>
                          <h4 className={`font-black text-gray-900 text-lg mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>{testimonial.name}</h4>
                          <p className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>{testimonial.role}</p>
                        </div>
                      </div>

                     

                      <p className={ `italic leading-relaxed text-lg font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>"{testimonial.content}"</p>
                    </div>

                    {/* Quote Icon */}
                    
                  </motion.div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default Community