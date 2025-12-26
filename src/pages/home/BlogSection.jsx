import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import blogs from "../../pages/resources/Blogs";

const BlogSection = () => {
  const navigate = useNavigate();

  // latest 3 blogs
  const latestBlogs = blogs.slice(0, 3);

  const handleCardClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section
      className="
        transition-colors duration-300
        bg-slate-100
        dark:bg-[#06071B]
        py-20 md:py-28
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 text-left">
          <p className="mb-4 text-sm tracking-wider uppercase text-slate-500 dark:text-white/50">
            Insights
          </p>

          <h2 className="mb-6 text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Latest from Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>

          <p className="max-w-3xl text-lg text-slate-600 dark:text-white/70">
            Stay updated with the latest insights, trends, and best practices in
            audit, risk management, and compliance.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid gap-6 md:grid-cols-3">
          {latestBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleCardClick(blog.slug)}
              className="
                group cursor-pointer overflow-hidden rounded-2xl
                transition-all duration-300
                border border-slate-200 bg-white shadow-lg
                hover:-translate-y-2 hover:shadow-2xl
                dark:bg-white/5 dark:border-white/10 dark:shadow-none
              "
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 text-xs font-semibold rounded-full bg-indigo-600 text-white">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="mb-3 text-sm text-slate-500 dark:text-white/50">
                  {blog.date}
                </p>

                <h3
                  className="
                    mb-3 text-xl font-bold
                    text-slate-900 dark:text-white
                    group-hover:text-indigo-600 transition-colors
                  "
                >
                  {blog.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed line-clamp-3 text-slate-600 dark:text-white/70">
                  {blog.shortDescription}
                </p>

                <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
