interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="bg-containerBg w-auto h-auto p-4 rounded-lg justify-center items-center text-center gap-2">
      {children}
    </div>
  );
}
