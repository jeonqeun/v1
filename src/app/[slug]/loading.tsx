export default function Loading() {
  return (
    <div className="max-w-[1500px] mx-auto pt-[32px] md:pt-12 pb-16 md:pb-32 mt-[60px] animate-pulse px-4">
      <div className="md:flex justify-center gap-16">
        <div className="hidden xl:block w-[224px] min-w-[224px] max-w-[224px] ">
          <div className="h-6 w-16 bg-gray-300 rounded mb-4" />
          <div className="space-y-3">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="h-6 w-full bg-gray-200 rounded" />
            ))}
          </div>
        </div>

        <div className="max-w-[720px] w-full">
          <div className="mb-6">
            <div className="flex flex-col gap-4 mb-4">
              <div className="h-10 md:h-[44px] w-3/4 bg-gray-300 rounded-md" />

              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-6 w-full bg-gray-200 rounded" />
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-[900/550] bg-gray-300 rounded-xl overflow-hidden" />
          </div>

          <div className="space-y-4 mt-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`h-5 ${
                  i % 4 === 0 ? "w-3/5" : "w-full"
                } bg-gray-200 rounded`}
              />
            ))}
          </div>

          <div className="mt-12 h-12 w-full bg-gray-100 rounded-md" />
        </div>

        <div className="hidden lg:block w-[224px] min-w-[224px] max-w-[224px] ">
          <div className="h-6 w-20 bg-gray-300 rounded mb-4" />
          <div className="space-y-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-4 w-4/6 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
