# miguelpacheco.xyz — MIGUMIND

Phase 1 prototype. A single self-contained HTML page with a hash router,
no build step, no dependencies. Fonts load from Google Fonts; everything
else is inline.

---

## What's in here

| File | Why it exists |
|---|---|
| `index.html` | The whole site. Edit this. |
| `404.html` | A copy of `index.html`, so any unknown path still boots the app. |
| `CNAME` | Tells GitHub Pages the custom domain. **Don't delete it** — GitHub rewrites it when you set the domain in Settings, and removing it unsets the domain. |
| `.nojekyll` | Stops GitHub running Jekyll over the files. |
| `favicon.svg`, `apple-touch-icon.png` | Tab and home-screen icons. |
| `og-image.png` | 1200×630 preview card for links shared to socials. |
| `robots.txt`, `sitemap.xml` | Basic SEO. |

---

## Important: this is not the artifact file verbatim

The artifact on claude.ai is a fragment. claude.ai wraps it in a
`<!doctype>`, `<head>` and `<body>` when it publishes. Nothing does that on
GitHub Pages, so `index.html` here is the complete document — with charset,
viewport, title, meta description, Open Graph tags, canonical URL, favicon
links and the small CSS reset the artifact host was quietly providing.

Copying the raw artifact source into a repo gives you a page that mostly
works and then misbehaves on mobile and in link previews. Use this file.

---

## Putting it live

### If you already have the repo and domain working

Replace `index.html` (and `404.html` with the same content), commit, push.
Live in about a minute.

```bash
git add -A
git commit -m "Update site"
git push
```

### From scratch, in VS Code

```bash
# in an empty folder
git init
git branch -M main
# drop these files in, then:
git add -A
git commit -m "MIGUMIND phase 1"
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch →
`main` / `/ (root)` → Save.**

### From scratch, without the terminal

New repo on github.com → **uploading an existing file** → drag everything
in → Commit. Then the same Settings → Pages step.

GitHub Desktop is the middle option if you want a GUI but still want the
repo on disk for VS Code.

---

## Custom domain

**Settings → Pages → Custom domain → `miguelpacheco.xyz` → Save**, then tick
**Enforce HTTPS** once the certificate is issued (can take up to an hour).

At your registrar, for the apex domain:

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153

AAAA  @    2606:50c0:8000::153
AAAA  @    2606:50c0:8001::153
AAAA  @    2606:50c0:8002::153
AAAA  @    2606:50c0:8003::153

CNAME www  <your-username>.github.io
```

The `www` CNAME points at `<your-username>.github.io` — no repository name
on the end. DNS can take a few hours to settle; GitHub will show a warning
until it does, which is normal.

---

## Editing

Open `index.html` in VS Code. It's one file, in sections:

- `:root { … }` — the colour tokens. Change a hex here and it changes everywhere.
- `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]` — dark mode. Both need the same tokens.
- `const A = [ … ]` — the artwork records. Add an object, it appears in the archive and gets its own detail page.
- `const S`, `const EV`, `const D` — studio entries, events, design projects.
- `function home()`, `artworks()`, `detail()` … — one function per page.

After any edit to `index.html`, copy it over `404.html` so the two stay in
sync:

```bash
cp index.html 404.html
```

**Live preview while you work:** install the *Live Server* extension in VS
Code, right-click `index.html` → Open with Live Server. Opening the file
directly with `file://` works too, but Live Server reloads on save.

---

## The prototype banner

The orange strip at the top says the content is placeholder. When you're
ready to drop it, delete the `<div id="ribbon">…</div>` block near the top of
the body and the `#ribbon` rule in the CSS.

---

## Where this goes next

This is the prototype, not Phase 1 proper. Everything here is hard-coded in
`index.html`, which is exactly what the brief said not to ship — adding a
painting means editing code.

Phase 1 proper is Astro + Sanity: same design, same routes, but the artwork
records come from a CMS you log into. This repo is the right thing to have
live in the meantime — the domain resolves, the design is public, and
nothing here gets thrown away when the real build starts.
