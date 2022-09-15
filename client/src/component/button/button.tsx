import React, { ReactNode } from 'react';
import classNames from 'classnames';


const styles = {
   text : 'capitalize p-2 flex items-center gap-1',
   bluecontained : 'capitalize bg-blue-700 px-3 py-1  hover:bg-blue-800 flex items-center gap-1',
   greencontained : 'capitalize bg-green-400 px-3 py-1  hover:bg-green-500 flex items-center gap-1'
}as const ;

type ButtonProps = {
    variant: keyof typeof styles;
    className? : string;
    label? : string;
    icon? : any;
};

const Button : React.FC<ButtonProps> = (props) => {
    const {variant, className, label, icon} = props;
    const c = classNames(styles[variant],
        {[className || '']: !!className,}
    )
    return(
        <button className={c}>
            {label}
            {icon}
        </button>
    )
}
export default Button;