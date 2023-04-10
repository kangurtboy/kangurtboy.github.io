const tjAlphabet = {
  а: 1,
  б: 2,
  в: 3,
  г: 4,
  ғ: 5,
  д: 6,
  е: 7,
  ё: 8,
  ж: 9,
  з: 10,
  и: 11,
  й: 12,
  ӣ: 13,
  к: 14,
  қ: 15,
  л: 16,
  м: 17,
  н: 18,
  о: 19,
  п: 20,
  р: 21,
  с: 22,
  т: 23,
  у: 24,
  ӯ: 25,
  ф: 26,
  х: 27,
  ҳ: 28,
  ч: 29,
  ҷ: 30,
  ш: 31,
  ъ: 32,
  э: 33,
  ю: 34,
  я: 35,
};

const inputEl = document.querySelector('.text_input'),
  translateButton = document.querySelector('.translate_button'),
  resultEl = document.querySelector('.result_text');

const handleTranslate = () => {
  const value = inputEl.value;
  const valueArr = value.split('');
  const result = [];

  valueArr.forEach((element) => {
    const letter = tjAlphabet[element.toLowerCase() || element];

    if (letter) {
      result.push(`${letter}.`);
    } else {
      result.push(element);
    }
  });
  inputEl.value = '';
  inputEl.focus();
  resultEl.textContent = result.join('');
};

translateButton.addEventListener('click', handleTranslate);
