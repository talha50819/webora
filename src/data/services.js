export const services = [
  {
    index: '01',
    slug: 'web-development',
    name: 'Web Development',
    tagline: 'Software built for the load it will actually take.',
    summary:
      'Custom web platforms and product engineering — from the first line of architecture to the system that survives its tenth traffic spike.',
    description:
      'We design and build web applications as production systems, not demos. That means architecture decisions get made before the first component does: how data flows, where state lives, what breaks first under load, and how the thing gets deployed without a Friday-night incident. We work in React, Next.js, and Node on the frontend and backend, and we are equally comfortable inheriting a decade-old codebase as we are starting from a blank repo.',
    capabilities: [
      'Product engineering from spec to production',
      'Design systems and component architecture',
      'API design — REST, GraphQL, and internal service contracts',
      'Legacy application modernization and re-platforming',
      'Performance auditing and Core Web Vitals remediation',
      'Accessibility compliance (WCAG 2.2 AA)',
    ],
    process: [
      ['Discovery', 'Map the domain, the data, and the constraints before touching a keyboard.'],
      ['Architecture', 'Decide the boring things early — data model, auth, deployment — so the interesting things are easy later.'],
      ['Build', 'Ship in reviewable increments against a staging environment that mirrors production.'],
      ['Harden', 'Load test, security review, and a rollback plan before anything goes live.'],
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL'],
  },
  {
    index: '02',
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    tagline: 'One codebase, native feel, no compromise on the parts users notice.',
    summary:
      'iOS, Android, and cross-platform apps engineered for the details that separate "functional" from "the one they keep."',
    description:
      'Most mobile apps fail on the margins — a janky transition, a cold start that takes too long, a permissions flow that loses the user at step two. We build with React Native and native Swift/Kotlin where it matters, and we treat offline handling, push infrastructure, and app-store release engineering as first-class parts of the build, not an afterthought bolted on in week eleven.',
    capabilities: [
      'Cross-platform apps with React Native',
      'Native iOS (Swift) and Android (Kotlin) development',
      'Offline-first data sync and conflict resolution',
      'Push notification and deep-linking infrastructure',
      'App Store / Play Store release engineering and compliance',
      'Mobile performance profiling and battery/memory auditing',
    ],
    process: [
      ['Discovery', 'Define the platform strategy — native, cross-platform, or hybrid — based on the product, not habit.'],
      ['Prototype', 'Validate the core interaction on-device early, before the rest of the app is built around it.'],
      ['Build', 'Parallel iOS/Android tracks with shared business logic where it earns its keep.'],
      ['Release', 'Store submission, phased rollout, and crash-monitoring wired in from day one.'],
    ],
    stack: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Fastlane'],
  },
  {
    index: '03',
    slug: 'cloud-devops',
    name: 'Cloud & DevOps',
    tagline: 'Infrastructure that fails loudly in staging, not silently in production.',
    summary:
      'Cloud architecture, CI/CD, and infrastructure-as-code on AWS, Azure, and GCP — built so deploys are routine, not events.',
    description:
      'We design cloud infrastructure the same way we design software: versioned, reviewed, and reproducible. That means Terraform over console clicks, pipelines over manual deploys, and observability that tells you what broke before a customer does. Whether you need a migration off a legacy data center or a Kubernetes platform that a five-person team can actually operate, we build for the operators who inherit it, not just the ones who ship it.',
    capabilities: [
      'Cloud architecture on AWS, Azure, and Google Cloud',
      'Infrastructure as Code (Terraform, Pulumi)',
      'CI/CD pipeline design and build-time reduction',
      'Kubernetes platform design and managed cluster operations',
      'Cost architecture review and cloud spend reduction',
      'Observability — logging, metrics, tracing, and on-call runbooks',
    ],
    process: [
      ['Audit', 'Baseline current infrastructure, cost, and failure modes before proposing changes.'],
      ['Design', 'Architect for the team size that will operate it, not the one that built it.'],
      ['Migrate', 'Move workloads in reversible stages with rollback windows, never a single cutover.'],
      ['Operate', 'Hand off with runbooks, alerts tuned to signal, and a team that knows the system.'],
    ],
    stack: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Docker', 'Datadog'],
  },
  {
    index: '04',
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    tagline: 'Find the door before someone else does.',
    summary:
      'Application security, infrastructure hardening, and compliance work — adversarial testing done by people who build software, not just scan it.',
    description:
      'Security work is only useful if it produces fixes, not just findings. Our reviews are done by engineers who read the code and the infrastructure config, not only the output of a scanner. We run penetration tests, architecture reviews, and compliance readiness assessments (SOC 2, HIPAA, ISO 27001) with a report that a development team can actually action in a sprint, ranked by real exploitability rather than CVSS score alone.',
    capabilities: [
      'Application penetration testing (web, mobile, API)',
      'Cloud infrastructure and configuration security review',
      'Secure code review and threat modeling',
      'SOC 2, HIPAA, and ISO 27001 compliance readiness',
      'Incident response planning and tabletop exercises',
      'Identity, access, and secrets management hardening',
    ],
    process: [
      ['Scope', 'Define attack surface and rules of engagement with your team, in writing.'],
      ['Test', 'Manual and tool-assisted testing against the agreed scope — no automated-scan-only reports.'],
      ['Report', 'Findings ranked by real-world exploitability, with reproduction steps and fixes.'],
      ['Retest', 'Verify remediation before the engagement is called closed.'],
    ],
    stack: ['Burp Suite', 'OWASP ZAP', 'Nessus', 'Metasploit', 'Terraform', 'Vault'],
  },
  {
    index: '05',
    slug: 'ai-machine-learning',
    name: 'AI & Machine Learning',
    tagline: 'Models that ship, get monitored, and earn their inference cost.',
    summary:
      'Applied ML and LLM systems — from a proof of concept to a model serving real traffic with a rollback plan.',
    description:
      'We build the parts of AI systems that do not show up in a demo: data pipelines, evaluation harnesses, retrieval infrastructure, and monitoring for drift and cost. That includes traditional ML models, computer vision, and production LLM applications — RAG systems, agents, and fine-tuned models — engineered with the same rigor as any other backend service, because that is what they are.',
    capabilities: [
      'LLM application development — RAG, agents, and tool use',
      'Model fine-tuning and evaluation harness design',
      'Predictive ML models and computer vision systems',
      'Data pipeline and feature store engineering',
      'ML infrastructure — serving, monitoring, and drift detection',
      'AI cost and latency optimization for production workloads',
    ],
    process: [
      ['Frame', 'Define the decision the model needs to make and what a wrong answer costs.'],
      ['Prototype', 'Build an evaluation set before the model, so "better" is measurable.'],
      ['Build', 'Train or integrate, then wire in monitoring for drift, cost, and failure modes.'],
      ['Ship', 'Deploy behind a rollback path, with human review gates where the stakes require it.'],
    ],
    stack: ['PyTorch', 'Python', 'LangChain', 'Claude / OpenAI APIs', 'Vector DBs', 'MLflow'],
  },
  {
    index: '06',
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    tagline: 'Interfaces designed for the second time someone uses them, not the first screenshot.',
    summary:
      'Product design and design systems built around real user workflows — researched, tested, and handed off in a state engineers can actually build.',
    description:
      'A lot of interface design optimizes for how it looks in a portfolio. We optimize for the twentieth time someone uses it, at 2pm on a Tuesday, trying to finish a task. That means research before wireframes, usability testing before launch, and design systems documented well enough that engineering does not have to guess. We design for web and mobile, and we stay involved through implementation so the shipped product matches the file.',
    capabilities: [
      'User research and usability testing',
      'Product design — web and mobile, from wireframe to high fidelity',
      'Design systems and component libraries (Figma-to-code handoff)',
      'Information architecture and workflow design',
      'Accessibility-first design (WCAG 2.2)',
      'Design QA through implementation',
    ],
    process: [
      ['Research', 'Talk to the people who will use it before drawing anything.'],
      ['Structure', 'Map the information architecture and workflows before visual design starts.'],
      ['Design', 'Wireframe to high fidelity, tested with real users at each stage.'],
      ['Handoff', 'Documented design systems and QA support through build, not a file thrown over a wall.'],
    ],
    stack: ['Figma', 'Design Tokens', 'Storybook', 'Maze', 'Framer', 'Accessibility Insights'],
  },
  {
    index: '07',
    slug: 'it-consulting',
    name: 'IT Consulting & Digital Strategy',
    tagline: 'A roadmap that survives contact with your actual org chart.',
    summary:
      'Technology strategy, systems audits, and digital transformation planning grounded in what your team can realistically execute.',
    description:
      'Strategy work is worthless if it ignores the team that has to run it. We assess your current technology stack, team structure, and delivery process, then build a roadmap sequenced around real constraints — budget, headcount, and risk tolerance — instead of a slide deck of best practices lifted from a different company. Where needed, we stay on to help execute the plan we wrote.',
    capabilities: [
      'Technology stack and systems architecture audits',
      'Digital transformation roadmapping',
      'Vendor evaluation and build-vs-buy analysis',
      'Engineering process and delivery maturity assessment',
      'IT cost structure review',
      'Technical due diligence for M&A and investment',
    ],
    process: [
      ['Assess', 'Audit current systems, team structure, and delivery process against stated goals.'],
      ['Prioritize', 'Sequence recommendations by impact and executional realism, not novelty.'],
      ['Roadmap', 'Deliver a plan with owners, timelines, and budget — not just recommendations.'],
      ['Execute', 'Stay engaged as an implementation partner where the plan calls for it.'],
    ],
    stack: ['Enterprise Architecture', 'ITIL', 'Agile/Scrum', 'Jira', 'Financial Modeling', 'Risk Frameworks'],
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}
