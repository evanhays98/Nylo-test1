import React, { forwardRef, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  text: {
    fontFamily: 'Montserrat',
    color: theme.colors.black,
    fontWeight: 900,
    fontSize: 30,
    lineHeight: 1.5,
    margin: 0,
    width: 'fit-content',
    transition: 'all 0.2s ease-in-out',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderRadius: 46,
    background: theme.colors.white,
    padding: 21,
    '&:hover': {},
  },
  '@media (max-width: 768px)': { text: { fontSize: 30 } },
  '@media (max-width: 480px)': { text: {} },
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
