// "use client";

// import Image from "next/image";

// type CollectionHeroProps = {
//   image: string;
//   alt: string;
//   eyebrow: string;
//   title: string;
//   description: string;

//   overlayClassName?: string;
//   imageClassName?: string;

//   eyebrowClassName?: string;
//   titleClassName?: string;
//   descriptionClassName?: string;
// };

// export default function CollectionHero({
//   image,
//   alt,
//   eyebrow,
//   title,
//   description,

//   overlayClassName = "bg-gradient-to-t from-black/70 via-black/20 to-black/10",
//   imageClassName = "object-cover object-top",

//   eyebrowClassName = "text-[#c6a96b]",
//   titleClassName = "text-white",
//   descriptionClassName = "text-white/65",
// }: CollectionHeroProps) {
//   return (
//     <section className="relative min-h-svh overflow-hidden mb-10">
//       {/* IMAGE */}
//       <Image src={image} alt={alt} fill priority sizes="100vw" className={imageClassName} />

//       {/* OVERLAY */}
//       <div className={`absolute inset-0 ${overlayClassName}`} />

//       {/* CONTENT */}
//       <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 md:px-10 lg:px-16 xl:px-20 xl:pb-16">
//         <div className="max-w-190">
//           <p className={`mb-5 text-[11px] uppercase tracking-[0.34em] ${eyebrowClassName}`}>{eyebrow}</p>

//           <h1 className={`mb-6 font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.92] font-light ${titleClassName}`}>{title}</h1>

//           <p className={`max-w-xl text-[15px] leading-8 md:text-[16px] ${descriptionClassName}`}>{description}</p>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";

type CollectionHeroProps = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  overlayClassName?: string;
  imageClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function CollectionHero({ image, alt, eyebrow, title, description, overlayClassName = "bg-gradient-to-t from-black/70 via-black/20 to-black/10", imageClassName = "object-cover object-top", eyebrowClassName = "text-[#c6a96b]", titleClassName = "text-white", descriptionClassName = "text-white/65" }: CollectionHeroProps) {
  return (
    <section className="relative mb-10 h-[75svh] min-h-130 overflow-hidden md:h-screen">
      <Image src={image} alt={alt} fill priority sizes="100vw" className={imageClassName} />

      <div className={`absolute inset-0 ${overlayClassName}`} />

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 md:px-10 lg:px-16 xl:px-20 xl:pb-16">
        <div className="max-w-190">
          <p className={`mb-5 text-[11px] uppercase tracking-[0.34em] ${eyebrowClassName}`}>{eyebrow}</p>

          <h1 className={`mb-6 font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.92] font-light ${titleClassName}`}>{title}</h1>

          <p className={`max-w-xl text-[15px] leading-8 md:text-[16px] ${descriptionClassName}`}>{description}</p>
        </div>
      </div>
    </section>
  );
}
