import TakeMyFreeAssessment from "./components/TakeMyFreeAssessment";
import BookAFreeConsultation from "./components/BookAFreeConsultation";
import SignMeUpPlease from "./components/SignMeUpPlease";
import LearnMore from "./components/LearnMore";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="pt-[120px] w-full">
        <div className="bg-black w-full h-screen relative">
          {/* <Image
            src='/assets/pan-left.svg'
            alt="pan-left"
            width={284}
            height={363}
            className="absolute -bottom-[230px] left-0 z-30"
          />
          <Image
            src='/assets/pan-right.svg'
            alt="pan-right"
            width={284}
            height={363}
            className="absolute -bottom-[230px] right-0 z-30"
          /> */}
          <div className="flex items-center justify-center min-h-full">
            <h1 className="max-w-[823px] mx-auto w-full h-full text-white text-[30px] md:text-[54px] leading-[54px] text-center font-alethia">
              Rewire Your Brain And Unlock Your Greatest Potential.
            </h1>
          </div>
        </div>
        <TakeMyFreeAssessment data-aos="fade-up" />
        <BookAFreeConsultation data-aos="fade-up" />
        <SignMeUpPlease data-aos="fade-up" />
        <LearnMore data-aos="fade-up" />
        <Testimonials data-aos="fade-up" />
        <Footer data-aos="fade-up" />
      </main>
    </>
  );
}
