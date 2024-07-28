import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import DesignsGrid from "../components/DesignsGrid";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const items = [
  {
    image: "/path/to/image1.jpg",
    name: "Person 1",
    title: "Design Educator",
    tags: ["Product", "UX"],
  },
  {
    image: "/path/to/image2.jpg",
    name: "Person 2",
    title: "Illustrator",
    tags: ["Graphic Design", "Illustration"],
  },
  {
    image: "/path/to/image3.jpg",
    name: "Person 3",
    title: "Brand + Illustrator",
    tags: ["Brand", "Illustration", "Web"],
  },
  {
    image: "/path/to/image4.jpg",
    name: "Person 4",
    title: "Digital Designer",
    tags: ["Mobile", "UI", "Web"],
  },
  // Add more items as needed
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel items={items} />
      <DesignsGrid designs={designs} />
      <CallToAction />
      <Footer/>
      {/* Other content goes here */}
    </div>
  );
}
