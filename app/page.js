import Image from "next/image";
import Navbar from "./components/Navbar";
import TakeMyFreeAssessment from "./components/TakeMyFreeAssessment";
import BookAFreeConsultation from "./components/BookAFreeConsultation";
import SignMeUpPlease from "./components/SignMeUpPlease";
import LearnMore from "./components/LearnMore";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
 
export default function Home() {
  return (
    <>
      <main className="pt-[150px]">
        <h1>Hero</h1>
        <TakeMyFreeAssessment/>
        <BookAFreeConsultation/>
        <SignMeUpPlease/>
        <LearnMore/>
        <Testimonials/>
        <Footer/>
        </main>
    </>
  );
}
