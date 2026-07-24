// ============================================================
// どこでも英単語 ドリル（初級）単語データ
// ※ 本ファイルは Claude 生成の words.js（316語）に差し替えてください
// ============================================================
const DEFAULT_WORDS = [
  { en: "hello", pos: "間投詞", kana: "ハロー", ja: "こんにちは", ex: "Hello, how are you today?", exJa: "こんにちは、今日の調子はどう？", cat: "生活", etym: "コアイメージ: 挨拶の定番表現。", syn: "hi（よりカジュアル）" },
  { en: "school", pos: "名詞", kana: "スクール", ja: "学校", ex: "I walk to school every morning.", exJa: "私は毎朝歩いて学校へ行く。", cat: "学校", etym: "コアイメージ: ギリシャ語 schole（余暇・学びの場）。", syn: "academy（学院 より狭い）" }
].concat(typeof WORDS_EXTRA !== "undefined" ? WORDS_EXTRA : []);
