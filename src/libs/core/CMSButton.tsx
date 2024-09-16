import classnames from 'classnames';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  blockColor: {
    background: 'var(--blue)',
    minWidth: '@Stheme.marginBase * 10@E',
    borderRadius: 8,
    color: '@Stheme.colors.background@E',
    fontWeight: 'bold',
    display: 'flex',
    border: 0,
    cursor: 'pointer',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    gap: '@Stheme.marginBase@E',
    transition: 'all 0.3s ease',
    width: 'fit-content',
    padding: ['8px', '16px', '8px', '16px'],
    '&:hover': { background: 'var(--blueDark)' },
  },
  '@media (max-width: 768px)': { blockColor: {} },
  '@media (max-width: 480px)': { blockColor: {} },
  full: { width: '100%' },
}));

interface BaseButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  full?: boolean;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CMSButton = (props: BaseButtonProps & ButtonProps) => {
  const { className, onClick, type, full, children, ...rest } = props;

  const classes = useStyles({ theme });

  return (
    <button
      className={classnames(
        classes.blockColor,
        {
          [classes.full]: full,
        },
        className,
      )}
      onClick={onClick}
      onSubmit={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
