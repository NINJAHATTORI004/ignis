
import cardcover from "../assets/images/playingcard.png";
import image from "../assets/images/arrow.png";
import Modal from "./solutions/page/Modal";

import React, { useState, useEffect, useRef } from 'react'


const cards = [

    { id: 1, backHeading: "Early Dropout Risk Detection", backSubheading: "Uses ML to identify at-risk students early, enabling timely intervention." },
    { id: 2, backHeading: "Personalized Mentorship Programs", backSubheading: "Connects students with mentors for tailored support and guidance." },
    { id: 3, backHeading: "Mental Health Support and Counseling", backSubheading: "Offers confidential counseling and mental health resources." },
    { id: 4, backHeading: "Graphical Student Journey Tracking", backSubheading: "Visualizes student progress and key milestones for data-driven support." },
    { id: 5, backHeading: "Scholarship Guidance and Support", backSubheading: "Provides live scholarship updates and application assistance." },
    { id: 6, backHeading: "AI-Powered Chatbot for 24/7 Support", backSubheading: "Offers instant, round-the-clock assistance tailored to student needs." },
    { id: 7, backHeading: "Anonymity and Privacy in Interactions", backSubheading: "Ensures secure, anonymous interactions for student privacy." },
    { id: 8, backHeading: "Customized Learning and Skill Development Paths", backSubheading: "Delivers personalized learning and skill enhancement programs." },
    { id: 9, backHeading: "Community and Peer Support Networks", backSubheading: "Fosters peer connections and collaborative support systems." },
    { id: 10, backHeading: "Predictive Insights for Educational Institutions", backSubheading: "Empowers institutions with data-driven dropout prevention insights." }

  
  // { id: 1, backHeading: "Lack of Innovation in Growth?", backSubheading: "We drive Growth through tech, data, and strategy." },
  // { id: 2, backHeading: "Weak Brand Identity?", backSubheading: "We craft bold Branding with standout content." },
  // { id: 3, backHeading: "Inefficient Operations?", backSubheading: "We optimize processes with streamlined Strategies." },
  // { id: 4, backHeading: "Outdated Websites & Apps?", backSubheading: "We build modern, high-performance Websites and Apps." },
  // { id: 5, backHeading: "Low Visual Appeal?", backSubheading: "We create stunning visuals with CGI and Animation." },
  // { id: 6, backHeading: "Unclear Marketing Strategy?", backSubheading: "We design data-driven, result-focused Marketing plans." },
  // { id: 7, backHeading: "Poor Data Utilization?", backSubheading: "We boost growth with AI and Data Analytics solutions." },
  // { id: 8, backHeading: "Struggling to Scale in Competitive Markets?", backSubheading: "We Scale brands with innovative tech and insights." },
  // { id: 9, backHeading: "Outdated Content?", backSubheading: "We refresh messaging with engaging, relevant Content." },
  // { id: 10, backHeading: "Need All Services in One Place?", backSubheading: "We offer full-service solutions—from Branding to Technology." },

]  

export default function FlippableCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState([])
  const cardRefs = useRef(cards.map(() => React.createRef()));
  const lastScrollTop = useRef(0)
  const isScrollingUp = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop
      isScrollingUp.current = st < lastScrollTop.current
      lastScrollTop.current = st <= 0 ? 0 : st
    }

    window.addEventListener('scroll', handleScroll, false)
    return () => window.removeEventListener('scroll', handleScroll, false)
  }, [])

  useEffect(() => {
    let timeout

    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingUp.current) {
            timeout = setTimeout(() => {
              setFlippedCards(prev => [...prev, cards[index].id])
            }, index % 5 * 100) // Delay based on odd/even index
          } else if (!entry.isIntersecting && isScrollingUp.current) {
            timeout = setTimeout(() => {
              setFlippedCards(prev => prev.filter(id => id !== cards[index].id))
            }, index % 5 * 100) // Delay based on odd/even index
          }
        },
        { threshold: 0.5 }
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return observer
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <div className="hidden lg:block h-screen w-screen"></div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-left md:text-center">
          Struggling with Challenges in your <br /> university?
        </h1>
        <h1 className="text-2xl font-bold mb-12 text-left md:text-center">
          <span className="text-blue-600 text-3xl">IgnisMentis</span>{"  "}
          Delivers the Best Solutions to Overcome Every Obstacle.
        </h1>

        <div className="grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={cardRefs.current[index]}
              className={` w-64 h-96 m-2 [perspective:1000px] group float mx-auto

               
                `}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div
                className={`absolute w-full h-full transition-all duration-700 [transform-style:preserve-3d] 
                  ${
                    flippedCards.includes(card.id)
                      ? "[transform:rotateY(180deg)]"
                      : ""
                  }`}
              >
                <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={cardcover}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-lg flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="p-4 py-6 bg-black h-2/5 rounded-t-lg">
                    <h2 className="text-2xl font-bold text-start text-white">
                      {card.backHeading}
                    </h2>
                  </div>
                  <div className="p-4 py-8 ">
                    <h2
                      className="text-2xl  font-bold text-right "
                      dangerouslySetInnerHTML={{ __html: card.backSubheading }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32 mb-80">
        <div className="flex flex-col items-center justify-center w-full">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-wide text-center animate-fadeInUp"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Smart Growth starts <span className="text-blue-600">here.</span>
          </h1>

          <img
            src={image}
            alt="Downward arrow"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mt-6 sm:mt-0 animate-bounce"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center w-full space-y-6 sm:space-y-0 sm:space-x-6 mt-8">
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 md:text-3xl lg:text-4xl bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:scale-110 transition-all duration-300 transform hover:shadow-xl"
            onClick={() => setIsModalOpen(true)}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Know More
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}