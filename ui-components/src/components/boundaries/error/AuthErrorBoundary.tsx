import { ReactElement, useMemo } from 'react';

interface SelfProps {
  errorType: 'INVALID_USER' | 'LOGGED_OUT' | 'NO_USER';
  children: ReactElement;
}

const AuthErrorBoundary = ({ errorType, children }: SelfProps) => {
  const isError = useMemo(() => {
    let val = false;
    switch (errorType) {
      case 'INVALID_USER':
        val = true;
        break;
      case 'LOGGED_OUT':
        val = true;
        break;
      case 'NO_USER':
        val = true;
        break;
      default:
        break;
    }

    return val;
  }, [errorType]);

  if (isError) {
    return <>Error</>;
  }
  if (!children) {
    return <></>;
  }
  return children;
};

export default AuthErrorBoundary;
