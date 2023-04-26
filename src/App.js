import {BsTwitter} from 'react-icons/bs'

import twitter_profile from './twitter_profile.jpg'
import {BiChevronDown} from 'react-icons/bi'
import {AiOutlineHeart, AiOutlineRetweet} from 'react-icons/ai'
import {HiOutlineChatBubbleOvalLeft} from 'react-icons/hi2'
import {FiShare} from 'react-icons/fi'
import {ImHome2, ImNotification} from 'react-icons/im'
import {IoMdNotificationsOutline, IoNotificationsOutline} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'
import {CiCircleMore} from 'react-icons/ci'
import {BiHash} from 'react-icons/bi'
import tweetimage from './tweetimage.png'
import { IoStatsChartOutline } from "react-icons/io5";
import {MdPhotoSizeSelectActual} from 'react-icons/md'
import {FiSearch} from 'react-icons/fi'
import left_sidebar_image from './left_sidebar_image.png'
import {FiMoreHorizontal} from 'react-icons/fi'
import {AiOutlineFileGif} from 'react-icons/ai'
import {BsEmojiSmile} from 'react-icons/bs'
import {AiFillSchedule} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {FaGlobeAfrica} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'
import tweet_for_md_screens from './tweet_for_md_screens.png'
function App() {
  return (
  <div className="md:px-3 bg-black">
    <div className = "grid grid-cols-[1fr] md:grid-cols-[100px_1fr] lg:grid-cols-[2.5fr_4.3fr_3fr]">
      {/* Left side bar */}
  <div className='w-full md:text-white justify-end md:justify-center'>
        {/* Icon */}
        <div className='pl-1 pb-2 items-stretch flex flex-col shrink-0 text-[15px] max-w-full py-[2px] relative '>
          <h1 className='items-center self-stretch bg-[rgba(0, 0, 0, 0)] box-border cursor-pointer flex basis-auto flex-col grow shrink-0 font-serif text-[15px] min-w-[32px] relative text-start'>
            <a className='items-stretch bg-[rgba(0, 0, 0, 0)] border-b-[rgba(0, 0, 0, 0)] border-l-[rgba(0, 0, 0, 0)]  border-r-[rgba(0, 0, 0, 0)]  border-t-[rgba(0, 0, 0, 0)]  box-border text-[rgb(0, 0, 0)] cursor-poiner flex basis-auto flex-col shrink-0 text-[15px] min-h-[52px] min-w-[52px] outline-none relative text-start transition duration-[0.2s] select-none '>
              <div className='items-center box-border cursor-pointer text-[rgb(239, 243, 244)] flex grow text-[11px] font-bold justify-start leading-[20px] break-words whitespace-pre-wrap pr-36'>
                <BsTwitter className='text-[rgb(214, 217, 219)] cursor-pointer block fill-[rgb(214, 217, 219)] grow text-[12px] font-bold h-[30px] leading-[20px] max-w-full break-words relative text-center select-none align-text-bottom whitespace-pre-wrap w-[50px]' />
              </div>
            </a>
          </h1>
        </div>
        {/* Sidebar links */}
        <div className='flex md:gap-1 items-start md:flex-col md:flex-auto md:pl-20'>

              <div className=''>
                 <a href="#" className='lg:px-3 inline-flex items-center gap-5 text-xl rounded-full font-bold  text-white p-3 px-4 hover:bg-[#1e1f20]'>
                 <ImHome2 className='h-[26px] w-[26px]'/> <span className="hidden lg:block">Home</span>
                  </a>
              </div>

              <div className='hidden md:block lg:hidden items-start '>
                <a href="#" className='lg:px-3 inline-flex items-center gap-5 text-xl rounded-full font-normal tracking-wide  text-white p-3 px-4 hover:bg-[#1e1f20]'>
                <FiSearch className='h-[26px] w-[26px]'/>
                </a>
              </div>

              <div className="hidden lg:block ">
                <a href="#" className='lg:px-3 inline-flex items-center gap-5 text-xl rounded-full font-normal tracking-wide  text-white p-3 px-4 hover:bg-[#1e1f20]'>
                <BiHash className='h-[26px] w-[26px]'/> <span>Explore</span>
                </a>
              </div>

              <div className="">
                 <a href="#" className='lg:px-3 inline-flex items-center gap-5 text-xl rounded-full font-normal tracking-wide  text-white p-3 px-4 hover:bg-[#1e1f20]'>
                 <IoMdNotificationsOutline className='h-[26px] w-[26px]'/> <span className="hidden lg:block">Notifications</span>

                  </a>
              </div>

              <div className="" >
                 <a href="#" className='lg:px-3 inline-flex items-center gap-5 text-xl rounded-full font-normal tracking-wide  text-white p-3 px-4 hover:bg-[#1e1f20]'>
                 <AiOutlineMail className='h-[26px] w-[26px]'/> <span className="hidden lg:block">Messages</span>

                  </a>
              </div>

              <div className="" >
                 <a href="#" className='lg:px-3 inline-flex items-center gap-5 text-xl rounded-full font-normal tracking-wide  text-white p-3 px-4 hover:bg-[#1e1f20]'>
                 <BsBookmark className='h-[26px] w-[26px]'/> <span className="hidden lg:block">Bookmarks</span></a>
              </div>

              <div className="">
                <a href="" className='lg:px-3 inline-flex items-center gap-5 text-xl rounded-full font-normal tracking-wide  text-white p-3 px-4 hover:bg-[#1e1f20]'>
                  <AiFillTwitterSquare className='h-[26px] w-[26px]'/> <span className="hidden lg:block">Bookmarks</span>
                </a>
              </div>

              <div className="" >
                 <a href="#" className='lg:px-3 inline-flex items-center gap-5 text-xl rounded-full font-normal tracking-wide  text-white p-3 px-4 hover:bg-[#1e1f20]'>
                 <BsPerson className='h-[26px] w-[26px]'/> <span className="hidden lg:block">Profile</span>
                </a>
              </div>

              <div>
                 <a href="#" className='lg:px-3 inline-flex items-center gap-5 text-xl rounded-full font-normal tracking-wide  text-white p-3 px-4 hover:bg-[#1e1f20]'>
                 <CiCircleMore className='h-[26px] w-[26px]'/> <span className="hidden lg:block">More</span>
                  </a>
              </div>

              <div className="lg:hidden">
                 <a href="#" className='inline-flex items-center gap-5 text-xl rounded-full font-normal tracking-wide  text-white py-3 px-0 hover:bg-[#1e1f20]'>
                 <img src={tweet_for_md_screens} alt="" className='w-10 h-10'/>
                  </a>
              </div>
              
              <div className=' cursor-pointer text-center text-[15px]  hidden lg:block font-bold transition hover:bg-blue-500 bg-blue-400 py-3 px-8 scroll-px-5 mt-2 mb-3 rounded-full lg:w-52'>
                  <a herf="" className='py-3 text-white'>Tweet</a> 
              </div>
               <div className="lg:hidden w-10 h-20">
                <a href="" className='p-3 px-4  text-white block'><img src={tweet_for_md_screens} alt=""/></a>
              </div> 
            </div>
      </div>

      {/* middle Content */}
      <div className='md:border-x md:border-slate-700'>
            <div className="w-full">
              
              <div className="font-semibold md:px-4 h-full hidden md:block md: py-3">
                <span className="text-white text-xl font-bold">Home</span>
              </div>
              {/* For you and Follwing links container*/}
                <div className='relativew-full flex bg-black md:border-b md:h-[53px] md:border-zinc-600  bg-blur-md md:text-center top-0 md:relative md:mx-auto p-10 lg:p-0'>

                  {/* For you link */}
                  <div className='text-white w-1/2 text-center md:px-4 font-bold hover:bg-zinc-800 flex items-center justify-center'>
                    <span className='text-[15px]'>For you</span>
                  </div>

                  {/* Following link */}
                  <div className='text-white w-1/2 text-center md:px-4 font-bold hover:bg-zinc-800 flex items-center justify-center'>
                    <span>Following</span>
                  </div>
                </div>
             
          </div>
          {/* Tweet input field container */}
          <div className="flex py-1 items-center absolute md:relative md:items-start top-0 mx-3">
            {/* Profile pic */}
            <div className="items-center">
              <div className="flex pt-1 items-stretch h-12 w-12 shrink-0 relative lg:mr-3 text-[15px]">
                <img src={twitter_profile} alt="" className="w-12 h-12 rounded-full"/>
              </div>
              <div className="lg:text-white w-[400px] h-[60px] md:w-[50px] md:h-[50px] md:hidden">
                <BsTwitter className="mx-auto relative md:text-white w-[50px] h-[30px] lg:text-left text-blue-500"/>
              </div>
            </div>
             

            {/* // Publish settings and What's happening  */}
            <div className='hidden pt-2 md:flex md:flex-col md:w-full lg:px-1'>
              <div className='flex flex-auto md:grow pb-3'>
                  <div className="text-[rgb(29,155,240)] cursor-pointer py-0.5 px-3 border-gray-500 text-sm text-bold break-words text-center whitespace-nowrap border rounded-full flex">
                      <span className='box-border cursor-pointer inline text-sm font-bold leading-[16px] text-center whitespace-nowrap '>Everyone</span>
                      <BiChevronDown className="text-lg ml-1"/>
                  </div>
              </div>
            
              {/* Tweet Input */}
              <div className='w-full md:pt-3 pb-4 leading-[24px]'>
                <input type="text" className="hidden md:block md:bg-transparent text-white text-xl outline-none md:mb-0" placeholder="What's happening?"/>
              </div>
              
              <div className="md:flex md:flex-row-reverse md:justify-end md:flex-start-0 md:space-x-2 md:pb-3 flex items-center font-bold text-sm text-blue-500">
                      <span>Everyone can reply</span>
                      <FaGlobeAfrica className='ml-0 pr-1 text-base'/>
              </div>

              {/* options for uploading and the tweet button */}
              <div className=' flex justify-between items-center border-t border-zinc-700 '>
                  <div className='flex mt-3 space-x-4 ml-0.5'>
                    <MdPhotoSizeSelectActual className='text-blue-500 w-[20px]'/>
                    <AiOutlineFileGif className='text-[rgb(29,155,240)] w-[20px]'/>
                    <BsEmojiSmile className='text-[rgb(29,155,240)] w-[20px]'/>
                    <AiFillSchedule className='text-[rgb(29,155,240)] w-[20px]'/>
                    <GoLocation className='text-[rgb(29,155,240)] w-[20px]'/>
                  </div>
                  <div className='mt-3 px-4 py-1 rounded-full h-full bg-[#1D9BF0]'>
                    <div class="h-full">
                      <span className='text-white text-[15px] min-w-6 font-bold h-full'>Tweet</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>







          {/* Tweets */}

          <div className='flex flex-col gap-y-5 md:px-0 pt-1 mt-4 md:mt-0 lg:ml-0 bg-black'>
          <div className=' border-b border-gray-500 pb-4'>
             {/* Tweet  1*/}

              <div className="flex gap-4 border-t-2 border-zinc-600">
                {/* Image Column */}
                <div className="py-3 px-2 shrink-0 w-16 gap-2">
                  <img src={twitter_profile} alt="" className='rounded-full w-full'/>
                </div>
                
                {/* tweet Content */}
                <div>
                  {/* Tweet Header */}
                  <div className="pt-2 ">
                    <span className="text-white mr-1 font-bold">Kalvakuntla Taraka Rama Rao</span>
                    <span className="text-gray-500 font-md">@ktrTRS</span>
                  </div>

                  <div className="w-full space-y-2">
                    <p className="text-white">This week we had the pleasure of chatting with @twitch
                        CEO Dan Clancy to talk about the present state & future of Twitch. We dug into some hard questions and got some great answers that content creators should ABSOLUTELY check out. 
                    </p>
                    <p className='text-blue-500 hover:underline'>https://youtube.com/watch?v=fex553...</p>
                    <div className='rounded-lg pr-10 h-full'>
                      <img src={tweetimage} alt="" className=' h-full '/>
                    </div>
                  </div>

                  <div className='flex justify-between pl-4 mt-3 mr-14 text-gray-500'>
                    {/* like comment share icons */}
                    <HiOutlineChatBubbleOvalLeft />
                      <AiOutlineRetweet className=" rotate-90" />
                      <AiOutlineHeart/>
                      <IoStatsChartOutline/>
                      <FiShare/>
                  </div>

                </div> 
              </div>
              
            </div>

            {/* Tweet 2 */}

            <div className="flex space-x-2 border-b md:border-gray-500 pb-4">
                {/* Image Column */}
                <div className="py-3 px-2 shrink-0 w-16 gap-2">
                  <img src={twitter_profile} alt="" className='rounded-full w-full'/>
                </div>
                
                {/* tweet Content */}
                <div>
                  {/* Tweet Header */}
                  <div className="pt-2 ">
                    <span className="text-white mr-1 font-bold">Kalvakuntla Taraka Rama Rao</span>
                    <span className="text-gray-500 font-md">@ktrTRS</span>
                  </div>

                  <div className="w-full space-y-2">
                    <p className="text-white">This week we had the pleasure of chatting with @twitch
                        CEO Dan Clancy to talk about the present state & future of Twitch. We dug into some hard questions and got some great answers that content creators should ABSOLUTELY check out. 
                    </p>
                    <p className='text-blue-500 hover:underline'>https://youtube.com/watch?v=fex553...</p>
                    {/* <div className='rounded-lg pr-10 h-full'>
                      <img src={tweetimage} alt="" className=' h-full '/>
                    </div> */}
                  </div>

                  <div className='flex justify-between pl-4 mt-3 mr-14 text-gray-500'>
                    {/* like comment share icons */}
                    <HiOutlineChatBubbleOvalLeft />
                      <AiOutlineRetweet className=" rotate-90" />
                      <AiOutlineHeart/>
                      <IoStatsChartOutline/>
                      <FiShare/>
                  </div>

                </div> 
              </div>

              {/* Tweet 3 */}
              <div className="flex gap-4 border-b border-gray-500 pb-1 md:pb-4">
                {/* Image Column */}
                <div className="py-3 px-2 shrink-0 w-16 gap-2">
                  <img src={twitter_profile} alt="" className='rounded-full w-full'/>
                </div>
                
                {/* tweet Content */}
                <div>
                  {/* Tweet Header */}
                  <div className="pt-2 ">
                    <span className="text-white mr-1 font-bold">Kalvakuntla Taraka Rama Rao</span>
                    <span className="text-gray-500 font-md">@ktrTRS</span>
                  </div>

                  <div className="w-full space-y-2">
                    {/* <p className="text-white">This week we had the pleasure of chatting with @twitch
                        CEO Dan Clancy to talk about the present state & future of Twitch. We dug into some hard questions and got some great answers that content creators should ABSOLUTELY check out. 
                    </p>
                    <p className='text-blue-500 hover:underline'>https://youtube.com/watch?v=fex553...</p> */}
                    <div className='rounded-lg pr-10 pt-1 h-full'>
                      <img src={tweetimage} alt="" className=' h-full '/>
                    </div>
                  </div>

                  <div className='flex justify-between pl-4 mt-3 mr-14 text-gray-500'>
                    {/* like comment share icons */}
                    <HiOutlineChatBubbleOvalLeft />
                      <AiOutlineRetweet className=" rotate-90" />
                      <AiOutlineHeart/>
                      <IoStatsChartOutline/>
                      <FiShare/>
                  </div>

                </div>

              </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="sticky flex flex-col pr-28 right-4 mt-1 items-center">

        {/* Search and what's happening */}
        <div className='w-full space-x-8 hidden lg:block'>
        <div className="fixed mb-4 ml-8 flex items-center gap-5 w-[350px]  bg-zinc-800 rounded-full pb-3 pt-2.5 px-5 text-zinc-500" >
          <FiSearch className='text-xl'/><input type="text" className=" placeholder:text-zinc-500 outline-none  w-full text-base bg-zinc-800" placeholder = "Search Twitter"/>
        </div>
        {/* What's Happening */}
        <div className="text-white  mb-3 mt-[60px] w-full bg-clip-border bg-zinc-900 rounded-2xl cursor-pointer">
          <h1 className="px-4 py-3 font-extrabold text-xl">What's happening</h1>
          <div className="py-3 px-4 text-sm hover:bg-zinc-800">
            <p className="text-xs text-zinc-500 flex justify-between">
              <div className="block">
              <div className='space-y-1'>
              <span>NBA .</span> 
              <span>Last night</span>
              <p className="text-sm font-bold leading-5 text-gray-100">My goal now is to postion this image at the right corner</p>
              </div>
              </div>
              <img src={left_sidebar_image} className="w-20 rounded-xl h-20" />
            </p>
          </div>

          <div className="py-3 px-4 text-sm hover:bg-zinc-800 cursor-pointer">
            <p className="text-xs text-zinc-500 flex justify-between">
                <div className="block">
                  <div className=''>
                    <span>NBA .</span> 
                    <span>Last night</span>
                    <p className="text-sm font-bold text-gray-100 leading-5">MS Dhoni</p>
                    <span>Trending with </span> 
                    <span className="text-blue-500 cursor-pointer">#MSDhoni</span>
                  </div>
                </div>

                <div>
                  <FiMoreHorizontal className='text-white w-5 h-5' />
                </div>
            </p>
          </div>

          
          <div className="py-3 px-4 text-sm hover:bg-zinc-800">
            <p className="text-xs text-zinc-500 flex justify-between">
                <div className="block">
                  <div className=''>
                    <span>NBA .</span> 
                    <span>Last night</span>
                    <p className="text-sm font-bold text-gray-100 leading-5">MS Dhoni</p>
                    <span>Trending with </span> 
                    <span className=" cursor-pointer">#MSDhoni</span>
                  </div>
                </div>

                <div>
                  <FiMoreHorizontal className='text-white w-5 h-5' />
                </div>
            </p>
          </div>
          
          
          <div className="py-3 px-4 text-sm hover:bg-zinc-800">
            <p className="text-xs text-zinc-500 flex justify-between">
                <div className="block">
                  <div className=''>
                    <span>NBA .</span> 
                    <span>Last night</span>
                    <p className="text-sm font-bold text-gray-100 leading-5">MS Dhoni</p>
                    <span>Trending with </span> 
                    <span className=" cursor-pointer">#MSDhoni</span>
                  </div>
                </div>

                <div>
                  <FiMoreHorizontal className='text-white w-5 h-5' />
                </div>
            </p>
          </div>

          
          <div className="py-3 px-4 text-sm hover:bg-zinc-800">
            <p className="text-xs text-zinc-500 flex justify-between">
                <div className="block">
                  <div className=''>
                    <span>NBA .</span> 
                    <span>Last night</span>
                    <p className="text-sm font-bold text-gray-100 leading-5">MS Dhoni</p>
                    <span>Trending with </span> 
                    <span className="text-blue-500 cursor-pointer">#MSDhoni</span>
                  </div>
                </div>

                <div>
                  <FiMoreHorizontal className='text-white w-5 h-5' />
                </div>
            </p>
          </div>

          <div className="py-3 px-4 text-sm hover:bg-zinc-800 cursor-pointer">
              <p className="text-base font-md text-blue-500 pb-2 leading-5">Show More</p>
          </div>

        </div>
        </div>
        
        {/* Who to Follow */}
        <div className="text-white mt-2 w-full ml-16 bg-zinc-900 rounded-lg hidden lg:block">
          <h1 className="px-3 text-lg py-4 font-bold">Who to follow</h1>

          {/* Chiranjeevi */}
          <div className='flex justify-between py-3 hover:bg-zinc-800 pr-4 '>
           <div className='flex space-x-4 items-center'>
            <img src={left_sidebar_image} className="w-14 ml-4 rounded-full h-14" />
              <div>
                <p className='text-white font-semibold'>KC Siva Shankar</p>
                <p className='text-zinc-500'>@Siranjeevi</p>
              </div>
           </div>
            <div className='flex h-10 cursor-pointer text-center items-center font-bold transition hover:bg-zinc-500 bg-white px-5 mt-2 rounded-full'>
                <a herf="" className=' text-zinc-900'>Follow</a>
            </div>
          </div>

          {/* Chiranjeevi */}
          <div className='flex justify-between hover:bg-zinc-800 py-3 pr-4 '>
           <div className='flex space-x-4  items-center'>
            <img src={left_sidebar_image} className="w-14 ml-4 rounded-full h-14" />
              <div>
                <p className='text-white font-semibold'>KC Ram Charan</p>
                <p className='text-zinc-500'>@Siranjeevi_koduku</p>
              </div>
           </div>
            <div className='flex h-10 cursor-pointer text-center items-center font-bold transition hover:bg-zinc-500 bg-white px-5 mt-2 rounded-full'>
                <a herf="" className=' text-zinc-900'>Follow</a>
            </div>
          </div>

          <div className="py-3 px-4 text-sm hover:bg-zinc-800 cursor-pointer">
              <p className="text-base font-md text-blue-500 pb-2 leading-5">Show More</p>
          </div>
        </div>


        {/* Who to Follow */}
        <div className="lg:text-white lg:mt-4 lg:w-full lg:ml-16 lg:rounded-lg lg:block hidden">
            <span className='text-zinc-600 text-sm'>Trending with </span>
            <span className='text-zinc-600 text-sm'>Trending with </span> 
            <span className='text-zinc-600 text-sm'>Trending with </span> 
            <span className='text-zinc-600 text-sm'>Trending with </span>  
            <span className='text-zinc-600 text-sm'>Trending with </span> 
            <span className='text-zinc-600 text-sm'>Trending with </span> 
            <span className='text-zinc-600 text-sm'>Trending with </span> 
            <span className='text-zinc-600 text-sm'>Trending with </span> 
            <span className='text-zinc-600 text-sm'>Trending with </span> 
            <span className='text-zinc-600 text-sm'>Trending with </span> 
            <span className='text-zinc-600 text-sm'>Trending with </span> 
            <span className='text-zinc-600 text-sm'>Trending with </span> 
            <span className='text-zinc-600 text-sm'>Trending with </span> 
            <span className='text-zinc-600 text-sm'>Trending with </span> 

        </div>
      </div>
      <div className="md:hidden flex justify-around pb-3">
      <a href="#" className='font-bold  text-white hover:bg-[#1e1f20]'>
        <ImHome2/>
        </a>
        <a href="#" className='text-xl font-bold  text-white hover:bg-[#1e1f20]'>
        <IoMdNotificationsOutline/>
        </a>
      
      
        <a href="#" className='font-bold  text-white hover:bg-[#1e1f20]'>
        <AiOutlineMail/>
        </a>
      
      
        <a href="#" className='font-bold  text-white hover:bg-[#1e1f20]'>
        <BsBookmark/>
        </a>
      
      
        <a href="#" className='font-bold  text-white hover:bg-[#1e1f20]'>
        <FiSearch/>
        </a>
      
    
        <a href="#" className='font-bold  text-white hover:bg-[#1e1f20]'>
        <BsPerson/>
        </a>
      </div>
    </div>
  </div>
  );
}

export default App;
