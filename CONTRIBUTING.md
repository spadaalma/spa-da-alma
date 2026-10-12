# Fluxo de branches

```
feat/ep01-t04-deploy-workflow ─┐
fix/selo-da-nota ──────────────┼─PR─> develop ──PR──> main ──> produção (Vercel)
docs/runbook ──────────────────┘
```

- `main` é produção (deploy automático na Vercel). Só recebe PR vindo de `develop`.
- `develop` é a integração. Todas as outras branches abrem PR para `develop`.
- Ninguém dá push direto em `main` nem em `develop`.

## Nome de branch

`<tipo>/<epN-tNN>-<descricao-curta>`, minúsculas, sem acento, hífen.

| tipo | uso |
| --- | --- |
| `feat` | funcionalidade nova |
| `fix` | correção |
| `docs` | documentação |
| `refactor` | refatoração sem mudar comportamento |
| `chore` | build, CI, dependências |

Exemplos: `feat/ep03-t01-rota-chale`, `fix/ep03-t05-404-status`, `docs/ep09-t06-runbook`.
O código `epN-tNN` é o da task no Trello (EP03-T01 vira `ep03-t01`); omita se não houver task.

## Configuração no GitHub (feita por admin do repositório)

Settings > Branches (ou Rulesets):

1. **Default branch:** `develop`, para os PRs já abrirem contra ela.
2. **`main`:** exigir pull request, bloquear push direto e force push, exigir o check `só a develop entra na main` (workflow `Fluxo de branches`).
3. **`develop`:** exigir pull request, bloquear push direto e force push.
4. Opcional: "Automatically delete head branches" ligado.
