import { StatCard } from "@/components/ui/StatCard";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "1000+", label: "Clients served" },
  { value: "12+", label: "Years of experience" },
  { value: "1200+", label: "Projects completed" },
  { value: "49+", label: "Industries served" },
];

export function StatsBand() {
  return (
    <Container className="-mt-10 relative z-10 sm:-mt-14">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </Container>
  );
}
