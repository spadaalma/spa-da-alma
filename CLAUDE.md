# Regras de git

- Cada task do Trello vira uma branch `feature/epNN-tNN-descricao-curta` (ex.: `feature/ep03-t01-rota-chale`). Correções sem task: `fix/descricao`.
- PR de feature/fix → `develop`. PR de `develop` → `main`. Nunca PR de outra branch para `main`.
- Nunca dar push direto em `main` nem em `develop`.
- `main` é produção (deploy na Vercel).
