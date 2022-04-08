let listElm = document.querySelector("#infinite");

let nextItem=1;
const loadmore = () => {
  for(let i=0;i<25;i++){
      let item = document.createElement('li');
      item.innerText="Masai --" + nextItem++;
      listElm.append(item);
  }
}

listElm.addEventListener('scroll',function(){
    if(listElm.scrollTop +listElm.clientHeight>=listElm.scrollHeight){
        loadmore();
    }
})
loadmore();