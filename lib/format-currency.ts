const PKR_LOCALE = "en-PK";

const defaultWholeOrDecimal: Omit<Intl.NumberFormatOptions, "style" | "currency"> =
  {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };

/**
 * Pakistani Rupees (PKR). Use this anywhere a price or money amount appears.
 */
export function formatPkr(
  amount: number,
  overrides?: Omit<Intl.NumberFormatOptions, "style" | "currency">
): string {
  return new Intl.NumberFormat(PKR_LOCALE, {
    style: "currency",
    currency: "PKR",
    ...defaultWholeOrDecimal,
    ...overrides,
  }).format(amount);
}

/** e.g. chart axes, KPI tiles — abbreviated PKR (“Rs142K”). */
export function formatPkrCompact(amount: number): string {
  return new Intl.NumberFormat(PKR_LOCALE, {
    style: "currency",
    currency: "PKR",
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(amount);
}

export function formatPkrLedger(amount: number): string {
  const abs = Math.abs(amount);
  const formatted = formatPkr(abs, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (amount > 0) return `+${formatted}`;
  if (amount < 0) return `-${formatted}`;
  return formatted;
}
