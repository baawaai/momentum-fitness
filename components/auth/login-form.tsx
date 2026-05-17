"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    router.push("/dashboard/user");
  }

  return (
    <div className="mx-auto w-full max-w-[400px]">
      <h1 className="font-display text-3xl font-black italic tracking-tight text-secondary sm:text-4xl">
        Sign in
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
        Use your member credentials. Demo flow routes to the member dashboard — wire your auth provider here later.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="login-email" className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            Email
          </Label>
          <Input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@momentum.fit"
            className="h-11 rounded-sm border-white/15 bg-pure-black/40 px-3 text-secondary placeholder:text-on-surface-variant/50"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <Label htmlFor="login-password" className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
              Password
            </Label>
            <Link
              href="/contact"
              className="text-xs font-medium text-electric-blue underline-offset-4 hover:underline"
            >
              Forgot?
            </Link>
          </div>
          <Input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="••••••••"
            className="h-11 rounded-sm border-white/15 bg-pure-black/40 px-3 text-secondary placeholder:text-on-surface-variant/50"
          />
        </div>

        <Button
          type="submit"
          disabled={pending}
          className="mt-2 h-12 w-full rounded-sm bg-electric-blue font-display text-xs font-black uppercase tracking-[0.2em] text-pure-black hover:bg-cyan-300 disabled:opacity-70"
        >
          {pending ? "Signing in…" : "Sign in"}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-on-surface-variant">
        New here?{" "}
        <Link
          href="/signup"
          className="font-semibold text-electric-blue underline-offset-4 hover:underline"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
