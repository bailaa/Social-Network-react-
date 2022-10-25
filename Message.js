import React from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {
    let newMessageElement = React.createRef(); // react верни ссылку на новые данные
    let addMessage = () => { // ф-я, откуда мы достаем данные пришедшие по ссылке
        let text = newMessageElement.current.value; // отслеживаем из-е сост-я в поле для ввода,приходит новый эл-т
        // с помощью React.createRef() получает соответствующий DOM-элемент.
        // React присвоит DOM-элемент свойству current при монтировании компонента
        // и присвоит обратно значение null при размонтировании.
        alert(text); // на кнопку вешаем обработчик события с фун-й добавления нового сообщ-я с новыми данными
    } // <button onClick={ addMessage }> - ф-я. обработчик события вызовет её, когда событие наступит
    // Когда атрибут ref используется с HTML-элементом, свойство current созданного рефа в конструкторе
    // прикрепление к React-элементам через ref атрибут <textarea ref={newMessageElement}>

    return <div className={classes.dialog}>{props.message}
        <div>
            <textarea ref={newMessageElement}></textarea>
        </div>
        <button onClick={ addMessage }>Send message</button>
    </div>
}

export default Message;

// ref - Чтобы модифицировать потомка, вы должны заново отрендерить его с новыми пропсами.
// могут возникать ситуации, когда вам требуется императивно изменить дочерний элемент,
// обойдя обычный поток данных.
// правильным местом для хранения состояния является верхний уровень в иерархии. т.е. state?