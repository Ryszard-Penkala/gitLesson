const numberAInput = document.querySelector('#numberA');
const numberBInput = document.querySelector('#numberB');
const resultP = document.querySelector('.result');
const calcForm = document.querySelector('form');

calcForm.addEventListener('submit', async e => {
    e.preventDefault();
    const numberAValue = Number(numberAInput.value);
    const numberBValue = Number(numberBInput.value);

    console.log({numberAValue, numberBValue});
    resultP.innerText = 'Loading...';
    resultP.style.border = 'none';


    const res = await fetch('/calc/check', {
        method: 'POST',
        body: JSON.stringify({
            numberAValue,
            numberBValue,
        }),
        headers: {
            'content-type': 'application/json',
        },
    });
    const data = await res.json();
    data.ok?(resultP.innerText = `Number A: ${numberAValue} is fully divided by Number B: ${numberBValue}`,resultP.style.border = '2px solid green'): (resultP.innerText = `Number A: ${numberAValue} is divided by Number B: ${numberBValue} with rest.`, resultP.style.border = '2px solid red'   );
});

