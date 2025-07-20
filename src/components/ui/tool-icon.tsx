export default function ToolIcon({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm cursor-default dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500 ${className}`}
    >
      {children}
    </span>
  );
}
