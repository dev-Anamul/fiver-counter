const submitButton = document.querySelector('.submitButton');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const inputDate = document.querySelector('.date').value;
  const inputTime = document.querySelector('.time').value;

  setInterval(() => {
    const currentTime = new Date();
    const orderTime = new Date(`${inputDate} ${inputTime}`);

    const currentTimeStamp = currentTime.getTime();
    const orderTimeStamp = orderTime.getTime();

    const timeDiff = orderTimeStamp - currentTimeStamp;

    let msec = timeDiff;
    const dd = Math.floor(msec / 24 / 1000 / 60 / 60);
    msec -= dd * 24 * 1000 * 60 * 60;
    const hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    const mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    const ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    days.innerHTML = dd;
    hours.innerHTML = hh;
    minutes.innerHTML = mm;
    seconds.innerHTML = ss;
  });
});
