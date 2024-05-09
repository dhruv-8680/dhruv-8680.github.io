import Carousel from "./Carousel";
import img1 from "../assets/section3.jpg";
import img2 from "../assets/section1.jpeg";
import RectCard from "./RectCard";

function Section4() {
  const images = [
    img1,
    img2,
    // Add more image URLs as needed
  ];

  return (
    <section
      className={`flex-col bg-gradient-to-r from-gray-800 to-stone-950 max-w-[1540px] h-[2200px] md:h-[800px] mx-auto text-white flex justify-center items-center`}
    >
      <div className="text-5xl py-10">Modern Offerings</div>
      <div className="grid md:grid-cols-2 md:w-auto w-[400px]">
        <RectCard
          image={"https://wallpapercave.com/wp/wp6690992.jpg"}
          abstract="Youtube Genius App: Built on the backbone of RAG"
        >
          The App revolutionizes YouTube video consumption, offering efficient
          summarization and question generation. By condensing hours of content
          into concise summaries, users save time and avoid information
          overload.
        </RectCard>
        <RectCard
          image={"https://wallpapercave.com/wp/wp6690992.jpg"}
          abstract="Car Damage Detection YoloV8"
        >
          Insurance firms struggle with time-consuming and subjective car damage
          assessments, causing delays and customer dissatisfaction. To address
          this, it's an computer vision app to detect and classify outer body
          damage, optimizing claims processing and improving client experience.
        </RectCard>
        <RectCard
          image={"https://wallpapercave.com/wp/wp6690992.jpg"}
          abstract="SmartSearch: A Database-Free Image Search"
        >
          SmartSearch leverages advanced machine learning techniques to create a
          database-free image search solution by extracting meaningful features
          directly from the images, SmartSearch enables fast and accurate search
          results without the need for annotations or external databases.
        </RectCard>
        <RectCard
          image={"https://wallpapercave.com/wp/wp6690992.jpg"}
          abstract="Text Classification - Predict the fake news"
        >
          The App revolutionizes YouTube video consumption, offering efficient
          summarization and question generation. By condensing hours of content
          into concise summaries, users save time and avoid information
          overload.
        </RectCard>
      </div>
    </section>
  );
}

export default Section4;
