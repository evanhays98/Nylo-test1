import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    gap: 16,
    flexDirection: 'column',
    background: 'var(--background)',
    padding: 16,
    borderRadius: 0,
    '&:hover': {},
  },
  '@container (max-width: 768px)': { container: {} },
  '@container (max-width: 480px)': { container: {} },
}));

interface Props {
  children?: React.ReactNode;
}

type BlockProps = React.HTMLAttributes<HTMLDivElement>;

export const CMSPage = ({ children, ...rest }: BlockProps & Props) => {
  const classes = useStyles({ theme });

  return (
    <div className={classes.container} {...rest}>
      {children}
    </div>
  );
};
