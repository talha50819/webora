import {
  Globe,
  Smartphone,
  PenTool,
  Palette,
  Megaphone,
  BrainCircuit,
  Clapperboard,
  FileText,
  Terminal,
  Building2,
  ShieldCheck,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import { Service } from "@/data/services";

const iconMap: Record<Service["icon"], LucideIcon> = {
  web: Globe,
  mobile: Smartphone,
  uiux: PenTool,
  branding: Palette,
  marketing: Megaphone,
  ai: BrainCircuit,
  "content-creation": Clapperboard,
  "content-writing": FileText,
  software: Terminal,
  enterprise: Building2,
  cybersecurity: ShieldCheck,
  consulting: Lightbulb,
};

export default function ServiceIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} />;
}
