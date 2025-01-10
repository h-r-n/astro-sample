## 記事で設定する項目

| No. | 項目名 | 概要 | 記入例 |
| :---: | :---: | :---: | :---: |
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |

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

### 吹き出しを入れたい
吹き出しを入れたい箇所に以下のタグを挿入する
```mdx
<Conversation direction="left">会話を挿入する場合はConversastionタグを呼び出す。directionを「right」にすると女性アイコン、directionを「left」にすると男性アイコンが表示される</Conversation>

<Conversation direction="right">会話を挿入する場合はConversastionタグを呼び出す。directionを「right」にすると女性アイコン、directionを「left」にすると男性アイコンが表示される</Conversation>
```
