import { Play } from "lucide-react";

export function Player() {
  return (
    <div className="flex gap-x-6 px-5 py-2 mt-2 border rounded-full border-containerBg bg-containerBg shadow-[rgba(245,175,175,0.1)] shadow-inner">
      <Play className="text-primary" />
    </div>
  );
}
