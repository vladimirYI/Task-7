let btnCreate = document.querySelector('.btn-create');
let btnAdd = document.querySelector('.btn-add');
let textInputs = document.querySelector('.text-inputs-wrapper');
let block;

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
   
    let inputAdd = document.createElement('input');
    inputAdd.className = `form__text`;
    inputAdd.placeholder = `Текст`;
    textInputs.appendChild(inputAdd);

    let buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = '-';
    buttonDelete.className ='btn-delete';
    textInputs.appendChild(buttonDelete);
    buttonDelete.addEventListener('click', () => {
        inputAdd.remove();
        buttonDelete.remove();
    });
});


btnCreate.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (block) {
        block.remove();
    }
    block = document.createElement('div');

    const width = parseFloat(document.querySelector('.form__width').value);
    const height = parseFloat(document.querySelector('.form__height').value);
    const color = document.querySelector('.form__color').value;
    const texts = [].map.call(document.querySelectorAll('.form__text'), input => input.value);

    if (isNaN(width) || width < 50 || width > 1000
      || isNaN(height) || height < 50 || height > 600
      || color.trim().length < 1
      || texts.find(text => text.length < 1)) {
        block.className = 'block';
        block.innerHTML = 'Error';
        block.style.padding = '20px';
        block.style.fontSize = "20";
        block.style.border = "2px solid red";
    } else {
        block.className = 'block';
        block.style.width = `${width}px`;
        block.style.height = `${height}px`;
        block.style.backgroundColor = color;
        block.innerHTML = texts.join('<br>');
    }
    document.body.appendChild(block);
});