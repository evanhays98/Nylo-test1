import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  text: {
    fontFamily: 'Montserrat, sans-serif',
    color: 'theme.colors.black',
    fontWeight: 800,
    fontSize: 18,
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

export const CMSText4 = ({ text, ...rest }: TextProps & Props) => {
  const classes = useStyles({ theme });

  return (
    <h4 className={classes.text} {...rest}>
      {text}
    </h4>
  );
};
