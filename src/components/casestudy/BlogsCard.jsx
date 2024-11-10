import { Link } from "react-router-dom"; // Import Link from react-router-dom

const blogsData = [
  {
    hashtag: "OUR MODEL",
    title:
      "Dropout Prediction Model",
    imgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-p/14/0a/8b/bd/photo0jpg.jpg",
    // author: "Rooftop Heaven",
    // date: "Feb 14, 2024",
    link: "/casestudy/page1", // Change to a route instead of file path
    category: "OUR MODEL",
  },
  {
    hashtag: "STUDENT",
    title:
      "From Limited Visibility to Legal Powerhouse",
    imgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-p/14/0a/8b/bd/photo0jpg.jpg",
    // author: "Rooftop Heaven",
    // date: "Feb 14, 2024",
    link: "/casestudy/page4", // Change to a route instead of file path
    category: "STUDENT",
  },
  // {
  //   hashtag: "HOSPITALITY",
  //   title:
  //     "From Local Gem to Must-Visit Destination: Desi That's Journey of Transformation",
  //   imgUrl:
  //     "https://b.zmtcdn.com/data/pictures/2/20696162/e6df88011162dd72f383ca5567a0e052.jpg",
  //   author: "Desi Thaat",
  //   date: "Feb 14, 2024",
  //   link: "/casestudy/page2", // Change to a route instead of file path
  //   category: "HOSPITALITY",
  // },
  // {
  //   hashtag: "HOSPITALITY",
  //   title: "The Chai Bagh",
  //   imgUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcN7TBDElmpjHoRaHz7KfxMUJCwEt8JOF3VqsfcKFqBlCWRPat9ucG-IU5sJFnZhrMWk&usqp=CAU",
  //   author: "The Chai Bagh",
  //   date: "Feb 14, 2024",
  //   link: "/casestudy/page3", // Change to a route instead of file path
  //   category: "HOSPITALITY",
  // },
  {
    hashtag: "MENTAL HEALTH",
    title: "Mental Health Support at Penn State University",
    imgUrl:
      "https://justispherexlegal.com/wp-content/uploads/2024/07/JsX-bg-less-2.png",
    // author: "Justispherex Legal",
    // date: "Feb 14, 2024",
    link: "/casestudy/page2", // Change to a route instead of file path
    category: "MENTAL HEALTH",
  },
  {
    hashtag: "MENTAL HEALTH",
    title: "Global Minds: Supporting Student Mental Health",
    imgUrl:
      "https://justispherexlegal.com/wp-content/uploads/2024/07/JsX-bg-less-2.png",
    // author: "Justispherex Legal",
    // date: "Feb 14, 2024",
    link: "/casestudy/page3", // Change to a route instead of file path
    category: "MENTAL HEALTH",
  },
  {
    hashtag: "MENTAL HEALTH",
    title: "Sustainable Living: HomesunNature's Success Story",
    imgUrl:
      "https://justispherexlegal.com/wp-content/uploads/2024/07/JsX-bg-less-2.png",
    // author: "Justispherex Legal",
    // date: "Feb 14, 2024",
    link: "/casestudy/page5", // Change to a route instead of file path
    category: "MENTAL HEALTH",
  },
  // {
  //   hashtag: "TECHNOLOGY",
  //   title: "Industry: Eco-friendly Products",
  //   imgUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCctmxWQBLO4JniUt2m6199A02Huu7WwXHaA&s",
  //   author: "HomesunNature",
  //   date: "Feb 14, 2024",
  //   link: "/casestudy/page5", // Change to a route instead of file path
  //   category: "TECHNOLOGY",
  // },
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
