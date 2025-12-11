import{_ as s,c as a,a as t,o as p}from"./app.fedf7c1e.js";const d='{"title":"\u914D\u7F6E","description":"VitePress\u914D\u7F6E\u6307\u5357","frontmatter":{"title":"\u914D\u7F6E","description":"VitePress\u914D\u7F6E\u6307\u5357"},"headers":[{"level":2,"title":"\u57FA\u672C\u914D\u7F6E","slug":"\u57FA\u672C\u914D\u7F6E"},{"level":3,"title":"\u7F51\u7AD9\u5143\u6570\u636E","slug":"\u7F51\u7AD9\u5143\u6570\u636E"},{"level":3,"title":"\u4E3B\u9898\u914D\u7F6E","slug":"\u4E3B\u9898\u914D\u7F6E"},{"level":2,"title":"\u9AD8\u7EA7\u914D\u7F6E","slug":"\u9AD8\u7EA7\u914D\u7F6E"},{"level":3,"title":"\u6784\u5EFA\u914D\u7F6E","slug":"\u6784\u5EFA\u914D\u7F6E"},{"level":3,"title":"Markdown\u914D\u7F6E","slug":"markdown\u914D\u7F6E"},{"level":3,"title":"\u670D\u52A1\u5668\u914D\u7F6E","slug":"\u670D\u52A1\u5668\u914D\u7F6E"}],"relativePath":"docs/guide/configuration.md"}',o={};function e(c,n,i,l,r,u){return p(),a("div",null,[...n[0]||(n[0]=[t(`<h1 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h1><p>VitePress\u7684\u914D\u7F6E\u6587\u4EF6\u4F4D\u4E8E<code>docs/.vitepress/config.mts</code>\uFF0C\u4F7F\u7528TypeScript\u7F16\u5199\u3002\u4F60\u53EF\u4EE5\u5728\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u914D\u7F6E\u7F51\u7AD9\u7684\u6807\u9898\u3001\u63CF\u8FF0\u3001\u4E3B\u9898\u7B49\u3002</p><h2 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1">\u57FA\u672C\u914D\u7F6E <a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a></h2><h3 id="\u7F51\u7AD9\u5143\u6570\u636E" tabindex="-1">\u7F51\u7AD9\u5143\u6570\u636E <a class="header-anchor" href="#\u7F51\u7AD9\u5143\u6570\u636E" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;\u6211\u7684\u7F51\u7AD9&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u6211\u7684\u7F51\u7AD9\u63CF\u8FF0&#39;</span><span class="token punctuation">,</span>
  lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  base<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;/favicon.ico&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u4E3B\u9898\u914D\u7F6E" tabindex="-1">\u4E3B\u9898\u914D\u7F6E <a class="header-anchor" href="#\u4E3B\u9898\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">&#39;/logo.png&#39;</span><span class="token punctuation">,</span>
    nav<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;\u6587\u6863&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/docs/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;\u5FEB\u901F\u5F00\u59CB&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/guide/getting-started&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;\u914D\u7F6E&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/guide/configuration&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    socialLinks<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> icon<span class="token operator">:</span> <span class="token string">&#39;github&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;https://github.com/example&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u9AD8\u7EA7\u914D\u7F6E" tabindex="-1">\u9AD8\u7EA7\u914D\u7F6E <a class="header-anchor" href="#\u9AD8\u7EA7\u914D\u7F6E" aria-hidden="true">#</a></h2><h3 id="\u6784\u5EFA\u914D\u7F6E" tabindex="-1">\u6784\u5EFA\u914D\u7F6E <a class="header-anchor" href="#\u6784\u5EFA\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    outDir<span class="token operator">:</span> <span class="token string">&#39;../dist&#39;</span><span class="token punctuation">,</span>
    assetsDir<span class="token operator">:</span> <span class="token string">&#39;assets&#39;</span><span class="token punctuation">,</span>
    minify<span class="token operator">:</span> <span class="token string">&#39;terser&#39;</span><span class="token punctuation">,</span>
    sourcemap<span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="markdown\u914D\u7F6E" tabindex="-1">Markdown\u914D\u7F6E <a class="header-anchor" href="#markdown\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
    theme<span class="token operator">:</span> <span class="token string">&#39;github-dark&#39;</span><span class="token punctuation">,</span>
    lineNumbers<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span>md<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u81EA\u5B9A\u4E49Markdown\u914D\u7F6E</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u670D\u52A1\u5668\u914D\u7F6E" tabindex="-1">\u670D\u52A1\u5668\u914D\u7F6E <a class="header-anchor" href="#\u670D\u52A1\u5668\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  server<span class="token operator">:</span> <span class="token punctuation">{</span>
    port<span class="token operator">:</span> <span class="token number">5173</span><span class="token punctuation">,</span>
    open<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    host<span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,14)])])}var g=s(o,[["render",e]]);export{d as __pageData,g as default};
