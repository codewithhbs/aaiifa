import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home/Home.jsx';
import AboutUs from './pages/About/About.jsx';
import GoverningBodies from './pages/OurTeam/Governing.jsx';
import LifeMembers from './pages/OurTeam/LifeMembers.jsx';
import NationalMember from './pages/OurTeam/NationalMember.jsx';
import ActiveMembers from './pages/OurTeam/ActiveMember.jsx';
import PastEvents from './pages/PastEvents/PastEvents.jsx';
import PastVideos from './pages/PastEvents/PastVideos.jsx';
import SteelHandbook from './pages/SteelHandbook/page.jsx';
import ContactSection from './pages/Contact/page.jsx';
import Newsletter2016 from './pages/Newsletters/Newsletter2016.jsx';
import Newsletter2017 from './pages/Newsletters/Newsletter2017.jsx';
import Newsletter2018 from './pages/Newsletters/Newsletter2018.jsx';
import Newsletter2019 from './pages/Newsletters/Newsletter2019.jsx';
import Newsletter2020 from './pages/Newsletters/Newsletter2020.jsx';
import Newsletter2021 from './pages/Newsletters/Newsletter2021.jsx';
import Newsletter2022 from './pages/Newsletters/Newsletter2022.jsx';
import Newsletter2023 from './pages/Newsletters/Newsletter2023.jsx';
import Newsletter2024 from './pages/Newsletters/Newsletter2024.jsx';
import Newsletter2025 from './pages/Newsletters/Newsletter2025.jsx';
import PartnersSection from './pages/Partners/PartnersSection.jsx';
import TermsAndConditions from './pages/policy/TermsAndConditions.jsx';
import PrivacyPolicy from './pages/policy/PrivacyPolicy.jsx';
import RefundPolicy from './pages/policy/RefundPolicy.jsx';
import EventGallery2022 from './pages/PastEvents/PastEvent2022.jsx';
import EventGallery2019 from './pages/PastEvents/PastEvent2019.jsx';
import EventGallery2018 from './pages/PastEvents/PastEvent2018.jsx';
import EventGallery2017 from './pages/PastEvents/PastEvent2017.jsx';
import Breadcrumb from './components/Breadcrumb.jsx';
import ThankYouPopup from './components/ThankYouPopup.jsx';
import AIIFAMembershipForm  from './pages/JoinUsForm/JoinUs';
import Newsletter from './pages/Newsletters/Newsletter.jsx';
import PastVideos2025 from './pages/PastEvents/PastVideos2025.jsx';
import PastVideos2024 from './pages/PastEvents/PastVideos2024.jsx';
import PastVideos2023 from './pages/PastEvents/PastVideos2023.jsx';
import PastSteelExTeaser from './pages/PastEvents/PastSteelExTeaser.jsx';


// ✅ Inner component to access `useLocation` properly
function AppContent() {
  const location = useLocation();
  const showBreadcrumb = location.pathname !== "/";

  return (
    <>
      <Header />
      {showBreadcrumb && <Breadcrumb />}
      <ThankYouPopup /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-industry" element={<AboutUs />} />
        <Route path="governing-bodies" element={<GoverningBodies />} />
        <Route path="life-members" element={<LifeMembers />} />
        <Route path="national-member" element={<NationalMember />} />
        <Route path="active-member" element={<ActiveMembers />} />
        <Route path="past-events" element={<PastEvents />} />
        <Route path="past-videos" element={<PastVideos />} />
        <Route path="steel-handbook" element={<SteelHandbook />} />
        <Route path="contact" element={<ContactSection />} />
        <Route path="newsletter-2016" element={<Newsletter2016 />} />
        <Route path="newsletter-2017" element={<Newsletter2017 />} />
        <Route path="newsletter-2018" element={<Newsletter2018 />} />
        <Route path="newsletter-2019" element={<Newsletter2019 />} />
        <Route path="newsletter-2020" element={<Newsletter2020 />} />
        <Route path="newsletter-2021" element={<Newsletter2021 />} />
        <Route path="newsletter-2022" element={<Newsletter2022 />} />
        <Route path="newsletter-2023" element={<Newsletter2023 />} />
        <Route path="newsletter-2024" element={<Newsletter2024 />} />
        <Route path="newsletter-2025" element={<Newsletter2025 />} />
        <Route path="our-partner" element={<PartnersSection />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="past-event-2022" element={<EventGallery2022 />} />
        <Route path="past-event-2019" element={<EventGallery2019 />} />
        <Route path="past-event-2018" element={<EventGallery2018 />} />
        <Route path="past-event-2017" element={<EventGallery2017 />} />
        <Route path="join-us" element={<AIIFAMembershipForm />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/past-videos-2025" element={<PastVideos2025  />} />
        <Route path="/past-videos-2024" element={<PastVideos2024  />} />
        <Route path="/past-videos-2023" element={<PastVideos2023  />} />
        <Route path="/steelex-teasers" element={<PastSteelExTeaser  />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;