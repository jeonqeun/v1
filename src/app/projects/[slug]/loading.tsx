export default function Loading() {
  return (
    <div className="mx-auto mt-14 max-w-[1500px] animate-pulse px-4 pt-[32px] pb-16 md:pt-12 md:pb-32">
      <div className="justify-center gap-16 md:flex">
        <div className="hidden w-[224px] max-w-[224px] min-w-[224px] xl:block">
          <div className="space-y-3">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="h-7 w-full rounded-md bg-gray-200" />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[720px]">
          <div className="mb-6">
            <div className="mb-4 flex flex-col gap-4">
              <div className="mb-3 h-10 w-3/4 rounded-md bg-gray-300 md:h-[44px]" />

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-300" />

              <div className="mt-4 space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-7 w-full rounded bg-gray-200" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`h-5 ${
                  i % 4 === 0 ? "mt-8 h-9 w-2/5" : "w-full"
                } rounded bg-gray-200`}
              />
            ))}
          </div>
        </div>

        <div className="hidden w-[224px] max-w-[224px] min-w-[224px] lg:block">
          <div className="mb-4 h-6 w-28 rounded bg-gray-300" />
          <div className="space-y-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="my-3 h-5 w-4/6 rounded bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
