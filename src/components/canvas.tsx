interface CanvasProps {
  children: React.ReactNode;
  className?: string;
}

export function Canvas({ children, className }: CanvasProps) {
  const customClassName = `w-[360px] md:w-[768px] lg:w-[1064px] flex justify-center items-center flex-col mt-2 rounded-lg overflow-hidden ${className}`;

  return <div className={customClassName}>{children}</div>;
}
