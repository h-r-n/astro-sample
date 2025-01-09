## 記事の書き方
### 目次を入れたい
目次を入れたい箇所に以下のタグを挿入する
```mdx
<Toc headings={getHeadings()} />
```

### 内部リンクを入れたい
内部リンクを入れたい箇所に以下のタグを挿入する
```mdx
<LinkCard path="/posts/category-2" />
```
- path: リンク先のパスを渡す
- caption: キャプションを渡す。デフォルトは「あわせて読みたい」

### スペースを入れたい
スペースを入れたい箇所に以下のタグを挿入する
```mdx
<Spacer />
```

### Noticeを入れたい
Noticeを入れたい箇所に以下のタグを挿入する
```mdx
<Notice type="note" title="ここにタイトルを入力する">This is a simple note.</Notice>
```
