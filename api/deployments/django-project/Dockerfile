FROM python:3.10.5-alpine as build

ARG ENV

ENV ENV=${ENV}

RUN apk update\
    && apk add postgresql-dev gcc python3-dev musl-dev libffi-dev\
    && pip install poetry

WORKDIR /cerberus-api
COPY poetry.lock pyproject.toml /cerberus-api/

RUN poetry config virtualenvs.create false \
    && poetry install $(if [ "$ENV" = 'production' ]; then echo '--no-dev'; fi) --no-interaction --no-ansi

COPY . /cerberus-api

# Multistage build
FROM python:3.10.5-alpine
RUN apk update && apk add postgresql-dev bash
COPY --from=build /usr/local/lib/python3.10/site-packages/ /usr/local/lib/python3.10/site-packages/
COPY --from=build /usr/local/bin/ /usr/local/bin/
COPY . /cerberus-api
WORKDIR /cerberus-api
ENV PYTHONUNBUFFERED 1\
    PYTHONFAULTHANDLER=1 \
    PYTHONHASHSEED=random \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100