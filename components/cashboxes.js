const template =
`
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
:host {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-size: 1vw;
}
.wrapper {
    width: 69vw;
    max-height: 50vh;
    display: flex;
}
.picture, .content {
    width: 50%;
}
.picture {
    background: url('../content/ev1.png') no-repeat center / contain;
}
h1 {
    margin-top: 2rem;
    font-size: 3rem;
    font-family: 'Roboto', sans-serif;
}
p, li {
    margin-top: 1rem;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
}
</style>
<div class="wrapper">
    <div class="picture"></div>
    <div class="content">
        <h1>Эвотор 5</h1>
        <p><b>Стоимость — 11 700 ₽</b></p>
        <p>Самая лёгкая и мобильная касса. Идеально подойдёт для курьеров и официантов.</p>
        <ul>
            <li>Работает от аккумулятора от 6 до 12 часов — можно взять на выезд.</li>
            <li>Рекомендуемое количество товаров для заведения: до 10 000 штук.</li>
            <li>Дисплей 5,5 дюймов — как экран мобильного телефона.</li>
        </ul>
    </div>
</div>
`;

export class Cashbox extends HTMLElement
{
    connectedCallback()
    {
        this.shadow_root = this.attachShadow({mode: 'open'});
        this.shadow_root.innerHTML = template;

        console.log('connected');
    }
    disconnectedCallback()
    {
        console.log('disconnected');
    }
}