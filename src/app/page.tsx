"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="solid"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Training",
          id: "training",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="IRON FIST GYM"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Unleash Your Potential at Iron Fist"
      description="Elite MMA and Boxing training for all levels. Transform your mind, body, and spirit in the premier fighting gym."
      buttons={[
        {
          text: "Book First Class",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-boxer-training-gym_1303-18869.jpg",
          imageAlt: "Professional MMA Fighter",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/pair-boxing-gloves-red-surface_107420-65093.jpg",
          imageAlt: "Boxing Gloves",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-female-boxers-boxing-gym-two-serious-girls-sportswear-gloves-standing-ring-training-punches-helping-each-other-prepare-match-healthy-lifestyle-hobby-sport-concept_74855-23699.jpg?_wi=1",
          imageAlt: "MMA Ring",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/young-skinny-girl-white-shirt-gray-leggings-engaged-sports-gym_1157-13591.jpg?_wi=1",
          imageAlt: "Speed Bag Training",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/african-sporty-man-boxing-mixed-people-training_1157-46278.jpg?_wi=1",
          imageAlt: "Muay Thai Clinch",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/muscular-tattooed-fighter-against-grey-background-studio-shot_613910-16947.jpg",
          imageAlt: "Hand Wraps",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Built on Discipline and Strength"
      description="Our facility is designed for fighters, by fighters. We provide a professional, safe, and intense training environment to ensure you reach your peak performance."
      bulletPoints={[
        {
          title: "Elite Coaching",
          description: "Learn from professionals who have fought on the biggest stages.",
        },
        {
          title: "World Class Facility",
          description: "Professional rings, extensive mat area, and top-tier training equipment.",
        },
        {
          title: "Community Culture",
          description: "Join a supportive team committed to mutual growth and success.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-boxing-training-center_23-2148416618.jpg"
      imageAlt="Modern MMA Gym Interior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="training" data-section="training">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "MMA Training",
          description: "Comprehensive striking, grappling, and clinch techniques for complete combat.",
          imageSrc: "http://img.b2bpic.net/free-photo/muay-thai-thai-boxing-fighters_654080-731.jpg",
          imageAlt: "MMA training",
        },
        {
          title: "Professional Boxing",
          description: "Master the sweet science with focused drills, footwork, and combinations.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-girl-learning-boxing_23-2150399975.jpg",
          imageAlt: "Boxing training",
        },
        {
          title: "BJJ & Grappling",
          description: "Strategic ground control and submission mastery for all levels.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-fun-boxers-dressed-jeans-t-shirts-gaming-center_146671-15346.jpg",
          imageAlt: "Grappling training",
        },
        {
          title: "Muay Thai",
          description: "Explosive striking using 8 points of contact for ultimate conditioning.",
          imageSrc: "http://img.b2bpic.net/free-photo/african-sporty-man-boxing-mixed-people-training_1157-46278.jpg?_wi=2",
          imageAlt: "Muay Thai training",
        },
        {
          title: "Strength & Conditioning",
          description: "High-intensity athletic training to boost power and endurance.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-skinny-girl-white-shirt-gray-leggings-engaged-sports-gym_1157-13591.jpg?_wi=2",
          imageAlt: "Strength training",
        },
        {
          title: "Competition Prep",
          description: "Focused camps for amateur and professional fighters.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-female-boxers-boxing-gym-two-serious-girls-sportswear-gloves-standing-ring-training-punches-helping-each-other-prepare-match-healthy-lifestyle-hobby-sport-concept_74855-23699.jpg?_wi=2",
          imageAlt: "Cage training",
        },
      ]}
      title="Master Your Craft"
      description="Choose from our specialized training programs tailored for combat athletes."
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "500+",
          description: "Active Fighters",
        },
        {
          id: "m2",
          value: "45+",
          description: "Championship Wins",
        },
        {
          id: "m3",
          value: "20+",
          description: "Expert Coaches",
        },
      ]}
      title="Gym Performance Metrics"
      description="Our results speak for themselves."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Mark S.",
          role: "Fighter",
          company: "Pro MMA",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-woman-feels-tired-after-long-hard-boxing-match_613910-15007.jpg",
        },
        {
          id: "2",
          name: "Elena R.",
          role: "Boxer",
          company: "Gym Member",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/shirtless-kick-boxer-showing-his-punches-kicks-grey-background-studio_613910-11735.jpg",
        },
        {
          id: "3",
          name: "Dave K.",
          role: "Amateur",
          company: "Gym Member",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-curly-woman-has-bright-smile-shows-white-teeth-dressed-casual-sport-bra-has-fitness-workout-spare-time-models-indoor_273609-33761.jpg",
        },
        {
          id: "4",
          name: "Sofia P.",
          role: "Fighter",
          company: "Kickboxing",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-brunette-female-boxer-sportswear-holds-protective-helmet-looking-camera-isolated-dark-textured-background_613910-6056.jpg",
        },
        {
          id: "5",
          name: "Mike J.",
          role: "Trainer",
          company: "Staff",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-attractive-male-standing-with-crossed-arms-isolated-white-background_181624-45641.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.9/5",
          label: "Google Rating",
        },
        {
          value: "95%",
          label: "Member Retention",
        },
        {
          value: "12k",
          label: "Sessions Completed",
        },
      ]}
      title="Our Fighting Family"
      description="See why our gym is the preferred choice for combat athletes."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Start Your Fight Today"
      description="Ready to step into the gym? Reach out for a free trial class."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us your goals...",
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/male-boxer-ring-wrapping-his-hands-with-protection_23-2148759635.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Training",
              href: "#training",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="IRON FIST GYM"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
