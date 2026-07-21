import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you use the WorkLoad HQ website, free tools, and services.",
  alternates: {
    canonical: "https://workload-hq.vercel.app/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="July 2026"
      intro="These terms apply when you use the WorkLoad HQ website and free tools, or engage us for a project. By using this site, you agree to them. They are written to be read, not to trick you."
      sections={[
        {
          heading: "About our services",
          children: (
            <p>
              WorkLoad HQ designs and builds websites, web applications,
              mobile apps, AI automations, and brand identities. Every client
              project is governed by the specific scope, price, and timeline
              we agree on together before work starts. These terms cover your
              use of this website; project engagements are defined in their
              own agreements or written quotes.
            </p>
          ),
        },
        {
          heading: "Quotes and payment",
          children: (
            <ul>
              <li>
                Quotes are fixed and agreed before work begins. The price we
                agree on is the price you pay for the agreed scope.
              </li>
              <li>
                Changes to scope after work starts may change the price. We
                will always tell you before any extra cost applies.
              </li>
              <li>
                Payment schedules, such as deposits and final payments, are
                agreed per project.
              </li>
            </ul>
          ),
        },
        {
          heading: "Ownership of work",
          children: (
            <ul>
              <li>
                When a project is fully paid for, the agreed deliverables
                belong to you.
              </li>
              <li>
                We may display completed work in our portfolio unless you ask
                us not to.
              </li>
              <li>
                The WorkLoad HQ name, logo, and the content of this website
                belong to us. Project screenshots shown in our portfolio
                belong to their respective owners.
              </li>
            </ul>
          ),
        },
        {
          heading: "Free tools",
          children: (
            <p>
              Webp-Recast and PDF Squeeze are provided free of charge, as is,
              without warranties of any kind. They process files in your
              browser and we never receive your files. Keep copies of your
              originals; we are not responsible for any loss resulting from
              their use.
            </p>
          ),
        },
        {
          heading: "Acceptable use",
          children: (
            <p>
              You agree not to misuse this website or our tools, including
              attempting to disrupt them, using them for unlawful purposes, or
              misrepresenting your identity when contacting us.
            </p>
          ),
        },
        {
          heading: "Third-party links",
          children: (
            <p>
              This site links to external platforms and live client projects.
              We are not responsible for the content or practices of websites
              we do not control.
            </p>
          ),
        },
        {
          heading: "Disclaimer and limitation of liability",
          children: (
            <p>
              This website is provided as is. While we work hard to keep
              information accurate and the site available, we make no
              guarantees, and to the fullest extent permitted by law, WorkLoad
              HQ will not be liable for indirect or consequential losses
              arising from your use of this site or our free tools. Nothing in
              these terms limits liability that cannot be limited by law.
            </p>
          ),
        },
        {
          heading: "Governing law",
          children: (
            <p>
              These terms are governed by the laws of the Federal Republic of
              Nigeria.
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          children: (
            <p>
              We may update these terms from time to time. Changes take effect
              when posted on this page, with the date at the top updated to
              match.
            </p>
          ),
        },
      ]}
    />
  );
}
