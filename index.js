import createList from './linkedlist.js';

const list = createList();
list.append('snuk');
list.append('bla');
list.append('e');
list.append('ssss');
list.append('asd');
list.logList(list.getHead());
list.prepend('brooor');
list.logList(list.getHead());
console.log(list.getSize());
console.log(list.tail());
