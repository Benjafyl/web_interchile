type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-md border border-gray-200 bg-white px-5 py-5 shadow-sm">
      <p className="text-2xl font-semibold text-[#c30f3f]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-gray-600">{label}</p>
    </div>
  );
}
