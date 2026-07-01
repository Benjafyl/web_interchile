type ExperienceCardProps = {
  title: string;
  text: string;
};

export function ExperienceCard({ title, text }: ExperienceCardProps) {
  return (
    <article className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{text}</p>
    </article>
  );
}
