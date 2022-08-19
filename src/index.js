// const,let等の変数宣言
// var val1 = "var変数";
// console.log(val1);

// var1 = "var変数を上書き";
// console.log(var1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// val4.name = "jak";
// val4.addres = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの上書きが可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// 文字列の中にJavascriptの変数を埋め込める
// const name = "じゃけぇ";
// const age = 28;

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // 関数名 = (引数名) => {処理}
// const func2 = (str) => {
//   return str;
// };
// console.log(func2);

// // 処理が１つだけの場合は{}とreturnを省略できる
// const func３ = (str) => str;
// console.log(func３);

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];

// // 配列の場合
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// // 分割代入：配列の場合
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 *　　スプレッド構文 ...
 */

//  配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// // 分割代入で配列をまとめる
// const [num1, num2, ...arr3] = arr2;
// // 1
// console.log(num1);
// // 2
// console.log(num2);
// // [3, 4, 5]
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr４);
// // [10, 20]
// const arr6 = [...arr4];
// console.log(arr6);

// // [10, 20, 30, 40]
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4, arr8);
/**
 *map　や filterを使った配列の処理
 */
// 従来はfor文を利用していた
// const nameArr = ["田中", "山田", "じゃけぇ"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(`${index + 1}番目は${nameArr[index]}`);
// // }
// // // mapを使うと簡潔に処理できる
// // const nmaeArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nmaeArr2);

// // // 処理が１つだけの場合は{}とreturnを省略できる
// // nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));
// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
/**
 *
 */
// filterはreturn文に一致する特定の値だけを取得する処理
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   // 配列numArrから2で割れる数字だけ取り出す
//   return num % 2 === 0;
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? `trueです` : `falseです`;
// console.log(val1);

// Number オブジェクトの toLocaleString メソッドは、指定したロケールにあわせて対象の数値を文字列に変換した値を返します。
// const num = 1300;
// console.log(num.toLocaleString());

// // 数値の場合はtoLocaleStringを行う。数値痛以外の場合は数値を入力してくだしさいを出力する
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してくだしさい";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲です";
// };
// console.log(checkSum(0, 99));

// /**
//  * 論理演算子の本当の意味を知ろう && ||
//  */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1も2もtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// // || は非がり側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// // && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
