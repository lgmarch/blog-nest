# Project <a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

[![](https://github.com/lgmarch/blog-nest/workflows/check/badge.svg)](https://github.com/lgmarch/blog-nest/actions?query=workflow%3Acheck)
[![](https://github.com/lgmarch/blog-nest/workflows/info/badge.svg)](https://github.com/lgmarch/blog-nest/actions?query=workflow%3Ainfo)

# ✨ Блог ✨

- Angular

```
  ng add @nrwl/angular
```

- React

```
  ng add @nrwl/react
```

- Nest

```
  ng add @nrwl/nest
```

## Создание приложения

При использовании Nx вы можете создавать несколько приложений и библиотек в одной рабочей области.

## Создание библиотеки

```
  ng g @nrwl/angular:lib my-lib
```

## Запуск модульных тестов

```
  cd project
  nx affected:test
```

## Запуск сквозных тестов

```
  nx affected:e2e
```

## Сборка

Артефакты сборки будут сохранены в dist/ каталоге. Используйте --prod флаг для производственной сборки.

```
  nx
```

## Диаграмма зависимостей

```
  nx dep-graph
```

## Запуск приложения

```
  ng serve users
```

Перейдите к http://localhost:3000 . Приложение автоматически перезагрузится, если вы измените какой-либо из исходных файлов.
