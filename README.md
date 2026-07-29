# Droneza

Droneza is a Poland/EU-based product concept for accountable drone-incident workflow management. The site presents Droneza Log, Droneza Risk, and Droneza Evidence for critical infrastructure sites, event operators, ports, airports, and municipalities.

All incidents, organisations, records, and interface data shown in this demo are fictional.

## Local development

```bash
npm install
npm run dev
```

## Production verification

```bash
npm audit --omit=dev --audit-level=high
npm run build:vercel
```

The Vercel configuration serves the Vite output from `dist/client` and falls back to `index.html` for application routes.
