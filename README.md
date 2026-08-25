# vidgrab-pro

Universal Downloader Finder — paste a video URL and get routed to a matching third-party downloader service.

## What it is

A fully static website (HTML/CSS/JS, no backend, no build step). It detects the platform of a pasted link (YouTube, Instagram, TikTok, Facebook, Twitter/X, etc.) and opens a suitable downloader site in a new tab with the URL pre-filled.

VidGrab Pro itself does **not** host, process, or download videos. The third-party services it links to are responsible for the actual downloads, their own ads, and their own terms.

## Pages

- `index.html` — homepage with URL input and platform routing
- `how-it-works.html` — step-by-step guide
- `supported-sites.html` — list of routed platforms
- `faq.html` — FAQ (accordion)
- `contact.html` — contact form that opens a pre-filled GitHub issue

## Local use

Open `index.html` in any browser, or serve the folder:

```
python3 -m http.server 8080
```

## Deployment

Any static host works. For GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.

## Legal

Downloading videos may violate the terms of service of some platforms and may infringe copyright. Intended for personal use only; users are responsible for complying with applicable laws.
