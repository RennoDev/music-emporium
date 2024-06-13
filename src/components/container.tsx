interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="w-full h-[553px] overflow-auto flex flex-col text-center gap-y-2 p-4 rounded-lg bg-myGray">
      {children}
    </div>
  );
}
