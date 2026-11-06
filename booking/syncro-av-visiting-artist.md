# Syncro A/V — Visiting Artist Lecture, Masterclass Syllabus & Live Performance Module

> **A Turnkey Academic & Media Lab Program on Real-Time Audio, Video & Lighting Synchronization Architecture (`syncro-av`), Multisensory Perception, and 3D Stage Digital Twins.**

---

## 1. Executive Summary for Department Chairs, Faculty & Curators

**Syncro A/V** is an internationally tested visiting artist module developed by **Manuel Palenque**—Senior Creative Technologist (Immersive & AI) at Superside, Founder of the Buenos Aires media lab **DataRaíz**, former Technical Video Director for **Fuerza Bruta**, and veteran educator with a 15-year track record at institutions including **City University of Hong Kong (School of Creative Media)**, **NODE Forum for Digital Arts (Berlin)**, **TECH LAB PAAK (Tokyo)**, **Telenoika (Barcelona)**, and **ArtHaus (Buenos Aires)**.

Designed specifically for **US University Departments** (NYU ITP/ Clive Davis, MIT ACT/Media Lab, UCLA DMA, SAIC, Parsons Design & Technology, Columbia Sound Arts, CalArts, Pratt, SVA, Yale CCAM) and **Media Art Centers** (CultureHub, Gray Area, Pioneer Works, Harvestworks, Eyebeam), this turnkey program bridges perceptual neuroscience, low-latency real-time systems engineering, and high-impact stage production.

Rather than teaching software in isolation, **Syncro A/V** investigates *why sound and image fuse in human perception* and *how to engineer tightly coupled real-time architectures* where electronic music, GPU shaders/particle systems, and physical stage lighting (DMX/Art-Net/lasers) operate as a single performative instrument.

### Key Links & Course Portals
* **Syncro A/V — Lecture & Perceptual Framework Portal:** [https://mpalenque.github.io/syncro-av/](https://mpalenque.github.io/syncro-av/)
* **Syncro A/V — Hands-On Workshop & COLAPSO Live A/V Portal:** [https://mpalenque.github.io/curso/](https://mpalenque.github.io/curso/)
* **Immersive Design & Creative AI Architectures (Online Curriculum):** [https://superside-immersive.github.io/course/index.html](https://superside-immersive.github.io/course/index.html)
* **Artist Portfolio:** [https://mpalenque.github.io/](https://mpalenque.github.io/)
* **COLAPSO Live A/V Performance Documentation:** [https://youtu.be/UEpg5lswDS8](https://youtu.be/UEpg5lswDS8)

---

## 2. Flexible Modular Formats (Turnkey Institutional Options)

Host departments and media centers can select from three modular configurations depending on academic calendar, studio facilities, and black-box theater availability:

| Format Option | Structure & Duration | Ideal Institutional Context |
| :--- | :--- | :--- |
| **Option A: Departmental Lecture & Demo** | **90-Minute Illustrated Talk + 30-Min Q&A / Grad Studio Critiques**<br>*“Sync A/V: How We Perceive Sound and Image as One”* | Weekly Visiting Artist Lecture Series, Colloquia, MFA Graduate Seminars |
| **Option B: Turnkey Visiting Artist Package (Recommended)** | **3-Hour Hands-On Masterclass / Technical Lab** (afternoon) **+ 45-Minute Live A/V Performance (`COLAPSO`)** (evening) | Media Art Centers (Pioneer Works, Gray Area, CultureHub, Harvestworks) & University Black-Box / Experimental Media Series |
| **Option C: 2-Day Intensive Studio Lab + Showcase** | **6 Hours Total (2 × 3-Hour Sessions) + Open Student Showcase + 45-Minute Live A/V Performance**<br>*(Up to 40 participants plugging into a shared stage rig)* | Weekend Intensives, Festival Workshops, Inter-Departmental Sound + Visual Arts Residencies |

---

## 3. Comprehensive Syllabus Breakdown (`Syncro A/V` Curriculum)

The curriculum combines the theoretical framework from `mpalenque.github.io/syncro-av` with the production engineering of *COLAPSO*, *Verano Tecnópolis*, *FullDome 360°*, and *Ciclo Negro* at ArtHaus.

### Module 1: Perceptual Mechanics — The Seven Principles of Multisensory Integration (45 min)
> *"Understanding why sound and image fuse turns every sync decision in a live set into a compositional one."*

Before writing a line of shader code or patching an OSC route, students examine the neuro-perceptual mechanisms that act automatically on every audience in a live space:
1. **Synchresis (Chion):** The spontaneous, irresistible weld produced between a particular auditory phenomenon and a visual phenomenon when they occur at the same time—even when their sources are unrelated.
2. **The Ventriloquism Effect:** How spatial visual localization captures and relocates perceived sound origin across a stage or architectural surface.
3. **The McGurk Effect:** Cross-modal interference where conflicting visual and auditory inputs synthesize a third, perceptual illusion.
4. **The Temporal Binding Window:** Operating within the ~20ms–100ms perceptual threshold where the brain binds asynchronous audio and video latencies into a single simultaneous event—and how to exploit tight lock vs. deliberate phase drift.
5. **Common Fate (Gestalt):** Grouping independent sonic partials and visual particle clusters through shared velocity, acceleration, and trajectory.
6. **Rhythmic Entrainment:** Neural oscillation alignment to external audiovisual pulses, sub-bass physical pressure, and strobe/DMX frequencies.
7. **Prediction and Reward:** Building structural tension, algorithmic stability, and sudden entropic rupture (*COLAPSO*) to subvert audience expectation.

---

### Module 2: Low-Latency Audio Analysis, Feature Extraction & State Machines (45 min)
* **Beyond Naive Volume Reactivity:** Why mapping raw amplitude to scale produces boring, predictable visuals—and how to extract meaningful musical intent in real time.
* **Signal Conditioning & Spectral Extraction:** Fast Fourier Transform (FFT) band isolation, spectral centroid/flux analysis, sub-bass envelope following, and sharp onset/transient detection.
* **Bi-Directional Control Architectures:** Structuring deterministic and probabilistic state machines linking **Ableton Live**, modular synthesizers, or custom audio engines with visual environments via **OSC (Open Sound Control)**, **MIDI**, and **WebSockets**.
* **Multi-User & Distributed Input Case Study:** Architectural breakdown of the **FullDome 360° Interactive System** (Buenos Aires Planetarium)—how hundreds of mobile phones connect via QR code and low-latency WebSockets to collectively drive a real-time 360° projection without Wi-Fi bottlenecks.

---

### Module 3: Real-Time Rendering — GPU Particles, Custom Shaders & WebGPU (45 min)
* **Visuals as Live Instruments:** Transitioning from timeline playback to generative, rule-based visual synthesis in **vvvv**, **TouchDesigner**, and **WebGPU**.
* **Physics & Materiality at 60+ FPS:**
  * **GPU Particle & Collision Systems (*COLAPSO* & *Colisión*):** Simulating millions of particles governed by attractors, turbulence fields, and acoustic shockwaves.
  * **2D/3D Fluid Dynamics & Reactive Shaders (*Fluids*, *Techo*, *Wall - Adidas*):** Using real-time fluid velocity maps and custom GLSL/HLSL fragment and compute shaders to deform 2D/3D surfaces and generate tactile, relief-like illusions.
  * **Soft-Body & Constraint Physics (*Rope*):** Real-time 3D simulation of flexible materials under virtual tension and gravity.
* **AI-Assisted Creative Coding Workflows:** Leveraging AI code agents (from Palenque’s *Immersive Design & Creative AI Architectures* methodology) to rapidly prototype custom shaders, Python/TouchDesigner operators, and WebXR/WebGPU pipelines—moving the artist from low-level syntax debugging to high-level system orchestration.

---

### Module 4: Spatial Extension — DMX512, Art-Net, sACN & Laser Synchronization (30 min)
* **Breaking the Screen Boundary:** Treating stage lighting fixtures and lasers not as separate theatrical accompaniment, but as low-resolution, high-intensity spatial pixels of the visual engine.
* **Hardware Protocols in Practice:** Configuring **DMX512**, **Art-Net**, and **sACN** universes directly inside `vvvv` / `TouchDesigner`.
* **Video-to-Light Mapping (*Coloso* & *Techo* Case Studies):**
  * Sampling real-time video textures and fluid vectors to drive moving-head beam positions, strobe rates, and pixel-mapped LED bars.
  * Integrating **ILDA / DMX Lasers** with projection mapping (*Laser* & *Verano Tecnópolis*) so physical laser lines lock geometrically into projected video forms.
  * Designing with **absolute darkness** and atmospheric haze to sculpt volumetric light in 3D space.

---

### Module 5: 3D Stage Digital Twins & Pre-Visualization Workflows (30 min)
* **Solving the Zero-Rehearsal Constraint:** In festival, museum, and touring contexts, artists rarely get more than 45 minutes on stage before doors.
* **Case Study 1 — The *COLAPSO* 3D Digital Twin (Tecnópolis):** How Palenque built a complete 3D virtual stage model (custom screen geometries, stage sightlines, and virtual DMX lighting fixtures) to program, rehearse, and validate an entire 40-minute A/V performance over a 30-day sprint without stepping foot in the venue until show day.
* **Case Study 2 — *Bright Moments Venezia & Buenos Aires*:** Using remote **LiDAR spatial scans** of a Renaissance church in Venice to calibrate fluid simulations, physical water floor reflections, and reactive lighting remotely; and designing a fault-tolerant real-time cue-mapping system for an 8-hour, 200-piece un-rehearsed live performance marathon in Buenos Aires.

---

### Module 6: Hands-On Stage Lab — "From Patch to Stage" (Optional / Extended 3h–6h Format)
* **Live Stage Bus Experimentation:** Modeled on the acclaimed *Syncro A/V* workshop at **ArtHaus (Ciclo Negro, Buenos Aires)**, the classroom or black-box theater is configured as a live production stage (LED wall or high-contrast projector + stereo PA + DMX lighting fixtures).
* **Bring Your Own Rig:** Students plug their own laptops, DAWs, TouchDesigner/vvvv/p5.js/WebGPU patches, or hardware synths into the shared synchronization bus to test how their work translates onto professional stage hardware.

---

## 4. Learning Outcomes & Target Student Profile

### Target Student & Participant Profile
* **Academic Levels:** Graduate students (**MFA, MPS, MS, MA**) and upper-level Undergraduate students (**BFA, BA, BS**), as well as independent artists, creative coders, and resident fellows.
* **Disciplines:**
  * Interactive Media, Creative Technology & New Media Art (`NYU ITP`, `MIT Media Lab / ACT`, `UCLA DMA`, `Parsons DT`)
  * Sound Art, Electronic Music & Computer Music (`Columbia Sound Arts`, `CalArts Music Tech`, `Berklee`, `Harvestworks`)
  * Experimental Animation, Scenography, Live Performance & Lighting Design (`SAIC`, `Yale CCAM`, `Pratt`, `SVA`)
  * Computer Science / Computer Graphics (Shaders, WebGPU, Real-Time Simulation)

### Key Learning Outcomes
By the end of the session, participants will be able to:
1. Apply the **Seven Principles of Multisensory Integration** (*synchresis*, *temporal binding*, *common fate*, *entrainment*) to diagnose and compose tight audio-visual relationships.
2. Architect a low-latency, bi-directional communication pipeline between audio software (**Ableton Live / Max**) and real-time visual engines (**vvvv / TouchDesigner / WebGPU**) via **OSC, MIDI, and WebSockets**.
3. Map real-time audio and shader data directly to physical **DMX512 / Art-Net** lighting fixtures, strobes, and lasers.
4. Build a basic **3D Stage Digital Twin** to pre-visualize screen layouts, camera/audience sightlines, and DMX lighting cues prior to physical installation.
5. Integrate **AI-assisted coding workflows** to accelerate custom shader and pipeline engineering without sacrificing artistic authorship.

---

## 5. Instructor Pedagogical Track Record

Manuel Palenque brings over a decade of international academic and community teaching experience across four continents:

* **DataRaíz Media Lab (`dataraiz.io`) — Buenos Aires (2016–Present):** Founder and Academic Director of Buenos Aires’ premier independent laboratory for art, science, and technology, hosting hybrid courses, open-research mentorships, and the **Ciclo Negro** festival at ArtHaus.
* **Superside — Immersive Design & Creative AI Architectures (2024–Present):** Designed and taught the *Immersive Design & Creative AI Architectures* methodology ([superside-immersive.github.io/course](https://superside-immersive.github.io/course/index.html)), training designers and technologists to orchestrate VR, AR, WebXR, and TouchDesigner/Python pipelines with AI agents.
* **City University of Hong Kong (CityU) — School of Creative Media (Hong Kong):** Visiting artist presentation and interactive media workshop.
* **NODE Forum for Digital Arts (Berlin, Germany):** Instructor for real-time visual programming and interactive systems at the flagship international `vvvv` festival.
* **TECH LAB PAAK & vvvv JP Community (Tokyo, Japan, 2016):** Led the hands-on intensive *Introduction to Visual & Music Production with vvvv + Ableton Live*, bridging Japanese electronic musicians and creative coders.
* **Telenoika Audiovisual Collective (Barcelona, Spain):** Visiting live-coding / real-time `vvvv` workshop, live A/V showcase, and documented artist interview.
* **ArtHaus Central — Ciclo Negro (Buenos Aires, 2025/2026):** Directed and taught the 3-hour *Syncro A/V para Live Performance* masterclass in Sala Oval (Piso 7) alongside live A/V showcases.

---

## 6. Classroom / Lab Technical Requirements

### For Lecture + Masterclass (90-Min to 3-Hour Session)
* **Space:** Darkenable lecture hall, media lab, or black-box studio (capacity 15–40 participants for hands-on lab; unlimited for lecture).
* **Display:** 1080p60 or 4K projector or LED wall with HDMI input at the instructor table.
* **Sound:** Stereo studio monitors or full-range PA system with subwoofer and 2x balanced audio inputs (1/4" TRS or XLR DI) for perceptual audio-visual demonstrations.
* **Lighting (For Hands-On Syncro Lab):** 2–4 basic DMX-controllable fixtures (e.g., LED pars, strobe, or moving head beams) connected via a single DMX512 line or Art-Net node at the instructor table so students can test live audio-to-light patching.
* **Student Equipment (Hands-On Lab Only):** Participants bring their own laptops (macOS/Windows) with any preferred creative coding or audio environment (`TouchDesigner`, `vvvv`, `Ableton Live`, `Max/MSP`, `p5.js`, `Three.js/WebGPU`, `Cables.gl`) and optional MIDI controllers.

*(Note: If paired with an evening **COLAPSO / Syncro A/V Live Performance**, please refer to the compact fly-in technical rider in `1_Live_AV_EPK_and_Rider.md`.)*

---

## 7. Institutional Fee Structure & Zero-Friction Logistics

> **US VISA & TRAVEL ADVANTAGE:** Manuel Palenque holds an **active US Visa** and travels frequently on self-funded corporate and artistic routing through **New York City (NYC), Chicago, and Miami**. Universities and non-profit media art centers can book visiting lectures, workshops, and performances **without J-1/O-1 visa petition costs or international airfare burdens** when scheduled around his North American routing windows.

### Standard Academic & Non-Profit Honorarium Tiers (2026/2027)

| Engagement Package | Institutional Honorarium Range (USD) | Included Deliverables |
| :--- | :--- | :--- |
| **1. Turnkey Visiting Artist Combo (Recommended)** | **$1,200 – $2,500 USD**<br>*(or standard institutional honorarium + local travel/lodging coverage)* | • **3-Hour Hands-On Masterclass / Technical Lecture (`Syncro A/V`)**<br>• **45-Minute Live A/V Performance (`COLAPSO` / `Syncro A/V`)**<br>• Open access to digital syllabus, shader/sync study files, and Q&A |
| **2. Standalone Guest Lecture & Grad Critiques** | **$600 – $1,200 USD** | • **90-Minute Lecture:** *Sync A/V — How We Perceive Sound and Image as One*<br>• **Individual MFA / Grad Studio Critiques** (up to 4 students) |
| **3. Two-Day Intensive Studio Residency & Showcase** | **$2,500 – $4,000 USD** | • **6-Hour Studio Lab (2 × 3h sessions)** on a live stage set<br>• **Curated Open Student Showcase**<br>• **Headline 45-Min Live A/V Performance** |

---

## 8. Academic & Curatorial Inquiries

* **Visiting Artist:** Manuel Palenque
* **Email:** [contact@manuelpalenque.info](mailto:contact@manuelpalenque.info)
* **Phone / WhatsApp:** `+54 9 11 6637-2965`
* **Syncro A/V Lecture Site:** [https://mpalenque.github.io/syncro-av/](https://mpalenque.github.io/syncro-av/)
* **Syncro A/V Workshop Site:** [https://mpalenque.github.io/curso/](https://mpalenque.github.io/curso/)
* **Portfolio:** [https://mpalenque.github.io/](https://mpalenque.github.io/)
