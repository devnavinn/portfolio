import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";

// Shared top-of-page hero: dot grid, gradient glow, eyebrow pill, headline.
const PageHero = ({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) => (
  <section className="relative -mx-4 px-4 pb-12 pt-14 text-center sm:-mx-6 sm:px-6 sm:pt-20">
    <DotPattern className="[mask-image:radial-gradient(460px_circle_at_top,white,transparent)]" />
    <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[340px] w-[620px] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/25 to-fuchsia-400/25 blur-3xl dark:from-sky-500/15 dark:to-fuchsia-500/15" />
    <div className="relative mx-auto max-w-[760px]">
      <BlurFade inView={false}>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />
          {eyebrow}
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          {title}
        </h1>
      </BlurFade>
      {subtitle && (
        <BlurFade inView={false} delay={0.1}>
          <p className="mx-auto mt-5 max-w-[600px] text-base text-slate-500 sm:text-lg dark:text-slate-400">
            {subtitle}
          </p>
        </BlurFade>
      )}
      {children && (
        <BlurFade inView={false} delay={0.2}>
          <div className="mt-8">{children}</div>
        </BlurFade>
      )}
    </div>
  </section>
);

export default PageHero;
