import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div className="flex justify-center">
            <div className="flex justify-center flex-col">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            </div>
        </div>
    }

    return <div>
        <Appbar />
        <div  className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"11 Apr 2024"}
                />)}
            </div>
        </div>
    </div>
}