import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { sendContact } from "@/actions/sendContact";
import { ContactForm } from "@/components/ContactForm";
import { contactSchema } from "@/data/contact";

vi.mock("@/actions/sendContact", () => ({
  sendContact: vi.fn().mockResolvedValue(undefined),
}));

describe("contact form validation", () => {
  it("rejects submissions without consent", () => {
    const result = contactSchema.safeParse({
      fullName: "Sam Client",
      email: "sam@example.com",
      phone: "+27 87 123 4567",
      city: "Sandton",
      careType: "palliative",
      message: "We need short term support.",
      consent: false,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.consent?.[0]).toContain("consent");
    }
  });

  it("renders accessible inputs", async () => {
    render(<ContactForm />);

    const user = userEvent.setup();
    const fullName = screen.getByLabelText(/full name/i);
    const email = screen.getByLabelText(/email address/i);
    const phone = screen.getByLabelText(/phone number/i);
    const message = screen.getByLabelText(/how can we help/i);
    const city = screen.getByLabelText(/city/i);
    const consent = screen.getByLabelText(/consent/i);

    await user.type(fullName, "Sam Client");
    await user.type(email, "sam@example.com");
    await user.type(phone, "+27 87 123 4567");
    await user.type(message, "We require respite care.");
    await user.type(city, "Sandton");
    await user.click(consent);

    expect(fullName).toHaveValue("Sam Client");
    expect(email).toHaveValue("sam@example.com");
    expect(phone).toHaveValue("+27 87 123 4567");
    expect(message).toHaveValue("We require respite care.");
    expect(screen.getByRole("button", { name: /send enquiry/i })).toBeEnabled();

    await user.click(screen.getByRole("button", { name: /send enquiry/i }));
    await waitFor(() => expect(sendContact).toHaveBeenCalled());
  });
});
