# Deploy this site (static HTTPS)

Static files only: `index.html`, `styles.css`, `app.js`

## Option A — Cloudflare Pages (recommended; free)

```powershell
cd "C:\Users\audre\OneDrive\vpn\Mom remote"
npx --yes wrangler pages project create mom-remote-help --production-branch main
npx --yes wrangler pages deploy . --project-name mom-remote-help --commit-dirty=true
```

Expected URL shape:
`https://mom-remote-help.pages.dev/`

Email Mom that HTTPS URL.

## Option B — Upload via Cloudflare dashboard
1. Cloudflare → Workers & Pages → Create → Upload assets  
2. Upload `index.html`, `styles.css`, `app.js`  
3. Copy the `*.pages.dev` URL  

## Option C — GitHub Pages
1. Create a public repo  
2. Upload the three site files to the root (or `/docs`)  
3. Settings → Pages → Deploy from branch  
4. Use the `https://USERNAME.github.io/REPO/` URL  

Note: GitHub may be harder to reach from Iran than some other hosts; Cloudflare Pages is usually the better first test.

## Do not deploy yet unless you want it live
This package is ready; publishing is optional and separate.
