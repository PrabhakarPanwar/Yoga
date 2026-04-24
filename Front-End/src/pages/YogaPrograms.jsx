import React, { useEffect, useRef } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  FaUser, FaLaptop, FaBuilding, FaUsers, FaHeartbeat, FaChild,
  FaWhatsapp, FaCheckCircle, FaStar, FaClock, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";

// ── WhatsApp — ALL CTAs go here, zero /reglog redirects ────────────────────
const WA_BASE = "https://wa.me/919548648227?text=";
const waLink = (program = "") =>
  WA_BASE +
  encodeURIComponent(
    `Hello Shubham, I am messaging you from Shubh Yog Shala. I am interested in ${
      program || "yoga learning"
    } and would like to know more.`
  );

// ── Programs Data ──────────────────────────────────────────────────────────
const PROGRAMS = [
  {
    slug: "personal-yoga",
    title: "Personal Yoga",
    subtitle: "One-on-One Training",
    icon: <FaUser />,
    emoji: "🧘",
    tagline: "Your practice. Your pace. Your transformation.",
    heroLine: "Completely personalised yoga — designed around you, your body, and your life.",
    description: [
      "Personal Yoga at Shubh Yog Shala is the deepest, most transformative way to begin or deepen your practice. When Shubham teaches you one-on-one, there are no distractions, no generalised cues — only presence, awareness, and a practice built entirely for your body.",
      "Every session begins with a brief check-in: how is your body today? What did you eat? Did you sleep? Yoga is not a fixed routine — it is a conversation with yourself, and Shubham guides that conversation with expertise and intuition built over 7 years of teaching.",
      "Whether your goal is weight management, stress relief, flexibility, spiritual deepening, or simply to feel more alive in your body — Personal Yoga at Shubh Yog Shala delivers results that group classes simply cannot match.",
    ],
    benefits: [
      "Fully customised asana sequences each session",
      "Pranayama & meditation integrated from day one",
      "Precise postural corrections & body alignment",
      "Flexible scheduling — morning or evening",
      "Progress tracking every 4 weeks",
      "Suitable for complete beginners to advanced",
    ],
    whoIsItFor: [
      "Beginners who want to start right",
      "Professionals with limited, specific time slots",
      "People recovering from injury or illness",
      "Anyone who finds group settings intimidating",
      "Advanced practitioners wanting to deepen practice",
    ],
    process: [
      { step: "01", title: "Free Consultation", desc: "A 20-minute call with Shubham to understand your body, goals, and any limitations." },
      { step: "02", title: "Assessment Session", desc: "Your first session — Shubham observes your natural posture, breath, and movement patterns." },
      { step: "03", title: "Custom Plan", desc: "A personalised 30-day roadmap designed specifically for you." },
      { step: "04", title: "Ongoing Practice", desc: "Regular sessions with weekly micro-adjustments and monthly full reviews." },
    ],
    faqs: [
      { q: "How long is each session?", a: "Sessions are typically 45–60 minutes, depending on your energy and availability." },
      { q: "Can I do this online?", a: "Yes — personal sessions are available both in-person in Haridwar and via Zoom/Google Meet." },
      { q: "How soon will I see results?", a: "Most students report feeling meaningfully different within 3–4 sessions. Visible physical changes emerge around 4–6 weeks." },
      { q: "Do I need to buy equipment?", a: "Just a yoga mat and comfortable clothes. Shubham will guide you on anything else needed." },
    ],
    color: "#c8763a",
    lightColor: "#fdf1e6",
  },
  {
    slug: "online-yoga",
    title: "Online Yoga",
    subtitle: "Live Sessions Anywhere",
    icon: <FaLaptop />,
    emoji: "💻",
    tagline: "The shala comes to you.",
    heroLine: "Professional live yoga instruction — from Shubham's shala directly into your space.",
    description: [
      "Geography is no longer a barrier to authentic yoga practice. Shubham's Online Yoga program brings the full depth of Shubh Yog Shala — the precision, the warmth, the awareness — into your home, your office, or wherever you are in the world.",
      "These are not pre-recorded videos. Every session is live, interactive, and personally guided. Shubham watches your form, corrects your breath, and adjusts the practice in real-time — just as he would in person.",
      "Students from across India and internationally have found that online sessions with Shubham are often more focused than in-person classes elsewhere. The one-on-one digital space removes all distractions and creates a surprisingly intimate practice environment.",
    ],
    benefits: [
      "100% live — never a recording",
      "Real-time corrections via video",
      "Sessions available worldwide across time zones",
      "Both personal and group formats online",
      "Session recordings shared on request",
      "No commute — practice in your own space",
    ],
    whoIsItFor: [
      "NRIs and international students",
      "Frequent travellers and professionals",
      "Mothers and homemakers with time constraints",
      "Students in cities without good yoga teachers",
      "Anyone who prefers the comfort of home",
    ],
    process: [
      { step: "01", title: "Connect", desc: "A quick WhatsApp message and Shubham will schedule your first free demo session." },
      { step: "02", title: "Setup", desc: "All you need is a mat, 60 sq ft of space, and a device with a camera." },
      { step: "03", title: "First Session", desc: "Shubham assesses your practice and creates your online program." },
      { step: "04", title: "Consistency", desc: "Regular live sessions that fit neatly around your schedule." },
    ],
    faqs: [
      { q: "Which platform do you use?", a: "Zoom or Google Meet — whichever you prefer. Links are shared on WhatsApp before each session." },
      { q: "What if my internet is unstable?", a: "Sessions can be rescheduled with 2 hours' notice at no extra charge." },
      { q: "Can my family member join the same session?", a: "Yes — couples and family sessions are available at a nominal additional fee." },
      { q: "Is the quality the same as in-person?", a: "Many students say yes. Shubham is highly trained at reading body language over video." },
    ],
    color: "#2d6a4f",
    lightColor: "#e0f5ec",
  },
  {
    slug: "corporate-yoga",
    title: "Corporate Yoga",
    subtitle: "Workplace Wellness Programs",
    icon: <FaBuilding />,
    emoji: "🏢",
    tagline: "A calmer team is a sharper team.",
    heroLine: "Structured yoga & wellness programs that measurably reduce workplace stress.",
    description: [
      "The modern workplace demands peak cognitive performance from people whose nervous systems are chronically overstimulated. Corporate Yoga at Shubh Yog Shala addresses this at the root — not with wellness posters, but with real practice.",
      "Shubham designs bespoke programs for companies, startups, and offices — delivered on-site or online. Sessions are structured to be accessible for absolute beginners (most employees) while still offering depth for those who already practice.",
      "Companies that have engaged Shubh Yog Shala report reduced sick days, better team morale, improved focus in meetings, and a tangibly calmer office environment.",
    ],
    benefits: [
      "On-site sessions at your office",
      "100% online delivery for distributed teams",
      "Customised programs for desk workers",
      "Chair yoga options for limited mobility",
      "Monthly wellness reports for HR",
      "Flexible batch sizes — 5 to 50 employees",
    ],
    whoIsItFor: [
      "Startups building a wellness culture from day one",
      "IT companies with high burnout rates",
      "Banks, hospitals, and high-stress industries",
      "HR managers looking for measurable ROI on wellness",
      "Leadership teams who want to model wellbeing",
    ],
    process: [
      { step: "01", title: "Discovery Call", desc: "Shubham speaks with HR or leadership to understand team size, stress patterns, and goals." },
      { step: "02", title: "Program Design", desc: "A custom 4-week or 12-week corporate yoga plan is prepared." },
      { step: "03", title: "Pilot Batch", desc: "One free session for a test group before full rollout." },
      { step: "04", title: "Full Program", desc: "Regular sessions, attendance tracking, and monthly reporting." },
    ],
    faqs: [
      { q: "How many sessions per week?", a: "Typically 2–3 sessions per week. Frequency is adjusted to your team's schedule." },
      { q: "Do employees need yoga experience?", a: "Absolutely not. Corporate sessions are designed for complete beginners." },
      { q: "What is the minimum team size?", a: "As small as 5 people. Shubham has worked with intimate leadership teams and large offices alike." },
      { q: "Can sessions be held during lunch breaks?", a: "Yes — 30 and 45-minute express formats are available for lunch-hour slots." },
    ],
    color: "#1d3557",
    lightColor: "#e0eaf5",
  },
  {
    slug: "group-yoga",
    title: "Group Yoga",
    subtitle: "Small Batch Classes",
    icon: <FaUsers />,
    emoji: "🌿",
    tagline: "Practice together. Grow together.",
    heroLine: "The energy of community, with the attention of a personal teacher.",
    description: [
      "Something extraordinary happens when people practise yoga together. The shared breath, the collective stillness, the gentle energy that pushes you just a little further — Group Yoga at Shubh Yog Shala harnesses all of this, while keeping batches small enough that Shubham can give meaningful individual attention.",
      "Batches are capped at 10 students. This is not a commercial yoga studio with 40 people in a room. Shubham knows each student's body, their progress, their challenges. The group environment provides accountability and community; the small size provides precision and care.",
      "Morning and evening batches are available. Many students find that group yoga becomes the most consistent, enjoyable part of their daily routine — something they genuinely look forward to.",
    ],
    benefits: [
      "Capped at 10 students per batch",
      "Morning (6 AM) and evening (6 PM) batches",
      "Community of like-minded practitioners",
      "Individual attention within a group format",
      "Most affordable format at Shubh Yog Shala",
      "Builds consistency and accountability",
    ],
    whoIsItFor: [
      "Budget-conscious students who want quality",
      "People who are more motivated in groups",
      "Those who want to build a consistent daily practice",
      "Students who enjoy community and connection",
      "Anyone wanting to try yoga before going personal",
    ],
    process: [
      { step: "01", title: "Choose Your Batch", desc: "Morning or evening — pick what fits your routine best." },
      { step: "02", title: "Free Demo Class", desc: "Attend one session at no cost to experience the group before joining." },
      { step: "03", title: "Join the Community", desc: "Pay for a monthly or quarterly batch and begin your practice." },
      { step: "04", title: "Grow Together", desc: "Progress reviews, occasional workshops, and a WhatsApp community of batchmates." },
    ],
    faqs: [
      { q: "Can I switch from morning to evening?", a: "Yes, subject to availability in the other batch." },
      { q: "Is there a trial class?", a: "Absolutely — one free demo class before any commitment." },
      { q: "What level should I be at?", a: "Batches are organised by level. Shubham will assess you and place you in the right group." },
      { q: "What if I miss a session?", a: "Makeup classes are available within the same month for batches with space." },
    ],
    color: "#6b4226",
    lightColor: "#f5ece4",
  },
  {
    slug: "therapeutic-yoga",
    title: "Therapeutic Yoga",
    subtitle: "Healing Through Yoga",
    icon: <FaHeartbeat />,
    emoji: "💚",
    tagline: "When the body asks to be heard.",
    heroLine: "Yoga as medicine — precise, gentle, evidence-informed sequences that heal.",
    description: [
      "Therapeutic Yoga at Shubh Yog Shala is not standard yoga with modifications. It is a completely different approach — one where Shubham begins by understanding your condition, your medical history, and your body's specific patterns of tension, compensation, and restriction.",
      "Shubham has worked with students managing chronic lower back pain, cervical spondylosis, knee osteoarthritis, PCOD/PCOS, hypertension, anxiety disorders, and post-surgical recovery. In each case, the practice is built from the ground up around the person's current capacity — safe, precise, and progressively therapeutic.",
      "Therapeutic Yoga works best alongside — never instead of — your medical treatment. Shubham is happy to coordinate with your physiotherapist or doctor to ensure the practice supports your overall care plan.",
    ],
    benefits: [
      "Detailed intake assessment before first session",
      "Condition-specific asana, pranayama & mudra",
      "Works with: back pain, cervical, knee issues, PCOD, anxiety & more",
      "Restorative, gentle progression — never forced",
      "Can be coordinated with your physiotherapist",
      "Available in-person and online",
    ],
    whoIsItFor: [
      "People with chronic pain or musculoskeletal issues",
      "Post-surgery recovery patients (with clearance)",
      "Women managing PCOD, PCOS, or hormonal issues",
      "People managing anxiety, insomnia, or depression",
      "Elderly individuals seeking gentle, safe movement",
    ],
    process: [
      { step: "01", title: "Health Intake Form", desc: "A detailed form covering your medical history, current symptoms, medications, and lifestyle." },
      { step: "02", title: "Initial Assessment", desc: "A 60-minute session where Shubham observes movement, breath patterns, and range of motion." },
      { step: "03", title: "Therapeutic Protocol", desc: "A customised 30-day therapeutic sequence designed for your specific condition." },
      { step: "04", title: "Progressive Healing", desc: "Regular sessions with careful progression and monthly check-ins on symptoms." },
    ],
    faqs: [
      { q: "Can yoga replace my medical treatment?", a: "No — and Shubham will never suggest it should. Therapeutic yoga supports medical care, not replaces it." },
      { q: "I have a slipped disc. Can I practice?", a: "In many cases, yes — but only after medical clearance and a thorough assessment with Shubham." },
      { q: "Is this suitable for elderly people?", a: "Absolutely. Therapeutic yoga is one of the safest, most beneficial practices for older adults." },
      { q: "How long before I feel relief?", a: "Conditions vary, but most students report meaningful pain reduction within 3–6 weeks of consistent practice." },
    ],
    color: "#3a7d6e",
    lightColor: "#e0f5f0",
  },
  {
    slug: "kids-yoga",
    title: "Kids Yoga",
    subtitle: "Ages 5 to 15",
    icon: <FaChild />,
    emoji: "🌟",
    tagline: "Plant the seed. Watch them bloom.",
    heroLine: "Joyful, age-appropriate yoga that builds focus, confidence, and joy in children.",
    description: [
      "Children are natural yogis — they are flexible, present, and openly curious. Kids Yoga at Shubh Yog Shala nurtures these innate qualities while gently building the physical, emotional, and cognitive foundations that will serve them for life.",
      "Shubham's approach to children's yoga is rooted in storytelling, play, and imagination. Asanas become adventures — the tree pose becomes a forest, the warrior becomes a story. Children learn without feeling like they are learning, which means they engage deeply and remember what they practise.",
      "Beyond the physical benefits — flexibility, strength, coordination — students and parents consistently report improvements in focus, emotional regulation, sleep quality, and academic performance.",
    ],
    benefits: [
      "Ages 5–15 welcome (batches by age group)",
      "Storytelling and play-based methodology",
      "Improves focus, concentration & academic performance",
      "Builds emotional regulation and resilience",
      "Strengthens posture from a young age",
      "Instils a lifelong healthy habit",
    ],
    whoIsItFor: [
      "Children with difficulty concentrating in school",
      "Kids with anxiety or emotional regulation challenges",
      "Active children who need a mindful outlet",
      "Parents who want to build healthy habits early",
      "Teens dealing with exam stress and pressure",
    ],
    process: [
      { step: "01", title: "Parent Consultation", desc: "A brief call with Shubham to understand your child's temperament, goals, and any concerns." },
      { step: "02", title: "Free Trial Session", desc: "Your child attends one fun, no-pressure trial session to see if they enjoy it." },
      { step: "03", title: "Regular Batches", desc: "Age-appropriate batches 3x per week, designed around school schedules." },
      { step: "04", title: "Progress Updates", desc: "Monthly updates to parents on physical progress, focus, and emotional wellbeing." },
    ],
    faqs: [
      { q: "My child has never done yoga — is that fine?", a: "Perfect, actually. Children without preconceptions take to yoga most naturally." },
      { q: "Can my teenager join adult group batches?", a: "Teenagers aged 15+ can join adult batches. Shubham will assess and advise." },
      { q: "How long are kids' sessions?", a: "30–45 minutes — calibrated to children's attention spans." },
      { q: "Is there a parent-child session option?", a: "Yes! Parent-child yoga sessions are available and loved by families." },
    ],
    color: "#c8763a",
    lightColor: "#fdf1e6",
  },
];

const TESTIMONIALS = {
  "personal-yoga": [
    { name: "Priya M.", text: "Shubham sees things in your practice that you can't see yourself. Three months in, I feel like a completely different person.", stars: 5 },
    { name: "Arjun S.", text: "I tried three different yoga classes before this. Personal sessions with Shubham are on a different level entirely.", stars: 5 },
    { name: "Reena K.", text: "He doesn't just correct posture — he explains the why. That understanding changes everything.", stars: 5 },
  ],
  "online-yoga": [
    { name: "Nisha V. (Dubai)", text: "Living abroad, I thought good yoga instruction was out of reach. Shubham's online sessions are as good as in-person, if not better.", stars: 5 },
    { name: "Sameer T.", text: "I travel for work constantly. Online sessions with Shubham have kept my practice consistent across 6 countries.", stars: 5 },
    { name: "Kavya R.", text: "The connection and attention you get over video surprised me. Very real, very personal.", stars: 5 },
  ],
  "corporate-yoga": [
    { name: "Sneha T. (HR Manager)", text: "We enrolled our entire 40-person team. Monday mornings transformed. Productivity metrics actually improved.", stars: 5 },
    { name: "Vikram P. (CEO)", text: "Best wellness investment we've made as a company. Measurable impact on team morale and focus.", stars: 5 },
    { name: "Anita M.", text: "Lunch-break sessions mean I don't have to sacrifice personal time. Shubham's format is brilliantly designed for corporate life.", stars: 5 },
  ],
  "group-yoga": [
    { name: "Rahul D.", text: "The group energy is incredible. Shubham still corrects everyone individually despite the class size. Incredible teacher.", stars: 5 },
    { name: "Meera L.", text: "I've been in this batch for 8 months. The community aspect keeps me coming back even when my motivation dips.", stars: 5 },
    { name: "Tarun B.", text: "Started group because it was affordable. Now I see it's also the most fun way to practice yoga.", stars: 5 },
  ],
  "therapeutic-yoga": [
    { name: "Rajesh K.", text: "Chronic back pain for 6 years. After 8 weeks with Shubham's therapeutic protocol, I reduced my pain medication by half.", stars: 5 },
    { name: "Sunita A.", text: "Managing PCOD. Shubham's targeted sequences have made a real difference — my cycles have regulated significantly.", stars: 5 },
    { name: "Dr. Pawan M.", text: "As a physician, I'm skeptical of wellness claims. Shubham's approach is evidence-informed and genuinely effective.", stars: 5 },
  ],
  "kids-yoga": [
    { name: "Pooja S. (Parent)", text: "My son's concentration in school improved noticeably after 6 weeks. His teacher asked what changed. It was yoga.", stars: 5 },
    { name: "Anjali R. (Parent)", text: "My daughter (8) now asks to do yoga herself. That says everything about how much she enjoys Shubham's teaching.", stars: 5 },
    { name: "Ravi K. (Parent)", text: "My teenage son was reluctant. Now he credits yoga for helping him through board exam stress. Life-changing.", stars: 5 },
  ],
};

// ── SEO ─────────────────────────────────────────────────────────────────────
function SEOHead({ program }) {
  useEffect(() => {
    const title = `${program.title} in Haridwar | ${program.subtitle} | Shubh Yog Shala`;
    const desc = `${program.heroLine} Led by Shubham Pundir, M.Sc. Yoga. 7+ years experience. Book a free trial on WhatsApp today.`;
    document.title = title;

    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", desc);
    setMeta("keywords", `${program.title}, yoga Haridwar, yoga classes, Shubham Pundir, Shubh Yog Shala, ${program.subtitle}`);
    setMeta("og:title", title, "property");
    setMeta("og:description", desc, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", desc);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: program.title,
      description: program.description[0],
      provider: {
        "@type": "LocalBusiness",
        name: "Shubh Yog Shala",
        telephone: "+91-9548648227",
        address: { "@type": "PostalAddress", addressLocality: "Haridwar", addressRegion: "Uttarakhand", addressCountry: "IN" },
        sameAs: [`https://wa.me/919548648227`],
      },
      areaServed: "India",
      serviceType: "Yoga Instruction",
      offers: { "@type": "Offer", description: "Free trial class available" },
    };
    let tag = document.getElementById("schema-org");
    if (!tag) { tag = document.createElement("script"); tag.id = "schema-org"; tag.type = "application/ld+json"; document.head.appendChild(tag); }
    tag.textContent = JSON.stringify(schema);
  }, [program]);
  return null;
}

// ── FAQ Accordion ────────────────────────────────────────────────────────────
function FAQ({ faqs, color }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-[#e8d5c0] rounded-xl overflow-hidden">
          <button
            className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-[#fdf8f2] transition-colors duration-200"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-[#3b2a1a] text-sm font-semibold pr-4">{faq.q}</span>
            <span className="text-lg flex-shrink-0 font-light" style={{ color }}>{open === i ? "−" : "+"}</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48" : "max-h-0"}`}>
            <p className="px-6 pb-5 pt-2 text-sm text-[#7a6352] leading-relaxed bg-[#fdf8f2]">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────
function YogaPrograms() {
  const { slug } = useParams();
  const active = PROGRAMS.find((p) => p.slug === slug) || PROGRAMS[0];
  const testimonials = TESTIMONIALS[active.slug] || [];

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [slug]);

  return (
    <div className="min-h-screen bg-[#fdf8f2]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <SEOHead program={active} />

      {/* ── HERO ── */}
      <section className="relative pt-20" style={{ backgroundColor: active.color }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "22px 22px" }} />
        <div className="relative max-w-6xl mx-auto px-6 md:px-14 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-10">
            <div className="flex-1 text-white">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-3xl">{active.emoji}</span>
                <span className="text-xs tracking-[0.4em] uppercase text-white/60">{active.subtitle} · Shubh Yog Shala</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-light leading-tight mb-4">{active.title}</h1>
              <p className="text-white/80 italic text-lg md:text-xl mb-5">"{active.tagline}"</p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mb-8">{active.heroLine}</p>
              <a href={waLink(active.title)} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#3b2a1a] px-8 py-4 text-xs tracking-[0.3em] uppercase font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl">
                <FaWhatsapp className="text-[#25D366] text-lg" />
                Book a Free Trial Class
              </a>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="w-52 h-52 rounded-full flex items-center justify-center text-8xl border-4 border-white/20 shadow-2xl" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                {active.emoji}
              </div>
            </div>
          </div>
        </div>
        <div className="h-12 bg-[#fdf8f2]" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* ── STICKY TABS ── */}
      <section className="bg-[#3b2a1a] sticky top-[56px] z-40 shadow-lg">
        <div className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div className="flex gap-1 px-4 py-3 min-w-max">
            {PROGRAMS.map((p) => (
              <NavLink key={p.slug} to={`/yoga-programs/${p.slug}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-wide whitespace-nowrap transition-all duration-300 ${
                  active.slug === p.slug ? "text-white shadow-lg scale-105" : "text-[#c8a882] hover:text-white hover:bg-white/10"
                }`}
                style={active.slug === p.slug ? { backgroundColor: active.color } : {}}>
                <span className="text-sm">{p.icon}</span>
                <span>{p.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-14 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: active.color }}>About This Program</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#3b2a1a] mb-8 leading-snug">
              What is <span className="italic" style={{ color: active.color }}>{active.title}</span>?
            </h2>
            <div className="space-y-5">
              {active.description.map((para, i) => (
                <p key={i} className="text-[#5a3e2b] text-sm md:text-base leading-relaxed">{para}</p>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-4 p-5 bg-white border border-[#e8d5c0] rounded-2xl shadow-sm">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0" style={{ backgroundColor: active.color }}>🧘</div>
              <div>
                <p className="text-[#3b2a1a] font-semibold text-sm">Shubham Pundir</p>
                <p className="text-[#7a6352] text-xs mt-0.5">M.Sc. Yoga Science · 7+ Years Teaching</p>
                <p className="text-xs mt-1" style={{ color: active.color }}>Lead Instructor — {active.title}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white border border-[#e8d5c0] rounded-3xl p-8 shadow-sm">
              <h3 className="text-[#3b2a1a] text-lg font-semibold mb-6 flex items-center gap-2">
                <span style={{ color: active.color }}>✦</span> What's Included
              </h3>
              <ul className="space-y-4">
                {active.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-0.5 flex-shrink-0 text-base" style={{ color: active.color }} />
                    <span className="text-[#5a3e2b] text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#e8d5c0]">
                <a href={waLink(active.title)} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-white text-xs tracking-[0.3em] uppercase font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: active.color }}>
                  <FaWhatsapp className="text-lg" /> Enquire Now — It's Free
                </a>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { icon: <FaClock />, label: "Flexible Timing" },
                { icon: <FaMapMarkerAlt />, label: "Online & In-Person" },
                { icon: <FaStar />, label: "5★ Rated Program" },
                { icon: <FaPhoneAlt />, label: "Free Consultation" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-[#e8d5c0] rounded-xl px-4 py-3 text-xs text-[#5a3e2b]">
                  <span style={{ color: active.color }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR ── */}
      <section style={{ backgroundColor: active.lightColor }} className="py-20 px-6 md:px-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: active.color }}>Is This Right for You?</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#3b2a1a]">
              Who is <span className="italic" style={{ color: active.color }}>{active.title}</span> for?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {active.whoIsItFor.map((who, i) => (
              <div key={i} className="bg-white rounded-2xl px-6 py-5 border shadow-sm flex items-start gap-3" style={{ borderColor: `${active.color}33` }}>
                <span className="text-xl flex-shrink-0 mt-0.5" style={{ color: active.color }}>✦</span>
                <p className="text-[#3b2a1a] text-sm leading-relaxed">{who}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={waLink(active.title)} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full text-xs tracking-[0.3em] uppercase font-semibold hover:opacity-90 transition shadow-lg"
              style={{ backgroundColor: active.color }}>
              <FaWhatsapp className="text-lg" /> Yes, This is For Me — Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-6 md:px-14 bg-[#fdf8f2]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c8763a] text-xs tracking-[0.4em] uppercase mb-3">Simple to Start</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#3b2a1a]">
              How It <span className="italic text-[#c8763a]">Works</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {active.process.map((step, i) => (
              <div key={i} className="bg-white border border-[#e8d5c0] rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-[#c8763a] transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: active.color }}>
                  {step.step}
                </div>
                <h4 className="text-[#3b2a1a] font-semibold text-sm mb-2">{step.title}</h4>
                <p className="text-[#7a6352] text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 md:px-14 bg-[#3b2a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#f5c98a] text-xs tracking-[0.4em] uppercase mb-3">Real Stories</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              What Students Say About <span className="italic text-[#f5c98a]">{active.title}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#2a1e10] border border-[#5a3e2b] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#c8763a] transition-colors duration-300">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => <FaStar key={j} className="text-[#f5c98a] text-xs" />)}
                </div>
                <p className="text-white/80 text-sm leading-relaxed italic flex-1">"{t.text}"</p>
                <p className="text-[#c8763a] text-xs font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 md:px-14 bg-[#fdf8f2]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8763a] text-xs tracking-[0.4em] uppercase mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#3b2a1a]">
              FAQ — <span className="italic text-[#c8763a]">{active.title}</span>
            </h2>
          </div>
          <FAQ faqs={active.faqs} color={active.color} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 text-center relative overflow-hidden" style={{ backgroundColor: active.color }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative">
          <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-4">Begin Today</p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            Your First Breath<br /><span className="italic">is One Message Away</span>
          </h2>
          <p className="text-white/65 text-sm max-w-md mx-auto mb-10 leading-relaxed">
            Shubham personally responds to every enquiry. No sales team, no bots.
            Just a teacher and a student ready to begin.
          </p>
          <a href={waLink(active.title)} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:scale-105 transition-transform duration-300 shadow-2xl"
            style={{ color: active.color }}>
            <FaWhatsapp className="text-[#25D366] text-xl" />
            Message Shubham on WhatsApp
          </a>
          <p className="mt-5 text-white/40 text-xs">+91 95486 48227 · Free trial · No commitment</p>
        </div>
      </section>

      {/* ── OTHER PROGRAMS ── */}
      <section className="py-20 px-6 md:px-14 bg-[#fdf8f2]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8763a] text-xs tracking-[0.4em] uppercase mb-3">Explore More</p>
            <h2 className="text-2xl md:text-3xl font-light text-[#3b2a1a]">
              Other Programs at <span className="italic text-[#c8763a]">Shubh Yog Shala</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {PROGRAMS.filter((p) => p.slug !== active.slug).map((p) => (
              <NavLink key={p.slug} to={`/yoga-programs/${p.slug}`}
                className="flex flex-col items-center gap-3 p-5 bg-white border border-[#e8d5c0] rounded-2xl shadow-sm hover:shadow-md hover:border-[#c8763a] transition-all duration-300 group text-center">
                <span className="text-3xl">{p.emoji}</span>
                <p className="text-xs font-semibold text-[#3b2a1a] group-hover:text-[#c8763a] transition-colors leading-tight">{p.title}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default YogaPrograms;