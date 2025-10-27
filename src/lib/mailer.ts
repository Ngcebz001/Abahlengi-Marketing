import nodemailer from "nodemailer";

import type { ContactFormValues } from "@/data/contact";

const host = process.env.EMAIL_HOST;
const port = Number(process.env.EMAIL_PORT ?? 587);
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;
const toAddress = process.env.CONTACT_TO ?? user ?? "care@abahlengi.co.za";

function createTransport() {
  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendMail(values: ContactFormValues) {
  if (process.env.NODE_ENV !== "production") {
    console.info("[contact]", values);
    return;
  }

  const transport = createTransport();

  if (!transport) {
    console.warn("Mail transport is not configured.");
    return;
  }

  await transport.sendMail({
    to: toAddress,
    from: `Abahlengi Website <${user}>`,
    subject: `New enquiry from ${values.fullName}`,
    replyTo: values.email,
    text: `Name: ${values.fullName}\nEmail: ${values.email}\nPhone: ${values.phone}\nCity: ${values.city}\nCare Type: ${values.careType}\nConsent: ${values.consent ? "Yes" : "No"}\n\nMessage:\n${values.message}`,
  });
}
