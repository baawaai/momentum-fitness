import type { NavLink } from "@/types";

export const SITE_NAME = "MOMENTUM";
export const SITE_TAGLINE =
  "Engineered for performance. Push past your limits in a high-contrast environment designed for professional athletics.";

/** Primary marketing navigation (no “Classes” — matches latest Stitch set). */
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Trainers", href: "/trainers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

/** Shop layout header links — optimized for commerce flow. */
export const SHOP_NAV_LINKS: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Trainers", href: "/trainers" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const FEATURES = [
  {
    icon: "Dumbbell",
    title: "Elite Equipment",
    description:
      "Commercial-grade machines and recovery zones built for serious athletes.",
  },
  {
    icon: "Users",
    title: "Expert Coaching",
    description:
      "Certified trainers deliver personalized programs for your goals.",
  },
  {
    icon: "Clock",
    title: "24/7 Access",
    description: "Train on your schedule with round-the-clock facility access.",
  },
];

/** Highlight metrics for the About page hero strip. */
export const ABOUT_STATS = [
  { label: "Training floor", value: "18K sq ft" },
  { label: "Established", value: "2018" },
  { label: "Classes / week", value: "50+" },
  { label: "Coach staff", value: "12+" },
] as const;

export const ABOUT_VALUES = [
  {
    title: "Performance First",
    description:
      "Every detail is engineered to help you train harder, recover smarter, and perform better.",
  },
  {
    title: "Community Driven",
    description:
      "Join athletes who push each other to reach new personal bests.",
  },
  {
    title: "Results Focused",
    description:
      "Data-backed programming keeps you on track toward measurable goals.",
  },
];

/** Google Maps listing for the physical studio — source of truth for directions */
export const GOOGLE_MAPS_LOCATION_URL =
  "https://maps.app.goo.gl/McdKpsTHi1P1o8mJ8";

export const FOOTER_LINKS = {
  company: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Location", href: "/location" },
    { label: "Contact", href: "/contact" },
  ],
  dashboards: [
    { label: "Member Portal", href: "/login" },
    { label: "Admin Console", href: "/dashboard/admin" },
  ],
};

export const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCtXWVKzy0pjquZr6-EoWljMNyjntzDlyWgZuk5drgrq7JjTKEqSB0JFeacmUvDGrWc1Ip8sOynGFXB325Sg_h31NzoZVvup7Glyh1J5UHvhv791CZyRVeWW4j2-hTCy1GMVW_6CRUMZZUhxyGBh4jQWs3ojfIojZ07I6i-UG8XIntQmWYHFtOlNlDjY1Xk5XVc_aAXVYflOZSiXJ50PM92bt1Ies7lMJ6ChKz2wdQlWlLtV-iIdBE6S7o9PxrTZuS4hopm3sW5i3Y5";

export const BENTO_ITEMS = [
  {
    id: "1",
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to explosive athletic performance.",
    badge: "ELITE",
    badgeClass: "bg-neon-green text-pure-black",
    span: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZlf22NKDWiSEobj7_ouwEvwwamPW5TN8Zbc-z9f2-bvU8mDklamJ5PzwNrHHPWU1Mfi2L8B7ngleJfY2dRz80_jmgENxg5kh4Boq7Z4RU5Inxuw2LLk_xDTdJUmIL15RqESPmnGl9IuO1IivSP0UVTnNdxsxaU3gMcbE8DhZuLnZIFRngtHxykjqlSMKokqYof1cmzBfiu8RJLWBUx3ONY3lTJtHYhwGyhQoopnEn9nM32si0-0qevibFNwYiO5ak9225AvEG37Bt",
  },
  {
    id: "2",
    title: "Group Classes",
    description: "High-intensity functional training.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkPGRueh3omKE2rhqmX0tYPv-kQkzldlZTinAzxoH5pJezxW4rvquys1FZ90ZTjLuOSfPxY4BW-WtdqDHSaBNi3WqLzaN7WBv9t-VuH_4_ScFHmTHwW-3AJh01BvwNZH31F2xmwaMcBjLsx8oQAV7gAgIMXZnlTUl8HGv2nCdivns7-xJONFM2mNKfpCebAXGszpp9ZijP5Qe-yuy7ElY2eSZg8ASCcPkzYxltfhZvy0ATH7IUkYcLzcVzs5qWKSNfZ_gkR8jb9-T9",
  },
  {
    id: "3",
    title: "Nutrition",
    description: "Precision fueling strategies.",
    badge: "NEW",
    badgeClass: "bg-electric-blue text-pure-black",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRgz0cySrbsLCegDxgbyFasI5VnXh7pMQekbl1MgGMK9IO-4WRUVQU_Mh5BYm0lv6Z8Yirm7Ed7gAHrJ6ks0jq0gTJuezuksNDX8TxB__vfzGsqm8xbOtJRwuuuz5ZeBAH3LG30hbCparZxDHXdB6KkO-9Kq6bfnPBdKnZiTs6pCYOi6IBEdpHzokk6Iqc_CRWMBegQjHWTUSBrktIRHcOSA4VvnAnu8AafVnwhefVKMa3IOffB3YqZ9Td5XV62XXyJR9hlxjX0b6m",
  },
  {
    id: "4",
    title: "Open Gym Access",
    description:
      "24/7 access to our elite facility and specialized equipment.",
    span: 2,
    icon: "timer",
  },
];
