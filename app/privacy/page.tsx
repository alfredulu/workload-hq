import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How WorkLoad HQ collects, uses, and protects the information you share with us.",
  alternates: {
    canonical: "https://workload-hq.vercel.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 2026"
      intro="This policy explains what information WorkLoad HQ collects when you use this website, how we use it, and the choices you have. We keep it simple: we collect the minimum we need to reply to you and run our business, and we do not sell your data to anyone."
      sections={[
        {
          heading: "Who we are",
          children: (
            <p>
              WorkLoad HQ is a digital studio based in Nigeria that designs and
              builds websites, web apps, mobile apps, and brand identities for
              clients worldwide. You can reach us any time at
              workloadhq@gmail.com.
            </p>
          ),
        },
        {
          heading: "What we collect",
          children: (
            <>
              <p>We only collect information you choose to give us:</p>
              <ul>
                <li>
                  When you use our contact form: your name, email address,
                  phone number (optional), subject, and message.
                </li>
                <li>
                  When you contact us directly by email, WhatsApp, or social
                  media: whatever details you include in your message.
                </li>
              </ul>
              <p>
                We do not run advertising trackers on this site, and we do not
                set tracking cookies of our own.
              </p>
            </>
          ),
        },
        {
          heading: "How we use your information",
          children: (
            <ul>
              <li>To reply to your inquiry and discuss your project.</li>
              <li>To prepare quotes and deliver work you ask us for.</li>
              <li>To keep basic records of past client conversations.</li>
              <li>
                We do not sell your information, and we do not add you to
                marketing lists without your consent.
              </li>
            </ul>
          ),
        },
        {
          heading: "Third-party services",
          children: (
            <>
              <p>A few trusted services help us run this site:</p>
              <ul>
                <li>
                  Contact form submissions are processed through Google Forms
                  and stored with Google. Google’s own privacy policy applies
                  to that processing.
                </li>
                <li>
                  Our hosting provider may collect standard server logs, such
                  as IP addresses and browser type, to keep the site running
                  and secure.
                </li>
                <li>
                  Links to WhatsApp, Instagram, and TikTok take you to those
                  platforms, where their own privacy policies apply.
                </li>
              </ul>
              <p>
                Our free tools (Webp-Recast and PDF Squeeze) process your
                files entirely in your browser. Files you use with them are
                never uploaded to us.
              </p>
            </>
          ),
        },
        {
          heading: "How long we keep your information",
          children: (
            <p>
              We keep inquiry and project correspondence for as long as we
              need it to serve you and to keep reasonable business records. If
              you want your information deleted, email us and we will remove
              it.
            </p>
          ),
        },
        {
          heading: "Your rights",
          children: (
            <p>
              You can ask us at any time to see the information we hold about
              you, correct it, or delete it. Email workloadhq@gmail.com and we
              will handle it promptly.
            </p>
          ),
        },
        {
          heading: "Children",
          children: (
            <p>
              This website is not directed at children under 13, and we do not
              knowingly collect information from them.
            </p>
          ),
        },
        {
          heading: "Changes to this policy",
          children: (
            <p>
              If we change this policy, we will update this page and the date
              at the top. Significant changes will be noted clearly.
            </p>
          ),
        },
      ]}
    />
  );
}
