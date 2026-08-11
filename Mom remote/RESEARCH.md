# Mom remote support — research & choice

## Device context
- Target: Samsung Galaxy A-series, ~5 years old (≈2020–2021 models such as A12 / A32 / A52 class)
- Likely Android: **11–13** (some still on 10; many updated to 12/13)
- Location: Iran
- Helper: you in the US
- User skill: non-technical / elderly

## Options compared

| Solution | Play Store? | Mom needs account? | Shows simple ID? | Samsung plugin? | Elderly-friendly? | Notes for Iran |
|----------|-------------|--------------------|------------------|-----------------|-------------------|----------------|
| **TeamViewer QuickSupport** | Yes | No | Yes (“Your ID”) | Often Samsung add-on **or** Universal Add-On (Android 7+) | **Best** | Play/TeamViewer may be slow or blocked some days; test without VPN first |
| AnyDesk | Yes | No | Yes (AnyDesk address) | Universal/vendor control plugin + Accessibility | Good | Similar plugin friction; also test from Iran |
| RustDesk | **No** (removed from Play) | No | Yes | Accessibility/input service | Poor for Mom | APK/F-Droid install is too hard for this user |

## Chosen implementation
**TeamViewer QuickSupport** (official Google Play app `com.teamviewer.quicksupport.market`).

Why:
1. Built for one-time family/support sessions
2. Mom only reads aloud **Your ID** (and accepts the connection prompt)
3. No username/password for Mom in the normal QuickSupport flow
4. Compatible with Android 7+ Universal Add-On when a vendor plugin is missing
5. You connect from TeamViewer on your PC/Mac (personal use)

## Samsung plugin reality
Android does **not** allow arbitrary remote touch control without extra consent.
On Samsung, TeamViewer typically prompts to install:
- a **Samsung-specific add-on**, or
- the **TeamViewer Universal Add-On**

Then Mom must enable that service under **Settings → Accessibility**.
Without the add-on + Accessibility permission, you may **only view** the screen (or have limited control).

## US → Iran connectivity
- Session traffic uses TeamViewer’s relay network; it **often works** internationally, but **Iran filtering can block or degrade** TeamViewer or Google Play on some ISPs/days.
- This HTML page **cannot** fix network blocks.
- Practical plan: try the link without VPN first; if Play Store/TeamViewer cannot open, she may need a working network path (separate from this page).

## What this HTML page does / does not do
- **Does:** guide Mom with huge Persian buttons to install/open QuickSupport and grant Android permissions.
- **Does not:** remotely control the phone by itself. Control requires TeamViewer QuickSupport (+ add-on) and Mom’s live consent.
