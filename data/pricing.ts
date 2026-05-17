import type { PricingPlan } from "@/types";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Essential",
    price: 49,
    period: "/month",
    description: "Perfect for self-guided training with full gym access.",
    features: [
      "Full gym floor access",
      "Locker & shower facilities",
      "Member mobile app",
      "2 group classes / week",
    ],
  },
  {
    id: "pro",
    name: "Momentum Pro",
    price: 89,
    period: "/month",
    description: "Our most popular plan for serious fitness enthusiasts.",
    features: [
      "Everything in Essential",
      "Unlimited group classes",
      "2 personal training sessions",
      "Recovery zone access",
      "Nutrition guide",
    ],
    popular: true,
  },
  {
    id: "elite",
    name: "Elite Performance",
    price: 149,
    period: "/month",
    description: "Premium coaching and 24/7 access for peak performers.",
    features: [
      "Everything in Momentum Pro",
      "24/7 facility access",
      "8 personal training sessions",
      "Custom meal planning",
      "Priority class booking",
      "Quarterly body composition scan",
    ],
  },
];
