import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Memory Game",
  description: "Privacy Policy for Memory Game.",
};

export default function Privacy() {
  return (
    <div className="container">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </nav>

      <h1>Privacy Policy</h1>
      <p>Last updated: March 5, 2026</p>

      <h2>Overview</h2>
      <p>
        Memory Game (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) is
        committed to protecting your privacy. This Privacy Policy explains how
        we handle information when you use our mobile application.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect anonymous usage analytics (such as app opens and level
        completions) to improve the game experience. This data does not
        personally identify you.
      </p>

      <h2>Personal Data</h2>
      <p>
        We do not collect, store, or share any personal information. The game
        does not require account creation or login. All game progress is stored
        locally on your device.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        The app may use third-party analytics services (such as Mixpanel) to
        collect anonymous usage data. These services have their own privacy
        policies governing the use of your information.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our app is safe for children. We do not knowingly collect personal
        information from children under 13. The app does not require any
        personal data to function.
      </p>

      <h2>Data Security</h2>
      <p>
        Since we do not collect personal data, there is minimal risk to your
        privacy. Game data is stored locally on your device and is not
        transmitted to our servers.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
        <a href="mailto:msahakyan.jobs@gmail.com">msahakyan.jobs@gmail.com</a>.
      </p>

      <footer>
        &copy; {new Date().getFullYear()} Memory Game. All rights reserved.
      </footer>
    </div>
  );
}
