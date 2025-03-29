import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"Community Modules","description":"","frontmatter":{},"headers":[],"relativePath":"features/community_modules.md","filePath":"features/community_modules.md","lastUpdated":null}');
const _sfc_main = { name: "features/community_modules.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="community-modules" tabindex="-1">Community Modules <a class="header-anchor" href="#community-modules" aria-label="Permalink to &quot;Community Modules&quot;">​</a></h1><p>Community Modules are a feature within QMK which allows code to be implemented by third parties, making it available for other people to import into their own builds.</p><p>These modules can provide implementations which override or enhance normal QMK processing; initialization, key processing, suspend, and shutdown are some of the provided hooks which modules may implement.</p><h2 id="adding-a-community-module-to-your-build" tabindex="-1">Adding a Community Module to your build <a class="header-anchor" href="#adding-a-community-module-to-your-build" aria-label="Permalink to &quot;Adding a Community Module to your build&quot;">​</a></h2><p>Community Modules have first-class support for <a href="/newbs_external_userspace">External Userspace</a>, and QMK strongly recommends using External Userspace for hosting keymaps and Community Modules together.</p><p>Modules must live in either of two locations:</p><ul><li><code>&lt;QMK_USERSPACE&gt;/modules/</code></li><li><code>&lt;QMK_FIRMWARE&gt;/modules/</code></li></ul><p>A basic module is provided within QMK itself -- <code>qmk/hello_world</code> -- which prints out a notification over <a href="/faq_debug">HID console</a> after 10 seconds, and adds a new keycode, <code>COMMUNITY_MODULE_HELLO</code> (aliased to <code>CM_HELO</code>) which types <code>Hello there.</code> to the active application when the corresponding key is pressed.</p><p>To add this module to your build, in your keymap&#39;s directory create a <code>keymap.json</code> with the following content:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;modules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;qmk/hello_world&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>If you already have a <code>keymap.json</code>, you&#39;ll need to manually merge the <code>modules</code> section into your keymap.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Community Modules are not supported by QMK Configurator. If you wish to use Community Modules, you must build your own firmware.</p></div><h2 id="adding-a-community-module-to-your-external-userspace" tabindex="-1">Adding a Community Module to your External Userspace <a class="header-anchor" href="#adding-a-community-module-to-your-external-userspace" aria-label="Permalink to &quot;Adding a Community Module to your External Userspace&quot;">​</a></h2><p>Module authors are encouraged to provide a git repository on GitHub which may be imported into a user&#39;s external userspace. If a user wishes to import a module repository, they can do the following:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/your/external/userspace</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Replace the following {user} and {repo} with the author&#39;s community module repository</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/{user}/{repo}.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules/{user}</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recursive</span></span></code></pre></div><p>This will ensure the copy of the module is made in your userspace.</p><p>Add a new entry into your <code>keymap.json</code> with the desired modules, replacing <code>{user}</code> and <code>{module_name}</code> as appropriate:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;modules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;qmk/hello_world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;{user}/{module_name}&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The module listed in <code>keymap.json</code> is the relative path within the <code>modules/</code> directory. So long as the module is present <em>somewhere</em> under <code>modules/</code>, then the <code>keymap.json</code> can refer to that path.</p></div><h2 id="writing-a-qmk-community-module" tabindex="-1">Writing a QMK Community Module <a class="header-anchor" href="#writing-a-qmk-community-module" aria-label="Permalink to &quot;Writing a QMK Community Module&quot;">​</a></h2><p>As stated earlier, Community Module authors are strongly encouraged to provide their modules through git, allowing users to leverage submodules to import functionality.</p><h3 id="qmk-module-json" tabindex="-1"><code>qmk_module.json</code> <a class="header-anchor" href="#qmk-module-json" aria-label="Permalink to &quot;`qmk_module.json`&quot;">​</a></h3><p>A Community Module is denoted by a <code>qmk_module.json</code> file such as the following:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;module_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;maintainer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;QMK Maintainers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;features&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;deferred_exec&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;keycodes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;COMMUNITY_MODULE_HELLO&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;aliases&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CM_HELO&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>At minimum, the module must provide the <code>module_name</code> and <code>maintainer</code> fields.</p><p>The use of <code>features</code> matches the definition normally provided within <code>keyboard.json</code> and <code>info.json</code>, allowing a module to signal to the build system that it has its own dependencies. In the example above, it enables the <em>deferred executor</em> feature whenever the above module is used in a build.</p><p>The <code>keycodes</code> array allows a module to provide new keycodes (as well as corresponding aliases) to a keymap.</p><h3 id="rules-mk-post-rules-mk" tabindex="-1"><code>rules.mk</code> / <code>post_rules.mk</code> <a class="header-anchor" href="#rules-mk-post-rules-mk" aria-label="Permalink to &quot;`rules.mk` / `post_rules.mk`&quot;">​</a></h3><p>These two files follows standard QMK build system logic, allowing for <code>Makefile</code>-style customisation as if it were present in the keyboard or keymap.</p><h3 id="module-c" tabindex="-1"><code>&lt;module&gt;.c</code> <a class="header-anchor" href="#module-c" aria-label="Permalink to &quot;`&lt;module&gt;.c`&quot;">​</a></h3><p>This file will be automatically added to the build if the filename matches the directory name. For example, the <code>qmk/hello_world</code> module contains a <code>hello_world.c</code> file, which is automatically added to the build.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Other files intended to be included must use the normal method of <code>SRC += my_file.c</code> inside <code>rules.mk</code>.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This file should use <code>ASSERT_COMMUNITY_MODULES_MIN_API_VERSION(1,0,0);</code> to enforce a minimum version of the API that it requires, ensuring the Community Module is built with a compatible version of QMK. The list of APIs and corresponding version is given at the bottom of this document. Note the use of commas instead of periods.</p></div><h3 id="introspection-c-introspection-h" tabindex="-1"><code>introspection.c</code> / <code>introspection.h</code> <a class="header-anchor" href="#introspection-c-introspection-h" aria-label="Permalink to &quot;`introspection.c` / `introspection.h`&quot;">​</a></h3><p>These two files hook into the keymap introspection logic -- the header is prepended before the user keymap, and the C source file is appended after the user keymap.</p><p>The header may provide definitions which are useful to the user&#39;s <code>keymap.c</code>.</p><p>The source file may provide functions which allow access to information specified in the user&#39;s <code>keymap.c</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Introspection is a relatively advanced topic within QMK, and existing patterns should be followed. If you need help please <a href="https://github.com/qmk/qmk_firmware/issues/new" target="_blank" rel="noreferrer">open an issue</a> or <a href="https://discord.gg/qmk" target="_blank" rel="noreferrer">chat with us on Discord</a>.</p></div><h3 id="compatible-apis" tabindex="-1">Compatible APIs <a class="header-anchor" href="#compatible-apis" aria-label="Permalink to &quot;Compatible APIs&quot;">​</a></h3><p>Community Modules may provide specializations for the following APIs:</p><table><thead><tr><th>Base API</th><th>API Format</th><th>Example (<code>hello_world</code> module)</th><th>API Version</th></tr></thead><tbody><tr><td><code>keyboard_pre_init</code></td><td><code>keyboard_pre_init_&lt;module&gt;</code></td><td><code>keyboard_pre_init_hello_world</code></td><td><code>0.1.0</code></td></tr><tr><td><code>keyboard_post_init</code></td><td><code>keyboard_post_init_&lt;module&gt;</code></td><td><code>keyboard_post_init_hello_world</code></td><td><code>0.1.0</code></td></tr><tr><td><code>pre_process_record</code></td><td><code>pre_process_record_&lt;module&gt;</code></td><td><code>pre_process_record_hello_world</code></td><td><code>0.1.0</code></td></tr><tr><td><code>process_record</code></td><td><code>process_record_&lt;module&gt;</code></td><td><code>process_record_hello_world</code></td><td><code>0.1.0</code></td></tr><tr><td><code>post_process_record</code></td><td><code>post_process_record_&lt;module&gt;</code></td><td><code>post_process_record_hello_world</code></td><td><code>0.1.0</code></td></tr><tr><td><code>housekeeping_task</code></td><td><code>housekeeping_task_&lt;module&gt;</code></td><td><code>housekeeping_task_hello_world</code></td><td><code>1.0.0</code></td></tr><tr><td><code>suspend_power_down</code></td><td><code>suspend_power_down_&lt;module&gt;</code></td><td><code>suspend_power_down_hello_world</code></td><td><code>1.0.0</code></td></tr><tr><td><code>suspend_wakeup_init</code></td><td><code>suspend_wakeup_init_&lt;module&gt;</code></td><td><code>suspend_wakeup_init_hello_world</code></td><td><code>1.0.0</code></td></tr><tr><td><code>shutdown</code></td><td><code>shutdown_&lt;module&gt;</code></td><td><code>shutdown_hello_world</code></td><td><code>1.0.0</code></td></tr><tr><td><code>process_detected_host_os</code></td><td><code>process_detected_host_os_&lt;module&gt;</code></td><td><code>process_detected_host_os_hello_world</code></td><td><code>1.0.0</code></td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>An unspecified API is disregarded if a Community Module does not provide a specialization for it.</p></div><p>Each API has an equivalent <code>_&lt;module&gt;_kb()</code> and <code>_&lt;module&gt;_user()</code> hook, as per the normal QMK <a href="/custom_quantum_functions#a-word-on-core-vs-keyboards-vs-keymap"><code>_quantum</code>, <code>_kb</code>, and <code>_user</code> functions</a>.</p>', 43);
const _hoisted_44 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_44);
}
const community_modules = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  community_modules as default
};
