import type { Metadata } from "next";

import coupleSunsetImage from "/public/images/blogs/couple-sunset.jpg";


export const metadata: Metadata = {
  title: "Blog posts",
  description: "Cheyenne Ling - Blog posts.",
};


interface BlogPostPreviewProps {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  imageUrl,
  title,
  description,
  href,
}) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition max-w-sm ">
      {/* Image Banner */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-4 space-y-3">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{title}</h2>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Read More Button */}
        <div>
          <a
            href={href}
            className="inline-block mt-3 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-light transition"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};


const MainContent = () => {
  return (
    <div>
      <ul>
        <li className="mb-5">
          <BlogPostPreview 
            href={"blog/post"} 
            imageUrl={coupleSunsetImage.src} 
            title={"Feeling ‘Too Emotional’ in Your Relationship? Understanding Why Your Emotions Can Feel So Intense"} 
            description={"Feeling overwhelmed in your relationship? Discover how past experiences may be impacting your current relationships and emotions and how online counselling can help."} 
          />
        </li>
      </ul>
    </div>
  );
};


export default function Home() {
  return (
    <div>
      <main className="flex-grow">
        <div className="container mx-auto p-6">
          <MainContent />
        </div>
      </main>
    </div>
  );
}
