export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'success' | 'danger' | 'warning' | 'primary' | 'secondary' | 'table';
    btnType?: 'solid' | 'outlined' | 'ghost';
    isLoading?: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
    className?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    type?: 'submit' | 'reset' | 'button';
    to?: string;
    end?: boolean;
  }
