function showDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById('displayDate').textContent = ` ${formattedDate}`;
  }

  function showTime() {
    const currentTime = new Date();
    const formattedTime = currentTime.toString();
    document.getElementById('displayTime').textContent = ` ${formattedTime}`;
  }