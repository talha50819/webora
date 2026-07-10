"use client";

import { ReactNode, useState } from "react";
import { Lock, Monitor, Smartphone, Tablet } from "lucide-react";

const devices = {
  desktop: { label: "Desktop", icon: Monitor, width: "100%" },
  tablet: { label: "Tablet", icon: Tablet, width: "700px" },
  mobile: { label: "Mobile", icon: Smartphone, width: "375px" },
} as const;

type Device = keyof typeof devices;

export default function DeviceSwitcher({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  const [device, setDevice] = useState<Device>("desktop");

  return (
    <div>
      <div className="mx-auto mb-6 flex w-fit items-center gap-1 rounded-full border border-neutral-200 bg-white p-1 shadow-sm">
        {(Object.keys(devices) as Device[]).map((key) => {
          const d = devices[key];
          const active = device === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setDevice(key)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? "gradient-brand text-white"
                  : "text-neutral-500 hover:text-primary-600"
              }`}
            >
              <d.icon className="h-4 w-4" /> {d.label}
            </button>
          );
        })}
      </div>

      <div
        className="mx-auto overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl shadow-primary-900/10 transition-[max-width] duration-300 ease-out"
        style={{ maxWidth: devices[device].width }}
      >
        <div className="flex items-center gap-3 border-b border-neutral-200 bg-neutral-50 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-400">
            <Lock className="h-3 w-3" /> {url}
          </div>
        </div>
        <div className="max-h-[640px] overflow-y-auto @container">{children}</div>
      </div>
    </div>
  );
}
