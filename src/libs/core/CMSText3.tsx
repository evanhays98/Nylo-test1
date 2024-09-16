import React, { forwardRef, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  text: {
    fontFamily: 'Montserrat, sans-serif',
    color: '{theme.colors.black}',
    fontWeight: 900,
    fontSize: 20,
    lineHeight: 1.5,
    margin: 0,
    width: 'fit-content',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    '&:hover': {},
  },
  '@media (max-width: 768px)': { text: {} },
  '@media (max-width: 480px)': { text: {} },
}));

interface Props {
  text: string;
}

type TextProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CMSText3 = ({ text, ...rest }: TextProps & Props) => {
  const classes = useStyles({ theme });

  return (
    <h3 className={classes.text} {...rest}>
      {text}
    </h3>
  );
};
