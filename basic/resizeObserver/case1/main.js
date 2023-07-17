// ResizeObserverをインスタンス化、コールバック関数を登録
const resizeObserver = new ResizeObserver((entries, observer) => {
  console.log('イベントを検知しました');
  console.log(entries[0].contentRect);
});

// 監視したいDOM要素を登録
resizeObserver.observe(document.querySelector('#sample1'));
