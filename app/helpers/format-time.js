import { helper } from '@ember/component/helper';

export default helper(function formatTime(param /*, named*/) {
  const postTime = param[0] * 1000;
  const currTime = Date.now();
  const timeDiffSeconds = Math.floor((currTime - postTime) / 1000);
  const timeDiffMinutes = timeDiffSeconds / 60;
  const timeDiffHours = timeDiffMinutes / 60;
  const timeDiffDays = timeDiffHours / 24;

  let timestamp = '';
  if (timeDiffDays > 1) {
    timestamp = Math.floor(timeDiffDays) + ' day';
    if (timeDiffDays > 2) {
      timestamp += 's';
    }
    timestamp += ' ago';
  } else if (timeDiffHours > 1) {
    timestamp = Math.floor(timeDiffHours) + ' hour';
    if (timeDiffHours > 2) {
      timestamp += 's';
    }
    timestamp += ' ago';
  } else if (Math.floor(timeDiffMinutes) > 1) {
    timestamp = Math.floor(timeDiffMinutes) + ' minute';
    if (timeDiffMinutes > 2) {
      timestamp += 's';
    }
    timestamp += ' ago';
  } else if (timeDiffSeconds == 1) {
    timestamp = Math.floor(timeDiffSeconds) + ' second ago';
  } else {
    timestamp = Math.floor(timeDiffSeconds) + ' seconds ago';
  }
  return timestamp;
});
