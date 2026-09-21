import ReactMarkdown from "react-markdown";

const Markdown = ({ children }: { children: string }) => (
  <div className="space-y-4 leading-7 text-slate-800 dark:text-slate-200">
    <ReactMarkdown
      components={{
        h1: (p) => <h2 className="text-2xl font-semibold pt-4" {...p} />,
        h2: (p) => <h2 className="text-xl font-semibold pt-4" {...p} />,
        h3: (p) => <h3 className="text-lg font-semibold pt-2" {...p} />,
        a: (p) => <a className="text-blue-500 underline underline-offset-4" {...p} />,
        ul: (p) => <ul className="list-disc pl-6 space-y-1" {...p} />,
        ol: (p) => <ol className="list-decimal pl-6 space-y-1" {...p} />,
        blockquote: (p) => (
          <blockquote className="border-l-2 border-slate-300 dark:border-slate-700 pl-4 text-slate-600 dark:text-slate-400" {...p} />
        ),
        pre: (p) => (
          <pre className="overflow-x-auto rounded-md bg-slate-100 dark:bg-slate-900 p-4 text-sm" {...p} />
        ),
        code: (p) => <code className="font-mono text-[0.9em]" {...p} />,
        img: (p) => <img className="rounded-md" alt="" {...p} />,
      }}
    >
      {children}
    </ReactMarkdown>
  </div>
);

export default Markdown;
