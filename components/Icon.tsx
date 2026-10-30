import { Truck, Building2, Users, Zap, Wrench, HardHat, Cog, PaintBucket, Sparkles, ShieldCheck, Clock, Award, Layers, MapPin, Cpu, type LucideIcon } from "lucide-react";
import type { IconName } from "@/lib/data";

const MAP: Record<IconName, LucideIcon> = {
  truck: Truck, building: Building2, users: Users, zap: Zap, wrench: Wrench, hardhat: HardHat,
  cog: Cog, paint: PaintBucket, sparkles: Sparkles, shield: ShieldCheck, clock: Clock, award: Award,
  layers: Layers, map: MapPin, cpu: Cpu,
};

export default function Icon({ name, className = "w-5 h-5" }: { name: IconName; className?: string }) {
  const C = MAP[name] ?? Wrench;
  return <C className={className} aria-hidden="true" />;
}
