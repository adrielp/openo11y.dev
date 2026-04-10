---
title: Technical Systems
description: OTel-centric guidance for instrumenting, collecting, and analyzing telemetry from software systems.
---

Observing technical systems is where most practitioners start. Instrumenting applications, configuring collection pipelines, defining SLOs, and building the feedback loops that make production systems understandable.

**openo11y.dev** takes an [OpenTelemetry](https://opentelemetry.io)-centric approach. OTel is the standard — the second most active CNCF project — and it provides the unified framework for traces, metrics, logs, and profiles. Rather than treating these as separate concerns, the goal is braided, correlated telemetry that tells a coherent story about system behavior.

## Areas of Focus

### Instrumentation

Intentional instrumentation is the foundation. Auto-instrumentation gets initial visibility; manual instrumentation tells the story that matters. Guidance will cover SDK patterns across languages, span design, metric instrument selection, and the balance between auto and manual approaches.

### Collection

The OpenTelemetry Collector is the central nervous system of a telemetry pipeline. Receivers, processors, exporters, and pipelines — configured to transform, filter, sample, and route telemetry to the right backends at the right cost.

### Signals

Traces, metrics, logs, and profiles each serve different analytical needs. Understanding when to reach for each signal — and how they correlate — is critical to effective observability.

### SLOs & Reliability

Service Level Objectives turn observability data into actionable reliability targets. SLIs, error budgets, burn rate alerting, and the organizational practices that make SLOs meaningful rather than decorative.

## What's Coming

This section will expand with practical guidance on:

- **The evolution of observability** — from control theory to inferable systems
- **OpenTelemetry as the standard** — why OTel, what it covers, where it's going
- **Collector architecture patterns** — pipelines, sampling, OTTL transforms
- **Instrumentation by language** — Go, Python, Node.js, Java, .NET
- **SLO implementation** — from definition to error budget policies
- **Sampling strategies** — head vs tail, cost implications

Contributions are welcome — [open an issue](https://github.com/adrielp/openo11y.dev/issues) or [submit a PR](https://github.com/adrielp/openo11y.dev/blob/main/CONTRIBUTING.md).
