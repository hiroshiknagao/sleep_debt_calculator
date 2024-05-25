const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 7
      break;
    case 'tuesday':
      return 7
      break;
    case 'wednesday':
      return 7
      break;
    case 'thursday':
      return 6
      break;
    case 'friday':
      return 6
      break;
    case 'saturday':
      return 7
      break;
    case 'sunday':
      return 7
      break;

      default:
      return "Error!"
  }
};

const getActualsleepHours = () => {
  return getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday');
};

const getIdealSleepHours = () => {
  let idealHours = 5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualsleepHours();
  let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours ) {
        console.log(`You got ${idealSleepHours - actualSleepHours} more hours of sleep than you needed this week!!`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`Bruh you need get some rest...You slept ${idealSleepHours - actualSleepHours} less hours than you shulda been this week...`);
    } else {
      console.log('Something went wrong. Please Check your code...');
    }
};

calculateSleepDebt();












