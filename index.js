<script>
    // Send data back to the bot
    Telegram.WebApp.sendData(JSON.stringify({ action: "completed_trade", symbol: "AAPL" }));
</script>
