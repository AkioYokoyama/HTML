/*
 * Promiseについて
 *
 * 非同期処理の結果を resolve(成功時)/reject(失敗時)
 * resolve は then  で結果を受け取る
 * reject  は catch で結果を受け取る
 */
const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('succeed!')
  }, 3000);
});

pro.then((response) => {
  console.log('Result: ' + response);
}).catch((e) => {
  console.log('Result: ' + e);
});
