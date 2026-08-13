export function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface px-6 py-8 text-center">
      <div className="font-display text-3xl font-bold text-brand-700 sm:text-4xl">
        {value}
      </div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}
