document.addEventListener('DOMContentLoaded', () => {
	const timerEl = document.querySelector('.site__time-title');
	const startTime = 15 * 60; // 15 daqiqa sekundlarda
	let currentTime = startTime;

	function formatTime(seconds) {
		const h = Math.floor(seconds / 3600);
		const m = Math.floor((seconds % 3600) / 60);
		const s = seconds % 60;
		return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
	}

	timerEl.textContent = formatTime(currentTime);

	setInterval(() => {
		currentTime--;
		if (currentTime < 0) {
			currentTime = startTime;
		}
		timerEl.textContent = formatTime(currentTime);
	}, 1000);
});
