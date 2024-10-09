import Link from 'next/link';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-gradient-to-br from-green-800 to-green-600 rounded-lg shadow-lg overflow-hidden relative group">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover " />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 ">
        <h2 className="font-bold text-white text-lg">{blog.title}</h2>
        <p className="text-gray-200">{blog.description}</p>
        <Link href={`/blog/${blog.id}`}>
          <span className="mt-2 inline-block bg-white text-gray-800 font-semibold py-1 px-3 rounded-full text-sm transition-colors duration-300 hover:bg-gray-200">Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
