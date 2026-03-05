import Link from "next/link";

export const metadata = {
  title: "Support - Memory Game",
  description: "Get help and support for Memory Game.",
};

export default function Support() {
  return (
    <div className="container">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </nav>

      <h1>Support</h1>
      <p>
        We are here to help! If you have any questions, issues, or feedback
        about Memory Game, please don&apos;t hesitate to reach out.
      </p>

      <h2>Contact Us</h2>
      <p>
        Email us at{" "}
        <a href="mailto:msahakyan.jobs@gmail.com">msahakyan.jobs@gmail.com</a> and we will
        get back to you as soon as possible.
      </p>

      <h2>Common Questions</h2>

      <h2>How do I reset my progress?</h2>
      <p>
        You can reset your game progress by reinstalling the app. All data is
        stored locally on your device.
      </p>

      <h2>Is the game free?</h2>
      <p>Yes, Memory Game is completely free to download and play.</p>

      <h2>What devices are supported?</h2>
      <p>Memory Game is available on both iOS and Android devices.</p>

      <footer>
        &copy; {new Date().getFullYear()} Memory Game. All rights reserved.
      </footer>
    </div>
  );
}