import { z } from "zod";

const careTypeValues = ["palliative", "recovery", "respite", "ongoing", "other"] as const;

export type CareTypeValue = (typeof careTypeValues)[number];

export const careTypes: Array<{ value: CareTypeValue; label: string }> = [
  { value: "palliative", label: "Palliative Care" },
  { value: "recovery", label: "Post-Hospital Recovery" },
  { value: "respite", label: "Short-Term Respite" },
  { value: "ongoing", label: "Ongoing Support" },
  { value: "other", label: "Other" },
];

export const contactSchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name."),
    email: z.string().email("Enter a valid email address."),
    phone: z
      .string()
      .min(7, "Enter a valid phone number.")
      .regex(/^[+\d\s()-]+$/, "Phone number can only include digits and separators."),
    city: z.string().min(2, "Please tell us where you are based."),
    careType: z.enum(careTypeValues),
    message: z
      .string()
      .min(10, "Please share a few details so we can prepare for our call."),
    consent: z.boolean().refine((value) => value, {
      message: "We require your consent to respond to your enquiry.",
    }),
  })
  .strict();

export type ContactFormValues = z.infer<typeof contactSchema>;
