---
title: AI Systems
description: Observing LLMs, agents, eval pipelines, and AI-powered systems with OpenTelemetry.
---

AI systems are powerful, but they don't have to be black boxes. The same observability principles that apply to distributed microservices apply to LLM inference, agentic workflows, and evaluation pipelines — instrument intentionally, collect structured telemetry, and analyze to understand behavior.

OpenTelemetry's emerging `gen_ai.*` [semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) provide a shared language to describe what AI systems are doing. A single trace can capture the prompt, tool selection logic, tool invocation, and final result of an agentic workflow. This enables debugging, cost attribution, performance optimization, and trust-building in complex AI systems.

## Areas of Focus

### LLM Observability

Tracing inference calls — prompt and completion tokens, latency, model selection, cost per request. Understanding *what* the model is doing and *how much* it costs across the request lifecycle.

### Agent Observability

Multi-step agent workflows create complex execution paths. Instrumenting the reasoning chain — tool calls, intermediate results, retry logic, and final outputs — is essential for debugging and validating agent behavior.

### Eval Pipelines

Evaluation workflows are systems too. Instrumenting eval pipelines provides visibility into dataset processing, scoring functions, and result aggregation — enabling reproducibility and regression detection.

### AI-Enhanced Observability

AI isn't just *observed* — it also *improves* observability. ML-driven anomaly detection, natural language telemetry queries, AI-assisted root cause analysis, and automated runbook generation are becoming practical realities.

## What's Coming

This section will expand with practical guidance on:

- **Instrumenting LLM calls with OTel** — SDK patterns and `gen_ai.*` semantic conventions
- **Agent tracing patterns** — capturing the full reasoning path
- **Cost attribution** — tracking inference spend across services and users
- **Eval pipeline observability** — instrumenting evaluation workflows
- **Guardrails and safety** — observing content filtering and PII detection

Contributions are welcome — [open an issue](https://github.com/adrielp/openo11y.dev/issues) or [submit a PR](https://github.com/adrielp/openo11y.dev/blob/main/CONTRIBUTING.md).
