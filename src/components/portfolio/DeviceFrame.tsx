import { ComponentType, ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto h-full w-full max-w-[280px] rounded-[2.5rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-primary-900/10">
      <div className="relative h-full overflow-hidden rounded-[2rem] bg-white">
        <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-neutral-900" />
        {children}
      </div>
    </div>
  );
}

export function PhoneTabBar({
  icons,
  active,
  onSelect,
}: {
  icons: ComponentType<{ className?: string }>[];
  active: number;
  onSelect?: (index: number) => void;
}) {
  return (
    <div className="absolute right-0 bottom-0 left-0 flex items-center justify-around border-t border-neutral-100 bg-white py-3">
      {icons.map((Icon, i) =>
        onSelect ? (
          <button key={i} type="button" onClick={() => onSelect(i)} className="p-1">
            <Icon className={`h-4 w-4 ${i === active ? "text-primary-600" : "text-neutral-300"}`} />
          </button>
        ) : (
          <Icon
            key={i}
            className={`h-4 w-4 ${i === active ? "text-primary-600" : "text-neutral-300"}`}
          />
        ),
      )}
    </div>
  );
}
