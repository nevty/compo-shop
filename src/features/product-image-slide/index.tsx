import { cn } from "@shared/lib";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface ProductImageSliderProps {
  className?: string;
}

export const ProductImageSlider = ({ className }: ProductImageSliderProps) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-col justify-center items-center rounded-3xl overflow-hidden bg-slate-100">
        <img src="/shoe-1.png" alt="Product main image" className="w-full" />
      </div>
      <div className="flex justify-between mt-6">
        <button className="px-1 py-4 bg-blue-50 rounded-lg">
          <MdKeyboardArrowLeft size="32" className="text-blue-700" />
        </button>
        <div className="flex grow-1 gap-2 overflow-hidden">
          {["/shoe-2.png", "/shoe-3.png", "/shoe-4.png", "/shoe-5.png"].map(
            (src) => (
              <img key={src} src={src} className="cursor-pointer w-16" />
            )
          )}
        </div>
        <button className="px-1 py-4 bg-blue-50 rounded-lg">
          <MdKeyboardArrowRight size="32" className="text-blue-700" />
        </button>
      </div>
    </div>
  );
};
