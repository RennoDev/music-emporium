interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

export function Content({ children, className }: ContentProps) {
  // Concatenando className fornecido com as classes existentes
  const combinedClassName = `flex gap-2 mt-2 overflow-auto overscroll-auto scrollbar-thin scrollbar-webkit ${className}`;

  return <div className={combinedClassName}>{children}</div>;
}
