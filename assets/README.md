# assets/

Notes to myself about what lives in here.

## Files

```
harry-klair-cv.pdf        Linked from the Download CV button in the hero.
                          If this file is missing the button hides itself,
                          so there is never a dead link.
evidence/                 The six screenshots in the Evidence section.
```

## Evidence screenshots

| File | Where it came from |
|---|---|
| `evidence/wazuh-triage.png` | soc-detection-lab — Event 4625 failures escalating from rule 60122 to 60204 |
| `evidence/threat-hunt-powershell.png` | soc-detection-lab — DQL hunt for `*EncodedCommand*`, two level 12 hits on rule 92057 |
| `evidence/sysmon-persistence.png` | soc-detection-lab — Sysmon Event 1, hidden `schtasks` persistence as SYSTEM |
| `evidence/malware-triage.png` | soc-detection-lab — VirusTotal, 10/69, `trojan.convagent` |
| `evidence/honeypot-analysis.png` | iot-honeypot — six-panel Python credential dashboard |
| `evidence/jira-queue.png` | HJ Digital Solutions — the live Jira queue, **redacted** |

These are copies, not references. If I update one in the source repo I have to
copy it over again.

## Adding another one

Save the PNG in `evidence/` at 1600px wide or more, then add a `<figure class="ev">`
block in `index.html` next to the others. The panel crops 16:10 from the top, so
crop tight. Anything much wider than about 3:1 needs `class="shot shot-fit"` on
the inner div so it fits inside the frame instead of being cropped to its left
third — the Jira queue screenshot does this.

Clicking any screenshot opens it full size, so the card only has to be readable
enough to recognise.

## Redacting anything from the helpdesk

Before a customer screenshot goes on a public page, take out:

- Names and email addresses
- Hostnames, device names, serial numbers
- IP addresses, internal or external
- File paths with a customer's name in them
- Profile photos

Keep the ticket references, statuses, priorities, dates and my own resolution
text. That is the part that shows anything.

Use a solid filled rectangle, not a blur. A blur can sometimes be reversed; a
solid fill cannot. If I am unsure whether something is fair to publish, ask the
customer first.

## Still to do

- `og.png` — 1200x630. This is the preview card when the link gets pasted into
  LinkedIn or a message. Without it the link shows as plain text, which wastes
  the impression every time I apply somewhere.
- A screenshot of a single closed ticket showing the diagnosis and written
  resolution. The queue view proves volume; one ticket end to end would prove
  I write things up properly.
