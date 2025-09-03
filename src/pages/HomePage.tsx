import { hp, wp } from '@/lib/helpers'
import group2392 from '../assets/images/create/Group 2392.png'
import group2382 from '../assets/images/discover/Group 2382.png'
import eveLogo from '../assets/images/eveLogo.png'
import inside01 from "../assets/images/what's_inside/inside 01.png"
import inside02 from "../assets/images/what's_inside/inside 02.png"
import inside03 from "../assets/images/what's_inside/inside 03.png"
import { theme } from '../styles/theme'

export default function HomePage() {
  return (
    <div className={`${theme.bg.primary} ${theme.font.family}`}>
      {/* Header Section */}
      <div
        // className={` bg-green-600 absolute top-0 left-0 w-lg rounded-br-4xl h-50`}  style={{ height: hp(40), width: wp(65) }}
        className={`${theme.bg.gradient} absolute top-0 left-0 `}
        style={{ height: hp(80), width: wp(45), borderBottomRightRadius: 100 }}
      ></div>
      <div className={`relative `}>
        <div className={`${theme.layout.container} `}>
          <div
            className={`${theme.text.secondary} ${theme.font.heading} ${theme.layout.mr}`}
          >
            <img
              src={eveLogo}
              alt="View Featured Events"
              className="w-full rounded-lg"
              style={{ height: hp(6) }}
            />
          </div>
          <nav className={`flex gap-20`}>
            <a href="#" className={`${theme.text.primary} font-semibold`}>
              HOME
            </a>
            <a href="#" className={theme.text.primary}>
              EVENTS
            </a>
            <a href="#" className={theme.text.primary}>
              WEB DASHBOARD
            </a>
          </nav>
        </div>
        <div className={`${theme.layout.section} gap-30`}>
          <div>
            <h2
              className={`${theme.font.heading} text-[#FB26FF] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}
            >
              DISCOVER
            </h2>
            <h3
              className={`${theme.text.secondary} ${theme.font.subheading} text-xl my-2`}
            >
              Exciting Upcoming and Nearby Events
            </h3>
            <p className={`${theme.text.secondary} max-w-xs mb-6`}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Elit, Sed Do Eiusmod
              Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum
              Dol
            </p>
            <div className="flex gap-4">
              <button className={theme.button.primary}>Google Play</button>
              <button className={theme.button.secondary}>App Store</button>
            </div>
          </div>
          <div className="">
            <img src={group2382} alt="Discover" className="size-100" />
          </div>
        </div>
      </div>
      {/* Create Section */}
      <div className={`${theme.bg.section} ${theme.border.section} my-18 py-8`}>
        <div className={theme.layout.section}>
          <div className="flex-1">
            <h2
              className={`${theme.text.secondary} ${theme.font.heading} text-2xl`}
            >
              CREATE{' '}
              <span className={`${theme.text.secondary} font-normal`}>
                and Book Events In One Place
              </span>
            </h2>
            <p className={`${theme.text.secondary} max-w-xs`}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Elit, Sed Do Eiusmod
              Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum
              Dol
            </p>
          </div>
          <div className="flex-1 flex justify-end gap-4">
            <img src={group2392} alt="Create" className="w-30 mr-4" />
          </div>
        </div>
      </div>
      {/* What's Inside Section */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <h2
          className={`${theme.text.primary} ${theme.font.heading} text-xl mb-4`}
        >
          TAKE A PEAK
        </h2>
        <h3 className={`text-gray-900 ${theme.font.subheading} text-lg mb-8`}>
          What's Inside the Eve App
        </h3>
        <div className="flex justify-center gap-8 mb-8">
          <div
            className={`${theme.bg.card} ${theme.border.card} ${theme.border.radius} p-4 w-44`}
          >
            <img
              src={inside01}
              alt="Share Your Favorite Events"
              className="w-full rounded-lg mb-2"
            />
            <div
              className={`${theme.text.primary} ${theme.font.subheading} text-base`}
            >
              Share Your Favorite Events
            </div>
            <div className={`${theme.text.muted} text-sm`}>
              Lorem Ipsum Dolor Sit Amet
            </div>
          </div>
          <div
            className={`${theme.bg.card} ${theme.border.card} ${theme.border.radius} p-4 w-44`}
          >
            <img
              src={inside02}
              alt="View Featured Events"
              className="w-full rounded-lg mb-2"
            />
            <div
              className={`${theme.text.primary} ${theme.font.subheading} text-base`}
            >
              View Featured Events
            </div>
            <div className={`${theme.text.muted} text-sm`}>
              Lorem Ipsum Dolor Sit Amet
            </div>
          </div>
          <div
            className={`${theme.bg.card} ${theme.border.card} ${theme.border.radius} p-4 w-44`}
          >
            <img
              src={inside03}
              alt="View Trending Events"
              className="w-full rounded-lg mb-2"
            />
            <div
              className={`${theme.text.primary} ${theme.font.subheading} text-base`}
            >
              View Trending Events
            </div>
            <div className={`${theme.text.muted} text-sm`}>
              Lorem Ipsum Dolor Sit Amet
            </div>
          </div>
        </div>
      </div>
      {/* Promo Section */}
      <div className={`${theme.bg.promo} py-8 text-center`}>
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-8">
          <h2
            className={`${theme.text.primary} ${theme.font.heading} text-lg mb-4`}
          >
            Create or Book Your First Event Now!
          </h2>
          <div className="flex items-center justify-center gap-8 mb-4">
            <img
              src={inside01}
              alt="App Screenshot"
              className="w-30 rounded-xl"
            />
            <div>
              <div
                className={`${theme.text.primary} ${theme.font.heading} text-base`}
              >
                Get <span className="text-pink-500">20% OFF</span>
              </div>
              <div className={`${theme.text.muted} text-sm`}>
                on your first ticket. Scan the code to download the Eve app.
              </div>
            </div>
            <img src={inside03} alt="QR Code" className="w-20 rounded-lg" />
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer
        className={`${theme.bg.footer} py-8 text-center ${theme.text.primary} font-semibold`}
      >
        <div className="text-lg">eVe</div>
        <div className="text-gray-500 text-sm my-2">
          Terms of Service · Privacy Policy
        </div>
        <div className="text-gray-500 text-sm">Copyright © 2024 Eve</div>
      </footer>
    </div>
  )
}
