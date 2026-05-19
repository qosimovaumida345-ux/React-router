export const SendToTelegram = () => {
    const BOT_TOKEN = "8436207649:AAH62688700744"
    const CHAT_ID = 8436207649
    const sendMessage = () => {
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: "Hello from React",
            }),
        })
    }
    return (
        <div>
            <h1>Send To Telegram</h1>
            <button onClick={sendMessage}>Send Message</button>
        </div>
    )
}

export default SendToTelegram
