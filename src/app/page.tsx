/* eslint-disable react/jsx-no-comment-textnodes */
export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="relative overflow-hidden pt-20 pb-16 text-center animate-fade-in">
        {/* Gradient glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: 'radial-gradient(circle, var(--jb) 0%, transparent 70%)' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: 'radial-gradient(circle, var(--vellum) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-xs text-muted mb-8">
            <span className="w-2 h-2 rounded-full bg-green pulse-dot inline-block" />
            Package Comparison · 2026
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-6xl mb-6 leading-tight">
            <span className="text-jb">just-bash</span>
            <span className="text-muted italic mx-3 text-2xl md:text-4xl">vs</span>
            <span className="text-vellum">@ekaone/vellum</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted max-w-2xl mx-auto text-sm leading-relaxed">
            Two philosophies of shell execution in Node.js — one simulates bash entirely in-process with a virtual filesystem, the other spawns real child processes with full npm and dev-server support.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* Scorecards */}
        <section className="grid grid-2col gap-6 mb-20 animate-fade-in delay-1" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* just-bash card */}
          <div className="bg-surface rounded-xl p-6 border border-border relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-jb" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted">Vercel Labs</span>
              <span className="text-xs font-bold text-jb bg-jb-dim px-2 py-0.5 rounded">v2.14.1</span>
            </div>
            <h3 className="font-heading text-xl text-jb mb-2">just-bash</h3>
            <p className="text-muted text-xs leading-relaxed mb-4">
              Simulated bash interpreter running entirely in-process. Virtual filesystem, no child processes, no real shell. Built for AI agent tool-calling and sandboxed script execution.
            </p>
            <div className="flex flex-wrap gap-2">
              {['in-process', 'virtual fs', 'AI agents', 'tool executor', 'no real shell'].map(tag => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded border border-jb-dim text-jb bg-jb-dim/30">{tag}</span>
              ))}
            </div>
          </div>

          {/* vellum card */}
          <div className="bg-surface rounded-xl p-6 border border-border relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-vellum" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted">@ekaone</span>
              <span className="text-xs font-bold text-vellum bg-vellum-dim px-2 py-0.5 rounded">v0.1.0</span>
            </div>
            <h3 className="font-heading text-xl text-vellum mb-2">@ekaone/vellum</h3>
            <p className="text-muted text-xs leading-relaxed mb-4">
              Real child-process sandbox with full npm/npx support. Spawns actual shell processes, manages lifecycles with tree-kill, streams output. Built for scaffolding and dev workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              {['real processes', 'real fs', 'npm/npx', 'Next.js', 'tree-kill'].map(tag => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded border border-vellum-dim text-vellum bg-vellum-dim/30">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 01: Architecture & Runtime */}
        <section className="mb-20 animate-fade-in delay-2">
          <div className="section-num mb-2">Section 01</div>
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-text">Architecture &amp; Runtime</h2>

          <div className="bg-surface rounded-xl border border-border overflow-hidden">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th className="text-jb">just-bash</th>
                  <th className="text-vellum">vellum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Execution model</td>
                  <td><span className="text-jb">In-process interpreter</span></td>
                  <td><span className="text-vellum">Real child process</span></td>
                </tr>
                <tr>
                  <td>Filesystem</td>
                  <td><span className="text-green">✓</span> Virtual (in-memory)</td>
                  <td><span className="text-green">✓</span> Real OS filesystem</td>
                </tr>
                <tr>
                  <td>Shell support</td>
                  <td><span className="text-yellow">⚠</span> Simulated bash subset</td>
                  <td><span className="text-green">✓</span> Full system shell</td>
                </tr>
                <tr>
                  <td>Network access</td>
                  <td><span className="text-red">✗</span> None</td>
                  <td><span className="text-green">✓</span> Full network</td>
                </tr>
                <tr>
                  <td>Cross-platform</td>
                  <td><span className="text-green">✓</span> Any JS runtime</td>
                  <td><span className="text-green">✓</span> Node.js required</td>
                </tr>
                <tr>
                  <td>Author</td>
                  <td>Vercel Labs</td>
                  <td>@ekaone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 02: API — Basic Usage */}
        <section className="mb-20 animate-fade-in delay-3">
          <div className="section-num mb-2">Section 02</div>
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-text">API — Basic Usage</h2>

          <div className="grid grid-2col gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-jb" />
                <span className="text-xs text-jb font-bold">just-bash</span>
              </div>
              <pre><code>{`\
`}<span className="kw">import</span>{` { `}<span className="fn">Bash</span>{` } `}<span className="kw">from</span>{` `}<span className="str">&quot;just-bash&quot;</span>{`;

`}<span className="kw">const</span>{` bash = `}<span className="kw">new</span>{` `}<span className="fn">Bash</span>{`({
  `}<span className="prop">files</span>{`: { `}<span className="str">&quot;/data/hello.txt&quot;</span>{`: `}<span className="str">&quot;world&quot;</span>{` },
  `}<span className="prop">cwd</span>{`: `}<span className="str">&quot;/data&quot;</span>{`,
});

`}<span className="kw">const</span>{` result = `}<span className="kw">await</span>{` bash.`}<span className="fn">exec</span>{`(`}<span className="str">&quot;cat hello.txt | grep world&quot;</span>{`);
console.`}<span className="fn">log</span>{`(result.stdout);   `}<span className="cm">// &quot;world\\n&quot;</span>{`
console.`}<span className="fn">log</span>{`(result.exitCode);  `}<span className="cm">// 0</span></code></pre>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-vellum" />
                <span className="text-xs text-vellum font-bold">vellum</span>
              </div>
              <pre><code>{`\
`}<span className="kw">import</span>{` { `}<span className="fn">createSandbox</span>{` } `}<span className="kw">from</span>{` `}<span className="str">&quot;@ekaone/vellum&quot;</span>{`;

`}<span className="kw">const</span>{` sandbox = `}<span className="kw">await</span>{` `}<span className="fn">createSandbox</span>{`({
  `}<span className="prop">defaultTimeout</span>{`: `}<span className="num">30_000</span>{`,
  `}<span className="prop">autoCleanup</span>{`: `}<span className="kw">true</span>{`,
});

`}<span className="kw">const</span>{` result = `}<span className="kw">await</span>{` sandbox.`}<span className="fn">run</span>{`(`}<span className="str">&quot;echo hello &amp;&amp; echo world&quot;</span>{`);
console.`}<span className="fn">log</span>{`(result.stdout);    `}<span className="cm">// &quot;hello\\nworld\\n&quot;</span>{`
console.`}<span className="fn">log</span>{`(result.exitCode);   `}<span className="cm">// 0</span>{`
console.`}<span className="fn">log</span>{`(result.durationMs); `}<span className="cm">// wall time</span>{`
`}<span className="kw">await</span>{` sandbox.`}<span className="fn">destroy</span>{`();`}</code></pre>
            </div>
          </div>
        </section>

        {/* Section 03: API — npm Workflows */}
        <section className="mb-20 animate-fade-in delay-4">
          <div className="section-num mb-2">Section 03</div>
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-text">API — npm Workflows</h2>

          <div className="grid grid-2col gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-jb" />
                <span className="text-xs text-jb font-bold">just-bash</span>
                <span className="text-[10px] text-red ml-auto">NOT SUPPORTED</span>
              </div>
              <pre><code>{`\
`}<span className="cm">// npm is not available in just-bash</span>{`
`}<span className="kw">const</span>{` result = `}<span className="kw">await</span>{` bash.`}<span className="fn">exec</span>{`(`}<span className="str">&quot;npm install express&quot;</span>{`);
console.`}<span className="fn">log</span>{`(result.exitCode); `}<span className="cm">// 127 (not found)</span>{`
console.`}<span className="fn">log</span>{`(result.stderr);
`}<span className="cm">// &quot;bash: npm: command not found&quot;</span>{`

`}<span className="kw">const</span>{` r2 = `}<span className="kw">await</span>{` bash.`}<span className="fn">exec</span>{`(`}<span className="str">&quot;node -e &#39;console.log(1)&#39;&quot;</span>{`);
console.`}<span className="fn">log</span>{`(r2.exitCode); `}<span className="cm">// 127</span>{`
`}<span className="cm">// &quot;bash: node: command not found&quot;</span></code></pre>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-vellum" />
                <span className="text-xs text-vellum font-bold">vellum</span>
                <span className="text-[10px] text-green ml-auto">FULL SUPPORT</span>
              </div>
              <pre><code>{`\
`}<span className="kw">import</span>{` { `}<span className="fn">createSandbox</span>{` } `}<span className="kw">from</span>{` `}<span className="str">&quot;@ekaone/vellum&quot;</span>{`;

`}<span className="kw">const</span>{` sandbox = `}<span className="kw">await</span>{` `}<span className="fn">createSandbox</span>{`();

`}<span className="cm">// Write a package.json</span>{`
`}<span className="kw">await</span>{` sandbox.`}<span className="fn">writeFile</span>{`(`}<span className="str">&quot;package.json&quot;</span>{`,
  JSON.`}<span className="fn">stringify</span>{`({ `}<span className="prop">dependencies</span>{`: { `}<span className="str">&quot;express&quot;</span>{`: `}<span className="str">&quot;*&quot;</span>{` } })`}{`
);

`}<span className="cm">// Real npm install</span>{`
`}<span className="kw">await</span>{` sandbox.`}<span className="fn">run</span>{`(`}<span className="str">&quot;npm install&quot;</span>{`);

`}<span className="cm">// Execute Node.js</span>{`
`}<span className="kw">const</span>{` result = `}<span className="kw">await</span>{` sandbox.`}<span className="fn">run</span>{`(
  `}<span className="str">&quot;node -e &#39;require(\\&quot;express\\&quot;); console.log(\\&quot;ok\\&quot;)&#39;&quot;</span>{`
);
console.`}<span className="fn">log</span>{`(result.stdout); `}<span className="cm">// &quot;ok\\n&quot;</span>{`
`}<span className="kw">await</span>{` sandbox.`}<span className="fn">destroy</span>{`();`}</code></pre>
            </div>
          </div>
        </section>

        {/* Section 04: API — AI Agent Tooling */}
        <section className="mb-20 animate-fade-in delay-5">
          <div className="section-num mb-2">Section 04</div>
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-text">API — AI Agent Tooling</h2>

          <div className="grid grid-2col gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-jb" />
                <span className="text-xs text-jb font-bold">just-bash</span>
                <span className="text-[10px] text-green ml-auto">FIRST-CLASS</span>
              </div>
              <pre><code>{`\
`}<span className="kw">import</span>{` { `}<span className="fn">Bash</span>{` } `}<span className="kw">from</span>{` `}<span className="str">&quot;just-bash&quot;</span>{`;

`}<span className="kw">const</span>{` executor = `}<span className="kw">new</span>{` `}<span className="fn">Bash</span>{`({
  `}<span className="prop">tools</span>{`: [`}<span className="str">&quot;shell&quot;</span>{`, `}<span className="str">&quot;fs&quot;</span>{`, `}<span className="str">&quot;grep&quot;</span>{`],
  `}<span className="prop">sources</span>{`: [{
    `}<span className="prop">type</span>{`: `}<span className="str">&quot;graphql&quot;</span>{`,
    `}<span className="prop">url</span>{`:  `}<span className="str">&quot;https://api.example.com/graphql&quot;</span>{`,
  }],
  `}<span className="prop">maxTurns</span>{`: `}<span className="num">10</span>{`,
});

`}<span className="cm">// Returns tool-call-ready objects</span>{`
`}<span className="kw">const</span>{` tools = executor.`}<span className="fn">getTools</span>{`();
`}<span className="cm">{"// { name, description, parameters, execute }"}</span></code></pre>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-vellum" />
                <span className="text-xs text-vellum font-bold">vellum</span>
                <span className="text-[10px] text-muted ml-auto">BRING YOUR OWN</span>
              </div>
              <pre><code>{`\
`}<span className="cm">// Compose with any AI SDK</span>{`
`}<span className="kw">import</span>{` Anthropic `}<span className="kw">from</span>{` `}<span className="str">&quot;@anthropic-ai/sdk&quot;</span>{`;
`}<span className="kw">import</span>{` { `}<span className="fn">createSandbox</span>{` } `}<span className="kw">from</span>{` `}<span className="str">&quot;@ekaone/vellum&quot;</span>{`;

`}<span className="kw">const</span>{` sandbox = `}<span className="kw">await</span>{` `}<span className="fn">createSandbox</span>{`();

`}<span className="cm">// Wire up tool-calling yourself</span>{`
`}<span className="kw">async function</span>{` `}<span className="fn">handleToolCall</span>{`(cmd: `}<span className="kw">string</span>{`) {
  `}<span className="kw">return await</span>{` sandbox.`}<span className="fn">run</span>{`(cmd);
}

`}<span className="cm">// Pipeline: generate → run → capture</span>{`
`}<span className="kw">const</span>{` pipeline = [
  `}<span className="str">&quot;npm init -y&quot;</span>{`,
  `}<span className="str">&quot;npm install express&quot;</span>{`,
  `}<span className="str">&quot;node index.js&quot;</span>{`,
];`}</code></pre>
            </div>
          </div>
        </section>

        {/* Section 05: Feature Matrix */}
        <section className="mb-20 animate-fade-in delay-6">
          <div className="section-num mb-2">Section 05</div>
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-text">Feature Matrix</h2>

          <div className="bg-surface rounded-xl border border-border p-6">
            {/* Header */}
            <div className="feature-row text-xs text-muted uppercase tracking-wider border-b border-border pb-3 mb-0" style={{ fontWeight: 400 }}>
              <span>Category</span>
              <span className="text-jb">just-bash</span>
              <span className="text-vellum">vellum</span>
            </div>

            {/* Row 1 */}
            <div className="feature-row">
              <span className="text-xs">Run real npm install</span>
              <span className="text-xs"><span className="text-red">✗</span></span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-vellum">WINS</span></span>
            </div>
            {/* Row 2 */}
            <div className="feature-row">
              <span className="text-xs">Next.js / Vite builds</span>
              <span className="text-xs"><span className="text-red">✗</span></span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-vellum">WINS</span></span>
            </div>
            {/* Row 3 */}
            <div className="feature-row">
              <span className="text-xs">Dev server lifecycle</span>
              <span className="text-xs"><span className="text-red">✗</span></span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-vellum">WINS</span></span>
            </div>
            {/* Row 4 */}
            <div className="feature-row">
              <span className="text-xs">AI agent tool-calling</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-jb">WINS</span></span>
              <span className="text-xs"><span className="text-yellow">~</span> Manual</span>
            </div>
            {/* Row 5 */}
            <div className="feature-row">
              <span className="text-xs">GraphQL / OpenAPI sources</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-jb">WINS</span></span>
              <span className="text-xs"><span className="text-red">✗</span></span>
            </div>
            {/* Row 6 */}
            <div className="feature-row">
              <span className="text-xs">Security / isolation</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-jb">WINS</span></span>
              <span className="text-xs"><span className="text-yellow">~</span> temp dir</span>
            </div>
            {/* Row 7 */}
            <div className="feature-row">
              <span className="text-xs">Pipeline / sequential steps</span>
              <span className="text-xs"><span className="text-yellow">~</span> Manual</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-vellum">WINS</span></span>
            </div>
            {/* Row 8 */}
            <div className="feature-row">
              <span className="text-xs">Timeout + process kill</span>
              <span className="text-xs"><span className="text-yellow">~</span> Basic</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-vellum">WINS</span></span>
            </div>
            {/* Row 9 */}
            <div className="feature-row">
              <span className="text-xs">Streaming output hooks</span>
              <span className="text-xs"><span className="text-yellow">~</span> Result only</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-vellum">WINS</span></span>
            </div>
            {/* Row 10 */}
            <div className="feature-row">
              <span className="text-xs">Custom FS backends</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-jb">WINS</span></span>
              <span className="text-xs"><span className="text-muted">— OS temp only</span></span>
            </div>
            {/* Row 11 */}
            <div className="feature-row">
              <span className="text-xs">Cross-platform (Windows)</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-jb">WINS</span></span>
              <span className="text-xs"><span className="text-green">✓</span></span>
            </div>
            {/* Row 12 */}
            <div className="feature-row">
              <span className="text-xs">CLI binary</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-tie">TIE</span></span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-tie">TIE</span></span>
            </div>
            {/* Row 13 */}
            <div className="feature-row">
              <span className="text-xs">Execution speed</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-jb">WINS</span></span>
              <span className="text-xs"><span className="text-yellow">~</span> overhead</span>
            </div>
            {/* Row 14 */}
            <div className="feature-row">
              <span className="text-xs">File utilities</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-tie">TIE</span></span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-tie">TIE</span></span>
            </div>
            {/* Row 15 */}
            <div className="feature-row">
              <span className="text-xs">Maintenance / maturity</span>
              <span className="text-xs"><span className="text-green">✓</span> <span className="badge-wins badge-jb">WINS</span></span>
              <span className="text-xs"><span className="text-yellow">~</span> early</span>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-20 animate-fade-in delay-7">
          <div className="section-num mb-2">Verdict</div>
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-text">When to Use Each</h2>

          <div className="grid grid-2col gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {/* just-bash verdict */}
            <div className="bg-surface rounded-xl p-6 border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-jb" />
              <div className="text-[10px] uppercase tracking-widest text-muted mb-3">Pick this when →</div>
              <h3 className="font-heading text-xl text-jb mb-3">just-bash</h3>
              <p className="text-muted text-xs leading-relaxed mb-4">
                You need a sandboxed, in-process bash interpreter that runs anywhere — no real shell, no child processes, no security concerns.
              </p>
              <div className="text-[10px] uppercase tracking-widest text-muted mb-2">Best for</div>
              <ul className="text-xs text-text space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-jb mt-0.5">▸</span> LLM tool-calling</li>
                <li className="flex items-start gap-2"><span className="text-jb mt-0.5">▸</span> CI script simulation</li>
                <li className="flex items-start gap-2"><span className="text-jb mt-0.5">▸</span> Text processing</li>
                <li className="flex items-start gap-2"><span className="text-jb mt-0.5">▸</span> Embedding shell in browser/serverless</li>
                <li className="flex items-start gap-2"><span className="text-jb mt-0.5">▸</span> Testing shell scripts</li>
              </ul>
            </div>

            {/* vellum verdict */}
            <div className="bg-surface rounded-xl p-6 border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-vellum" />
              <div className="text-[10px] uppercase tracking-widest text-muted mb-3">Pick this when →</div>
              <h3 className="font-heading text-xl text-vellum mb-3">@ekaone/vellum</h3>
              <p className="text-muted text-xs leading-relaxed mb-4">
                You need real shell execution — npm installs, dev servers, build pipelines, and streaming output from actual child processes.
              </p>
              <div className="text-[10px] uppercase tracking-widest text-muted mb-2">Best for</div>
              <ul className="text-xs text-text space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-vellum mt-0.5">▸</span> npm install / build</li>
                <li className="flex items-start gap-2"><span className="text-vellum mt-0.5">▸</span> Scaffolding Next.js / Vite / React</li>
                <li className="flex items-start gap-2"><span className="text-vellum mt-0.5">▸</span> Dev server lifecycle</li>
                <li className="flex items-start gap-2"><span className="text-vellum mt-0.5">▸</span> Streaming build output</li>
                <li className="flex items-start gap-2"><span className="text-vellum mt-0.5">▸</span> Sequential pipeline</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 animate-fade-in delay-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green pulse-dot inline-block" />
            Generated April 2026 · just-bash v2.14.1 · @ekaone/vellum v0.1.0
          </div>
          <div>Both packages MIT/Apache-2.0 licensed</div>
        </div>
      </footer>
    </div>
  );
}
