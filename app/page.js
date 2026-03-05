import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/support">Support</Link>
      </nav>

      <div className="hero">
        <Image
          src="/hero.png"
          alt="Kids Memory Game"
          width={300}
          height={450}
          priority
        />
      </div>

      <h1>Memory Game</h1>
      <p>
        A fun and engaging memory card matching game for all ages. Flip the
        cards, find matching pairs, and challenge yourself through increasingly
        difficult levels!
      </p>

      <h2>Features</h2>
      <p>
        Multiple difficulty levels, beautiful card designs, and a simple
        interface that makes it easy for anyone to play. Great for training your
        memory and having fun at the same time.
      </p>

      <h2>How to Play</h2>
      <p>
        Tap on a card to flip it over, then tap another card to find its match.
        Match all pairs to complete the level. Try to finish with as few moves
        as possible!
      </p>

      <footer>
        &copy; {new Date().getFullYear()} Memory Game. All rights reserved.
      </footer>
    </div>
  );
}
