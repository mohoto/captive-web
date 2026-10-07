"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  formatPrice,
  projects,
  shopifyGroups,
  wordpressGroups,
  type OptionGroup,
  type PricingOption,
  type ProjectType,
} from "@/lib/pricing";
import { catalogOf, existingSiteChoices, hasSectorRules, type Recommendation } from "@/lib/recommend";
import { OTHER_JOB, domainsFor } from "@/lib/activities";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  Basket,
  Check,
  Minus,
  Monitor,
  Plus,
  Sparkle,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const WAIT_MESSAGES = [
  "Analyse de votre activité…",
  "Sélection des options utiles…",
  "Vérification des tarifs…",
  "Préparation de vos recommandations…",
];

const WHATSAPP_NUMBER = "33757837110";

const needs = [
  {
    key: "vitrine",
    icon: Monitor,
    tone: "bg-captive-blue/10 text-captive-blue",
    title: "Proposer des services",
    description: "Présenter mon activité, recevoir des demandes ou des rendez-vous",
  },
  {
    key: "ecommerce",
    icon: Basket,
    tone: "bg-captive-violet/10 text-captive-violet",
    title: "Vendre des produits en ligne",
    description: "Une boutique avec panier, paiement et livraison",
  },
] as const satisfies readonly { key: ProjectType; icon: unknown; tone: string; title: string; description: string }[];

type Contact = { name: string; phone: string; email: string; message: string };
type Step =
  | { kind: "project" }
  | { kind: "site" }
  | { kind: "activity" }
  | { kind: "options"; group: OptionGroup }
  | { kind: "contact" }
  | { kind: "recap" };

function catalogFor(project: ProjectType | null, domain?: string, job?: string) {
  if (project === "vitrine") return { groups: wordpressGroups, options: catalogOf("vitrine", domain, job) };
  if (project === "ecommerce") return { groups: shopifyGroups, options: catalogOf("ecommerce", domain, job) };
  return { groups: [] as OptionGroup[], options: [] as PricingOption[] };
}

export function QuoteForm() {
  const [project, setProject] = useState<ProjectType | null>(null);
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [contact, setContact] = useState<Contact>({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Contact, string>>>({});
  const [index, setIndex] = useState(0);
  const [domainId, setDomainId] = useState("");
  const [jobChoice, setJobChoice] = useState("");
  const [customJob, setCustomJob] = useState("");
  const [activityError, setActivityError] = useState("");
  const [existingSite, setExistingSite] = useState("");
  const [recs, setRecs] = useState<Record<string, string>>({});
  const [recsKey, setRecsKey] = useState("");
  const [analysing, setAnalysing] = useState(false);
  const [waitIndex, setWaitIndex] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);
  const lastIndex = useRef(0);

  const domains = project ? domainsFor(project) : [];
  const domain = domains.find((d) => d.id === domainId);
  const listedJob = jobChoice && jobChoice !== OTHER_JOB ? jobChoice : undefined;
  const { groups, options } = catalogFor(project, domain?.label, listedJob);
  const activity = (jobChoice === OTHER_JOB ? customJob : jobChoice).trim();
  const activityLabel = domain && activity ? `${activity} (${domain.label})` : activity;

  // Secteur connu : on propose toutes les options de sa liste. Autre domaine : seulement
  // celles retenues par l'analyse. Les options pertinentes sont présélectionnées.
  const sectorKnown = !!project && !!domain && hasSectorRules(project, domain.label);
  const hasRecs = Object.keys(recs).length > 0;
  const isVisible = (o: PricingOption) => sectorKnown || !hasRecs || !!recs[o.id];
  const steps: Step[] = [
    { kind: "project" },
    { kind: "site" },
    { kind: "activity" },
    ...groups
      .filter((g) => options.some((o) => o.group === g.id && isVisible(o)))
      .map((group) => ({ kind: "options" as const, group })),
    { kind: "contact" },
    { kind: "recap" },
  ];
  const firstOptionsStep = steps.find((st) => st.kind === "options");

  const step = steps[index];
  const chosen = options.filter((o) => selected[o.id]);
  const optionsTotal = chosen.reduce((sum, o) => sum + o.price * selected[o.id], 0);
  const basePrice = project ? projects[project].basePrice : null;
  const total = basePrice === null ? null : basePrice + optionsTotal;
  // Avant l'analyse, le nombre de questions sur les options n'est pas connu :
  // on n'affiche donc pas de total d'étapes et la barre avance sur la première partie.
  const knownSteps = steps.filter((st) => st.kind !== "options").length;
  const stepsKnown = sectorKnown || hasRecs;
  const progress = !project
    ? 0
    : stepsKnown
      ? Math.round((index / (steps.length - 1)) * 100)
      : Math.round((Math.min(index, knownSteps - 1) / (knownSteps - 1)) * 40);

  function pickProject(value: ProjectType) {
    if (value !== project) {
      setSelected({});
      setDomainId("");
      setJobChoice("");
      setCustomJob("");
      setRecs({});
      setRecsKey("");
    }
    setProject(value);
    setIndex(1);
  }

  function toggle(option: PricingOption) {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[option.id]) {
        delete next[option.id];
      } else {
        next[option.id] = 1;
        option.excludes?.forEach((id) => delete next[id]);
      }
      return next;
    });
  }

  function setQuantity(option: PricingOption, delta: number) {
    setSelected((prev) => {
      const qty = Math.min(50, Math.max(1, (prev[option.id] ?? 1) + delta));
      return { ...prev, [option.id]: qty };
    });
  }

  // À chaque changement d'étape, on remonte en haut du formulaire.
  useEffect(() => {
    if (lastIndex.current === index) return;
    lastIndex.current = index;
    const el = formRef.current;
    if (!el) return;
    // L'en-tête devient fixe (et sort du flux) au-delà de 170 px de défilement : on mesure
    // donc la position comme si l'en-tête était dans le flux, et on reste sous ce seuil
    // pour que le haut du formulaire ne passe jamais sous l'en-tête.
    const header = document.querySelector("header");
    const headerFixed = !!header && getComputedStyle(header).position === "fixed";
    const absoluteTop = el.getBoundingClientRect().top + window.scrollY + (headerFixed ? header.offsetHeight : 0);
    window.scrollTo({ top: Math.min(Math.max(absoluteTop - 100, 0), 165), behavior: "auto" });
  }, [index]);

  useEffect(() => {
    if (!analysing) return;
    const timer = setInterval(() => setWaitIndex((i) => i + 1), 2200);
    return () => {
      clearInterval(timer);
      setWaitIndex(0);
    };
  }, [analysing]);

  async function analyse() {
    if (project !== "vitrine" && project !== "ecommerce") return;
    const key = JSON.stringify([project, activityLabel, existingSite]);
    if (key === recsKey) {
      setIndex((i) => i + 1);
      return;
    }
    setAnalysing(true);
    let list: Recommendation[] = [];
    try {
      const res = await fetch("/api/devis/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project,
          domain: domain?.label,
          job: listedJob,
          custom: jobChoice === OTHER_JOB,
          activity: activityLabel,
          goals: [],
          existingSite,
        }),
      });
      if (res.ok) list = (await res.json()).recommendations ?? [];
    } catch {
      // Hors ligne ou erreur serveur : on poursuit sans présélection.
    }
    setRecs(Object.fromEntries(list.map((r) => [r.id, r.reason])));
    // Rien n'est coché à la place du client : seules les options incluses (0 €) le sont déjà.
    setSelected(
      Object.fromEntries(
        options.filter((o) => o.included && list.some((r) => r.id === o.id)).map((o) => [o.id, 1])
      )
    );
    setRecsKey(key);
    setAnalysing(false);
    setIndex((i) => i + 1);
  }

  function validateContact() {
    const next: Partial<Record<keyof Contact, string>> = {};
    if (contact.name.trim().length < 2) next.name = "Indiquez votre nom et prénom.";
    if (contact.phone.replace(/\D/g, "").length < 9) next.phone = "Indiquez un numéro de téléphone valide.";
    if (contact.email && !/^\S+@\S+\.\S+$/.test(contact.email)) next.email = "Adresse e-mail invalide.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function next() {
    if (step.kind === "site" && !existingSite) return;
    if (step.kind === "activity") {
      if (!domain) {
        setActivityError("Choisissez un domaine d'activité.");
        return;
      }
      if (!jobChoice) {
        setActivityError("Choisissez votre métier ou activité.");
        return;
      }
      if (activity.length < 2) {
        setActivityError("Précisez votre métier ou votre activité.");
        return;
      }
      setActivityError("");
      void analyse();
      return;
    }
    if (step.kind === "contact" && !validateContact()) return;
    setIndex((i) => Math.min(i + 1, steps.length - 1));
  }

  function buildWhatsappUrl() {
    if (!project) return "";
    const lines = [
      "Bonjour, je souhaite un devis.",
      "",
      `Projet : ${projects[project].label}`,
      `Activité : ${activityLabel}`,
    ];
    if (existingSite) lines.push(`Site existant : ${existingSite}`);
    lines.push("");
    if (chosen.length) {
      lines.push("Options :");
      chosen.forEach((o) => {
        const qty = selected[o.id];
        lines.push(`- ${o.name}${qty > 1 ? ` x${qty}` : ""} (${formatPrice(o.price * qty)})`);
      });
    }
    if (total !== null) lines.push("", `Estimation : ${formatPrice(total)} TTC`);
    lines.push("", `Nom et prénom : ${contact.name}`, `Téléphone : ${contact.phone}`);
    if (contact.email) lines.push(`E-mail : ${contact.email}`);
    if (contact.message.trim()) lines.push("", `Message : ${contact.message.trim()}`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  }
  const whatsappUrl = buildWhatsappUrl();

  const buttonBase =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-colors duration-200";

  return (
    <div ref={formRef} className="overflow-hidden rounded-3xl border border-captive-secondary/10 bg-white shadow-xl shadow-captive-secondary/10">
      <div className="bg-captive-secondary px-6 py-5 text-white lg:px-10 lg:py-6">
        <div className="mb-3 flex items-center justify-between gap-3 text-sm text-white/70">
          <span>
            {!project ? "Première question" : stepsKnown ? `Étape ${index + 1} sur ${steps.length}` : `Étape ${index + 1}`}
          </span>
          {total !== null && basePrice !== null && step.kind !== "project" && (
            <span className="rounded-full bg-white/15 px-3 py-1 font-semibold text-white">
              {step.kind === "site" || step.kind === "activity"
                ? `Dès ${formatPrice(basePrice)} TTC`
                : `Estimation : ${formatPrice(total)} TTC`}
            </span>
          )}
        </div>
        <div
          className="h-2 overflow-hidden rounded-full bg-white/15"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-captive-ciel transition-all duration-300"
            style={{ width: `${Math.max(progress, 6)}%` }}
          />
        </div>
      </div>

      <div className="p-6 lg:p-10">
        {step.kind === "project" && (
          <fieldset>
            <legend className="mb-6 text-2xl font-bold text-captive-secondary">
              Pourquoi avez-vous besoin d&apos;un site web ?
            </legend>
            <div className="grid gap-4">
              {needs.map(({ key, icon: Icon, tone, title, description }) => {
                const active = project === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => pickProject(key)}
                    className={cn(
                      "flex items-center gap-4 rounded-2xl border-2 bg-white p-4 text-left transition-colors",
                      active
                        ? "border-captive-blue bg-captive-blue/5"
                        : "border-captive-secondary/10 hover:border-captive-blue/40"
                    )}
                  >
                    <span className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl", tone)}>
                      <Icon className="h-6 w-6" weight="bold" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-bold text-captive-secondary">{title}</span>
                      <span className="block text-sm text-neutral-900/60">{description}</span>
                    </span>
                    <span className="shrink-0 text-right font-semibold text-captive-secondary">
                      dès {formatPrice(projects[key].basePrice)}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        {step.kind === "site" && (
          <fieldset>
            <legend className="text-2xl font-bold text-captive-secondary">
              <span className="mb-2 block text-sm font-semibold tracking-wide text-captive-blue uppercase">
                Votre situation
              </span>
              Avez-vous déjà un site ?
            </legend>
            <div className="mt-6 grid gap-3" role="radiogroup">
              {existingSiteChoices.map((choice) => (
                <button
                  key={choice}
                  type="button"
                  role="radio"
                  aria-checked={existingSite === choice}
                  onClick={() => setExistingSite(choice)}
                  className={cn(
                    "rounded-2xl border-2 bg-white p-4 text-left font-medium text-captive-secondary transition-colors",
                    existingSite === choice
                      ? "border-captive-blue bg-captive-blue/5"
                      : "border-captive-secondary/10 hover:border-captive-blue/40"
                  )}
                >
                  {choice}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step.kind === "activity" && project && (
          <div>
            <h2 className="mb-2 text-2xl font-bold">
              {project === "ecommerce" ? "Que vendez-vous ?" : "Quel est votre métier ou votre activité ?"}
            </h2>
            <p className="mb-6 text-sm text-neutral-900/60">
              Nous vous proposerons les options les plus utiles pour votre activité.
            </p>
            <div className="grid gap-5">
              <Field label="Domaine d'activité" error={activityError && !domain ? activityError : undefined}>
                <SelectBox
                  id="quote-domain"
                  value={domainId}
                  placeholder="Choisissez un domaine…"
                  options={domains.map((d) => d.label)}
                  invalid={!!activityError && !domain}
                  onChange={(value) => {
                    setDomainId(value);
                    setJobChoice("");
                    setCustomJob("");
                  }}
                />
              </Field>
              <Field
                label={project === "ecommerce" ? "Produits que vous vendez" : "Métier ou activité"}
                error={activityError && domain && !jobChoice ? activityError : undefined}
              >
                <SelectBox
                  id="quote-job"
                  value={jobChoice}
                  placeholder={domain ? "Choisissez dans la liste…" : "Choisissez d'abord un domaine"}
                  options={domain?.jobs ?? []}
                  disabled={!domain}
                  invalid={!!activityError && !!domain && !jobChoice}
                  onChange={setJobChoice}
                />
              </Field>
              {jobChoice === OTHER_JOB && (
                <Field
                  label="Précisez votre activité"
                  error={activityError && customJob.trim().length < 2 ? activityError : undefined}
                >
                  <Input
                    id="quote-custom-job"
                    value={customJob}
                    maxLength={80}
                    aria-invalid={!!activityError}
                    onChange={(e) => setCustomJob(e.target.value)}
                  />
                </Field>
              )}
            </div>
          </div>
        )}

        {step.kind === "options" && (
          <fieldset>
            <legend className="text-2xl font-bold text-captive-secondary">
              <span className="mb-2 block text-sm font-semibold tracking-wide text-captive-blue uppercase">
                {step.group.title}
              </span>
              {step.group.question}
            </legend>
            <p className="mt-2 mb-6 text-sm text-neutral-900/60">
              Plusieurs choix possibles, ou aucun : vous pouvez passer cette question.
            </p>
            {(hasRecs || sectorKnown) && firstOptionsStep?.kind === "options" && step.group.id === firstOptionsStep.group.id && (
              <p className="mb-5 flex items-start gap-2 rounded-xl bg-captive-blue/10 p-4 text-sm text-captive-secondary">
                <Sparkle className="mt-0.5 h-5 w-5 shrink-0 text-captive-blue" weight="fill" />
                <span>
                  Voici les options adaptées à votre activité ({activity}). Celles que
                  nous recommandons sont signalées « Recommandé » : cochez celles qui vous intéressent.
                </span>
              </p>
            )}
            <div className="grid gap-3">
              {options
                .filter((o) => o.group === step.group.id && isVisible(o))
                .sort((a, b) => Number(!!recs[b.id]) - Number(!!recs[a.id]))
                .map((option) => {
                  const qty = selected[option.id] ?? 0;
                  const active = qty > 0;
                  return (
                    <div
                      key={option.id}
                      className={cn(
                        "rounded-2xl border-2 bg-white p-4 transition-colors",
                        active
                          ? "border-captive-blue bg-captive-blue/5"
                          : "border-captive-secondary/10 hover:border-captive-blue/40"
                      )}
                    >
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={active}
                        onClick={() => toggle(option)}
                        className="flex w-full items-start gap-3 text-left"
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2",
                            active
                              ? "border-captive-blue bg-captive-blue text-white"
                              : "border-captive-secondary/25"
                          )}
                        >
                          {active && <Check className="h-4 w-4" weight="bold" />}
                        </span>
                        <span className="flex-1">
                          <span className="block font-semibold text-captive-secondary">{option.name}</span>
                          <span className="block text-sm text-neutral-900/60">{option.description}</span>
                          {recs[option.id] && (
                            <span className="mt-2 flex items-start gap-1.5 text-sm font-medium text-captive-blue">
                              <Sparkle className="mt-0.5 h-4 w-4 shrink-0" weight="fill" />
                              <span>Recommandé : {recs[option.id]}</span>
                            </span>
                          )}
                        </span>
                        <span className="shrink-0 font-semibold text-captive-secondary">
                          {formatPrice(option.price)}
                        </span>
                      </button>
                      {active && option.unit && (
                        <div className="mt-3 flex items-center justify-end gap-3 text-sm">
                          <span className="text-neutral-900/60">Nombre d&apos;{option.unit}s</span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              aria-label={`Retirer un(e) ${option.unit}`}
                              onClick={() => setQuantity(option, -1)}
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-captive-secondary/25"
                            >
                              <Minus className="h-4 w-4" weight="bold" />
                            </button>
                            <span className="w-6 text-center font-semibold" aria-live="polite">{qty}</span>
                            <button
                              type="button"
                              aria-label={`Ajouter un(e) ${option.unit}`}
                              onClick={() => setQuantity(option, 1)}
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-captive-secondary/25"
                            >
                              <Plus className="h-4 w-4" weight="bold" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </fieldset>
        )}

        {step.kind === "contact" && (
          <div>
            <h2 className="mb-6 text-2xl font-bold">
              Comment vous recontacter ?
            </h2>
            <div className="grid gap-5">
              <Field label="Nom et prénom" error={errors.name}>
                <Input
                  id="quote-name"
                  autoComplete="name"
                  value={contact.name}
                  aria-invalid={!!errors.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                />
              </Field>
              <Field label="Téléphone" error={errors.phone}>
                <Input
                  id="quote-phone"
                  type="tel"
                  autoComplete="tel"
                  value={contact.phone}
                  aria-invalid={!!errors.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                />
              </Field>
              <Field label="E-mail (facultatif)" error={errors.email}>
                <Input
                  id="quote-email"
                  type="email"
                  autoComplete="email"
                  value={contact.email}
                  aria-invalid={!!errors.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                />
              </Field>
              <Field label="Un message ? (facultatif)" error={errors.message}>
                <Textarea
                  id="quote-message"
                  rows={4}
                  value={contact.message}
                  aria-invalid={!!errors.message}
                  onChange={(e) => setContact({ ...contact, message: e.target.value })}
                />
              </Field>
            </div>
          </div>
        )}

        {step.kind === "recap" && project && (
          <div>
            <h2 className="mb-2 text-2xl font-bold">Votre estimation</h2>
            <p className="mb-6 text-sm text-neutral-900/60">Activité : {activityLabel}</p>
            <ul className="divide-y rounded-2xl bg-captive-primary px-5">
              <li className="flex justify-between gap-4 py-3">
                <span className="font-semibold text-captive-secondary">{projects[project].label}</span>
                <span className="font-semibold">{formatPrice(projects[project].basePrice)}</span>
              </li>
              {chosen.map((o) => {
                const qty = selected[o.id];
                return (
                  <li key={o.id} className="flex justify-between gap-4 py-3 text-sm">
                    <span>
                      {o.name}
                      {qty > 1 && <span className="text-neutral-900/60"> × {qty}</span>}
                    </span>
                    <span className="shrink-0">{formatPrice(o.price * qty)}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 flex items-baseline justify-between rounded-2xl bg-captive-secondary px-5 py-4 text-white">
              <span className="font-semibold">Total estimé (TTC)</span>
              <span className="text-3xl font-bold">{formatPrice(total ?? 0)}</span>
            </div>
            <p className="mt-4 mb-0 text-sm text-neutral-900/60">
              Estimation indicative. Les éventuelles licences d&apos;extensions ou
              d&apos;applications payantes sont facturées au coût réel. Le devis
              définitif vous est confirmé après échange.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonBase, "mt-6 w-full bg-captive-secondary text-lg text-white hover:bg-captive-secondary-hover")}
            >
              <WhatsappLogo className="h-6 w-6 text-green-400" weight="fill" />
              Envoyer ma demande sur WhatsApp
            </a>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-3">
          {index > 0 ? (
            <button
              type="button"
              onClick={() => setIndex((i) => i - 1)}
              className={cn(buttonBase, "px-5 text-captive-secondary hover:bg-captive-secondary/10")}
            >
              <ArrowLeft className="h-4 w-4" weight="bold" />
              Retour
            </button>
          ) : (
            <span />
          )}
          {step.kind !== "project" && step.kind !== "recap" && (
            <button
              type="button"
              onClick={next}
              disabled={analysing || (step.kind === "site" && !existingSite)}
              className={cn(buttonBase, "bg-captive-secondary text-white hover:bg-captive-secondary-hover disabled:cursor-not-allowed disabled:opacity-50")}
            >
              {analysing
                ? WAIT_MESSAGES[waitIndex % WAIT_MESSAGES.length]
                : step.kind === "options" && !options.some((o) => o.group === step.group.id && selected[o.id])
                  ? "Passer"
                  : "Continuer"}
              {!analysing && <ArrowRight className="h-4 w-4" weight="bold" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactElement<{ id?: string }>;
}) {
  const id = children.props.id;
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p className="mb-0 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectBox({
  id,
  value,
  options,
  placeholder,
  onChange,
  disabled,
  invalid,
}: {
  id: string;
  value: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  invalid?: boolean;
}) {
  return (
    <select
      id={id}
      value={value}
      disabled={disabled}
      aria-invalid={invalid}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        "h-12 w-full rounded-md border bg-white px-3 text-base outline-none transition-[color,box-shadow]",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-60",
        invalid ? "border-destructive" : "border-input",
        !value && "text-muted-foreground"
      )}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option} className="text-foreground">
          {option}
        </option>
      ))}
    </select>
  );
}
