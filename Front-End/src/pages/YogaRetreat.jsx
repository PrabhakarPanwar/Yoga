import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import personSitting from "../assets/personSitting.jpg"
import womenYoga from "../assets/womenYoga.jpg"
import womenYoga2 from "../assets/womenYoga2.jpg"


function YogaRetreat() {
  const [tab, setTab] = useState("exp")
  return (
    <div className='w-[100%] bg-[#f5f3ef] '>
      <div className='w-[92%] mx-auto  p-5 '>
        {/* image part */}
        <div className='flex flex-col w-[100%] h-[650px] my-10 relative border-xl-white  '>
          <div className='z-0 relative border-xl-white'>
            <img className='h-[630px] w-[100%]' src={personSitting} alt='asthanga' />
          </div>
          <div className='flex flex-col shadow-md z-10 absolute bottom-[90px] start-[120px] border-xl-white text-white'>
            <p className='text-2xl'>SHUBHYOGSHALA  YOAG VACATION</p>
            <p className='shadow-xl'>Relax In Nature | Reacharge In Yoga | Grow In Dicipline</p>
          </div>
        </div>
        {/* discription part */}
        <div className='flex w-[100%] flex-col lg:flex-row  justify-between h-[600px] relative gap-9 my-10'>
          <div className='flex flex-col lg:w-[65%]  '>
            <p>Available year-round, the Yoga Vacation programme in India offers the chance to immerse yourself fully in the yogic lifestyle and to dive deep into the ancient teachings of India. You can leave behind the stresses and strains of daily life to rediscover the joy of living in the idyllic setting of a traditional Indian Ashram. Come to experience the profound benefits that yoga brings to mind, body and spirit. During your stay, discover new ways of thinking and increase your spiritual knowledge through daily talks. Perfect your own practices and clear doubts with individual guidance from our teachers.
            </p>

            <p className='hidden lg:flex'>Immerse yourself in the calming atmosphere of the Ashram, making new friends with like-minded people from all corners of the world. You will begin to discover your true nature and develop skills to improve the health of body and mind. The programme will help you to establish a solid foundation for living a life of peace and happiness.</p>

            <p className='hidden lg:flex'>Based on the Five Points of Yoga of Swami Vishnudevananda, the Yoga Vacation promotes radiant health and inner peace. Whether you are a beginner or a seasoned practitioner, you will increase your vitality, positivity, and ease of being as a result of daily yoga practice, a healthy vegetarian diet, silent meditation sessions, and uplifting teachings. You will experience some of the devotional practices, traditional to India, that are an integral part of your stay here. Your mind will expand and your heart will open.</p>
          </div>

          <div className='lg:w-[35%] bg-blue-500 relative flex justify-center items-center'>
            <div className='sticky top-[200px] flex flex-col w-full max-w-[350px] bg-red-300 h-[260px] items-center justify-center rounded-md shadow-xl p-4 '>
              <ul className="space-y-2 text-center">
                <li><Link to="" className="hover:underline">What to Expect</Link></li>
                <li><Link to="" className="hover:underline">Daily Schedule</Link></li>
                <li><Link to="" className="hover:underline">Accommodations</Link></li>
                <li><Link to="" className="hover:underline">How to Get Here</Link></li>
                <li><Link to="" className="hover:underline">Pricing</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* about part */}

        {/* outside the div*/}
        <div className='flex flex-col lg:flex-row gap-[30px] py-10'>
          <div className='flex flex-col md:flex-row justify-center items-center lg:block'>
            <div className='flex flex-wrap lg:flex-nowrap gap-4'>
              <button onClick={() => setTab("exp")} className=' retreatButton'>EXPERIENCE</button>
              <button onClick={() => setTab("whyJoin")} className=' retreatButton'>WHY JOIN</button>
              <button onClick={() => setTab("whoFor")} className='retreatButton'>WHO THIS IS FOR</button>
              <button onClick={() => setTab("takeAway")} className=' retreatButton'>TAKE AWAY</button>
            </div>
            {tab == "exp" ? <div className=' retreatTabs'>
              <list className='TabsList' >
                <li className=''>A regular yoga and meditation routine<br />
                  Simple practices you can continue at home without special equipment or conditions.</li>
                <li className=''>
                  Better understanding of classical yoga<br />
                  Clear guidance on postures, breathing, relaxation, and the principles behind them.
                  Tools to manage stress
                </li>
                <li className=''>
                  Tools to manage stress
                  <br />
                  Practical techniques to calm the breath, relax the body, and steady the mind.
                </li>
                <li className=''> Clearer daily habits
                  <br />
                  Experience of a structured routine that can be adapted to everyday life.</li>
              </list>
            </div> : ""}
            {tab == "whyJoin" ? <div className=' retreatTabs'>
              <list className='TabsList' >
                <li className=''>A regular yoga and meditation routine
                  <br />
                  Simple practices you can continue at home without special equipment or conditions.</li>
                <li className=''>
                  Better understanding of classical yoga<br />
                  Clear guidance on postures, breathing, relaxation, and the principles behind them.
                  Tools to manage stress
                </li>
                <li className=''>
                  Tools to manage stress
                  <br />
                  Practical techniques to calm the breath, relax the body, and steady the mind.
                </li>
                <li className=''> Clearer daily habits
                  <br />
                  Experience of a structured routine that can be adapted to everyday life.</li>
              </list>
            </div> : ""}
            {tab == "whoFor" ? <div className=' retreatTabs'>
              <list className='TabsList' >
                <li className=''>A regular yoga and meditation routine
                  <br />
                  Simple practices you can continue at home without special equipment or conditions.</li>
                <li className=''>
                  Better understanding of classical yoga<br />
                  Clear guidance on postures, breathing, relaxation, and the principles behind them.
                  Tools to manage stress
                </li>
                <li className=''>
                  Tools to manage stress
                  <br />
                  Practical techniques to calm the breath, relax the body, and steady the mind.
                </li>
                <li className=''> Clearer daily habits
                  <br />
                  Experience of a structured routine that can be adapted to everyday life.</li>
              </list>
            </div> : ""}
            {tab == "takeAway" ? <div className=' retreatTabs'>
              <list className='TabsList' >
                <li className=''>A regular yoga and meditation routine
                  <br />
                  Simple practices you can continue at home without special equipment or conditions.</li>
                <li className=''>
                  Better understanding of classical yoga<br />
                  Clear guidance on postures, breathing, relaxation, and the principles behind them.
                  Tools to manage stress
                </li>
                <li className=''>
                  Tools to manage stress
                  <br />
                  Practical techniques to calm the breath, relax the body, and steady the mind.
                </li>
                <li className=''> Clearer daily habits
                  <br />
                  Experience of a structured routine that can be adapted to everyday life.</li>
              </list>
            </div> : ""}
          </div>
          <div className='mx-auto'>
            <img className='' src={womenYoga} alt='Yoga' />
          </div>
        </div>
        {/* date and price part */}
        <div className='mt-[30px] flex flex-col bg-white p-5'>
          <div className='flex flex-col items-center justify-center gap-[20px]'>
            <h1 className='h-[55px] w-[280px] shadow-2xl text-center flex justify-center items-center p-2'>Dates & Prices</h1>
            <p className='w-[70%] text-center'>Yoga Vacation is a 14-day cycle. You can come and leave any day, respecting minimum stay guidelines.
              Beginners are advised to join at the beginning of the cycle.</p>
          </div>
          <div className='flex w-[100%] mt-[70px] mb-[30px] gap-[50px]'>
            <div className='flex-1 flex flex-col mt-4'>
              <list className='flex flex-col justify-center items-center text-xl'>
                <li>Hotel Noor,NarendaraNagar Near rishikesh</li>
                <li>Hotel Noor,NarendaraNagar Near rishikesh</li>
                <li>Hotel Noor,NarendaraNagar Near rishikesh</li>
                <li>Hotel Noor,NarendaraNagar Near rishikesh</li>
              </list>
            </div>
            <div className='flex-1 flex'>
              <img src={womenYoga2} alt='Yoga' />
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default YogaRetreat