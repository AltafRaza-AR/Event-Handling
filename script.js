document.addEventListener('DOMContentLoaded', function() {
    const buttons = [
        { buttonId: 'button1', messageId: 'message1' },
        { buttonId: 'button2', messageId: 'message2' },
        { buttonId: 'button3', messageId: 'message3' },
    ];

    buttons.forEach(({ buttonId, messageId }) => {
        const button = document.getElementById(buttonId);
        const message = document.getElementById(messageId);
        
        button.style.cursor = 'pointer';

        button.addEventListener('click', function() {
            button.style.backgroundColor = 'lightblue';
        });

        button.addEventListener('mouseover', function() {
            message.style.display = 'block';
        });

        button.addEventListener('mouseout', function() {
            message.style.display = 'none';
        });

        button.addEventListener('dblclick', function() {
            button.style.display = 'none';
            message.style.display = 'none';
        });
    });
});
