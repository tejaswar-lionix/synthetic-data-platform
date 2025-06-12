# Synthetic Data Generation Platform for ML Teams

Self-serve synthetic data: GAN/VAE/diffusion/LLM for tabular, time-series, images, text with DP privacy, quality metrics, lineage.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery + Redis, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite + Chart.js (quality) + D3 (lineage)
- **15 Apps:** generators, tabular, privacy, quality, datasets, pipelines, evaluation, models, export, governance, timeseries, images, text, frontend, api

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t synthetic-data .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A synthetic worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Generators:** CTGAN/TVAE/diffusion/LLM, tabular + relational (foreign keys), time-series ARIMA, images StyleGAN, text LLM
- **Privacy:** DP epsilon 1.0, k-anonymity 5, l-diversity, PII scrub
- **Quality:** fidelity (KS, TVD), utility (TSTR), diversity, coverage
- **Pipelines:** DAG workflow, scheduling, lineage
- **Governance:** audit, compliance, retention

## License
Proprietary — All rights reserved (Synthetic Labs).
