const About = () => {
  return (
    <div className="pt-8 pb-16 max-w-[700px]">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">About</h1>
      <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
        <p>
          {"I'm"} Navin Kumar, a full-stack developer who enjoys turning
          ideas into products people actually want to use. I work mainly with{" "}
          <span className="text-slate-900 dark:text-slate-200">
            React, Next.js, Node.js, and MongoDB
          </span>
          , building everything from e-commerce platforms to SaaS tools, with
          an eye for clean UI and solid backend architecture.
        </p>
        <p>
          I care about writing code that{"'"}s easy to reason about and
          shipping things that work end to end, not just in a demo. Whether
          {"it's"} a customer-facing storefront or an internal dashboard, I
          like getting into the details of how a product should feel to use.
        </p>
        <p>
          Outside of writing code, {"I'm"} usually reading, writing, or
          planning the next trip somewhere new.
        </p>
      </div>
    </div>
  );
};

export default About;
