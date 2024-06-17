interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  const combinedClassName = `w-full h-[553px] overflow-auto flex flex-col text-center gap-y-2 p-4 rounded-lg bg-myGray ${className}`;

  return <div className={combinedClassName}>{children}</div>;
}
