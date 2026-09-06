import { createFileRoute } from "@tanstack/react-router";
import {
  MonitorSmartphone,
  BriefcaseBusiness,
  Cpu,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Landmark,
} from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";
import learner1 from "@/assets/learner-1.jpg";
import learner2 from "@/assets/learner-2.jpg";
import learner3 from "@/assets/learner-3.jpg";
import strathmoreLogo from "@/assets/strathmore-logo.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Next Gen Learning — Digital Skills for Nairobi" },
      {
        name: "description",
        content:
          "Next Gen Learning, the Strathmore Computer Literacy Centre, offers affordable computer literacy courses, robotics and AI taster modules, and corporate IT training for Madaraka and Nairobi South. Register and pay via M-Pesa.",
      },
      {
        property: "og:title",
        content: "Next Gen Learning — Digital Skills for Nairobi",
      },
      {
        property: "og:description",
        content:
          "Affordable, structured IT training for the community: Digital Foundations, Office Productivity, and an Emerging Tech Taster with robotics and AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const tiers = [
  {
    icon: MonitorSmartphone,
    name: "Tier 1 — Digital Foundations",
    duration: "4 Weeks • Beginners",
    description:
      "Computer basics, file management, internet and email, plus mobile money and e-government platforms like e-Citizen.",
    price: "KES 4,500",
  },
  {
    icon: BriefcaseBusiness,
    name: "Tier 2 — Productivity & Office Skills",
    duration: "6 Weeks • Intermediate",
    description:
      "Word, Excel, PowerPoint and introductory bookkeeping — practical skills for work and for small-business owners digitising their records.",
    price: "KES 7,200",
  },
  {
    icon: Cpu,
    name: "Tier 3 — Emerging Tech Taster",
    duration: "4 Weeks • Future-focused",
    description:
      "An introduction to programming logic, robotics and artificial intelligence, with hands-on Arduino and Scratch exercises.",
    price: "KES 5,800",
  },
];

const learners = [
  { src: learner1, alt: "A young Kenyan student smiling at her laptop" },
  { src: learner2, alt: "A Kenyan small-business owner in the computer lab" },
  { src: learner3, alt: "An older Kenyan learner practising computer skills" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Affiliation bar */}
      <div className="border-b border-border bg-secondary px-4 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            A Strathmore University community outreach initiative
          </p>
          <p className="hidden text-[11px] font-medium text-muted-foreground sm:block">
            Madaraka · Nairobi South
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-primary/5 bg-card px-8 py-6">
        <div className="flex items-center gap-3">
          <img
            src={strathmoreLogo.url}
            alt="Strathmore University logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold tracking-tight">Next Gen Learning</span>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          <a href="#courses" className="transition-colors hover:text-accent">
            Courses
          </a>
          <a href="#community" className="transition-colors hover:text-accent">
            Community
          </a>
          <a href="#corporate" className="transition-colors hover:text-accent">
            Corporate Training
          </a>
          <a
            href="#register"
            className="rounded-full bg-primary px-6 py-2 text-primary-foreground transition-colors hover:bg-accent"
          >
            Enrol Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative mx-auto max-w-7xl px-8 py-20 md:py-32">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
              Service to Society through digital skills
            </span>
            <h1 className="mb-8 font-heading text-5xl leading-tight md:text-7xl">
              Master the <span className="italic">tools</span> of the modern era.
            </h1>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-foreground/70">
              The Strathmore Computer Literacy Centre is a walk-in training
              facility equipping residents of Madaraka and Nairobi South with
              practical digital skills — from first keystrokes to robotics and AI.
            </p>
            <div className="flex gap-4">
              <a
                href="#courses"
                className="rounded-lg bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5"
              >
                View Courses
              </a>
              <a
                href="#community"
                className="rounded-lg border border-primary/10 px-8 py-4 font-semibold transition-all hover:bg-primary/5"
              >
                Our Mission
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroLab}
              alt="Kenyan learners training together in the Next Gen Learning computer lab"
              width={1200}
              height={1000}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="absolute -bottom-8 -left-8 hidden rounded-xl border border-primary/5 bg-card p-6 shadow-xl lg:block">
              <div className="text-3xl font-bold text-accent">480+</div>
              <div className="text-xs font-semibold uppercase tracking-wider opacity-60">
                Learners targeted in Year 1
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Course tiers */}
      <section id="courses" className="bg-primary px-8 py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between">
            <div className="max-w-xl">
              <h2 className="mb-4 font-heading text-4xl">Training Programmes</h2>
              <p className="text-primary-foreground/60">
                Three progressive tiers, run as twice-weekly evening and weekend
                cohorts to fit around work. Means-tested discounts available for
                students and the unemployed.
              </p>
            </div>
            <a
              href="#register"
              className="hidden border-b border-accent pb-1 font-semibold text-accent md:block"
            >
              Check seat availability
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-accent/20">
                  <tier.icon className="size-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{tier.name}</h3>
                <p className="mb-6 flex-grow text-sm text-primary-foreground/50">
                  {tier.description}
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-accent">
                    {tier.duration}
                  </div>
                  <div className="mt-2 text-lg font-bold">{tier.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community digital-inclusion tips */}
      <section id="community" className="border-b border-border bg-card px-8 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Community Hub · No login needed
            </h4>
            <p className="font-heading text-2xl italic">
              Tips for the Community / Maelezo kwa Jamii
            </p>
          </div>
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="size-4 text-accent" />
              01. Cyber Safety / Usalama Mtandaoni
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Never share your M-Pesa PIN and always verify links before clicking. /
              Usishiriki PIN yako ya M-Pesa, na kila mara kagua viungo kabla ya kubofya.
            </p>
          </div>
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Landmark className="size-4 text-accent" />
              02. E-Government / Huduma za Serikali
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Get free help accessing e-Citizen, KRA and NTSA services at the Centre. /
              Pata msaada wa bure wa huduma za e-Citizen, KRA na NTSA katika kituo chetu.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate training */}
      <section id="corporate" className="px-8 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-4 font-heading text-4xl">Empower your workforce</h2>
            <p className="mb-8 max-w-lg text-foreground/70">
              We run customised short courses for SACCOs, SMEs and institutions,
              scheduled outside community class hours at group rates. Request a
              quote and we will respond within two working days.
            </p>
            <a
              href="mailto:corporate@nextgenlearning.co.ke"
              className="inline-block border-2 border-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Request a Corporate Quote
            </a>
          </div>
          <div className="grid w-full place-items-center rounded-full border border-border bg-card p-10 text-center md:w-1/3 md:aspect-square">
            <div>
              <div className="font-heading text-5xl text-accent">100%</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Hands-on practical training
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="register" className="mx-auto max-w-7xl px-8 pb-24 text-center">
        <div className="rounded-3xl border border-accent/10 bg-accent/5 p-10 md:p-16">
          <h2 className="mb-6 font-heading text-4xl md:text-5xl">
            Ready to start your journey?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-foreground/60">
            Registration for the next cohort is open. Reserve your seat with a
            KES 500 deposit via M-Pesa — no need to travel to the Centre first.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {learners.map((l) => (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                loading="lazy"
                width={512}
                height={512}
                className="size-16 rounded-full object-cover outline-1 outline-black/5"
              />
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:register@nextgenlearning.co.ke"
              className="rounded-xl bg-primary px-10 py-5 font-bold text-primary-foreground transition-all hover:bg-accent"
            >
              Register Online
            </a>
            <p className="text-sm text-muted-foreground">
              M-Pesa Pay Bill <span className="font-mono font-semibold text-foreground">880123</span>,
              Account: your phone number
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/5 bg-card px-8 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={strathmoreLogo.url}
                alt="Strathmore University logo"
                loading="lazy"
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold tracking-tight">Next Gen Learning</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Next Gen Learning — the Strathmore Computer Literacy Centre, bridging
              the gap between potential and opportunity through accessible digital
              skills.
            </p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <h5 className="mb-3 text-sm font-semibold text-foreground">Visit Us</h5>
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-accent" /> Madaraka, Nairobi South — near Strathmore University
            </p>
            <p className="flex items-center gap-2">
              <Clock className="size-4 text-accent" /> Mon–Fri 8am–6pm · Sat 9am–1pm
            </p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <h5 className="mb-3 text-sm font-semibold text-foreground">Contact</h5>
            <p className="flex items-center gap-2">
              <Phone className="size-4 text-accent" /> +254 700 000 000 (SMS / WhatsApp)
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-4 text-accent" /> hello@nextgenlearning.co.ke
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs font-bold uppercase tracking-widest text-muted-foreground md:flex-row">
          <span>© 2026 Next Gen Learning</span>
          <div className="flex gap-8">
            <a href="#courses" className="hover:text-accent">Courses</a>
            <a href="#corporate" className="hover:text-accent">Partner With Us</a>
            <a href="#register" className="hover:text-accent">Enrol</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
