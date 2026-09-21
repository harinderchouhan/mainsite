import { Check, X, Minus } from "lucide-react";
import { comparisonRows, type ComparisonValue } from "@/lib/comparison";
import { cn } from "@/lib/utils";

function ValueMark({ value }: { value: ComparisonValue }) {
  if (value === "yes") {
    return (
      <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <Check className="size-3.5" />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">
        <Minus className="size-3.5" />
      </span>
    );
  }
  return (
    <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-rose-100 text-rose-500">
      <X className="size-3.5" />
    </span>
  );
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-background">
            <th className="w-[40%] px-5 py-4 text-left font-semibold text-foreground">
              &nbsp;
            </th>
            <th className="px-4 py-4 text-center font-semibold text-brand-700">
              HanuiT Solutions
            </th>
            <th className="px-4 py-4 text-center font-medium text-muted">
              Typical Web Agency
            </th>
            <th className="px-4 py-4 text-center font-medium text-muted">
              DIY Builder
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, index) => (
            <tr
              key={row.feature}
              className={cn(
                index > 0 && "border-t border-border",
                "bg-surface"
              )}
            >
              <td className="px-5 py-4 text-foreground/90">{row.feature}</td>
              <td className="bg-brand-50/40 px-4 py-4">
                <ValueMark value={row.us} />
              </td>
              <td className="px-4 py-4">
                <ValueMark value={row.agency} />
              </td>
              <td className="px-4 py-4">
                <ValueMark value={row.diy} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
