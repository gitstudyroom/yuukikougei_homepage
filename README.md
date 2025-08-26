# ゆうき工芸 ホームページ

これはゆうき工芸の公式ホームページのファイル一式です。

## サイト構成

```
yuukikougei/
├── .git/               # Gitリポジトリ関連ファイル
├── .gitignore          # Gitが無視するファイルの設定
├── index.html          # アプリケーションのエントリーポイントHTML
├── package-lock.json   # npmパッケージの依存関係ロックファイル
├── package.json        # Node.jsプロジェクトの設定、スクリプト、依存関係
├── README.md           # このファイル
├── tsconfig.json       # TypeScriptコンパイラの設定
├── webpack.config.js   # Webpackビルドツールの設定
│
├── css/                # グローバルCSSファイル
│   └── style.css
│
├── dist/               # ビルド出力ディレクトリ（本番環境用）
│   ├── bundle.js       # コンパイルされたJavaScriptバンドル
│   ├── images/         # コピーされた画像ファイル
│   └── index.html      # コピーされたエントリーポイントHTML
│
├── images/             # オリジナル画像アセット
│   ├── IMG_7702.JPG
│   └── ...
│
├── node_modules/       # npmによってインストールされる依存関係パッケージ
│
└── src/                # Reactアプリケーションのソースコード
    ├── App.tsx         # メインのReactアプリケーションコンポーネント
    ├── index.tsx       # Reactアプリケーションのエントリーポイント
    └── components/     # 再利用可能なUIコンポーネント
        ├── Footer.tsx
        ├── Header.tsx
        ├── SlideShow.tsx
        └── pages/      # 各ページのコンポーネント
            ├── About.tsx
            ├── Home.tsx
            ├── Recruit.tsx
            ├── Services.tsx
            └── Works.tsx
```

## 更新方法

このプロジェクトはReactとTypeScriptで構築されています。変更を適用するには、以下の手順に従ってください。

- **テキスト/ロジックの修正**: `src/` ディレクトリ内の `.tsx` ファイルを編集してください。
- **スタイルの変更**: `css/style.css` を編集してください。
- **画像の変更・追加**: `images/` フォルダ内の画像を更新または追加してください。
- **依存関係のインストール**: 新しいパッケージを追加したり、`package.json` が変更された場合は、以下のコマンドを実行してください。
  ```bash
  npm install
  ```
- **プロジェクトのビルド**: 変更を適用し、本番環境用のファイルを生成するには、以下のコマンドを実行してください。
  ```bash
  npm run build
  ```
  ビルドされたファイルは `dist/` ディレクトリに出力されます。