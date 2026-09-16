// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

const fallbackArticles = [
  {
    id: 1795446,
    title: "The Power and Challenges of ReactJS",
    description: "Deep dive into ReactJS performance, reconciliation internals, state management paradigms, and how to tame re-renders in enterprise dashboards.",
    published_at: "2024-03-19T17:25:04Z",
    public_reactions_count: 14,
    comments_count: 2,
    reading_time_minutes: 5,
    cover_image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
    url: "https://dev.to/ravik27280/the-power-and-challenges-of-reactjs-569h"
  },
  {
    id: 1795447,
    title: "Scaling Event-Driven Microservices on AWS",
    description: "Architectural patterns for asynchronous high-volume event ingestion using AWS Lambda, Amazon SQS, and DynamoDB with automated CloudWatch alerting.",
    published_at: "2025-01-15T12:00:00Z",
    public_reactions_count: 28,
    comments_count: 5,
    reading_time_minutes: 7,
    cover_image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    url: "https://github.com/Ravik27280"
  },
  {
    id: 1795448,
    title: "Static AST Analysis for Full-Stack Performance",
    description: "How rule-based Python AST parsing can proactively detect N+1 database queries, event loop starvation, and serverless latency bottlenecks before production.",
    published_at: "2025-05-10T09:30:00Z",
    public_reactions_count: 32,
    comments_count: 4,
    reading_time_minutes: 6,
    cover_image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    url: "https://github.com/Ravik27280/Performance-Optimizer"
  }
];

function Blog({ blogs = [] }) {
  const displayArticles = (blogs && blogs.length > 0 && blogs.some(b => b.cover_image))
    ? blogs
    : fallbackArticles;

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-bold tracking-wider rounded-md">
            ARTICLES & PUBLICATIONS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {displayArticles.slice(0, 6).map((blog, i) => (
          blog?.cover_image ? <BlogCard blog={blog} key={blog.id || i} /> : null
        ))}
      </div>

      <div className="flex justify-center mt-8 lg:mt-12">
        <Link
          className="flex items-center gap-2 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3.5 text-center text-xs md:text-sm font-semibold uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105"
          role="button"
          href="https://dev.to/ravik27280"
          target='_blank'
        >
          <span>Read More On Dev.to</span>
          <FaArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
