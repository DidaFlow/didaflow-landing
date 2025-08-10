export default function Loading() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="h-8 w-2/3 rounded bg-zinc-200 animate-pulse" />
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5">
            <div className="h-5 w-1/2 rounded bg-zinc-200 animate-pulse" />
            <div className="mt-3 h-4 w-5/6 rounded bg-zinc-200 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}