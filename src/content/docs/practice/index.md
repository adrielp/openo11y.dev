---
title: The Practice of Observability
description: Observability-Driven Development, the AI-native inner loop, and inferable observability.
---

Observability isn't just a set of tools — it's a practice. A discipline of intentionally building systems that narrate their own behavior, and then using that narrative to make better decisions faster.

The industry has evolved from reactive monitoring toward proactive, inferable understanding. The foundations are in place: [OpenTelemetry](https://opentelemetry.io) provides the standard, wide structured events enable flexible analysis, and semantic conventions give telemetry shared meaning. What's changing now is *how practitioners use those foundations*.

## Observability-Driven Development

Observability-Driven Development (ODD) treats instrumentation as a first-class design activity, not a production afterthought. Before writing the logic for a new feature, define the story its telemetry will tell. Design the spans, child spans, and key attributes necessary to understand the request lifecycle. A feature isn't done when its tests pass — it's done when its trace accurately narrates what happened and why.

This design-first approach is the bedrock of building truly understandable systems.

## The AI-Native Inner Loop

AI changes the feedback cycle. With dedicated skills, MCP tools, and a lightweight local observability stack (an OpenTelemetry Collector and a visualization tool), instrumentation becomes the default, not the exception.

The loop is tight and local:

1. Agent(s) write and instrument code using dedicated skills and tools
2. Human and agent(s) analyze the telemetry produced locally
3. Iterate, learn, adjust, and deploy
4. ML algorithms and agents retroactively analyze production telemetry for anomalies

This shifts observability left — into the coding process itself, running in seconds rather than hours.

## Inferable Observability

The dashboard isn't what's important. It's the *interpretation* of the data. With foundations of wide events, data lakes, and semantic standards, the question changes from "what does this dashboard show?" to "what is happening and why?" — and AI can help answer that directly.

Between agents with access to contextual telemetry, ML algorithms for anomaly detection, and local agents with raw telemetry access, observability becomes more valuable, more accessible, and more inferable.

## What's Coming

This section will expand with practical guidance on:

- **Setting up ODD locally** — lightweight collector + visualization for the inner loop
- **AI-native instrumentation patterns** — how to configure agents that instrument by default
- **Inferable analysis** — moving from dashboards to direct answers
- **Closed-loop remediation** — systems that observe, detect, and recover autonomously
- **Connecting technical telemetry to organizational decisions** — from SLOs to team health

Contributions are welcome — [open an issue](https://github.com/adrielp/openo11y.dev/issues) or [submit a PR](https://github.com/adrielp/openo11y.dev/blob/main/CONTRIBUTING.md).
