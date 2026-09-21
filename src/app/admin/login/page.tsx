"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { AlertCircleIcon, EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";
import { login } from "../actions";

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:from-blue-500 hover:to-indigo-500 active:scale-[0.99] disabled:opacity-60"
    >
      {pending ? "Signing in…" : "Sign in"}
    </button>
  );
};

const Login = () => {
  const [error, action] = useFormState(login, undefined);
  const [show, setShow] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-slate-50 dark:bg-slate-950">
      {/* soft gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-400/30 dark:bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-indigo-400/30 dark:bg-indigo-600/20 blur-3xl" />
      {/* dotted grid, faded at the edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30 [background-image:radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <form
        action={action}
        className="relative w-full max-w-sm rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl"
      >
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
          <LockIcon size={22} />
        </div>
        <h1 className="text-center text-2xl font-semibold tracking-tight">
          Welcome back
        </h1>
        <p className="mt-1 mb-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Enter your password to manage your posts.
        </p>

        <div className="relative">
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            autoFocus
            required
            autoComplete="current-password"
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950/60 px-3.5 py-2.5 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            {show ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
          </button>
        </div>

        {error && (
          <p className="mt-3 flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-600 dark:text-red-400">
            <AlertCircleIcon size={16} className="shrink-0" />
            {error}
          </p>
        )}

        <div className="mt-5">
          <Submit />
        </div>
      </form>
    </div>
  );
};

export default Login;
