type TechBadgeProps = {
  label: string;
};

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-flex rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
      {label}
    </span>
  );
}
