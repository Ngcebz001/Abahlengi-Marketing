"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import type { ContactActionState } from "@/actions/sendContact";
import { sendContact } from "@/actions/sendContact";
import { careTypes, contactSchema, type ContactFormValues } from "@/data/contact";

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      message: "",
      careType: "palliative",
      consent: false,
    },
  });

  const [actionState, setActionState] = useState<ContactActionState | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = form.handleSubmit((values) => {
    setActionState(null);
    startTransition(async () => {
      try {
        const result = await sendContact(values);
        if (result && "fieldErrors" in result) {
          Object.entries(result.fieldErrors ?? {}).forEach(([field, messages]) => {
            if (messages?.length) {
              form.setError(field as keyof ContactFormValues, {
                type: "server",
                message: messages[0],
              });
            }
          });
        }
        if (result) {
          setActionState(result);
        }
      } catch (error) {
        console.error(error);
        setActionState({
          error: "Something went wrong while sending your message. Please try again.",
        });
      }
    });
  });

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {actionState?.error ? (
        <p role="alert" className="rounded-lg bg-clay/10 px-4 py-3 text-sm text-clay dark:bg-clay-dark/20 dark:text-clay-dark">
          {actionState.error}
        </p>
      ) : null}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-forest dark:text-forest-dark">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            {...form.register("fullName")}
            className="w-full rounded-lg border-2 border-forest/50 bg-sage/15 px-4 py-3 text-sm text-forest shadow-md transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/30 dark:bg-slate-800 dark:border-sage/30 dark:text-forest-dark dark:focus:border-forest-dark"
          />
          <FieldError message={form.formState.errors.fullName?.message} />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-forest dark:text-forest-dark">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...form.register("email")}
            className="w-full rounded-lg border-2 border-forest/50 bg-sage/15 px-4 py-3 text-sm text-forest shadow-md transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/30 dark:bg-slate-800 dark:border-sage/30 dark:text-forest-dark dark:focus:border-forest-dark"
          />
          <FieldError message={form.formState.errors.email?.message} />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-forest dark:text-forest-dark">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. +27 87 123 4567"
            {...form.register("phone")}
            className="w-full rounded-lg border-2 border-forest/50 bg-sage/15 px-4 py-3 text-sm text-forest shadow-md transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/30 dark:bg-slate-800 dark:border-sage/30 dark:text-forest-dark dark:focus:border-forest-dark"
          />
          <p className="text-xs text-muted dark:text-slate-400">We'll use this to confirm details and care preferences.</p>
          <FieldError message={form.formState.errors.phone?.message} />
        </div>
        <div className="space-y-2">
          <label htmlFor="city" className="text-sm font-medium text-forest dark:text-forest-dark">
            City / Area
          </label>
          <input
            id="city"
            type="text"
            autoComplete="address-level2"
            {...form.register("city")}
            className="w-full rounded-lg border-2 border-forest/50 bg-sage/15 px-4 py-3 text-sm text-forest shadow-md transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/30 dark:bg-slate-800 dark:border-sage/30 dark:text-forest-dark dark:focus:border-forest-dark"
          />
          <FieldError message={form.formState.errors.city?.message} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="careType" className="text-sm font-medium text-forest dark:text-forest-dark">
            Care type
          </label>
          <select
            id="careType"
            {...form.register("careType")}
            className="w-full rounded-lg border-2 border-forest/50 bg-sage/15 px-4 py-3 text-sm text-forest shadow-md transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/30 dark:bg-slate-800 dark:border-sage/30 dark:text-forest-dark dark:focus:border-forest-dark"
          >
            {careTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FieldError message={form.formState.errors.careType?.message} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-forest dark:text-forest-dark">
            How can we help?
          </label>
          <textarea
            id="message"
            rows={5}
            {...form.register("message")}
            className="w-full rounded-lg border-2 border-forest/50 bg-sage/15 px-4 py-3 text-sm text-forest shadow-md transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/30 dark:bg-slate-800 dark:border-sage/30 dark:text-forest-dark dark:focus:border-forest-dark"
          />
          <FieldError message={form.formState.errors.message?.message} />
        </div>
      </div>
      <label className="flex items-start gap-3 rounded-xl border border-sage/30 bg-white/60 p-4 text-sm text-muted dark:text-slate-300 dark:bg-slate-800/70 dark:border-sage/20">
        <input
          type="checkbox"
          {...form.register("consent")}
          className="mt-1 h-5 w-5 rounded border border-sage/40 text-forest focus:ring-forest"
        />
        <span>
          I consent to Abahlengi Group storing my details to respond to this enquiry.
        </span>
      </label>
      <FieldError message={form.formState.errors.consent?.message} />
      <button
        type="submit"
        className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto"
        disabled={isPending}
      >
        {isPending && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        Send enquiry
      </button>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="text-xs text-clay dark:text-clay-dark">
      {message}
    </p>
  );
}
