---
title: Llama-3-ELYZA-JP-8BをM1Macで試してみたら
published: 2025-12-28
updated: 2025-12-28
description: 'M1Mac上でLlama-3-ELYZA-JP-8Bを試してみた'
image: ''
tags: [LLM, Mac, Local, llama3, obsidian]
category: 'LLM'
draft: false 
---

## 概要
Obsidian Copilotで日本語ローカルLLMを使いたかったので、Llama-3-ELYZA-JP-8Bを試してみた

:::tip
Obsidian CopilotとはObsidian上でLLMとチャットし、質問や生成ができるプラグインです
:::

## 環境
- M1 MacBook Air 2020モデル
- メモリ8GB
- ストレージ245.11GB
- ランタイム
  - LM Studio

## 使用するモデル
Llama-3-ELYZA-JP-8Bのgguf版を使用します
> [elyza/Llama-3-ELYZA-JP-8B-GGUF](https://huggingface.co/elyza/Llama-3-ELYZA-JP-8B-GGUF)

## 結果
**まともに動きませんでした**
生成はしてくれたんですがあまりにも遅いかつ、他の作業ができないくらい重かったです