const profile = {
    name: "かく",
    age: 24,
    hobby: "旅行",
    major: "地理学"
}
const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻"
}

const keys = Object.keys(profile)
for (const key of keys) {
    const value = profile[key]
    const key_in_japanese = dictionary[key]
    console.log(`私の${key_in_japanese}は${value}です。`)
}