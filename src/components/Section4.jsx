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
      id="section-4"
      className={`md:h-[100vh] flex-col bg-black max-w-[1540px] h-auto mx-auto text-white flex justify-center items-center pb-[80px]`}
    >
      <div className="text-5xl mt-[80px] pb-10">
        Modern Offerings
        <div className="h-[2px] w-full bg-gradient-to-r from-indigo-400 to-green-300 my-2"></div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-2 md:w-auto sm:w-auto w-[370px]">
        <RectCard
          title="Yotutube-Genius"
          color="to-cyan-900"
          abstract="Youtube Genius App: Built on the backbone of RAG"
        >
          The App revolutionizes YouTube video consumption, offering efficient
          summarization and question generation. By condensing hours of content
          into concise summaries, users save time and avoid information
          overload.
          <a
            href="https://youtube-genius-frontend-741085b910b5.herokuapp.com/"
            target="_blank"
            className="text-blue-400"
          >
            {" Preview App"}
          </a>
        </RectCard>

        <RectCard
          title="Damage-Detection"
          color="to-fuchsia-900"
          abstract="Car Damage Detection YoloV8"
        >
          Insurance firms struggle with time-consuming and subjective car damage
          assessments, causing delays and customer dissatisfaction. To address
          this, it's an computer vision app to detect and classify outer body
          damage, optimizing claims processing and improving client experience.
          <a
            href="https://github.com/dhruv-8680/Damage-Detection/blob/main/Car%20Damage%20Detection%20YoloV8.ipynb"
            target="_blank"
            className="text-blue-400"
          >
            {" view code"}
          </a>
        </RectCard>
        <RectCard
          title="Smart-Search"
          color="to-violet-900"
          abstract="SmartSearch: A Database-Free Image Search"
        >
          SmartSearch leverages advanced machine learning techniques to create a
          database-free image search solution by extracting meaningful features
          directly from the images, SmartSearch enables fast and accurate search
          results without the need for annotations or external databases.
        </RectCard>
        <RectCard
          title="Text-Classification"
          color="to-blue-900"
          abstract="Text Classification - Predict the fake news"
        >
          The App revolutionizes YouTube video consumption, offering efficient
          summarization and question generation. By condensing hours of content
          into concise summaries, users save time and avoid information
          overload.
          <a
            href="https://github.com/dhruv-8680/News-Text-Classification/blob/main/Text%20Classification%20%7C%20BERT.ipynb"
            target="_blank"
            className="text-blue-400"
          >
            {" view code"}
          </a>
        </RectCard>
      </div>
    </section>
  );
}

export default Section4;
