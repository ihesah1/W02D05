let lists = [
    {
      name: "wake up",
      isComplet: true,
    },
  
    {
      name: "code",
      isComplet: false,
    },
     {
        name: "sleep",
      isComplet: false,  
     }
  ];

  const addlist = (i) => {

    let addli = prompt("add in list");
    if (addli.trim() == false) {
      alert("add input");
    } else {
      lists.splice(i, 1, {name: addli, isComplet: false } );
      renderTasks();
    }
  }; 
  const clearCompleted = () => {
    let a = [];
    for (let i = 0; i < toDosOb.length; i++) {
      if (toDosOb[i].c) a.push(toDosOb[i]);
    }
    toDosOb = a;
    renderList();
  };

  const removeList = (i) => {
    lists.splice(i, 1);
    renderTasks();
  };
  
  //clear _____
const clear = () => {
    toDosOb.length = 0;
    renderList();
  };
//show button
  const showBtn = () => {
    $("span").show();
  };
  
