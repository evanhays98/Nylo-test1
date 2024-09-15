import React, { forwardRef, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  text: {
    fontFamily: 'Montserrat',
    color: 'var(--blue)',
    fontWeight: 900,
    fontSize: 26,
    lineHeight: 1.5,
    margin: 0,
    width: 'fit-content',
    transition: 'all 0.2s ease-in-out',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderRadius: 41,
    padding: 21,
    background: 'var(--white)',
    '&:hover': {},
  },
  '@container (max-width: 768px)': { text: { fontSize: 30 } },
  '@container (max-width: 480px)': {
    text: { borderRadius: 0, fontSize: 18, color: 'var(--white)' },
  },
}));

type TextProps = React.HTMLAttributes<HTMLHeadingElement>;
interface Props {
  text: string;
}

export const CMSText1 = ({ text, ...rest }: TextProps & Props) => {
  const classes = useStyles({ theme });

  return (
    <h1 className={classes.text} {...rest}>
      {text}
    </h1>
  );
};
