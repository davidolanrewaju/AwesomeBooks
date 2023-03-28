const output = document.querySelector('.date-text');
const currentDate = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const dateStr = currentDate.toLocaleDateString('en-US', options);
const timeStr = currentDate.toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});
const dateTimeStr = `${dateStr}, ${timeStr}`;

output.innerText = dateTimeStr;
