"use client"
import { ReactNode, useState } from "react";
import {useRouter} from "next/navigation"
interface ButtonProps {
  children: ReactNode;
  hover?: string,
  style?: React.CSSProperties;
}

export const Button = ({ children, style, hover }: ButtonProps) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState<Boolean>(false);

  return (
    <button
    onClick={()=>{router.push("/chat/123")}}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{...style, backgroundColor: isHover&&hover?hover: style?.backgroundColor}}
    >
      {children}
    </button>
  );
};
