# assets/ — what goes in here

Nothing in this folder is required for the site to render. Every file below is
optional: if it's missing, the page shows a labelled placeholder or hides the
element entirely. There are never broken images or dead links.

---

## 1. Your CV (highest priority — still missing)

```
assets/harry-klair-cv.pdf
```

Drop the PDF in at exactly that filename. The **Download CV** button in the hero
appears automatically once the file exists, and stays hidden while it doesn't.

Recruiters look for this first. Do this one today.

---

## 2. Evidence screenshots

The Evidence section has seven slots. **Five are already filled** from the public
project repos; two are yours to add.

### Already in place

Copied from `HarryKlrr/soc-detection-lab` and `HarryKlrr/iot-honeypot`:

| File | Source | Shows |
|---|---|---|
| `evidence/wazuh-triage.png` | soc-detection-lab | Event 4625 failures escalating from rule 60122 (level 5) to 60204 (level 10) |
| `evidence/threat-hunt-powershell.png` | soc-detection-lab | DQL hunt for `*EncodedCommand*`, two level 12 hits on rule 92057 |
| `evidence/sysmon-persistence.png` | soc-detection-lab | Sysmon Event 1 — hidden `schtasks` persistence running as SYSTEM |
| `evidence/malware-triage.png` | soc-detection-lab | VirusTotal, 10/69 vendors, `trojan.convagent` (cropped to 16:10) |
| `evidence/honeypot-analysis.png` | iot-honeypot | Six-panel Python credential dashboard, 98.4% / 1.6% split |

If you update a screenshot in the source repo, re-copy it here — these are
independent copies, not references.

### Still to add

| File | What to capture |
|---|---|
| `evidence/jira-queue.png` | Your Jira Service Management queue view **(redact first)** |
| `evidence/jira-ticket.png` | A single closed ticket showing diagnosis and written resolution **(redact first)** |

**Specs.** PNG, 1600px wide or more. The panel crops to 16:10 from the top, so
crop tight and put the important content near the top.

If you'd rather not publish customer tickets at all, delete those two
`<figure class="ev">` blocks from `index.html` — they're marked with a comment.
Five real screenshots is already a strong section.

### Redacting the Jira screenshots

Before publishing anything from the live helpdesk, remove:

- Customer names and email addresses
- Hostnames, device names and serial numbers
- IP addresses (internal and external)
- Any file paths containing a customer's name
- Reporter avatars, if they're a real photo

Keep ticket IDs, statuses, priorities, dates, queue names and your own written
resolution text — that's the part doing the work.

Use a solid black rectangle, not a Gaussian blur. Blur can sometimes be
reversed; a solid fill cannot.

If in doubt, ask the customer. Most will say yes; the ones who wouldn't are
exactly the ones you needed to ask.

---

## 3. Social preview image (optional)

```
assets/og.png
```

1200 × 630 PNG. This is what shows as the preview card when you paste your
portfolio link into LinkedIn, Slack or a message. Without it the link renders as
plain text, which is a wasted opportunity every time you apply somewhere.

Simplest version that works: your name, "SOC Analyst", and the SC-cleared line
on the same dark background as the site.
