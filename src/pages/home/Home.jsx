
import { useState, React } from "react";
import { ChevronLeft, ChevronRight, Globe, X, Calendar, Clock, CheckCircle } from "lucide-react";

import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import Header from "../../component/Header";
import SubHeader from "../../component/SubHeader";
import HeroSection from "../../component/HeroSection";
import UpToOffer from "../../component/UpToOffer";
import IntroDuction from "../../component/IntroDuction";
import ComParison from "../../component/ComParison";
import WhyChooseUs from "../../component/WhyChooseUs";
import Testimonials from "../../component/Testimonials";
import AlertBanner from "../../component/AlertBanner";
import Footer from "../../component/Footer";
import ListOfAppoinments from "../../component/listOfAppoinments";

export default function Home() {


    return (
        <>

            <Header />

            <section className="  font-Poppins flex flex-col   w-[90%] md:w-[80%]   2xl:w-[1200px]   gap-[30px] h-[100%] mx-auto">
                <HeroSection />
                <UpToOffer />
                <IntroDuction />
                <ComParison />
                <WhyChooseUs />
                <ListOfAppoinments />
                {/* <Testimonials /> */}
                <AlertBanner />
            </section>
            <Footer />





        </>
    );
}
