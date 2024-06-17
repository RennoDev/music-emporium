import { Carousel, IconButton } from "@material-tailwind/react";
export type slideRef = React.Ref<HTMLDivElement>;

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselMaterialTCSS({ children }: CarouselProps) {
  return (
    <Carousel
      className="rounded-xl overflow-x-auto md:overflow-hidden"
      prevArrow={({ handlePrev, firstIndex }) => (
        <IconButton
          variant="filled"
          color="orange"
          size="md"
          disabled={firstIndex}
          onClick={handlePrev}
          className="!absolute top-1/2 left-0 -translate-y-3/4 hidden md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext, lastIndex }) => (
        <IconButton
          variant="filled"
          color="orange"
          size="md"
          disabled={lastIndex}
          onClick={handleNext}
          className="!absolute top-1/2 !right-0 -translate-y-3/4 hidden md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 -translate-x-2/4 gap-2 hidden md:flex">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-primary" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="flex gap-2 mb-8 justify-start md:justify-center">
        {children}
      </div>
      <div className="flex gap-2 mb-8 justify-start md:justify-center">
        {children}
      </div>
    </Carousel>
  );
}
