const Resume = () => {
  return (
    <div className="pt-8 pb-16 max-w-[700px]">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Resume</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400">
        Full resume coming soon. In the meantime, check out my{" "}
        <a href="/projects" className="text-sky-500">
          projects
        </a>{" "}
        or reach out directly at{" "}
        <a href="mailto:codernavin@gmail.com" className="text-sky-500">
          codernavin@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default Resume;
