import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
    gap: 32,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    background: 'var(--blueLight)',
    padding: 16,
    borderRadius: 8,
    '&:hover': {},
  },
  '@media (max-width: 768px)': { container: {} },
  '@media (max-width: 480px)': { container: {} },
}));

type BlockProps = React.HTMLAttributes<HTMLDivElement>;

interface Props {
  children?: React.ReactNode;
}

export const CMSBlock = (props: BlockProps & Props) => {
  const { children, ...rest } = props;
  const classes = useStyles({ theme });

  return (
    <div className={classes.container} {...rest}>
      {children}
    </div>
  );
};
