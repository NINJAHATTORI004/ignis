import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Branding from "/src/components/solutions/allBubbles/Branding"; // Import your components
import ContentCreation from "/src/components/solutions/allBubbles/ContentCreation";
import SocialMediaB from "/src/components/solutions/allBubbles/SocialMediaB";
import PROutreach from "/src/components/solutions/allBubbles/PROutreach";
import Consultation from "/src/components/solutions/allBubbles/Consultation";
import Strategy from "/src/components/solutions/allBubbles/Strategy";
import WebsiteAndAppDevelopment from "/src/components/solutions/allBubbles/WebsiteAndAppDevelopment"; // New Component
import VisualEffectsAnimationCGI from "/src/components/solutions/allBubbles/VisualEffectsAnimationCGI"; // New Component
import PreWeddingCinematics from "/src/components/solutions/allBubbles/PreWeddingCinematics"; // New Component;
import TrademarkAndIP from "/src/components/solutions/allBubbles/TrademarkAndIP"; // New Component;
import CorporateIdentityDecks from "/src/components/solutions/allBubbles/CorporateIdentityDecks"; // New Component;

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import SolutionsPage from "./components/solutions/SolutionsPage";
// import BubblePage from "./components/solutions/page/Bubblepage";
import CareersPage from "./components/solutions/page/CareersPage";

// import Blog from "./pages/Blog";
// import BlogHome from "./components/BlogHome";
// import Marketing from "./components/Marketing";
// import Seo from "./components/Seo";
// import PPC from "./components/PPC";
// import SocialMedia from "./components/SocialMedia";
// import WebDesign from "./components/WebDesign";
// import Internet from "./components/Internet";
// import CaseHome from "./components/casestudy/CaseHome";

import Blog from "./pages/Blog";
import BlogHome from "./components/BlogHome";
import Marketing from "./components/Marketing";
import Seo from "./components/Seo";
import PPC from "./components/PPC";
import SocialMedia from "./components/SocialMedia";
import WebDesign from "./components/WebDesign";
import Internet from "./components/Internet";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CancellationPage from "./components/CancellationPage";
import CaseHome from "./components/casestudy/CaseHome";
import ResetPassword from "./components/ResetPassword";

// Authentication
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import CompleteRegister from "./components/CompleteRegister";
import PrivateRoutes from "./utils/PrivateRoutes";
// import TrademarkAndIP from './components/solutions/allBubbles/TrademarkAndIP';
// import CorporateIdentityDecks from './components/solutions/allBubbles/CorporateIdentityDecks';

import FAQ from "./FAQ's/FAQ";
import Blog1 from "./blogs/Blog1";
import Blog2 from "./blogs/Blog2";
import Blog3 from "./blogs/Blog3";
import Blog4 from "./blogs/Blog4";
import BlogMark from "./blogs/BlogMark";

import GoogleRegister from "./components/GoogleRegister";
import Gallery from "./components/Gallery";
import TalkToUs from "./pages/TalkToUs";
import Page1 from "./components/casestudy/casestudypages/page1";
import Page2 from "./components/casestudy/casestudypages/page2";
import Page3 from "./components/casestudy/casestudypages/page3";
import Page4 from "./components/casestudy/casestudypages/page4";
import Page5 from "./components/casestudy/casestudypages/page5";
import ReferralPage from "./pages/ReferralPage";
import form from "./components/form";
// import Interior1 from "./assets/images/interior/DSC07818 copy_1_11zon.jpg";
// import Interior2 from "./assets/images/interior/DSC07904 copy_2_11zon.jpg";
// import Interior3 from "./assets/images/interior/DSC07909 0_3_11zon.jpg";
// import Interior4 from "./assets/images/interior/DSC07909 2_4_11zon.jpg";
// import Interior5 from "./assets/images/interior/DSC07909 3_5_11zon.jpg";
// import Interior6 from "./assets/images/interior/DSC07909 4_6_11zon.jpg";


// import InteriorV2 from "./assets/videos/interior/Coprate Gifting.mp4";
// import InteriorV3 from "./assets/videos/interior/Final (1).mp4";
// import InteriorV4 from "./assets/videos/interior/Olio Final.mp4";
// import InteriorV5 from "./assets/videos/interior/Reel 2.mp4";
// import InteriorV6 from "./assets/videos/interior/Silverlake.mp4";

// import Wedding1 from "./assets/images/wedding/DSC00544.jpg";
// import Wedding2 from "./assets/images/wedding/DSC00560.jpg";
// import Wedding3 from "./assets/images/wedding/DSC00878.jpg";
// import Wedding4 from "./assets/images/wedding/DSC01135.jpg";
// import Wedding5 from "./assets/images/wedding/DSC01585.jpg";
// import Wedding6 from "./assets/images/wedding/DSC01590.jpg";
// import Wedding7 from "./assets/images/wedding/DSC01632.jpg";
// import Wedding8 from "./assets/images/wedding/DSC01635.jpg";
// import Wedding9 from "./assets/images/wedding/DSC03756.jpg";
// import Wedding10 from "./assets/images/wedding/DSC03931.jpg";
// import Wedding11 from "./assets/images/wedding/DSC04173.jpg";
// import Wedding12 from "./assets/images/wedding/DSC04175.jpg";
// import Wedding13 from "./assets/images/wedding/DSC04183.jpg";
// import Wedding14 from "./assets/images/wedding/DSC04195.jpg";
// import Wedding15 from "./assets/images/wedding/DSC04212.jpg";
// import Wedding16 from "./assets/images/wedding/DSC04217.jpg";
// import Wedding17 from "./assets/images/wedding/DSC04233.jpg";
// import Wedding18 from "./assets/images/wedding/DSC04237.jpg";
// import Wedding19 from "./assets/images/wedding/DSC04239.jpg";
//import Wedding20 from "./assets/images/wedding/DSC04272.jpg";



// import Lifestyle1 from "./assets/images/lifstyle/DJP06029-01.jpg";
//import Lifestyle2 from "./assets/images/lifstyle/DJP06048-01.jpg";
//import Lifestyle3 from "./assets/images/lifstyle/DJP06184-01.jpg";
//import Lifestyle4 from "./assets/images/lifstyle/DJP06186-01.jpg";
//import Lifestyle5 from "./assets/images/lifstyle/DJP06287 final 1-01.jpg";
//import Lifestyle6 from "./assets/images/lifstyle/DJP06290 final 1-01.jpg";
//import Lifestyle7 from "./assets/images/lifstyle/DJP06334 final 1-01 copy.jpg";
//import Lifestyle8 from "./assets/images/lifstyle/DJP06354 final 1-01.jpg";
//import Lifestyle9 from "./assets/images/lifstyle/DJP06289 final 1-01.jpg";


// import HospitalityV3 from "./assets/videos/hospitality/Raddison Making reel 1.mp4";
// import HospitalityV4 from "./assets/videos/hospitality/Slake.mp4";
// import HospitalityV5 from "./assets/videos/hospitality/sodhai making reel.mp4";
// import HospitalityV6 from "./assets/videos/hospitality/Sodhani Ganesh Chaturti.mp4";
// import HospitalityV7 from "./assets/videos/hospitality/Sodhani reel.mp4";
// import HospitalityV8 from "./assets/videos/hospitality/sodhani sweets.mp4";

// import Fitness1 from "./assets/images/fitness/ANKUSH & SUNNY FIT 1.jpg";
// import Fitness2 from "./assets/images/fitness/ANKUSH FIT 1.jpg";
// import Fitness3 from "./assets/images/fitness/ANKUSH FIT 2.jpg";
// import Fitness4 from "./assets/images/fitness/ANKUSH FIT 3.jpg";
// import Fitness5 from "./assets/images/fitness/ANKUSH FIT 4.jpg";
// import Fitness6 from "./assets/images/fitness/ANKUSH FIT 5.jpg";
// import Fitness7 from "./assets/images/fitness/ANKUSH FIT 6.jpg";
// import Fitness8 from "./assets/images/fitness/ANKUSH FIT 7.jpg";
// import Fitness9 from "./assets/images/fitness/ANKUSH FIT 8.jpg";
// import Fitness10 from "./assets/images/fitness/ANKUSH FIT 9.jpg";
// import Fitness11 from "./assets/images/fitness/SUNNY FIT 1.jpg";
// import Fitness12 from "./assets/images/fitness/SUNNY FIT 2.jpg";
// import Fitness13 from "./assets/images/fitness/SUNNY FIT 3.jpg";
// import Fitness14 from "./assets/images/fitness/SUNNY FIT 4.jpg";
// import Fitness15 from "./assets/images/fitness/SUNNY FIT 5.jpg";

// import Editorial1 from "./assets/images/editorial/DSC01852 copy.jpg"; // 1
// import Editorial2 from "./assets/images/editorial/DSC01853 copy.jpg"; // 2
// import Editorial3 from "./assets/images/editorial/DSC01867 copy.jpg"; // 3
// import Editorial4 from "./assets/images/editorial/DSC01875 copy.jpg"; // 4
// import Editorial5 from "./assets/images/editorial/DSC01905 copy.jpg"; // 5
// import Editorial6 from "./assets/images/editorial/DSC01924 copy.jpg"; // 6
// import Editorial7 from "./assets/images/editorial/DSC01927 copy.jpg"; // 7
// import Editorial8 from "./assets/images/editorial/DSC01935 copy.jpg"; // 8
// import Editorial9 from "./assets/images/editorial/DSC01947 copy.jpg"; // 9
// import Editorial10 from "./assets/images/editorial/DSC02074 copy.jpg"; // 10
// import Editorial11 from "./assets/images/editorial/DSC02077 copy.jpg"; // 11
// import Editorial12 from "./assets/images/editorial/DSC02080 copy.jpg"; // 12
// import Editorial13 from "./assets/images/editorial/DSC02082 copy.jpg"; // 13
// import Editorial14 from "./assets/images/editorial/DSC02085 copy.jpg"; // 14
// import Editorial15 from "./assets/images/editorial/DSC02106 copy.jpg"; // 15
// import Editorial16 from "./assets/images/editorial/DSC02157 Final.jpg"; // 16
// import Editorial17 from "./assets/images/editorial/DSC09560 copy.jpg"; // 17
// import Editorial18 from "./assets/images/editorial/DSC09596 copy.jpg"; // 18
// import Editorial19 from "./assets/images/editorial/DSC09599 copy.jpg"; // 19
// import Editorial20 from "./assets/images/editorial/DSC09602 copy.jpg"; // 20
// import Editorial21 from "./assets/images/editorial/DSC09645 copy.jpg"; // 21
// import Editorial22 from "./assets/images/editorial/DSC09655 copy.jpg"; // 22
// import Editorial23 from "./assets/images/editorial/NIDHI BEAUTY SHOT (1).jpg"; // 23
// import Editorial24 from "./assets/images/editorial/NIDHI BEAUTY SHOT (2).jpg"; // 24
// import Editorial25 from "./assets/images/editorial/NIDHI BEAUTY SHOT (3).jpg"; // 25
// import Editorial26 from "./assets/images/editorial/NIDHI BEAUTY SHOT (4).jpg"; // 26
// import Editorial27 from "./assets/images/editorial/NIDHI BEAUTY SHOT (5).jpg"; // 27
// import Editorial28 from "./assets/images/editorial/NIDHI BEAUTY SHOT (6).jpg"; // 28
// import Editorial29 from "./assets/images/editorial/NIDHI BEAUTY SHOT (7).jpg"; // 29
// import Editorial30 from "./assets/images/editorial/NIDHI BEAUTY SHOT (8).jpg"; // 30
// import Editorial31 from "./assets/images/editorial/NIDHI BEAUTY SHOT (9).jpg"; // 31


// import FashionV3 from "./assets/videos/fashion/3214177673378826225_62038889906.mp4";
// import FashionV4 from "./assets/videos/fashion/3217482099849622725_62038889906.mp4";
// import FashionV5 from "./assets/videos/fashion/3253330488068470368_62038889906.mp4";
// import FashionV6 from "./assets/videos/fashion/3274194461238682969_62038889906.mp4";


// import AutomobilesV3 from "./assets/videos/automobiles/3199733625792534602_62038889906.mp4";
// import AutomobilesV4 from "./assets/videos/automobiles/3359039713419070844_62038889906.mp4";

function App() {
  const { user } = useAuth0();
  console.log("Current User", user);

  return (
    <>
      <Router>
        {/* Define Routes here */}
        <Routes>
          {/* Redirect to home page on load */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/googleRegister" element={<GoogleRegister />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/termsandConditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/completeregister" element={<CompleteRegister />} />
          <Route path="/cancellationpage" element={<CancellationPage />} />
          <Route
            path="/interior"
            element={
              <Gallery
                Title="Interior"
                images={[
                  // Interior1,
                  // Interior2,
                  // Interior3,
                  // Interior4,
                  // Interior5,
                  // Interior6,
                ]}
                videos={[
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/interior/zgrmtkrjaef0wjfxhd65',
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/gwerv0klfvvi3vxxqfch'
                  // InteriorV2,
                  // InteriorV3,
                  // InteriorV4,
                  // InteriorV5,
                  // InteriorV6,
                ]}
                banner={['https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/interior/zgrmtkrjaef0wjfxhd65']}
              />
            }
          />

          <Route
            path="/fashion"
            element={
              <Gallery
                Title="Fashion"
                images={[
                  // // Editorial1,
                  // Editorial2,
                  // Editorial3,
                  // Editorial4,
                  // // Editorial5,

                  // // Editorial6,

                  // // Editorial7,

                  // Editorial8,

                  // Editorial9,
                  // Editorial10,
                ]}
                videos={[
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/fashion/vqjzvlajz2uymal2wrgf',
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/fashion/nxgfsuti9yegeulktzdo',
                  // FashionV3,
                  // FashionV4,
                  // FashionV5,
                  // FashionV6,
                ]}
                banner={['https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/fashion/vqjzvlajz2uymal2wrgf']}
              />
            }
          />
          <Route
            path="/hospitality"
            element={
              <Gallery
                Title="Hospitality"
                // images={[
                //   Lifestyle2,
                //   Lifestyle3,
                //   Lifestyle4,
                //   Lifestyle5,
                //   Lifestyle6,
                //   Lifestyle7,
                //   Lifestyle8,
                //   Lifestyle9,
                // ]}
                videos={[
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/hospitality/j9jpg2fwuossxnry2j52',
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/fnb3nkpclz1hjk3rvitu'
                  // HospitalityV2,
                  // HospitalityV3,
                  // HospitalityV4,
                  // HospitalityV5,
                  // HospitalityV6,
                  // HospitalityV7,
                  // HospitalityV8,
                ]}
                banner={['https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/hospitality/j9jpg2fwuossxnry2j52']}
              />
            }
          />
          <Route
            path="/automobiles"
            element={
              <Gallery
                Title="Automobiles"
                images={[
                  // Automobiles,
                  // Interior2,
                  // Interior3,
                  // Interior4,
                  // Interior5,
                  // Interior6,
                ]}
                videos={[
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/kuldepp%20new/dmyuxeybo8unkvzforit',
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/kuldepp%20new/wnzsxiz3wd5sgbfpnrgf',
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/kuldepp%20new/z4t4scsfvcqylczcwcfg'
                  // AutomobilesV3,
                  // AutomobilesV4,
                  // AutomobilesV5,
                  // AutomobilesV6,
                ]}
                banner={['https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/kuldepp%20new/dmyuxeybo8unkvzforit']}
              />
            }
          />
          <Route
            path="/wedding"
            element={
              <Gallery
                Title="Wedding"
                images={[
                  // Wedding1,
                  // Wedding2,
                  // // Wedding3,
                  // Wedding4,
                  // Wedding5,
                  // // Wedding6,
                  // Wedding7,
                  // // Wedding8,
                  // Wedding9,
                  // Wedding10,
                  // // Wedding11,
                  // // Wedding12,
                  // // Wedding13,
                  // Wedding14,
                  // Wedding15,
                  // // Wedding16,
                  // // Wedding17,
                  // // Wedding18,
                  // // Wedding19,
                  // Wedding20,
                ]}
                videos={['https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/wedding/dl1yefmtysj5vhdk2cp9', 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/wedding/vncla7nbeoy8xkejcgy1']}
                banner={['https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/wedding/dl1yefmtysj5vhdk2cp9']}
              />
            }
          />

          {/* Protected Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/referralpage" element={<ReferralPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            {/* <Route path="/" element={<BubbleGrid />} /> */}
            <Route path="/branding" element={<Branding />} />
            <Route path="/content_creation" element={<ContentCreation />} />
            <Route path="/social_media" element={<SocialMediaB />} />
            <Route path="/pr_outreach" element={<PROutreach />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/trademarkandip" element={<TrademarkAndIP />} />
            <Route path="/corporateid" element={<CorporateIdentityDecks />} />
            <Route
              path="/website_and_app_development"
              element={<WebsiteAndAppDevelopment />}
            />
            <Route
              path="/visual_effects_animation_and_cgi_services"
              element={<VisualEffectsAnimationCGI />}
            />
            <Route
              path="/pre_wedding_cinematics"
              element={<PreWeddingCinematics />}
            />
          </Route>

          Blog Pages
          <Route path="/blogs" element={<Blog />}>
            <Route index element={<BlogHome />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="seo" element={<Seo />} />
            <Route path="ppc" element={<PPC />} />
            <Route path="social-media" element={<SocialMedia />} />
            <Route path="web-design" element={<WebDesign />} />
            <Route path="internet" element={<Internet />} />
          </Route>

          <Route path="/blogs/marketing-blog1" element={<Blog1 />} />
          <Route path="/blogs/seo-blog1" element={<Blog2 />} />
          <Route path="/blogs/seo-blog2" element={<Blog3 />} />
          <Route path="/blogs/technology-blog1" element={<Blog4 />} />
          <Route path="/blogs/visual-production-blog1" element={<BlogMark />} />
          {/* Case Study */}
          <Route path="case-study" element={<CaseHome />}></Route>
          <Route path="Rooftop-Heaven-Growth-Journey" element={<Page1 />} />
          <Route
            path="From-Local-Gem-to-Must-Visit-Destination"
            element={<Page2 />}
          />

          <Route path="frequently-asked-questions" element={<FAQ />} />

          <Route path="careers" element={<CareersPage />} />
          <Route path="talk-to-us" element={<TalkToUs />} />
          <Route path="casestudy/page1" element={<Page1 />} />
          <Route path="casestudy/page2" element={<Page2 />} />
          <Route path="casestudy/page3" element={<Page3 />} />
          <Route path="casestudy/page4" element={<Page4 />} />
          <Route path="casestudy/page5" element={<Page5 />} />
        </Routes>

        {/* Toast Notifications */}
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
