import TakeMyFreeAssessment from "./components/TakeMyFreeAssessment";
import BookAFreeConsultation from "./components/BookAFreeConsultation";
import SignMeUpPlease from "./components/SignMeUpPlease";
import LearnMore from "./components/LearnMore";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="pt-[120px] w-full">
        <div className="bg-[#000000] w-full max-h-[990px] h-screen">
          <h1 
            className="max-w-[823px] mx-auto w-full h-full text-white text-[30px] md:text-[54px] leading-[54px] text-center flex items-center justify-center font-alethia"
            data-aos="fade-up"
          >
            Rewire Your Brain And Unlock Your Greatest Potential.
          </h1>
        </div>
        <TakeMyFreeAssessment data-aos="fade-up"/>
        <BookAFreeConsultation data-aos="fade-up"/>
        <SignMeUpPlease data-aos="fade-up"/>
        <LearnMore data-aos="fade-up"/>
        <Testimonials data-aos="fade-up"/>
        <Footer data-aos="fade-up"/>
      </main>
    </>
  );
}
