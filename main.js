function checkTodayEvent(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(fileContent => {
            const today = new Date().toISOString().split('T')[0];
            const lines = fileContent.split('\n').map(line => line.trim());

            for (const line of lines) {
                const [date, eventName] = line.split(',');

                if (date === today) {
                    document.getElementById('div').textContent = `Evet, ${eventName} kutlu olsun!`;
                    return;
                }
            }

            document.getElementById('div').textContent = "Hayır";
        })
        .catch(error => {
            console.error('Error fetching the file:', error.message);
        });
}


// Example usage:
const filePath = 'gunler.txt';
checkTodayEvent(filePath);

