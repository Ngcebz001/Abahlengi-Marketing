"use server";

import { redirect } from "next/navigation";

import { contactSchema, type ContactFormValues } from "@/data/contact";
import { sendMail } from "@/lib/mailer";

export type ContactActionState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function sendContact(values: ContactFormValues): Promise<ContactActionState | void> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    const flattened = parsed.error.flatten().fieldErrors;
    return {
      error: "Please check the highlighted fields and try again.",
      fieldErrors: flattened,
    };
  }

  await sendMail(parsed.data);

  redirect("/thank-you");
}
