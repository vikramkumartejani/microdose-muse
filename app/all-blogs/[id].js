import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch blog data based on the id
  const blog = {
    id: 1,
    title: 'Wakeup And Smell The Nature',
    content: 'Full content of the blog post goes here...',
  }; // Replace this with actual data fetching

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPost;
