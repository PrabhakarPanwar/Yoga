import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import personSitting from "../assets/personSitting.jpg"
import womenYoga from "../assets/womenYoga.jpg"
import womenYoga2 from "../assets/womenYoga2.jpg"
import { shubhPic } from '../assets/product.js'

// ── WhatsApp booking link ──
const WHATSAPP_LINK = "https://wa.me/919548648227?text=Hi%2C%20I%27m%20interested%20in%20booking%20the%20Yoga%20Retreat%20in%20Rishikesh.%20Please%20share%20the%20details."

const tabs = [
  { id: "exp", label: "Experience" },
  { id: "whyJoin", label: "Why Join" },
  { id: "whoFor", label: "Who's It For" },
  { id: "takeAway", label: "Take Away" },
]

const tabContent = {
  exp: [
    { title: "Holistic Sanctuary", desc: "Escape the digital noise and reconnect with your inner rhythm through daily guided asana, meditation, and restorative silence in a handpicked natural setting." },
    { title: "Deepened Physical Mastery", desc: "Elevate your practice with expert-led workshops focusing on alignment, energy flow, and the subtle art of breathwork—beyond what any studio offers." },
    { title: "Curated Soul Nourishment", desc: "Enjoy structured movement and free exploration, complemented by organic, mindful cuisine designed to energize and heal from the inside out." },
    { title: "Lasting Mental Clarity", desc: "Return home with a practical inner toolkit of mindfulness techniques to maintain your peace long after the retreat ends." },
  ],
  whyJoin: [
    { title: "Expert-Led Transformation", desc: "A curriculum designed by a Master of Yoga Science — technically precise, safe, and tailored to your body's unique needs." },
    { title: "Deep Mental Detox", desc: "Step away from burnout to reset your nervous system using advanced pranayama and meditation techniques proven to restore long-term clarity." },
    { title: "Authentic Yogic Wisdom", desc: "Explore the profound philosophy and history of yoga taught by a scholar with years of academic and practical mastery." },
    { title: "A Sustainable Practice", desc: "Walk away with a personalized wellness blueprint and the confidence to maintain a high-level practice at home." },
  ],
  whoFor: [
    { title: "The Mindful Youth", desc: "Teenagers and students looking to manage academic stress, improve focus, and build a healthy body image through mindful movement." },
    { title: "The Driven Professional", desc: "High-pressure careers demand a digital detox — science-backed tools to reset your nervous system and prevent burnout." },
    { title: "The Lifelong Learner", desc: "Practitioners of all levels who want to go beyond the basics and study yoga under a Master's level expert." },
    { title: "The Active Senior", desc: "A welcoming space for older adults seeking improved mobility, bone density, and balance with safe, anatomically-informed guidance." },
    { title: "The Soul Seeker", desc: "Anyone who feels a pull toward deep relaxation and wants to explore yoga's spiritual and philosophical roots in a peaceful setting." },
  ],
  takeAway: [
    { title: "A Regular Yoga & Meditation Routine", desc: "Simple practices you can continue at home without special equipment or conditions." },
    { title: "Understanding of Classical Yoga", desc: "Clear guidance on postures, breathing, relaxation, and the timeless principles behind them." },
    { title: "Tools to Manage Stress", desc: "Practical techniques to calm the breath, relax the body, and steady the mind." },
    { title: "Clearer Daily Habits", desc: "Experience a structured routine that can be adapted and sustained in everyday life." },
  ],
}

const schedule = [
  { time: "05:30", activity: "Wake Up & Silent Walk", icon: "🌄" },
  { time: "06:00", activity: "Morning Meditation", icon: "🧘" },
  { time: "07:00", activity: "Asana Practice", icon: "🌿" },
  { time: "09:00", activity: "Organic Sattvic Breakfast", icon: "🥗" },
  { time: "11:00", activity: "Philosophy & Talks", icon: "📖" },
  { time: "13:00", activity: "Lunch & Free Time", icon: "☀️" },
  { time: "16:00", activity: "Pranayama Workshop", icon: "💨" },
  { time: "18:00", activity: "Evening Asana", icon: "🌙" },
  { time: "20:00", activity: "Satsang & Kirtan", icon: "🎶" },
  { time: "21:30", activity: "Lights Out / Rest", icon: "✨" },
]

const testimonials = [
  { name: "Priya S.", location: "Mumbai", text: "This retreat changed how I see myself. The mornings by the Ganges, the silence — I found something I didn't know I was looking for.", stars: 5 },
  { name: "Marco L.", location: "Italy", text: "Shubham's teaching is precise and deeply compassionate. My body and mind feel 10 years younger after just two weeks.", stars: 5 },
  { name: "Aiko T.", location: "Japan", text: "The philosophy sessions were profound. I came for yoga and left with a completely new perspective on life.", stars: 5 },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  )
}

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function YogaRetreat() {
  const [tab, setTab] = useState("exp")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className='w-full bg-[#f7f5f0] overflow-x-hidden font-serif'>

      {/* ── FLOATING CTA ── */}
      {/* <div className={`fixed bottom-6 right-4 z-50 transition-all duration-500 ${scrolled ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center gap-2 bg-teal-700 text-white px-5 py-3 rounded-full shadow-2xl text-sm font-bold tracking-wide hover:bg-teal-800 hover:shadow-teal-900/40 hover:shadow-xl transition-all duration-300'
        >
          <span>💬</span> Book on WhatsApp
        </a>
      </div> */}

      {/* ── HERO ── */}
      <div className='relative w-full h-[100svh] min-h-[560px] max-h-[900px]'>
        <img
          src={shubhPic[16]}
          alt='Yoga Retreat Hero'
          className='absolute inset-0 w-full h-full object-cover object-center'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70' />

        <div className='absolute inset-0 flex flex-col justify-end pb-12 px-5 sm:px-12 max-w-4xl'>
          <p className='text-amber-300 text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 font-sans'>Shubhyogshala Presents</p>
          <h1 className='text-white text-4xl sm:text-6xl lg:text-7xl font-bold leading-none mb-4 drop-shadow-xl'>
            Yoga Retreat<br /><span className='text-amber-300'>Rishikesh</span>
          </h1>
          <p className='text-white/80 text-sm sm:text-base max-w-md mb-8 font-sans leading-relaxed'>
            Relax in Nature · Recharge in Yoga · Grow in Discipline
          </p>
          <div className='flex flex-wrap gap-3'>
            <a href="#expectation" className='bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm px-5 py-2.5 rounded-full hover:bg-white/25 transition font-sans'>
              Explore Programme
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className='bg-amber-400 text-stone-900 text-sm px-5 py-2.5 rounded-full font-bold hover:bg-amber-300 transition font-sans'
            >
              Book on WhatsApp
            </a>
          </div>
        </div>

        {/* scroll cue */}
        <div className='absolute bottom-6 right-6 flex flex-col items-center gap-1 text-white/60 font-sans text-xs animate-bounce'>
          <span>Scroll</span>
          <span>↓</span>
        </div>
      </div>

      {/* ── QUOTE STRIP ── */}
      <div className='bg-teal-800 text-center py-8 px-4'>
        <p className='text-amber-200 text-lg sm:text-2xl italic max-w-2xl mx-auto leading-relaxed'>
          "Yoga is the journey of the self, through the self, to the self."
        </p>
        <p className='text-teal-400 text-xs mt-2 font-sans uppercase tracking-widest'>— The Bhagavad Gita</p>
      </div>

      {/* ── STATS ROW ── */}
      <div className='bg-white py-10 px-4'>
        <div className='max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
          {[
            { n: "14", label: "Days Cycle" },
            { n: "500+", label: "Retreaters" },
            { n: "8+", label: "Years Teaching" },
            { n: "Year-Round", label: "Availability" },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 100}>
              <p className='text-3xl sm:text-4xl font-bold text-teal-800'>{s.n}</p>
              <p className='text-xs text-gray-500 mt-1 font-sans uppercase tracking-widest'>{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── ABOUT / INTRO ── */}
      <div className='max-w-6xl mx-auto px-4 sm:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center' id='expectation'>
        <FadeIn className='order-2 lg:order-1'>
          <p className='text-xs font-sans uppercase tracking-[0.2em] text-teal-600 mb-3'>About The Retreat</p>
          <h2 className='text-3xl sm:text-4xl font-bold text-stone-800 mb-6 leading-snug'>
            An Immersive Yogic<br />Experience in India
          </h2>
          <div className='space-y-4 text-stone-600 font-sans text-sm sm:text-base leading-relaxed'>
            <p>Available year-round, the Yoga Vacation programme in India offers the chance to immerse yourself fully in the yogic lifestyle and dive deep into the ancient teachings of India. Leave behind the stresses of daily life to rediscover the joy of living in the idyllic setting of a traditional Indian Ashram.</p>
            <p>Come to experience the profound benefits yoga brings to mind, body, and spirit. During your stay, discover new ways of thinking and increase your spiritual knowledge through daily talks. Perfect your own practices and clear doubts with individual guidance from our teachers.</p>
            <p>Based on the Five Points of Yoga, the Yoga Vacation promotes radiant health and inner peace — for beginners and seasoned practitioners alike.</p>
          </div>
          <div className='mt-8 flex flex-wrap gap-3'>
            {["Asana", "Pranayama", "Meditation", "Philosophy", "Sattvic Diet"].map(tag => (
              <span key={tag} className='bg-teal-50 border border-teal-200 text-teal-700 text-xs font-sans px-3 py-1.5 rounded-full'>{tag}</span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200} className='order-1 lg:order-2'>
          <div className='relative'>
            <img src={womenYoga} alt='Yoga practice' className='w-full h-[360px] sm:h-[480px] object-cover rounded-2xl shadow-2xl' />
            <div className='absolute -bottom-4 -left-4 bg-teal-800 text-white p-4 rounded-xl shadow-xl font-sans text-sm hidden sm:block'>
              <p className='font-bold text-amber-300'>📍 Narendranagar</p>
              <p className='text-teal-200 text-xs'>Near Rishikesh, Uttarakhand</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* ── QUICK NAV ── */}
      <div className='bg-stone-100 border-y border-stone-200 py-5 px-4 overflow-x-auto'>
        <div className='flex gap-3 justify-center min-w-max mx-auto font-sans'>
          {[
            ["#expectation", "What to Expect"],
            ["#Schedule", "Daily Schedule"],
            ["#tabs", "Programme"],
            ["#Accommodations", "Accommodations"],
            ["#testimonials", "Reviews"],
          ].map(([href, label]) => (
            <a key={href} href={href} className='text-xs sm:text-sm text-stone-600 hover:text-teal-700 border border-stone-300 hover:border-teal-500 px-3 py-1.5 rounded-full transition whitespace-nowrap'>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* ── TABS SECTION ── */}
      <div className='max-w-6xl mx-auto px-4 sm:px-8 py-16' id='tabs'>
        <FadeIn>
          <p className='text-xs font-sans uppercase tracking-[0.2em] text-teal-600 mb-2 text-center'>The Programme</p>
          <h2 className='text-2xl sm:text-3xl font-bold text-stone-800 mb-8 text-center'>Everything You Need to Know</h2>
        </FadeIn>

        <div className='flex overflow-x-auto gap-2 pb-2 mb-6 scrollbar-hide justify-start sm:justify-center'>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-sans font-semibold transition-all duration-300 ${tab === t.id ? 'bg-teal-700 text-white shadow-lg' : 'bg-white text-stone-600 border border-stone-200 hover:border-teal-400'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className='grid sm:grid-cols-2 gap-4'>
          {tabContent[tab].map((item, i) => (
            <FadeIn key={`${tab}-${i}`} delay={i * 80}>
              <div className='bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-100 hover:border-teal-300 hover:shadow-md transition-all duration-300 h-full'>
                <div className='w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-sm mb-3 font-sans'>{i + 1}</div>
                <h3 className='text-base sm:text-lg font-bold text-teal-800 mb-2'>{item.title}</h3>
                <p className='text-sm text-stone-500 font-sans leading-relaxed'>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── DAILY SCHEDULE ── */}
      <div className='bg-teal-900 text-white py-16 px-4 sm:px-8' id='Schedule'>
        <div className='max-w-3xl mx-auto'>
          <FadeIn>
            <p className='text-xs font-sans uppercase tracking-[0.2em] text-amber-300 mb-2 text-center'>A Typical Day</p>
            <h2 className='text-2xl sm:text-3xl font-bold mb-10 text-center'>Daily Schedule</h2>
          </FadeIn>
          <div className='relative'>
            <div className='absolute left-[52px] top-0 bottom-0 w-px bg-teal-700 hidden sm:block' />
            <div className='space-y-4'>
              {schedule.map((item, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <div className='flex items-center gap-4'>
                    <span className='text-xs font-sans text-teal-400 w-12 shrink-0 text-right'>{item.time}</span>
                    <div className='w-8 h-8 rounded-full bg-teal-800 border-2 border-teal-600 flex items-center justify-center text-base shrink-0 z-10'>{item.icon}</div>
                    <div className='bg-teal-800/60 rounded-xl px-4 py-3 flex-1 hover:bg-teal-800 transition'>
                      <p className='text-sm sm:text-base font-sans'>{item.activity}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT'S INCLUDED ── */}
      <div className='max-w-6xl mx-auto px-4 sm:px-8 py-16' id='Accommodations'>
        <FadeIn>
          <p className='text-xs font-sans uppercase tracking-[0.2em] text-teal-600 mb-2'>Details</p>
          <h2 className='text-2xl sm:text-3xl font-bold text-stone-800 mb-10'>What's Included</h2>
        </FadeIn>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {[
            { icon: "✨", title: "What to Expect", desc: "A balanced Sattvic lifestyle — early morning meditation, daily asana, and immersive nature silence to reset your nervous system." },
            { icon: "🕒", title: "Daily Schedule", desc: "Guided sunrise practice at 6:00 AM, organic brunch, philosophy talks, and restorative evening sessions before 9:00 PM lights-out." },
            { icon: "🛏️", title: "Accommodations", desc: "Clean, eco-friendly shared or private rooms for deep rest, located within the peaceful Narendranagar hills near Rishikesh." },
            { icon: "🥗", title: "Sattvic Meals", desc: "All organic meals included — twice-daily nourishing food designed to complement your practice and energize the body from within." },
            { icon: "📚", title: "Study Materials", desc: "All course books, handouts, and reference materials are provided throughout your stay at no extra cost." },
            { icon: "🧑‍🏫", title: "Expert Tuition", desc: "Personal guidance from a Master of Yoga Science with 8+ years of teaching experience across all levels." },
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className='bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 flex flex-col gap-3 h-full'>
                <span className='text-3xl'>{card.icon}</span>
                <h3 className='font-bold text-stone-800 text-base'>{card.title}</h3>
                <p className='text-xs sm:text-sm text-stone-500 font-sans leading-relaxed'>{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── PHOTO BREAK ── */}
      <div className='w-full h-[280px] sm:h-[420px] relative overflow-hidden'>
        <img src={personSitting} alt='Meditation' className='w-full h-full object-cover object-center' />
        <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4'>
          <p className='text-white/70 text-xs font-sans uppercase tracking-widest mb-3'>The Ashram Life</p>
          <p className='text-white text-2xl sm:text-4xl font-bold max-w-xl leading-tight'>
            Silence is not empty — it is full of answers.
          </p>
        </div>
      </div>

      {/* ── LOCATION ── */}
      <div className='bg-stone-800 text-white py-16 px-4 sm:px-8'>
        <div className='max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 items-center'>
          <FadeIn>
            <p className='text-xs font-sans uppercase tracking-[0.2em] text-amber-300 mb-3'>Getting Here</p>
            <h2 className='text-2xl sm:text-3xl font-bold mb-4'>Hotel Noor,<br />Narendranagar</h2>
            <p className='text-stone-300 font-sans text-sm leading-relaxed mb-6'>
              Nestled in the serene hills of Narendranagar, just minutes from the spiritual heart of Rishikesh. Accessible by road from Dehradun Airport (45 min) or Haridwar (30 min).
            </p>
            <div className='space-y-2 font-sans text-sm text-stone-300'>
              {[
                "✈️  Nearest Airport: Jolly Grant, Dehradun",
                "🚆  Nearest Railway: Rishikesh / Haridwar",
                "🚌  Local cabs & buses available",
              ].map(line => <p key={line}>{line}</p>)}
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <img src={womenYoga2} alt='Location' className='w-full h-[280px] sm:h-[360px] object-cover rounded-2xl shadow-2xl' />
          </FadeIn>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div className='max-w-5xl mx-auto px-4 sm:px-8 py-16' id='testimonials'>
        <FadeIn>
          <p className='text-xs font-sans uppercase tracking-[0.2em] text-teal-600 mb-2 text-center'>Stories</p>
          <h2 className='text-2xl sm:text-3xl font-bold text-stone-800 mb-10 text-center'>What Retreaters Say</h2>
        </FadeIn>
        <div className='grid sm:grid-cols-3 gap-5'>
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className='bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition h-full flex flex-col gap-3'>
                <StarRating count={t.stars} />
                <p className='text-stone-600 font-sans text-sm leading-relaxed italic flex-1'>"{t.text}"</p>
                <div>
                  <p className='font-bold text-stone-800 text-sm'>{t.name}</p>
                  <p className='text-stone-400 text-xs font-sans'>{t.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div className='bg-amber-50 border-t border-amber-100 py-16 px-4 text-center'>
        <FadeIn>
          <p className='text-4xl mb-4'>🌿</p>
          <h2 className='text-2xl sm:text-3xl font-bold text-stone-800 mb-3'>Ready to Transform?</h2>
          <p className='text-stone-500 font-sans text-sm max-w-md mx-auto mb-8'>
            Spaces are limited. Join us in Rishikesh and begin the journey back to yourself. Reach out on WhatsApp to reserve your place today.
          </p>
          <div className='flex flex-wrap gap-3 justify-center'>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className='bg-teal-700 text-white px-8 py-3 rounded-full font-bold font-sans text-sm hover:bg-teal-800 transition shadow-lg hover:shadow-teal-900/30 flex items-center gap-2'
            >
              <span>💬</span> Reserve on WhatsApp
            </a>
            <a href="#expectation" className='border-2 border-stone-300 text-stone-600 px-8 py-3 rounded-full font-sans text-sm hover:border-teal-500 hover:text-teal-700 transition'>
              Learn More
            </a>
          </div>
          <p className='text-stone-400 font-sans text-xs mt-5'>📞 +91 95486 48227</p>
        </FadeIn>
      </div>

    </div>
  )
}

export default YogaRetreat