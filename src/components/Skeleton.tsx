// src/components/Skeleton.tsx
export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skel ${className}`} />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-line bg-surface/40 p-4">
      <Skeleton className="mb-3 h-32 w-full rounded-xl" />
      <Skeleton className="mb-2 h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  );
}