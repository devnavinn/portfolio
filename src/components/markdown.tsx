import ReactMarkdown from "react-markdown";

const Markdown = ({ children }: { children: string }) => (
  <div className="space-y-5 text-[1.05rem] leading-8 text-slate-700 dark:text-slate-300">
    <ReactMarkdown
      components={{
        h1: (p) => <h2 className="pt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white" {...p} />,
        h2: (p) => <h2 className="pt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white" {...p} />,
        h3: (p) => <h3 className="pt-4 text-xl font-semibold text-slate-900 dark:text-white" {...p} />,
        strong: (p) => <strong className="font-semibold text-slate-900 dark:text-white" {...p} />,
        a: (p) => <a className="font-medium text-sky-500 underline decoration-sky-500/30 underline-offset-4 hover:decoration-sky-500" {...p} />,
        ul: (p) => <ul className="list-disc space-y-2 pl-6 marker:text-sky-500" {...p} />,
        ol: (p) => <ol className="list-decimal space-y-2 pl-6 marker:text-sky-500" {...p} />,
        blockquote: (p) => (
          <blockquote className="rounded-r-xl border-l-4 border-sky-500 bg-sky-500/5 py-3 pl-5 pr-4 text-slate-600 dark:text-slate-300" {...p} />
        ),
        pre: (p) => (
          <pre className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed dark:border-white/10 dark:bg-white/[0.03]" {...p} />
        ),
        code: (p) => <code className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[0.88em] dark:bg-white/10 [pre_&]:bg-transparent [pre_&]:p-0" {...p} />,
        hr: () => <hr className="my-10 border-slate-200 dark:border-white/10" />,
        // eslint-disable-next-line @next/next/no-img-element
        img: (p) => <img className="rounded-2xl border border-slate-200 dark:border-white/10" alt="" {...p} />,
      }}
    >
      {children}
    </ReactMarkdown>
  </div>
);

export default Markdown;
