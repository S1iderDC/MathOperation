function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'умножить':
            summ = arg1 * arg2;
            break;
        case 'делить':
            summ = arg1 / arg2;
            break;
        case 'сложить':
            summ = arg1 + arg2;
            break;
        case 'вычесть':
            summ = arg1 - arg2;
            break;
    }
    return summ;
}


mathOperation(parseInt(prompt('Введите первый аргумент')),parseInt(prompt('Введите второй аргумент')),
   prompt('Введите операцию (умножить, делить, сложить, вычесть)'));

alert(`Результат ${summ}`);