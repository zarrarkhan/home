import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PublicationsList from "./PublicationsList";
import { publications } from "./PublicationsList"; // or wherever you moved it

const Publications = () => {
  const [showAll, setShowAll] = useState(false);
  const publicationCount = publications.length;

  return (
    <section id="publications" className="py-16 px-6 text-center w-full relative">
      <h2 className="text-3xl font-bold text-white mb-8 mt-0">
        Publications ({publicationCount})
      </h2>

      <div className="max-w-4xl mx-auto px-6 text-left">
        <PublicationsList showAll={showAll} />
      </div>

      {!showAll && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 bg-[#111] text-[#DAA520] px-5 py-3 rounded-full shadow-lg border border-[#222] text-base hover:bg-[#222] hover:scale-105 transition-all"
            style={{
              boxShadow: "0 0 3px 3px rgba(218, 165, 32, 0.3)",
            }}
          >
            See More <ChevronDown size={20} />
          </button>
        </div>
      )}

      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="fixed bottom-6 right-6 flex items-center gap-2 bg-[#111] text-[#DAA520] hover:bg-[#222] px-4 py-2 rounded-md shadow-md transition z-50"
          style={{
            boxShadow: "0 0 3px 3px rgba(218, 165, 32, 0.3)",
          }}
        >
          <ChevronUp size={18} /> Collapse Publications
        </button>
      )}
    </section>
  );
};

export default Publications;
