This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# stone-note-app

## プロジェクト構造

```
stone-note-app/
├── src/                          # ソースコードディレクトリ
│   ├── app/                      # Next.js App Router
│   │   ├── exploration/          # 探索日記ページ
│   │   │   └── page.tsx
│   │   ├── minerals/             # 鉱石記録ページ
│   │   │   └── page.tsx
│   │   ├── favicon.ico           # ファビコン
│   │   ├── globals.css           # グローバルスタイル（Tailwind CSS）
│   │   └── layout.tsx            # ルートレイアウトコンポーネント
│   ├── components/               # 再利用可能なUIコンポーネント
│   │   ├── ExplorationLogList.tsx
│   │   ├── MineralRecordCard.tsx
│   │   └── ui/
│   │       └── button.tsx
│   └── lib/                      # ユーティリティ
│       └── utils.ts
├── public/                       # 静的ファイル
│   ├── amethyst-purple-crystal.jpg
│   ├── clear-quartz-crystal.png
│   ├── pyrite-golden-mineral.jpg
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── package.json                  # プロジェクト設定と依存関係
├── package-lock.json             # 依存関係のロックファイル
├── next.config.ts                # Next.js設定ファイル
├── tsconfig.json                 # TypeScript設定ファイル
├── postcss.config.mjs            # PostCSS設定ファイル
├── eslint.config.mjs             # ESLint設定ファイル
├── next-env.d.ts                 # Next.js型定義ファイル
├── requirements.md               # 要件定義
└── README.md                     # プロジェクト説明書
```

## 技術スタック

- **フレームワーク**: Next.js 15.5.4 (App Router)
- **UI ライブラリ**: React 19.1.0
- **スタイリング**: Tailwind CSS 4
- **言語**: TypeScript
- **コード品質**: ESLint
- **UI コンポーネント**: Radix UI
- **アイコン**: Lucide React
- **フォーム**: React Hook Form + Zod
- **テーマ**: next-themes
- **アニメーション**: tailwindcss-animate

## 主要な依存関係

### コア依存関係
- `next`: Next.jsフレームワーク
- `react`: Reactライブラリ
- `react-dom`: React DOMレンダラー
- `typescript`: TypeScriptサポート

### UI・スタイリング
- `tailwindcss`: ユーティリティファーストCSSフレームワーク
- `@radix-ui/*`: アクセシブルなUIコンポーネント
- `lucide-react`: アイコンライブラリ
- `class-variance-authority`: コンポーネントバリアント管理
- `tailwind-merge`: Tailwindクラス統合
- `tailwindcss-animate`: アニメーション

### フォーム・バリデーション
- `react-hook-form`: フォーム管理
- `@hookform/resolvers`: フォームリゾルバー
- `zod`: スキーマバリデーション

### その他
- `next-themes`: ダークモードサポート
- `date-fns`: 日付操作
- `recharts`: チャートライブラリ
- `sonner`: トースト通知
