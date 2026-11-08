---
title: State hoisting in Compose
date: 2026-11-08
author: David Taylor
image: images/blog/article.png
summary: Moving state up so composables stay stateless and testable.
tags: compose, state
---

## Intro

This is a **sample post**. Replace it with your own writing.

## Example code

```kotlin
@Composable
fun AppNavHost(navController: NavHostController) {
    NavHost(navController, startDestination = "home") {
        composable("home") { HomeScreen() }
    }
}
```

- Standard Markdown only
- Use absolute URLs for images and links