import Image from "next/image";

interface ContentSectionProps {
  title: string;
  paragraphs: string[];
  image: {
    png: string;
    webp: string;
    width: number;
    height: number;
  };
  imageAlt: string;
}

export default function ContentSection({ title, paragraphs, image, imageAlt }: ContentSectionProps) {
  return (
    <>
      <div className="flex lg-down:flex-wrap md:gap-x-6 lg-down:space-y-6">
        <div className="w-full lg:w-3/12">
          <h3>{title}</h3>
        </div>

        <div className="w-full space-y-12 lg:w-9/12">
          <div className="space-y-3">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <Image src={image.png} width={image.width} height={image.height} alt={imageAlt} className="object-cover w-full" />
        </div>
      </div>
      <hr className="my-12 border-t" />
    </>
  );
}
