import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Customer.io",
  description:
    "Reclaim revenue from cancellations with AI-powered rescheduling",
};
export default function PrivacyPolicy() {
  return (
    <article className="prose prose-lg p-4">
      <p>
        <Link href="/">Go To Home</Link>
      </p>
      <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>

      <p>
        Customer.io is committed to protecting the privacy of all our users.
        This privacy policy explains how we collect, use and protect your
        personal information.
      </p>

      <h2>What information do we collect?</h2>

      <p>
        We collect the following information when you use our website or
        services:
      </p>

      <ul>
        <li>Your name and contact information</li>
        <li>Your email address and password</li>
        <li>Your company name and address</li>
        <li>Any other information you provide to us</li>
      </ul>

      <h2>How do we use your information?</h2>

      <p>
        We use the information we collect to provide our services to you, to
        improve our services and to communicate with you. We may also use your
        information to send you marketing communications, but you can opt-out of
        these communications at any time.
      </p>

      <h2>How do we protect your information?</h2>

      <p>
        We take the security of your personal information very seriously. We use
        appropriate technical and organizational measures to protect your
        information against unauthorized access, loss, destruction or
        alteration.
      </p>

      <h2>How can you access and control your information?</h2>

      <p>
        You can access and control your personal information by logging in to
        your account. You can also request that we delete your personal
        information by contacting us at{" "}
        <a href="mailto:support@customer.io">support@customer.io</a>.
      </p>

      <h2>Changes to this privacy policy</h2>

      <p>
        We may make changes to this privacy policy from time to time. If we do,
        we will update the `&quot;`Last updated`&quot;` date below and we will
        notify you of the changes by email.
      </p>

      <p>Last updated: March 1, 2023</p>
    </article>
  );
}
