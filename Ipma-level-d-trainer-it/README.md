# IPMA Level D · Prüfungssimulation

Kompakte Selbsttest-Simulation für die **IPMA Level D / GPM-Zertifizierung** nach **ICB 4.0**. Eine Single-Page-HTML-App ohne Backend, ohne Tracking, ohne Anmeldung.

**56 Fragen · 2 pro ICB4-Kompetenzelement · Mix aus Single Choice, offenen Fragen und Rechenaufgaben.**

Du startest direkt mit der ersten Frage. Keine Filter, keine Auswahl — durchziehen und am Ende sehen, wo du stehst.

---

## Live-Version

→ **[https://jankoester-pm.github.io/ipma-level-d-trainer/](https://jankoester-pm.github.io/ipma-level-d-trainer/)**

(Falls noch nicht aktiv: Repo lokal klonen und `index.html` im Browser öffnen — funktioniert auch offline.)

---

## Was drin ist

- **31 Multiple Choice-Fragen** (Bloom 1–2, Level-D-Standard)
- **23 offene Fragen** mit Musterlösung zum Selbstvergleich
- **2 Rechenaufgaben** (PERT bzw. EVA) mit Schritt-für-Schritt-Lösung
- **Alle 28 ICB4-Elemente** sind mit je 2 Fragen abgedeckt (Perspective, People, Practice)
- Reihenfolge wird bei jedem Start neu gemischt

## Bedienung

1. Seite öffnen, los geht's. Bei MC durch Klick antworten, bei offenen Fragen frei tippen.
2. **Antwort prüfen** drückt das Feedback aus. Bei offenen Fragen kommt die Musterlösung; du bewertest selbst (richtig / teilweise / daneben).
3. Nicht weiter? **Überspringen** drücken.
4. Am Ende: Score und Einordnung.

## Quellen

- Probeklausuren GPM Level D ICB 4 (V01–V12)
- Eigenentwicklung (35 neue Bloom-1/2-MC-Fragen + 6 PERT/EVA-Aufgaben)
- Taxonomie-Grundlage: pm-zert.de **R09-1**, Stand 15.12.2025

Alle Fragen sind eigenständig formuliert (kein Originalwortlaut aus Probeklausuren) und ICB-4.0-konform — Kontext: Maschinen- und Anlagenbau.

## Technisch

- Pure HTML + CSS + Vanilla JS, **eine Datei** (`index.html`)
- `questions.json` ist embedded — funktioniert auch lokal per Doppelklick (kein Webserver nötig)
- Mobile-ready
- Kein Tracking, keine Cookies, keine externen Calls (außer Google Fonts: Poppins + Source Sans 3)

## Beitragen

Bug, Tippfehler, Vorschlag für eine bessere Frage? → Issue oder Pull Request gerne.

## Lizenz

MIT — siehe [LICENSE](LICENSE).

---

**Erstellt von der Engineer's Project Academy** · ein Angebot von [Jan Köster PM](https://jankoester-pm.com) · Hamburg
