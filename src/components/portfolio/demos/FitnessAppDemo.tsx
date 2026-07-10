"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Bell,
  Check,
  Flame,
  Footprints,
  HeartPulse,
  Home,
  LineChart,
  Trophy,
  UserRound,
} from "lucide-react";
import { PhoneFrame, PhoneTabBar } from "../DeviceFrame";

type Tab = "home" | "activity" | "profile";

const tabIcons = [Home, LineChart, UserRound];
const tabOrder: Tab[] = ["home", "activity", "profile"];

const weekBars = [40, 65, 50, 80, 45, 90, 60];
const stats = [
  { icon: Footprints, value: "8,412", label: "Steps" },
  { icon: Flame, value: "540", label: "Calories" },
  { icon: HeartPulse, value: "132", label: "BPM" },
];

const initialExercises = [
  { name: "Push-ups", detail: "4 x 15", done: true },
  { name: "Bench Press", detail: "3 x 10", done: true },
  { name: "Shoulder Press", detail: "3 x 12", done: false },
  { name: "Tricep Dips", detail: "3 x 15", done: false },
];

export default function FitnessAppDemo() {
  const [tab, setTab] = useState<Tab>("home");
  const [workoutOpen, setWorkoutOpen] = useState(false);
  const [exercises, setExercises] = useState(initialExercises);

  function toggleExercise(name: string) {
    setExercises((ex) => ex.map((e) => (e.name === name ? { ...e, done: !e.done } : e)));
  }

  function selectTab(index: number) {
    setTab(tabOrder[index]);
    setWorkoutOpen(false);
  }

  const completedCount = exercises.filter((e) => e.done).length;

  return (
    <div className="mx-auto h-[560px] max-w-[300px]">
      <PhoneFrame>
        <div className="relative h-full overflow-hidden bg-neutral-50 pt-8 pb-16">
          {tab === "home" && !workoutOpen && (
            <div>
              <div className="flex items-center justify-between px-5">
                <div>
                  <p className="text-[10px] text-neutral-400">Good morning</p>
                  <p className="text-sm font-bold text-[var(--foreground)]">Alex</p>
                </div>
                <Bell className="h-4 w-4 text-neutral-400" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 px-5">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-white p-2.5 text-center shadow-sm">
                    <s.icon className="mx-auto h-4 w-4 text-primary-600" />
                    <p className="mt-1 text-xs font-bold text-[var(--foreground)]">{s.value}</p>
                    <p className="text-[9px] text-neutral-400">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mx-5 mt-4 rounded-xl bg-white p-3.5 shadow-sm">
                <p className="text-[10px] font-semibold text-neutral-500">This week</p>
                <div className="mt-3 flex h-16 items-end justify-between gap-1.5">
                  {weekBars.map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-full rounded-full bg-gradient-to-t from-primary-600 to-accent-500"
                    />
                  ))}
                </div>
              </div>
              <div className="gradient-brand mx-5 mt-4 rounded-xl p-4 text-white">
                <p className="text-[10px] font-semibold opacity-80">Today&apos;s Workout</p>
                <p className="text-sm font-bold">Upper Body Strength</p>
                <button
                  type="button"
                  onClick={() => setWorkoutOpen(true)}
                  className="mt-3 w-full rounded-lg bg-white/20 py-1.5 text-center text-[11px] font-semibold"
                >
                  Start · 24 min
                </button>
              </div>
            </div>
          )}

          {tab === "home" && workoutOpen && (
            <div>
              <div className="flex items-center gap-2 px-5">
                <button type="button" onClick={() => setWorkoutOpen(false)}>
                  <ArrowLeft className="h-4 w-4 text-neutral-400" />
                </button>
                <p className="text-xs font-bold text-[var(--foreground)]">Upper Body Strength</p>
              </div>
              <div className="mt-5 text-center">
                <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)]">
                  24:16
                </p>
                <div className="mx-5 mt-3 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    style={{ width: `${(completedCount / exercises.length) * 100}%` }}
                    className="h-full rounded-full gradient-brand transition-[width] duration-300"
                  />
                </div>
              </div>
              <div className="mt-5 space-y-2.5 px-5">
                {exercises.map((e) => (
                  <button
                    key={e.name}
                    type="button"
                    onClick={() => toggleExercise(e.name)}
                    className="flex w-full items-center justify-between rounded-xl border border-neutral-100 px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full ${e.done ? "bg-primary-600 text-white" : "border border-neutral-300"}`}
                      >
                        {e.done && <Check className="h-3 w-3" />}
                      </span>
                      <span className="text-xs font-medium text-[var(--foreground)]">{e.name}</span>
                    </div>
                    <span className="text-[10px] text-neutral-400">{e.detail}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === "activity" && (
            <div>
              <p className="px-5 text-xs font-bold text-[var(--foreground)]">Your Progress</p>
              <div className="mt-4 grid grid-cols-2 gap-2 px-5">
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <p className="text-lg font-bold text-primary-600">12</p>
                  <p className="text-[9px] text-neutral-400">Workouts this month</p>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <p className="text-lg font-bold text-primary-600">+18%</p>
                  <p className="text-[9px] text-neutral-400">Strength gain</p>
                </div>
              </div>
              <div className="mx-5 mt-4 rounded-xl bg-white p-3.5 shadow-sm">
                <p className="text-[10px] font-semibold text-neutral-500">Achievements</p>
                <div className="mt-3 flex gap-3">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500"
                    >
                      <Trophy className="h-4 w-4 text-white" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "profile" && (
            <div className="px-5">
              <div className="flex flex-col items-center pt-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full gradient-brand text-white">
                  <UserRound className="h-7 w-7" />
                </span>
                <p className="mt-3 text-sm font-bold text-[var(--foreground)]">Alex Rivera</p>
                <p className="text-[10px] text-neutral-400">Member since Jan 2025</p>
              </div>
              <div className="mt-5 space-y-2">
                {["Account settings", "Connected devices", "Notifications", "Support"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-neutral-100 px-3.5 py-2.5 text-xs font-medium text-neutral-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          <PhoneTabBar icons={tabIcons} active={tabOrder.indexOf(tab)} onSelect={selectTab} />
        </div>
      </PhoneFrame>
    </div>
  );
}
