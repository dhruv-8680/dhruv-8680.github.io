import ProgressBar from "./ProgressBar";
import Accordian from "./Accordian";
import backgroundImage from "../assets/section3.jpg";

function Section3() {
  const languages = [
    { name: "Python", percent: "90" },
    { name: "Java", percent: "75" },
    { name: "Javascript", percent: "85" },
    { name: "HTML", percent: "70" },
    { name: "CSS", percent: "70" },
  ];
  const databases = [
    { name: "MySQL", percent: "80" },
    { name: "VectorDB", percent: "90" },
    { name: "PostgreSQL", percent: "90" },
    { name: "Chroma DB", percent: "95" },
    { name: "Milvus DB", percent: "70" },
  ];
  const data_analytics = [
    { name: "EDA", percent: "90" },
    { name: "Descriptive Stats", percent: "90" },
    { name: "Feature Engineering", percent: "90" },
    { name: "Cluster Analysis", percent: "90" },
    { name: "Prompt Engineering", percent: "80" },
    { name: "Multivaritate Analysis", percent: "80" },
    { name: "Data Cleaining", percent: "90" },
    { name: "Data Prepeocessing", percent: "90" },
  ];
  const AI_practice = [
    { name: "Generative AI", percent: "80" },
    { name: "Machine Learning (ML)", percent: "90" },
    { name: "Deep Learning (DL)", percent: "80" },
    { name: "GANs", percent: "70" },
    { name: "Natural Language Processing", percent: "95" },
    { name: "Computer Vision", percent: "75" },
  ];

  const NLP = [
    { name: "Text Summarization", percent: "90" },
    { name: "Name Entity Recognition", percent: "90" },
    { name: "Question Answering", percent: "85" },
    { name: "Casual/Masked Language Model (CLM, LLM, MLM)", percent: "80" },
    { name: "Sequence Classification", percent: "90" },
    { name: "Sentiment Analysis", percent: "95" },
    { name: "Semantic Search", percent: "85" },
  ];

  const llm = [
    { name: "OpenAI GPT-3.5 Turbo", percent: "95" },
    { name: "HuggingFace Models", percent: "80" },
    { name: "GPT4All", percent: "70" },
    { name: "Langchains", percent: "90" },
    { name: "BERT Training/Finetuning", percent: "90" },
    { name: "GPT2", percent: "80" },
  ];

  const object_detection = [
    { name: "YoloV8", percent: "85" },
    { name: "YoloV5", percent: "90" },
    { name: "SSD", percent: "80" },
    { name: "Detection Transformer", percent: "75" },
    { name: "U-Net", percent: "90" },
    { name: "CNN based segmentation", percent: "80" },
  ];

  const platforms = [
    { name: "Tensorflow", percent: "90" },
    { name: "Pytorch", percent: "60" },
    { name: "Numpy", percent: "90" },
    { name: "Pandas", percent: "90" },
    { name: "Seaborn", percent: "85" },
    { name: "Matplotlib", percent: "90" },
    { name: "Streamlit", percent: "75" },
    { name: "OpenCV", percent: "80" },
    { name: "Scikit-Learn", percent: "90" },
    { name: "Keras", percent: "80" },
    { name: "NLTK", percent: "85" },
    { name: "Spacy", percent: "85" },
    { name: "Gensim", percent: "75" },
    { name: "FastAPI", percent: "90" },
    { name: "Celery", percent: "70" },
  ];

  const mlops = [
    { name: "Github", percent: "90" },
    { name: "AWS S3", percent: "85" },
    { name: "AWS Sagemaker", percent: "75" },
    { name: "AWS EKS", percent: "65" },
    { name: "AWS Lambda", percent: "80" },
    { name: "AWS APIGateway", percent: "90" },
    { name: "AWS RDS", percent: "70" },
    { name: "AWS EC2", percent: "90" },
    { name: "Docker", percent: "85" },
    { name: "Apache Airflow", percent: "70" },
    { name: "Kafka", percent: "50" },
    { name: "MLFlow", percent: "80" },
  ];

  return (
    <section
      id="section-3"
      className={`pb-[80px] bg-slate-700 bg-blend-multiply max-w-[1540px] h-auto md:h-[100vh] mx-auto text-white flex flex-col justify-start md:justify-center items-center`}
    >
      <div className="text-5xl mt-[80px]">Technical Skills</div>
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-6 my-10">
        <div className="">
          <Accordian title="Languages">
            {languages.map((item) => (
              <ProgressBar
                tagName={item.name}
                widthPercent={`w-[${item.percent}%]`}
                tagPercent={item.percent}
                key={item.name}
              />
            ))}
          </Accordian>
          <Accordian title="Database">
            {databases.map((item) => (
              <ProgressBar
                tagName={item.name}
                widthPercent={`w-[${item.percent}%]`}
                tagPercent={item.percent}
                key={item.name}
              />
            ))}
          </Accordian>
          <Accordian title="Object Detection / Segmentation">
            {object_detection.map((item) => (
              <ProgressBar
                tagName={item.name}
                widthPercent={`w-[${item.percent}%]`}
                tagPercent={item.percent}
                key={item.name}
              />
            ))}
          </Accordian>
        </div>
        <div>
          <Accordian title="Data Analysis">
            {data_analytics.map((item) => (
              <ProgressBar
                tagName={item.name}
                widthPercent={`w-[${item.percent}%]`}
                tagPercent={item.percent}
                key={item.name}
              />
            ))}
          </Accordian>

          <Accordian title="AI Practice">
            {AI_practice.map((item) => (
              <ProgressBar
                tagName={item.name}
                widthPercent={`w-[${item.percent}%]`}
                tagPercent={item.percent}
                key={item.name}
              />
            ))}
          </Accordian>
          <Accordian title="Platforms and Libraries">
            {platforms.map((item) => (
              <ProgressBar
                tagName={item.name}
                widthPercent={`w-[${item.percent}%]`}
                tagPercent={item.percent}
                key={item.name}
              />
            ))}
          </Accordian>
        </div>

        <div>
          <Accordian title="Natural Language Processing (NLP)">
            {NLP.map((item) => (
              <ProgressBar
                tagName={item.name}
                widthPercent={`w-[${item.percent}%]`}
                tagPercent={item.percent}
                key={item.name}
              />
            ))}
          </Accordian>
          <Accordian title="LLMs">
            {llm.map((item) => (
              <ProgressBar
                tagName={item.name}
                widthPercent={`w-[${item.percent}%]`}
                tagPercent={item.percent}
                key={item.name}
              />
            ))}
          </Accordian>
          <Accordian title="MLOps & DevOps">
            {mlops.map((item) => (
              <ProgressBar
                tagName={item.name}
                widthPercent={`w-[${item.percent}%]`}
                tagPercent={item.percent}
                key={item.name}
              />
            ))}
          </Accordian>
        </div>
      </div>
    </section>
  );
}

export default Section3;
