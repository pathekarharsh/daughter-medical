import Wrapper from "../utils/Wrapper";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Digital Radiography",
      excerpt: "Exploring how wireless DR panels are revolutionizing medical imaging workflows.",
      date: "May 15, 2023",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Reducing Radiation Dose Without Sacrificing Image Quality",
      excerpt: "New techniques in CR and DR imaging that protect patients while maintaining diagnostic accuracy.",
      date: "April 28, 2023",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Integrating DICOM Systems Across Healthcare Networks",
      excerpt: "Best practices for seamless image sharing between hospitals and specialists.",
      date: "March 10, 2023",
      category: "Integration",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    }
  ];

  return (
    <div className="mt-[80px] md:mt-[120px]">
      <Wrapper className="py-8 md:py-16">
        <div className="text-center mb-12">
          <div className="w-fit bg-orange_bg px-6 py-1 rounded-full mx-auto">
            <p className="text-orange text-sm">Insights</p>
          </div>
          <h1 className="mt-4 font-bold text-dark leading-tight text-4xl sm:text-5xl md:text-6xl">
            Latest From Our Blog
          </h1>
          <p className="text-gray text-lg mt-6 max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and best practices in medical imaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-orange text-sm font-medium">{post.category}</span>
                  <span className="text-gray text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{post.title}</h3>
                <p className="text-gray mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${index}`} 
                  className="text-orange font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-orange text-white px-8 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Blog;