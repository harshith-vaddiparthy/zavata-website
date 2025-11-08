# New AI Wrapper Concept

## Elevator Pitch
Create a high-level wrapper that lets product teams call multiple AI providers through a single, opinionated interface. The wrapper should streamline prompt templating, provider failover, and response validation while exposing an intuitive developer experience that slots into the existing Zavata stack.

## Objectives
- Reduce churn when switching or combining AI providers by centralizing configuration and routing logic.
- Harden production usage via resilient retry, caching, and guardrails that catch malformed responses early.
- Deliver consistent observability (latency, cost, success) for every request regardless of the underlying model.
- Keep integration costs down by publishing a lightweight TypeScript SDK and HTTP endpoint.

## Proposed Architecture
```
client request
      ↓
  Wrapper API  ──▶  Routing Engine ──┬─▶ Provider A
      │                              ├─▶ Provider B
      └─▶ Cache Layer                └─▶ Provider C
      ↓
  Validation & Guardrails ──▶ Unified Response
```

- **Wrapper API**: Next.js route handler or edge function that receives normalized payload (prompt id, variables, metadata).
- **Routing Engine**: Applies routing policy (round-robin, weighted cost, semantic tags) and collects provider capabilities from a registry.
- **Cache Layer**: Supports deterministic prompts via hash keys; optionally writes to Redis/Upstash to keep costs predictable.
- **Validation & Guardrails**: Schema validation with Zod; optional moderation checks; auto-retries on recoverable failures.
- **Unified Response**: Returns structured payload containing result text, tokens used, latency, provider id, and guardrail flags.

## Developer Experience
- **Prompt Kits**: Encourage reusable prompts stored next to features (e.g., `src/ai/prompts`). The wrapper populates variables and handles formatting.
- **SDK**: Publish `@zavata/ai` client that exposes `generate()`, `stream()`, `classify()`. Works in browser and server environments.
- **Observability**: Emit events to existing analytics pipeline; aggregate provider stats in a single dashboard for finance and ops.

## Extensions & Integrations
- Support streaming responses via Server Sent Events to power chat interfaces.
- Provide plugin hooks (e.g., `beforeSend`, `afterReceive`) so teams can add custom logging or redaction.
- Explore native integration with Tailark components for AI-assisted UI states.

## Risks & Open Questions
- **Cost Variance**: Need heuristics to avoid over-using premium models when cheaper options suffice.
- **Latency**: Multi-provider fallbacks add network hops; consider concurrency or speculative execution.
- **Compliance**: Some providers require PII handling guarantees; wrapper should allow per-provider policies.
- **Version Drift**: Provider SDKs update frequently; prefer HTTP endpoints or thin adapters to limit breaking changes.

## Next Steps
1. Draft a minimal TypeScript interface for provider adapters and define required capabilities.
2. Prototype the wrapper API with two providers (e.g., OpenAI-compatible + Anthropic-compatible) and basic failover.
3. Instrument latency, cost, and error tracking using the existing analytics stack.
4. Circulate API proposal with frontend and ops teams for feedback.
