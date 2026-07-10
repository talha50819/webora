import { ComponentType } from "react";
import EcommerceStorefrontDemo from "./EcommerceStorefrontDemo";
import PatientPortalDemo from "./PatientPortalDemo";
import SeoDashboardDemo from "./SeoDashboardDemo";
import AiSupportDemo from "./AiSupportDemo";
import FitnessAppDemo from "./FitnessAppDemo";
import BrandBoardDemo from "./BrandBoardDemo";

type SiteDemo = { kind: "site"; url: string; description: string; Component: ComponentType };
type StandaloneDemo = { kind: "standalone"; description: string; Component: ComponentType };

export type LiveDemo = SiteDemo | StandaloneDemo;

export const liveDemos: Record<string, LiveDemo> = {
  "ecommerce-platform-redesign": {
    kind: "site",
    url: "meridianhome.co",
    description:
      "A working preview of the storefront we shipped. Switch views to see how the layout adapts across desktop, tablet, and mobile.",
    Component: EcommerceStorefrontDemo,
  },
  "healthcare-portal-uiux": {
    kind: "site",
    url: "portal.harborviewhealth.org",
    description:
      "A working preview of the patient portal we shipped. Book a slot, browse records, and switch views to see it adapt across devices.",
    Component: PatientPortalDemo,
  },
  "regional-retailer-seo-growth": {
    kind: "site",
    url: "analytics.coastaloutfitters.com",
    description:
      "A working preview of the growth dashboard we built. Filter the keyword table and switch views to see it adapt across devices.",
    Component: SeoDashboardDemo,
  },
  "support-chatbot-assistant": {
    kind: "site",
    url: "app.northlinelogistics.com/support",
    description:
      "A working preview of the support assistant we shipped. Ask it something, or switch views to see it adapt across devices.",
    Component: AiSupportDemo,
  },
  "fitness-tracking-app": {
    kind: "standalone",
    description:
      "A working preview of the app we shipped. Tap the tabs, start a workout, and check off exercises.",
    Component: FitnessAppDemo,
  },
  "brand-identity-refresh": {
    kind: "standalone",
    description:
      "The brand system we delivered. Click through the board — the color swatches are copyable.",
    Component: BrandBoardDemo,
  },
};
