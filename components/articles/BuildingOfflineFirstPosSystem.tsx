import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BuildingOfflineFirstPosSystem() {
  return (
    <div className="article-content">
      {/* ── Technical Cover Image ───────────────────────────── */}
      <div className="article-cover-wrap">
        <div className="article-cover-window">
          <div className="article-cover-bar">
            <span className="cover-dot" />
            <span className="cover-dot" />
            <span className="cover-dot" />
            <span className="cover-title">cloudzyne pos · system architecture &amp; interface</span>
          </div>
          <div className="article-cover-img-container">
            <Image
              src="/projects/pos.png"
              alt="Cloudzyne POS — Offline-first retail point of sale interface architecture and transaction workflow preview"
              width={1200}
              height={675}
              priority
              className="article-cover-image"
            />
          </div>
        </div>
        <p className="article-cover-caption">
          Visual preview of Cloudzyne POS — designing for offline reliability, multi-terminal consistency, and retail workflows.
        </p>
      </div>

      {/* ── Table of Contents ─────────────────────────────────── */}
      <nav className="article-toc" aria-label="Table of contents">
        <p className="article-toc-label">Table of Contents</p>
        <ol className="article-toc-list">
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#why-offline-first">Why Offline-First?</a></li>
          <li><a href="#real-retail-workflows">Designing for Real Retail Workflows</a></li>
          <li><a href="#multi-terminal">The Multi-Terminal Challenge</a></li>
          <li><a href="#data-sync">Data Synchronization Is More Than Uploading Records</a></li>
          <li><a href="#technology">Technology Choices</a></li>
          <li><a href="#lessons">What I&apos;m Learning Along the Way</a></li>
          <li><a href="#whats-next">What&apos;s Next?</a></li>
          <li><a href="#final-thoughts">Final Thoughts</a></li>
        </ol>
      </nav>

      {/* ── Introduction ──────────────────────────────────────── */}
      <h2 id="introduction">Introduction</h2>
      <p>
        I&apos;ve always been interested in how software works beyond what users see on the screen.
        Building something that looks good is one thing, but making sure it behaves correctly when
        things go wrong is a completely different challenge.
      </p>
      <p>
        That&apos;s one of the reasons I&apos;ve been working on an offline-first Point of Sale (POS) system.
      </p>
      <p>
        The project is called <strong>Cloudzyne POS</strong>. The idea is to build a practical retail
        management system that can continue supporting essential business operations even when the
        internet connection becomes unreliable or completely unavailable.
      </p>
      <p>
        At first, a POS system might seem relatively straightforward. You have products, prices,
        customers, a cart and a checkout process. But once you start thinking about actual shop
        environments, things become considerably more interesting.
      </p>
      <p>
        What happens when the internet goes down during a sale? What if a shop has multiple terminals?
        How do you keep their data consistent? And how do you prevent the system from processing the
        same transaction more than once?
      </p>
      <p>These are some of the engineering questions I&apos;m exploring while building this project.</p>

      {/* ── Why Offline-First? ─────────────────────────────────── */}
      <h2 id="why-offline-first">Why Offline-First?</h2>
      <p>Internet connectivity isn&apos;t something every business can depend on all the time.</p>
      <p>
        A temporary connection failure shouldn&apos;t necessarily mean that a shop can no longer
        process sales. For a retail business, even a short interruption can affect daily operations.
      </p>
      <p>That&apos;s where offline-first architecture becomes important.</p>
      <p>
        Instead of treating internet connectivity as a requirement for every operation, an offline-first
        application is designed to perform supported operations locally and synchronize data when
        connectivity becomes available.
      </p>
      <p>
        For a POS system, this means essential workflows should remain usable without depending on a
        constant connection to a remote server.
      </p>
      <p>
        However, offline support introduces another set of problems. Local data needs to be managed
        carefully, and synchronization becomes an important part of the overall architecture.
      </p>

      <div className="article-callout">
        <strong>Design Consideration</strong>
        <p>
          Offline capability cannot simply be an afterthought or an add-on layer. The choice to support
          offline operation deeply influences data persistence structures, state modeling, and how
          transactions are validated before being queued.
        </p>
      </div>

      {/* ── Designing for Real Retail Workflows ───────────────── */}
      <h2 id="real-retail-workflows">Designing for Real Retail Workflows</h2>
      <p>
        One thing I&apos;ve learned while thinking through this project is that software should be
        designed around how people actually use it.
      </p>
      <p>
        A retail employee doesn&apos;t want to worry about whether the internet connection is working
        before completing a sale.
      </p>
      <p>
        The application needs to provide a reliable workflow for everyday tasks, including:
      </p>
      <ul>
        <li>Accessing available product information.</li>
        <li>Creating and processing sales.</li>
        <li>Managing relevant transaction records.</li>
        <li>Maintaining local data during connectivity interruptions.</li>
        <li>Synchronizing information when connectivity returns.</li>
      </ul>
      <p>
        The important part is that offline functionality shouldn&apos;t be treated as an afterthought.
        It needs to influence architectural decisions from the beginning.
      </p>

      {/* ── The Multi-Terminal Challenge ──────────────────────── */}
      <h2 id="multi-terminal">The Multi-Terminal Challenge</h2>
      <p>Things become more complicated when a business operates multiple POS terminals.</p>
      <p>
        Consider a shop with two terminals. Both can process sales independently while the internet is unavailable.
      </p>
      <p>
        Now imagine that both terminals need to work with shared information, such as customer records,
        loyalty points or gift card balances.
      </p>
      <p>
        Without a reliable coordination strategy, both terminals might make decisions using outdated information.
      </p>
      <p>
        For example, a customer could potentially attempt to redeem the same available reward at two
        different terminals while both are disconnected.
      </p>
      <p>This creates a consistency problem.</p>

      {/* Architecture Diagram */}
      <div className="article-diagram" aria-label="Multi-terminal consistency challenge diagram">
        <div className="article-diagram-inner">
          <div className="diagram-node">
            <span className="diagram-label">Terminal 01</span>
            <span className="diagram-status offline">Offline Sale</span>
          </div>
          <div className="diagram-arrow">⟷</div>
          <div className="diagram-node diagram-node-center">
            <span className="diagram-label">Shared State</span>
            <span className="diagram-status conflict">Conflict Risk</span>
          </div>
          <div className="diagram-arrow">⟷</div>
          <div className="diagram-node">
            <span className="diagram-label">Terminal 02</span>
            <span className="diagram-status offline">Offline Sale</span>
          </div>
        </div>
        <p className="diagram-caption">
          When multiple terminals operate concurrently without internet connectivity, shared balances and finite resources require strict reconciliation policies rather than naive last-write-wins overwrites.
        </p>
      </div>

      <p>
        Simply synchronizing records when the internet returns doesn&apos;t automatically solve every conflict.
        The system needs clear rules about which operations can happen offline, how conflicts are handled and
        how transactions are reconciled.
      </p>
      <p>
        This is one of the areas that requires particularly careful design.
      </p>
      <p>
        I&apos;m treating multi-terminal consistency as an architectural problem rather than assuming that
        sharing data between terminals will be enough.
      </p>

      {/* ── Data Synchronization Is More Than Uploading Records ─ */}
      <h2 id="data-sync">Data Synchronization Is More Than Uploading Records</h2>
      <p>Synchronization is another important part of an offline-first application.</p>
      <p>
        When connectivity returns, locally created transactions and other changes need to be communicated
        to the appropriate system without introducing duplicates or losing information.
      </p>
      <p>Some of the considerations include:</p>
      <ul>
        <li>Identifying transactions uniquely.</li>
        <li>Preventing duplicate processing.</li>
        <li>Tracking synchronization status.</li>
        <li>Handling interrupted synchronization attempts.</li>
        <li>Resolving conflicting updates.</li>
        <li>Maintaining an auditable transaction history.</li>
      </ul>
      <p>Idempotency is particularly important here.</p>

      <div className="article-callout">
        <strong>Core Concept: Idempotency</strong>
        <p>
          An idempotent operation can be executed multiple times without altering the outcome beyond the initial execution. In network-constrained retail environments, network drops often occur after the server processes a request but before the client receives the acknowledgement. Idempotent transaction IDs allow the client to safely retry without duplicating customer charges or stock deductions.
        </p>
      </div>

      <p>
        Below is a simplified architectural illustration of how client-generated UUIDs and sync metadata
        allow transactions to be safely buffered locally and replayed idempotently:
      </p>

      <pre className="article-codeblock">
        <code>{`// Client-side transaction model with idempotent identification
interface QueuedTransaction {
  id: string;               // Deterministic UUID generated locally on terminal
  terminalId: string;       // Unique hardware/workstation identifier
  timestamp: string;        // ISO 8601 creation time
  version: number;          // Optimistic concurrency counter
  syncState: "pending" | "syncing" | "synced" | "conflict";
  payload: {
    items: Array<{ productId: string; quantity: number; unitPrice: number }>;
    totalAmount: number;
    paymentMethod: "cash" | "card" | "credit";
  };
}

// On reconnect, the synchronization processor passes the transaction ID:
// Server validates: IF transaction(id) EXISTS -> Return stored receipt
//                   ELSE -> Process transaction inside atomic boundary`}</code>
      </pre>

      <p>
        If a transaction is submitted more than once because of a network interruption or retry, the
        system should be designed to prevent it from being processed multiple times.
      </p>
      <p>
        These details might not be visible to the person using the POS terminal, but they have a
        significant impact on the reliability of the application.
      </p>

      {/* ── Technology Choices ─────────────────────────────────── */}
      <h2 id="technology">Technology Choices</h2>
      <p>
        For this project, I&apos;m working with a <strong>TypeScript and Node.js-based stack</strong>.
      </p>
      <p>
        TypeScript provides static typing that helps make larger application codebases easier to reason
        about and maintain.
      </p>
      <p>
        Node.js provides the runtime for the application logic and backend components.
      </p>
      <p>
        I&apos;m also using this project as an opportunity to think more carefully about system boundaries,
        data ownership and how different parts of a business application should communicate.
      </p>
      <p>
        Choosing a technology stack is only one part of the process. The more important decisions are often
        about how the system is structured and how it behaves under real operating conditions.
      </p>

      {/* ── What I'm Learning Along the Way ───────────────────── */}
      <h2 id="lessons">What I&apos;m Learning Along the Way</h2>
      <p>Working on this project has made me think differently about software development.</p>
      <p>
        Previously, it was easy to focus primarily on whether a feature worked under normal conditions.
      </p>
      <p>
        Now I&apos;m paying much more attention to what happens when something goes wrong.
      </p>
      <p>A few things have become particularly clear:</p>

      <div className="article-lessons">
        <div className="lesson-item">
          <h3>Reliability needs to be designed, not added later</h3>
          <p>
            If an application is expected to work offline, that requirement affects its architecture
            from the beginning.
          </p>
        </div>
        <div className="lesson-item">
          <h3>Data consistency is not always straightforward</h3>
          <p>
            Multiple independent terminals can create situations that are difficult to resolve without
            carefully defined business rules.
          </p>
        </div>
        <div className="lesson-item">
          <h3>Retries need to be safe</h3>
          <p>
            Network failures are inevitable. Applications need to handle repeated requests without
            accidentally duplicating operations.
          </p>
        </div>
        <div className="lesson-item">
          <h3>Real-world requirements influence technical decisions</h3>
          <p>
            A solution that works perfectly in a development environment might behave very differently
            in an actual retail environment.
          </p>
        </div>
      </div>

      <p>These are lessons I&apos;m continuing to explore as development progresses.</p>

      {/* ── What's Next? ───────────────────────────────────────── */}
      <h2 id="whats-next">What&apos;s Next?</h2>
      <p>Cloudzyne POS is still an ongoing development project.</p>
      <p>
        My next focus is continuing to refine the core retail workflows, improve the offline architecture
        and work through the challenges surrounding synchronization and multi-terminal consistency.
      </p>
      <p>
        There are still plenty of things to investigate, implement and test.
      </p>
      <p>
        I&apos;m particularly interested in seeing how the architectural decisions hold up as the system
        becomes more complete.
      </p>
      <p>
        You can follow the project&apos;s development on GitHub:
      </p>
      <p>
        <a
          href="https://github.com/Cloudzyne/POS"
          target="_blank"
          rel="noopener noreferrer"
          className="article-inline-link"
        >
          Cloudzyne POS — GitHub <ArrowUpRight size={14} style={{ display: "inline", verticalAlign: "middle" }} />
        </a>
      </p>

      {/* ── Final Thoughts ─────────────────────────────────────── */}
      <h2 id="final-thoughts">Final Thoughts</h2>
      <p>
        Building a POS system has turned out to be a much more interesting engineering exercise than I initially expected.
      </p>
      <p>
        The visible features are only a small part of the work. A lot of the important decisions happen
        behind the scenes, particularly when it comes to reliability, data integrity and handling situations
        that aren&apos;t part of the ideal workflow.
      </p>
      <p>
        I&apos;m still learning and improving the system as development continues. I&apos;ll share more about
        the technical decisions, challenges and things I learn along the way.
      </p>

      {/* ── Internal Links ────────────────────────────────────── */}
      <div className="article-related">
        <p className="article-related-label">Explore More</p>
        <div className="article-related-links">
          <Link href="/about" className="article-related-link">
            About Tharindu Rashan — Background &amp; Education →
          </Link>
          <Link href="/#work" className="article-related-link">
            Selected Work &amp; Project Highlights →
          </Link>
          <a
            href="https://github.com/TharinduRashan"
            target="_blank"
            rel="noopener noreferrer"
            className="article-related-link"
          >
            GitHub Profile — @TharinduRashan →
          </a>
        </div>
      </div>
    </div>
  );
}
