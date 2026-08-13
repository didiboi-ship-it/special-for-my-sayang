(function(){
  let modalHistoryActive=false;
  const modal=document.getElementById('modal');
  if(!modal) return;

  function modalIsOpen(){return modal.classList.contains('show');}
  function addModalHistory(){
    if(!modalHistoryActive){
      history.pushState({littleWorldModal:true},'',location.href);
      modalHistoryActive=true;
    }
  }
  function hideModalOnly(){
    modal.classList.remove('show');
    modalHistoryActive=false;
  }

  const observer=new MutationObserver(function(){
    if(modalIsOpen()) addModalHistory();
  });
  observer.observe(modal,{attributes:true,attributeFilter:['class']});

  window.addEventListener('popstate',function(){
    if(modalIsOpen()) hideModalOnly();
    else modalHistoryActive=false;
  });

  const originalClose=window.closeModal;
  window.closeModal=function(event){
    if(event && event.target!==modal) return;
    if(modalIsOpen() && modalHistoryActive){history.back();return;}
    if(typeof originalClose==='function') originalClose(event);
    else hideModalOnly();
  };

  document.addEventListener('click',function(e){
    const closeBtn=e.target.closest('.modal .close');
    if(closeBtn && modalIsOpen()){
      e.preventDefault();
      e.stopPropagation();
      window.closeModal();
    }
  },true);
})();