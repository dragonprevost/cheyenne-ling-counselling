import type { Metadata } from "next";

import Image from "next/image";
import {StaticImageData} from "next/image";
import coupleSunsetImage from "/public/images/blogs/couple-sunset.jpg";
import attacmentImage from "/public/images/blogs/attachment-image.jpg";


export const metadata: Metadata = {
  title: "Blog posts",
  description: "Cheyenne Ling - Blog posts.",
};


interface BlogPostPreviewProps {
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  image,
  title,
  description,
  href,
}) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition max-w-sm ">
      {/* Image Banner */}
      <div className="h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt="Understanding emotions in relationships"
          className="object-cover"
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
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BlogPostPreview 
          href={"blog/understanding_emotions_in_relationships"} 
          image={coupleSunsetImage} 
          title={"Feeling ‘Too Emotional’ in Your Relationship? Understanding Why Your Emotions Can Feel So Intense"} 
          description={"Feeling overwhelmed in your relationship? Discover how past experiences may be impacting your current relationships and emotions and how online counselling can help."} 
        />
        <BlogPostPreview 
          href={"blog/attachment_theory"} 
          image={attacmentImage} 
          title={"Why You Pull Away or Hold On Too Tight: How Attachment Styles Shape Your Relationships"} 
          description={"Do you pull away or feel ‘too emotional’ in relationships? Discover how counselling in Kitsilano, Vancouver or online can help you build secure, connected relationships."} 
        />
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
