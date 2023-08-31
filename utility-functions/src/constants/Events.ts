const UTILITY = {
  USER: 'USER',
  CREATE: 'CREATE',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOGIN: 'LOGIN',
};

export default {
  USER_CREATE: {
    SUCCESS: `${UTILITY.USER}_${UTILITY.CREATE}_${UTILITY.SUCCESS}`,
    ERROR: `${UTILITY.USER}_${UTILITY.CREATE}_${UTILITY.ERROR}`,
  },
  LOGIN: {
    SUCCESS: `${UTILITY.USER}_${UTILITY.LOGIN}_${UTILITY.SUCCESS}`,
    ERROR: `${UTILITY.USER}_${UTILITY.LOGIN}_${UTILITY.ERROR}`,
  },
};
