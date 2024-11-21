async function convertTextToSpeech() {
    const apiKey = 'sk_172b0189bf000dc35d8f7438905374e51e0eecc22cdcefc6'; // แทนที่ด้วย API Key ของคุณ
    const text = document.getElementById('text-input').value;

    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            'text': text,
            'voice': '9BWtsMINqrJLrRacOk9x',  // ระบุเสียงที่ต้องการ
            'language': 'en'  // กำหนดภาษาตามที่คุณต้องการ
        })
    });

    if (response.ok) {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audioElement = document.getElementById('audio');
        audioElement.src = audioUrl;
        audioElement.play();
    } else {
        console.error('Error:', response.statusText);
    }
}
