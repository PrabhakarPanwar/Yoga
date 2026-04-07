import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import personSitting from "../assets/personSitting.jpg"
import womenYoga from "../assets/womenYoga.jpg"
import womenYoga2 from "../assets/womenYoga2.jpg"
import { shubhPic } from '../assets/product.js'

function YogaRetreat() {
  const [tab, setTab] = useState("exp")
  
  return (
    <div className='w-full bg-[#f5f3ef] overflow-x-hidden relative scroll-smooth'>
      
      {/* NEW FEATURE: Floating CTA Button for better conversions */}
      <div className='fixed bottom-6 right-6 z-50'>
        <button className='bg-teal-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold hover:bg-teal-700 hover:scale-105 transition-all duration-300 animate-bounce'>
          Book Your Spot
        </button>
      </div>

      <div className='w-full max-w-[1440px] mx-auto'>
        
        {/* image part */}
        <div className='flex flex-col w-full min-h-[300px] lg:h-[580px] mt-2 relative border-xl-white'>
          <div className='z-0 relative border-xl-white overflow-hidden'>
            {/* Added object-cover to prevent stretching on mobile, and rounded corners */}
            <img className='h-[350px] lg:h-[600px] w-full object-cover rounded-b-2xl shadow-lg transition-transform duration-700 hover:scale-105' src={shubhPic[16]} alt='asthanga' />
          </div>
          {/* <div className='flex flex-col shadow-md p-2 z-10 absolute top-[40px] end-[40px]   shadow-black border-s-teal-400 border-cyan-900 text-black font-semibold'>
            <p className='text-2xl '>SHUBHYOGSHALA  YOAG VACATION</p>
            <p className='shadow-xl'>Relax In Nature | Reacharge In Yoga | Grow In Dicipline</p>
          </div> */}
        </div>

        {/* NEW FEATURE: Inspirational Quote Banner */}
        <div className='w-full bg-white/50 py-6 text-center shadow-sm mt-4 lg:mt-8'>
          <p className='text-lg md:text-xl font-serif text-teal-800 italic'>"Yoga is the journey of the self, through the self, to the self."</p>
        </div>

        {/* discription part */}
        {/* Changed h-[600px] to min-h-fit to prevent text overflow on mobile, added padding */}
        <div className='flex w-full flex-col lg:flex-row justify-between min-h-fit relative gap-9 my-10 px-4 md:px-8 lg:px-12'>
          <div className='flex flex-col lg:w-[65%] space-y-4 text-gray-700 text-base md:text-lg leading-relaxed'>
            <p>Available year-round, the Yoga Vacation programme in India offers the chance to immerse yourself fully in the yogic lifestyle and to dive deep into the ancient teachings of India. You can leave behind the stresses and strains of daily life to rediscover the joy of living in the idyllic setting of a traditional Indian Ashram. Come to experience the profound benefits that yoga brings to mind, body and spirit. During your stay, discover new ways of thinking and increase your spiritual knowledge through daily talks. Perfect your own practices and clear doubts with individual guidance from our teachers.
            </p>

            <p className='flex'>Immerse yourself in the calming atmosphere of the Ashram, making new friends with like-minded people from all corners of the world. You will begin to discover your true nature and develop skills to improve the health of body and mind. The programme will help you to establish a solid foundation for living a life of peace and happiness.</p>

            <p className='flex'>Based on the Five Points of Yoga of Swami Vishnudevananda, the Yoga Vacation promotes radiant health and inner peace. Whether you are a beginner or a seasoned practitioner, you will increase your vitality, positivity, and ease of being as a result of daily yoga practice, a healthy vegetarian diet, silent meditation sessions, and uplifting teachings. You will experience some of the devotional practices, traditional to India, that are an integral part of your stay here. Your mind will expand and your heart will open.</p>
          </div>

          <div className='lg:w-[35%] relative flex justify-center items-start mt-8 lg:mt-0'>
            {/* Adjusted sticky behavior for mobile */}
            <div className='lg:sticky top-[100px] flex flex-col w-full max-w-[350px] min-h-[250px] items-center justify-center rounded-xl shadow-xl p-6 bg-slate-100 border-t-4 border-teal-500 hover:shadow-2xl transition-all duration-300'>
              <h3 className='text-xl font-bold mb-4 text-teal-900 border-b-2 border-teal-200 pb-2 w-full text-center'>Quick Links</h3>
              <ul className="space-y-4 text-center flex flex-col w-full">
                <li><a href="#expectation" className="font-semibold text-gray-700 hover:text-teal-600 hover:underline transition-colors block w-full bg-white p-2 rounded-md shadow-sm">What to Expect</a></li>
                <li><a href="#Schedule" className="font-semibold text-gray-700 hover:text-teal-600 hover:underline transition-colors block w-full bg-white p-2 rounded-md shadow-sm">Daily Schedule</a></li>
                <li><a href="#Accommodations" className="font-semibold text-gray-700 hover:text-teal-600 hover:underline transition-colors block w-full bg-white p-2 rounded-md shadow-sm">Accommodations</a></li>
                {/* <li><a href="#Pricing" className="hover:underline">How to Get Here</a></li> */}
                <li><a href="#Pricing" className="font-semibold text-gray-700 hover:text-teal-600 hover:underline transition-colors block w-full bg-white p-2 rounded-md shadow-sm">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* about part */}

        {/* outside the div switching part */}
        {/* Added padding for mobile */}
        <div className='flex flex-col lg:flex-row gap-[30px] py-10 px-4 md:px-8 lg:px-12'>
          <div className='flex flex-col md:flex-col justify-center items-center lg:block w-full lg:w-[60%]'>
            {/* Enhanced Buttons with dynamic active state */}
            <div className='flex flex-wrap lg:flex-nowrap gap-4 mb-8 justify-center lg:justify-start w-full'>
              <button onClick={() => setTab("exp")} className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${tab === 'exp' ? 'bg-teal-600 text-white shadow-lg scale-105' : 'bg-white text-teal-700 border-2 border-teal-600 hover:bg-teal-50'}`}>EXPERIENCE</button>
              <button onClick={() => setTab("whyJoin")} className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${tab === 'whyJoin' ? 'bg-teal-600 text-white shadow-lg scale-105' : 'bg-white text-teal-700 border-2 border-teal-600 hover:bg-teal-50'}`}>WHY JOIN</button>
              <button onClick={() => setTab("whoFor")} className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${tab === 'whoFor' ? 'bg-teal-600 text-white shadow-lg scale-105' : 'bg-white text-teal-700 border-2 border-teal-600 hover:bg-teal-50'}`}>WHO THIS IS FOR</button>
              <button onClick={() => setTab("takeAway")} className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${tab === 'takeAway' ? 'bg-teal-600 text-white shadow-lg scale-105' : 'bg-white text-teal-700 border-2 border-teal-600 hover:bg-teal-50'}`}>TAKE AWAY</button>
            </div>
            
            {/* Changed <list> to <ul> for valid HTML, added smooth fade-in animation */}
            <div className='min-h-[300px] bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100'>
              {tab === "exp" ? <div className='retreatTabs animate-[fadeIn_0.5s_ease-in-out]'>
                <ul className='space-y-6 list-none'>
                  <li className='flex flex-col gap-1'><span className='font-bold text-xl text-teal-800'>Holistic Sanctuary</span>
                    <span className='text-gray-600'>Escape the digital noise and reconnect with your inner rhythm through daily guided asana, meditation, and restorative silence in a handpicked natural setting.</span></li>
                  <li className='flex flex-col gap-1'>
                    <span className='font-bold text-xl text-teal-800'>Deepened Physical Mastery</span>
                    <span className='text-gray-600'>Elevate your practice with expert-led workshops that go beyond the studio, focusing on alignment, energy flow, and the subtle art of breathwork.</span>
                  </li>
                  <li className='flex flex-col gap-1'>
                    <span className='font-bold text-xl text-teal-800'>Curated Soul Nourishment</span>
                    <span className='text-gray-600'>Enjoy a balance of structured movement and free exploration, complemented by organic, mindful cuisine designed to energize and heal from the inside out.</span>
                  </li>
                  <li className='flex flex-col gap-1'><span className='font-bold text-xl text-teal-800'>Lasting Mental Clarity</span>
                    <span className='text-gray-600'>Return home with more than just memories—gain a practical "inner toolkit" of mindfulness techniques to maintain your peace long after the retreat ends..</span></li>
                </ul>
              </div> : ""}

              {tab === "whyJoin" ? <div className='retreatTabs animate-[fadeIn_0.5s_ease-in-out]'>
                <ul className='space-y-6 list-none'>
                  <li className='flex flex-col gap-1'><span className='font-bold text-xl text-teal-800'>Expert-Led Transformation</span>
                    <span className='text-gray-600'>Join a curriculum designed by a Master of Yoga Science, ensuring every session is technically precise, safe, and tailored to your body's unique needs.</span></li>
                  <li className='flex flex-col gap-1'>
                    <span className='font-bold text-xl text-teal-800'>Deep Mental Detox</span>
                    <span className='text-gray-600'>Step away from daily burnout to reset your nervous system using advanced pranayama and meditation techniques proven to restore long-term clarity.</span>
                  </li>
                  <li className='flex flex-col gap-1'>
                    <span className='font-bold text-xl text-teal-800'>Authentic Yogic Wisdom</span>
                    <span className='text-gray-600'>Move beyond physical exercise; join us to explore the profound philosophy and history of yoga taught by a scholar with years of academic and practical mastery.</span>
                  </li>
                  <li className='flex flex-col gap-1'> <span className='font-bold text-xl text-teal-800'>A Sustainable Practice</span>
                    <span className='text-gray-600'>Gain more than just a vacation—walk away with a personalized wellness blueprint and the confidence to maintain a high-level practice at home..</span></li>
                </ul>
              </div> : ""}

              {tab === "whoFor" ? <div className='retreatTabs animate-[fadeIn_0.5s_ease-in-out]'>
                <ul className='space-y-6 list-none'>
                  <li className='flex flex-col gap-1'><span className='font-bold text-xl text-teal-800'>The Mindful Youth</span>
                    <span className='text-gray-600'>Perfect for teenagers and students looking to manage academic stress, improve focus, and build a healthy body image through mindful movement.</span></li>
                  <li className='flex flex-col gap-1'>
                    <span className='font-bold text-xl text-teal-800'>The Driven Professional</span>
                    <span className='text-gray-600'>Designed for those facing high-pressure careers who need a digital detox and science-backed tools to reset their nervous system and prevent burnout</span>
                  </li>
                  <li className='flex flex-col gap-1'>
                    <span className='font-bold text-xl text-teal-800'>The Lifelong Learner</span>
                    <span className='text-gray-600'>Ideal for practitioners of all levels—from beginners to advanced—who want to go beyond the basics and study yoga under a Master’s level expert.</span>
                  </li>
                  <li className='flex flex-col gap-1'><span className='font-bold text-xl text-teal-800'>The Active Senior</span>
                    <span className='text-gray-600'>A welcoming space for older adults seeking to improve mobility, bone density, and balance with safe, anatomically-informed guidance.</span></li>
                  <li className='flex flex-col gap-1'><span className='font-bold text-xl text-teal-800'>The Soul Seeker</span>
                    <span className='text-gray-600'>For anyone, regardless of age, who feels a pull toward deep relaxation and wants to explore the spiritual and philosophical roots of yoga in a peaceful setting.</span></li>
                </ul>
              </div> : ""}

              {tab === "takeAway" ? <div className='retreatTabs animate-[fadeIn_0.5s_ease-in-out]'>
                <ul className='space-y-6 list-none'>
                  <li className='flex flex-col gap-1'><span className='font-bold text-xl text-teal-800'>A regular yoga and meditation routine</span>
                    <span className='text-gray-600'>Simple practices you can continue at home without special equipment or conditions.</span></li>
                  <li className='flex flex-col gap-1'>
                    <span className='font-bold text-xl text-teal-800'>Better understanding of classical yoga</span>
                    <span className='text-gray-600'>Clear guidance on postures, breathing, relaxation, and the principles behind them.</span>
                  </li>
                  <li className='flex flex-col gap-1'>
                    <span className='font-bold text-xl text-teal-800'>Tools to manage stress</span>
                    <span className='text-gray-600'>Practical techniques to calm the breath, relax the body, and steady the mind.</span>
                  </li>
                  <li className='flex flex-col gap-1'> <span className='font-bold text-xl text-teal-800'>Clearer daily habits</span>
                    <span className='text-gray-600'>Experience of a structured routine that can be adapted to everyday life.</span></li>
                </ul>
              </div> : ""}
            </div>
          </div>
          
          {/* Made image section responsive and stylish */}
          <div className='mx-auto w-full lg:w-[40%] flex justify-center items-center mt-8 lg:mt-0'>
            <img className='w-full max-w-[400px] lg:max-w-full rounded-2xl shadow-xl object-cover hover:rotate-1 transition-all duration-500' src={womenYoga} alt='Yoga' />
          </div>
        </div>

        {/* redirection part - Detailed FAQ */}
        <div className='mx-4 md:mx-8 lg:mx-12 bg-white shadow-xl rounded-2xl p-6 md:p-8 my-10 lg:my-16 border-l-8 border-teal-500 hover:shadow-2xl transition-shadow duration-300' id='expectation'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            {/* What to Expect */}
            <div className='flex flex-col gap-2'>
              <h4 className='font-bold text-teal-800 text-sm md:text-base uppercase tracking-widest flex items-center gap-2'>
                <span className='bg-teal-100 p-2 rounded-full'>✨</span> What to Expect
              </h4>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed pl-10'>
                A balanced Sattvic lifestyle involving early morning meditation, daily asana, and immersive nature silence to reset your nervous system.
              </p>
            </div>

            {/* Daily Schedule - FIXED ID */}
            <div className='flex flex-col gap-2' id='Schedule'>
              <h4 className='font-bold text-teal-800 text-sm md:text-base uppercase tracking-widest flex items-center gap-2'>
                <span className='bg-teal-100 p-2 rounded-full'>🕒</span> Daily Schedule
              </h4>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed pl-10'>
                Guided sunrise practice at 6:00 AM, followed by organic brunch, philosophy talks, and restorative evening sessions before 9:00 PM lights-out.
              </p>
            </div>

            {/* Accommodations - FIXED ID */}
            <div className='flex flex-col gap-2' id='Accommodations'>
              <h4 className='font-bold text-teal-800 text-sm md:text-base uppercase tracking-widest flex items-center gap-2'>
                <span className='bg-teal-100 p-2 rounded-full'>🛏️</span> Accommodations
              </h4>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed pl-10'>
                Simple, clean, and eco-friendly shared or private rooms designed for deep rest, located within the peaceful sounds of the Rishikesh hills.
              </p>
            </div>

            {/* Pricing - FIXED ID AND TYPO */}
            <div className='flex flex-col gap-2' id='Pricing'>
              <h4 className='font-bold text-teal-800 text-sm md:text-base uppercase tracking-widest flex items-center gap-2'>
                <span className='bg-teal-100 p-2 rounded-full'>💳</span> Pricing
              </h4>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed pl-10'>
                Transparent all-inclusive rates covering your stay, twice-daily organic meals, study materials, and expert-led tuition for the 14-day cycle.
              </p>
            </div>

          </div>
        </div>

        {/* date and price part */}
        <div className='mt-[30px] flex flex-col bg-white p-5 md:p-10 mx-4 md:mx-8 lg:mx-12 rounded-2xl shadow-md mb-20'>
          <div className='flex flex-col items-center justify-center gap-[20px]'>
            <h1 className='text-2xl md:text-3xl font-bold h-auto md:h-[55px] w-full max-w-[280px] bg-teal-800 text-white rounded-lg shadow-xl text-center flex justify-center items-center p-3'>Dates & Prices</h1>
            <p className='w-full md:w-[70%] text-center text-gray-600 leading-relaxed text-sm md:text-base'>Yoga Vacation is a 14-day cycle. You can come and leave any day, respecting minimum stay guidelines.
              Beginners are advised to join at the beginning of the cycle.</p>
          </div>
          
          {/* Changed to flex-col on mobile, flex-row on desktop */}
          <div className='flex flex-col lg:flex-row w-full mt-[40px] md:mt-[70px] mb-[30px] gap-[30px] md:gap-[50px] items-center'>
            <div className='flex-1 flex flex-col mt-4 w-full'>
              {/* Changed <list> to <ul> */}
              <ul className='flex flex-col justify-center items-center lg:items-start text-base md:text-xl space-y-4 w-full'>
                <li className='bg-slate-50 p-4 rounded-lg shadow-sm border border-slate-100 w-full text-center lg:text-left hover:border-teal-500 transition-colors'>Hotel Noor, NarendaraNagar Near rishikesh</li>
                <li className='bg-slate-50 p-4 rounded-lg shadow-sm border border-slate-100 w-full text-center lg:text-left hover:border-teal-500 transition-colors'>Hotel Noor, NarendaraNagar Near rishikesh</li>
                <li className='bg-slate-50 p-4 rounded-lg shadow-sm border border-slate-100 w-full text-center lg:text-left hover:border-teal-500 transition-colors'>Hotel Noor, NarendaraNagar Near rishikesh</li>
                <li className='bg-slate-50 p-4 rounded-lg shadow-sm border border-slate-100 w-full text-center lg:text-left hover:border-teal-500 transition-colors'>Hotel Noor, NarendaraNagar Near rishikesh</li>
              </ul>
            </div>
            <div className='flex-1 flex w-full justify-center'>
              <img src={womenYoga2} alt='Yoga' className='w-full max-w-[400px] lg:max-w-full rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-500' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default YogaRetreat