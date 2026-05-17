import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { MaterialIcon } from "@/components/ui/material-icon";
import {
  BILLING_HISTORY,
  PAYMENT_METHOD,
  USER_PROFILE,
} from "@/data/user-dashboard";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Billing" };

export default function UserBillingPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Billing & Subscriptions"
        description="Manage payments and download invoices — aligned with the Member Portal billing Stitch screen."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="border border-white/5 bg-charcoal-grey p-6 lg:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="text-label-caps text-outline">Current plan</p>
              <p className="mt-1 font-display text-2xl font-bold uppercase text-secondary">
                {USER_PROFILE.plan}
              </p>
              <p className="mt-2 font-sans text-sm text-on-surface-variant">
                Next charge{" "}
                <span className="text-electric-blue">{USER_PROFILE.nextBilling}</span>{" "}
                · Mock billing UI only
              </p>
            </div>
            <Button className="bg-electric-blue font-display text-xs font-bold uppercase text-pure-black hover:bg-cyan-300">
              Change Plan
            </Button>
          </div>
          <div className="mt-6">
            <h3 className="text-label-caps text-neon-green">Invoice history</h3>
            <ul className="mt-4 divide-y divide-white/10">
              {BILLING_HISTORY.map((inv) => (
                <li
                  key={inv.id}
                  className="flex flex-wrap items-center justify-between gap-3 py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-surface-container">
                      <MaterialIcon
                        name="receipt_long"
                        className="text-electric-blue"
                      />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-secondary">
                        {inv.description}
                      </p>
                      <p className="text-label-caps text-outline">
                        {inv.id} · {inv.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-display text-lg font-bold text-neon-green">
                      ${inv.amount.toFixed(2)}
                    </span>
                    <span className="text-label-caps text-neon-green">
                      {inv.status}
                    </span>
                    <button
                      type="button"
                      className="text-label-caps text-electric-blue hover:text-white"
                    >
                      PDF
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-white/5 bg-charcoal-grey p-6">
            <h3 className="font-display text-lg uppercase text-secondary">
              Payment method
            </h3>
            <div className="mt-4 flex items-center gap-4 rounded-sm border border-white/10 bg-surface-container p-4">
              <MaterialIcon name="credit_card" className="text-3xl text-electric-blue" />
              <div>
                <p className="font-sans text-sm font-medium text-secondary">
                  {PAYMENT_METHOD.brand} ···· {PAYMENT_METHOD.last4}
                </p>
                <p className="text-label-caps text-outline">
                  Exp {PAYMENT_METHOD.exp}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="mt-4 w-full border-white/15 font-display text-xs uppercase text-secondary hover:border-electric-blue hover:text-electric-blue"
            >
              Update Card
            </Button>
          </div>
          <div className="border border-dashed border-electric-blue/30 bg-electric-blue/5 p-6">
            <p className="font-display text-sm font-bold uppercase text-electric-blue">
              Need help?
            </p>
            <p className="mt-2 font-sans text-sm text-outline">
              Billing support: billing@momentumfitness.com · Front desk can
              issue credits (mock).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
