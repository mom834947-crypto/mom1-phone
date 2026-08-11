# Mom remote — Persian guided TeamViewer QuickSupport page

Folder: `C:\Users\audre\OneDrive\vpn\Mom remote`

## What this is
A **static** mobile-first Persian website that guides your mother, one large button at a time, to install and authorize **TeamViewer QuickSupport** so you can help her phone remotely **with her consent**.

The webpage itself **cannot** control her phone.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Multi-step Persian UI |
| `styles.css` | Large-button mobile styles |
| `app.js` | Screen navigation + light Android/Samsung detection |
| `RESEARCH.md` | Why QuickSupport was chosen |
| `LIMITATIONS.md` | What Android security blocks |
| `DEPLOY.md` | How to publish HTTPS |
| `AUDREY_SETUP.md` | What you do on your PC |

## Mom experience
1. You email one HTTPS link  
2. She taps **مامان، اینجا بزن**  
3. Installs QuickSupport from Google Play  
4. Opens app, grants screen + Accessibility/add-on permissions  
5. Reads **Your ID** to you  
6. Accepts your connection request  

## Local preview
```powershell
cd "C:\Users\audre\OneDrive\vpn\Mom remote"
python -m http.server 8790
```
Open: http://127.0.0.1:8790/
