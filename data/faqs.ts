export type FAQItem = {
  question: string;
  answer: string;
  list?: string[];
};

export const faqs: FAQItem[] = [
  {
    question: "What is web development?",
    answer:
      "We design, build, and launch websites that clearly communicate your offer, load fast on every device, and stay secure behind the scenes. That includes strategic layouts, component coding, and configuring domains plus hosting so the experience is ready for real visitors.",
  },
  {
    question: "What does the promotional website bundle include?",
    answer:
      "The launch bundle gives you everything you need to go live quickly:",
    list: [
      "Custom, responsive page design built for your brand",
      "Copy support or refinement to clarify your message",
      "Initial SEO fundamentals (metadata, alt text, sitemap)",
      "Hosting setup plus one month of coverage",
      "Domain registration support or transfer assistance",
      "Forms, CTAs, and analytics wired up for performance",
    ],
  },
  {
    question: "Why should I pay for hosting and renew my domain?",
    answer:
      "Hosting is the online rack space where your site lives; renewing it keeps the site accessible. Domains are leased annually, and renewals lock in your web address so customers in Nigeria and abroad can keep finding you. We charge a yearly fee. We handle the renewals so your business keeps operating with zero downtime.",
    list: [
      "We offer dedicated maintenance and infrastructure plans starting at ₦30,000/year",
    ],
  },
  {
    question: "Can I update my website after launch?",
    answer:
      "Minor edits like swapping copy, updating imagery, or adjusting contact details are included. Bigger projects, redesigns, new pages, or frequent refreshes follow a quick estimate so you always know the investment.",
  },
  {
    question: "What do I need to provide to get started?",
    answer:
      "Share your brand story, logo, preferred layout, reference links, and any content you already have. The clearer the brief, the faster we can translate it into a polished site.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most single-page or promo sites ship within 2-4 business days once we receive final content. Bigger launches are scoped individually and usually fall within 1-3 weeks depending on complexity.",
  },
  {
    question: "Can you automate parts of my business with AI?",
    answer:
      "Yes. We build AI chat assistants that answer customers and capture leads, automate repetitive workflows across the tools you already use, and integrate AI features directly into websites and apps. Tell us which tasks eat your time and we will map out what can be automated.",
  },
  {
    question: "Can you act as the technical partner for my startup?",
    answer:
      "Yes. If you are a founder without a technical co-founder, we can scope and build your MVP, make the architecture decisions, and stay on as your development team on a flexible monthly engagement while you focus on customers and fundraising.",
  },
  {
    question: "How can I reach the team?",
    answer:
      "Send us an email at workloadhq@gmail.com, message us on Instagram, or fill out the contact form. We typically reply within one business day with next steps.",
  },
];
