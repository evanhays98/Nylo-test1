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
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderRadius: 0,
    '&:hover': {},
  },
  '@media (max-width: 768px)': {
    text: {
      fontSize: 30,
      color: theme.colors.blue7,
      borderRadius: 0,
      fontWeight: 600,
    },
  },
  '@media (max-width: 480px)': { text: { borderRadius: 0, fontSize: 21 } },
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
