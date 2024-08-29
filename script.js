document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.getElementById('text-container');

    function setText(content) {
        textContainer.innerHTML = `<p>${content}</p>`;
    }

    function setForm() {
        textContainer.innerHTML = `
            <form>
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Mensagem:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        `;
    }

    document.getElementById('btnSobreMim').addEventListener('click', (event) => {
        event.preventDefault();
        setText('Meu nome é Guilherme, nasci em Porto Alegre e no momento morando em Canoas. Tenho uma grande paixão na música e na área de tecnologia. Atualmente estou estagiando como Help Desk.');
    });

    document.getElementById('btnFormacao').addEventListener('click', (event) => {
        event.preventDefault();
        setText('Me formei no ensino médio na escola Carlos Chagas, no momento estou fazendo tecnólogo em análise e desenvolvimento de sistemas.');
    });

    document.getElementById('btnPortfolio').addEventListener('click', (event) => {
    });

    document.getElementById('btnLink4').addEventListener('click', (event) => {
        event.preventDefault();
        setForm();
    });
});
