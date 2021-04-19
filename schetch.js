const dela = [
  {
    text: 'Певым делом',
    done: true,
  },
  {
    text: 'Вторым делом',
    done: false,
  },
  {
    text: 'Третьим делом',
    done: false,
  },
  {
    text: 'Четвертым делом',
    done: false,
  },
  {
    text: 'Пятым делом',
    done: false,
  },
  {
    text: 'Шестым делом',
    done: false
  }
];

    const render = (spisokOfDela) => {

      const mainContainerNode = document.getElementById('spisok');
      mainContainerNode.textContent = "";

    for(let i = 0; i < spisokOfDela.length; i++) {

    const delaContainerNode = document.createElement('div');
    const checkboxNode = document.createElement('input')
    const delaTextNode = document.createElement('div');
    const removeBtnNode = document.createElement('button');

    delaContainerNode.classList.add('list__item');

    delaContainerNode.append(checkboxNode, delaTextNode, removeBtnNode);

    checkboxNode.type = "checkbox";

    checkboxNode.checked = spisokOfDela[i].done;

    checkboxNode.addEventListener('change', () => {
        checkDela (i)
    }) 
    

    if(spisokOfDela[i].done === true) {
      delaContainerNode.classList.add('list__item_checked')
    };

    delaTextNode.textContent = spisokOfDela[i].text;

    delaTextNode.classList.add('list__text');

    removeBtnNode.textContent = 'x';

    removeBtnNode.addEventListener('click', () => {
      remove(i);
    });

    mainContainerNode.append(delaContainerNode);

  }
}
const remove = (index) => {
   dela.splice(index, 1);
  render(dela);
}

const checkDela = (index) => {
   dela[index].done = !dela[index].done
    render(dela);
}

const addDela = (text) => {
    dela.push({
    text: text,
    done: false
  });


  render(dela);
}

document.getElementById('form').addEventListener('submit', (e) => {
   e.preventDefault();

    const formInput = document.getElementById('container__input');

    addDela(formInput.value);

    formInput.value = "";
})

render(dela);


