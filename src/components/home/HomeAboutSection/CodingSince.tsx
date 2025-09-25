export default function CodingSince() {
  return (
    <section className="bg-card flex flex-col justify-between overflow-hidden rounded-xl border pt-7">
      <div className="mb-6 flex flex-col gap-0.5 px-6 md:px-8">
        <span className="text-xs font-semibold text-gray-600">
          Coding Since
        </span>
        <span className="text-2xl font-semibold tracking-tighter">
          Mar 2022
        </span>
      </div>
      <div className="pl-6 [mask-image:linear-gradient(to_right,black_75%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] md:pl-8">
        <div className="rounded-tl-xl bg-slate-600">
          <div className="border-b border-slate-400 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <div className="aspect-square w-2 rounded-full bg-rose-500" />
              <div className="aspect-square w-2 rounded-full bg-yellow-500" />
              <div className="aspect-square w-2 rounded-full bg-green-500" />
            </div>
          </div>

          <div className="px-4 py-2.5 font-mono text-[13px] text-slate-50">
            <pre>
              <code>
                &lt;!DOCTYPE html&gt;
                {"\n"}
                &lt;html lang=&quot;ko&quot;&gt;{"\n"}
                &lt;head&gt;{"\n"}
                &nbsp;&nbsp;&lt;meta charset=&quot;UTF-8&quot; /&gt;
                {"\n"}
                &nbsp;&nbsp;&lt;title&gt;Hi, I&apos;m Jeongeun&lt;/title&gt;
                {"\n"}
                &lt;/head&gt;{"\n"}
                &lt;body&gt;{"\n"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
