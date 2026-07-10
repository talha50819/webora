"use client";

import { useState } from "react";
import {
  Calendar,
  CalendarCheck,
  Check,
  FileText,
  LayoutDashboard,
  Pill,
  Stethoscope,
  UserRound,
} from "lucide-react";

type View = "dashboard" | "booking" | "records";

const navItems: { key: View; label: string; icon: typeof LayoutDashboard }[] = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "booking", label: "Book visit", icon: CalendarCheck },
  { key: "records", label: "Records", icon: FileText },
];

const slots = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM"];

const records = [
  { icon: FileText, name: "Lab Results", date: "Jul 2, 2026" },
  { icon: Pill, name: "Prescription Renewal", date: "Jun 18, 2026" },
  { icon: Stethoscope, name: "Visit Summary", date: "Jun 18, 2026" },
];

function Sidebar({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  return (
    <div className="flex w-16 shrink-0 flex-col items-center gap-3 border-r border-neutral-100 py-6 @lg:w-40 @lg:items-stretch @lg:px-3">
      {navItems.map((item) => {
        const active = item.key === view;
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange(item.key)}
            className={`flex items-center justify-center gap-2 rounded-lg px-2 py-2.5 text-xs font-semibold transition-colors @lg:justify-start ${
              active ? "bg-primary-600 text-white" : "text-neutral-400 hover:bg-primary-50 hover:text-primary-600"
            }`}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span className="hidden @lg:inline">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function PatientPortalDemo() {
  const [view, setView] = useState<View>("dashboard");
  const [selectedDay, setSelectedDay] = useState(14);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  function goTo(v: View) {
    setView(v);
    if (v !== "booking") {
      setConfirmed(false);
    }
  }

  return (
    <div className="flex min-h-[560px] bg-white">
      <Sidebar view={view} onChange={goTo} />

      <div className="flex-1 p-6 @lg:p-8">
        {view === "dashboard" && (
          <div>
            <p className="text-sm font-semibold text-neutral-500">Welcome back, Maria</p>
            <div className="mt-4 rounded-xl border border-neutral-100 p-5">
              <p className="text-xs font-semibold tracking-wide text-primary-600 uppercase">
                Upcoming appointment
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <Stethoscope className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-[var(--foreground)]">Dr. Elena Marsh</p>
                  <p className="text-xs text-neutral-400">Primary Care · Tue, Jul 14 · 10:30 AM</p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => goTo("booking")}
              className="gradient-brand mt-4 w-full rounded-lg py-3 text-sm font-semibold text-white @lg:w-auto @lg:px-6"
            >
              Book new appointment
            </button>
            <div className="mt-6 grid grid-cols-2 gap-3 @sm:max-w-sm">
              <div className="rounded-xl border border-neutral-100 p-4 text-center">
                <UserRound className="mx-auto h-5 w-5 text-primary-600" />
                <p className="mt-1.5 text-xs font-semibold text-[var(--foreground)]">My Profile</p>
              </div>
              <div className="rounded-xl border border-neutral-100 p-4 text-center">
                <Pill className="mx-auto h-5 w-5 text-primary-600" />
                <p className="mt-1.5 text-xs font-semibold text-[var(--foreground)]">Prescriptions</p>
              </div>
            </div>
          </div>
        )}

        {view === "booking" && !confirmed && (
          <div>
            <p className="text-sm font-bold text-[var(--foreground)]">Book an appointment</p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
              <Calendar className="h-3.5 w-3.5" /> July 2026
            </div>
            <div className="mt-2 grid grid-cols-7 gap-1.5 text-center text-[11px] text-neutral-400 @sm:max-w-sm">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <span key={i}>{d}</span>
              ))}
              {[...Array(21)].map((_, i) => {
                const day = i + 1;
                const active = day === selectedDay;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors ${
                      active ? "gradient-brand font-semibold text-white" : "text-neutral-500 hover:bg-primary-50"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
            <p className="mt-5 text-xs font-semibold text-neutral-500">Available times</p>
            <div className="mt-2 grid grid-cols-2 gap-2 @sm:max-w-sm">
              {slots.map((s) => {
                const active = s === selectedSlot;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSlot(s)}
                    className={`rounded-lg border py-2 text-center text-xs font-medium transition-colors ${
                      active
                        ? "border-primary-600 bg-primary-600 text-white"
                        : "border-neutral-200 text-neutral-500 hover:border-primary-300"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              disabled={!selectedSlot}
              onClick={() => setConfirmed(true)}
              className="gradient-brand mt-6 w-full rounded-lg py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40 @sm:max-w-sm"
            >
              Confirm appointment
            </button>
          </div>
        )}

        {view === "booking" && confirmed && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
              <Check className="h-6 w-6" />
            </span>
            <p className="mt-4 text-sm font-bold text-[var(--foreground)]">Appointment confirmed</p>
            <p className="mt-1 text-xs text-neutral-500">
              July {selectedDay}, 2026 · {selectedSlot} with Dr. Elena Marsh
            </p>
            <button
              type="button"
              onClick={() => goTo("dashboard")}
              className="mt-5 rounded-full border border-primary-200 px-4 py-2 text-xs font-semibold text-primary-700 hover:bg-primary-50"
            >
              Back to dashboard
            </button>
          </div>
        )}

        {view === "records" && (
          <div>
            <p className="text-sm font-bold text-[var(--foreground)]">Medical records</p>
            <div className="mt-4 space-y-2.5 @sm:max-w-md">
              {records.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between rounded-xl border border-neutral-100 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                      <r.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-[var(--foreground)]">{r.name}</p>
                      <p className="text-[11px] text-neutral-400">{r.date}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary-600">View</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
