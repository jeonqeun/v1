import Image from "next/image";
import markerImage from "../../../../public/images/marker.svg";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function BasedIn() {
  return (
    <section className="bg-card flex flex-col justify-between overflow-hidden rounded-xl border pt-7 pb-12">
      <div className="mb-6 flex flex-col gap-0.5 px-6 md:px-8">
        <span className="text-xs font-semibold text-gray-600">Based In</span>
        <span className="text-2xl font-semibold tracking-tighter">
          Busan, Korea
        </span>
      </div>
      <div className="flex items-center justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaMapMarkerAlt
            key={`left-${i}`}
            size={64}
            className="flex-shrink-0 text-slate-100"
            aria-hidden
          />
        ))}

        <Image src={markerImage} alt="" className="w-24 flex-shrink-0" />

        {Array.from({ length: 5 }).map((_, i) => (
          <FaMapMarkerAlt
            key={`right-${i}`}
            size={64}
            className="flex-shrink-0 text-slate-100"
            aria-hidden
          />
        ))}
      </div>
    </section>
  );
}
