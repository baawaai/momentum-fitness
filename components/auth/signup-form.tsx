"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignupForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    if (!acceptedTerms) return;
    const form = e.currentTarget;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const confirm = (form.elements.namedItem("confirm") as HTMLInputElement)
      .value;
    if (password !== confirm) {
      setFormError("Passwords do not match.");
      return;
    }
    setPending(true);
    router.push("/dashboard/user");
  }

  return (
    <div className="mx-auto w-full max-w-[400px]">
      <h1 className="font-display text-3xl font-black italic tracking-tight text-secondary sm:text-4xl">
        Join Momentum
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
        Create a member account to manage bookings and billing. You&apos;ll finish membership selection after signup.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="signup-name" className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            Full name
          </Label>
          <Input
            id="signup-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Alex Rivera"
            className="h-11 rounded-sm border-white/15 bg-pure-black/40 px-3 text-secondary placeholder:text-on-surface-variant/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signup-email" className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            Email
          </Label>
          <Input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@momentum.fit"
            className="h-11 rounded-sm border-white/15 bg-pure-black/40 px-3 text-secondary placeholder:text-on-surface-variant/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signup-password" className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            Password
          </Label>
          <Input
            id="signup-password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            placeholder="At least 8 characters"
            className="h-11 rounded-sm border-white/15 bg-pure-black/40 px-3 text-secondary placeholder:text-on-surface-variant/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signup-confirm" className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            Confirm password
          </Label>
          <Input
            id="signup-confirm"
            name="confirm"
            type="password"
            autoComplete="new-password"
            required
            placeholder="Repeat password"
            className="h-11 rounded-sm border-white/15 bg-pure-black/40 px-3 text-secondary placeholder:text-on-surface-variant/50"
          />
        </div>

        <div className="flex items-start gap-3 pt-1">
          <Checkbox
            id="signup-terms"
            checked={acceptedTerms}
            onCheckedChange={(v) => setAcceptedTerms(v === true)}
            className="mt-0.5 border-white/25"
          />
          <Label htmlFor="signup-terms" className="cursor-pointer text-sm leading-snug font-normal text-on-surface-variant">
            I agree to the{" "}
            <Link href="/terms" className="text-electric-blue underline-offset-4 hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-electric-blue underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            .
          </Label>
        </div>

        {formError && (
          <p className="text-sm font-medium text-status-error" role="alert">
            {formError}
          </p>
        )}

        <Button
          type="submit"
          disabled={pending || !acceptedTerms}
          className="mt-2 h-12 w-full rounded-sm bg-neon-green font-display text-xs font-black uppercase tracking-[0.2em] text-pure-black hover:bg-neon-green/90 disabled:opacity-50"
        >
          {pending ? "Creating account…" : "Create account"}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-on-surface-variant">
        Already a member?{" "}
        <Link
          href="/login"
          className="font-semibold text-electric-blue underline-offset-4 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
