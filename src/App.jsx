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
import form from "./pages/form";
import SolutionsPage from "./components/solutions/SolutionsPage";

import CareersPage from "./components/solutions/page/CareersPage";




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
            
                videos={[
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/hospitality/j9jpg2fwuossxnry2j52',
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/fnb3nkpclz1hjk3rvitu'
        
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
              
                ]}
                videos={[
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/kuldepp%20new/dmyuxeybo8unkvzforit',
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/kuldepp%20new/wnzsxiz3wd5sgbfpnrgf',
                  'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/kuldepp%20new/z4t4scsfvcqylczcwcfg'
                  
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
