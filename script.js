const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
        const currentUTCTime = Date.now();
        currentUTCTimeElement.textContent = currentUTCTime;
