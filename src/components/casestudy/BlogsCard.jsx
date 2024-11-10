import { Link } from "react-router-dom"; // Import Link from react-router-dom

const blogsData = [
  {
    hashtag: "OUR MODEL",
    title:
      "Dropout Prediction Model",
    imgUrl:
      "do.jpg",
    link: "/casestudy/page1", // Change to a route instead of file path
    category: "OUR MODEL",
  },
  {
    hashtag: "STUDENT",
    title:
      "From Limited Visibility to Legal Powerhouse",
    imgUrl:
      "st.jpg",
    link: "/casestudy/page4", // Change to a route instead of file path
    category: "STUDENT",
  },
  {
    hashtag: "MENTAL HEALTH",
    title: "Mental Health Support at Penn State University",
    imgUrl:
      "mh.jpg",
    link: "/casestudy/page2", // Change to a route instead of file path
    category: "MENTAL HEALTH",
  },
  {
    hashtag: "MENTAL HEALTH",
    title: "Global Minds: Supporting Student Mental Health",
    imgUrl:
      "mh.jpg",
    link: "/casestudy/page3", // Change to a route instead of file path
    category: "MENTAL HEALTH",
  },
  {
    hashtag: "MENTAL HEALTH",
    title: "Sustainable Living: HomesunNature's Success Story",
    imgUrl:
      "mh.jpg",
    link: "/casestudy/page5", // Change to a route instead of file path
    category: "MENTAL HEALTH",
  },
];

const BlogsCard = ({ selectedCategory = "All" }) => {
  const filteredPosts =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((data) => data.category === selectedCategory);

  return (
    <div className="lg:mt-36 mt-16 lg:ml-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredPosts.map((data) => (
          <div key={data.title}>
            <Link
              to={data.link}
              className="flex flex-col rounded-lg shadow-2xl hover:shadow-[0px_0px_20px] hover:scale-105 transition duration-300 ease-in-out h-full"
            >
              <div>
                <img
                  className="w-full rounded-t-lg bg-black"
                  src={data.imgUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 mt-3 p-5">
                <h4 className="text-sm bg-blue-300 w-full text-black text-center px-2 py-1 rounded-lg">
                  {data.hashtag}
                </h4>
                <h1 className="font-bold text-black">{data.title}</h1>
                <h3 className="text-lg">{data.author}</h3>
                <p className="text-black">{data.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsCard;
