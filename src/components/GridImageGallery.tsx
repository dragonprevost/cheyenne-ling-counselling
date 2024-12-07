import Image from "next/image";

interface ImageGridProps {
  images: { src: string; caption: string }[];
}

const GridImageGallery: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map(({ src, caption }, idx) => (
        <div key={idx} className="relative group">
          <Image
            src={src}
            alt={`${caption}`}
            className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-200 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out flex items-center justify-center">
            <p className="text-white text-lg">{caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridImageGallery;
