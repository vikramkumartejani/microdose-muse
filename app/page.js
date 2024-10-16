import TakeMyFreeAssessment from "./components/TakeMyFreeAssessment";
import BookAFreeConsultation from "./components/BookAFreeConsultation";
import SignMeUpPlease from "./components/SignMeUpPlease";
import LearnMore from "./components/LearnMore";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Image from "next/image";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <main className="pt-[70px] w-full">
        <div className="relative bg-black w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/assets/MMHeaderVideoMobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Overlay */}
          <div className="relative z-10">

            <div className="flex items-center justify-center">
              <h1 className="max-w-[823px] mx-auto w-full h-full text-white text-[30px] md:text-[54px] leading-[54px] text-center font-alethia">
                Rewire Your Brain And Unlock Your Greatest Potential.
              </h1>
            </div>
          </div>
        </div>
        <div className="md:block hidden relative w-full z-30">
          <Image
            src="/assets/pan-left.svg"
            alt="pan-left"
            width={200}
            height={363}
            className="absolute -bottom-[170px] left-0 z-30"
          />
          <Image
            src="/assets/pan-right.svg"
            alt="pan-right"
            width={200}
            height={363}
            className="absolute -bottom-[170px] right-0 z-30"
          />
        </div>

        <TakeMyFreeAssessment data-aos="fade-up" />
        <BookAFreeConsultation data-aos="fade-up" />
        <SignMeUpPlease  data-aos="fade-up" />
        <LearnMore  data-aos="fade-up" />
        <Testimonials data-aos="fade-up" />
        <Banner data-aos="fade-up" />
        <Footer />
      </main>
    </>
  );
}
