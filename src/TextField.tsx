import React, { useState,useRef } from 'react'

interface Person {
    firstname: string;
    lastname: string;
}
interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (name: string) => string;
    person: Person;
   handleChange?:(event: React.ChangeEvent<HTMLInputElement>)=>void
}

interface NickName {
    nickname: string;
}

//? mean optional, you don't have to pass that props
// you also can do <{text:string}>
export const TextField: React.FC<Props> = ({ person, children, text, fn, i,handleChange}) => {
    const [count, setCount] = useState<number | null | undefined>(5)
    const [firstname, setFirstname] = useState<{ first: string }>({ first: 'June' });
    const [nickname, setNickname] = useState<NickName>({ nickname: "Junebug" });
    
    const divRef=useRef<HTMLDivElement>(null);
    const inputRef=useRef<HTMLInputElement>(null)

  


    return (
        <div ref={divRef}>
            
            <input ref={inputRef} onChange={handleChange} />
            <p>{text}{person.firstname}{person.lastname}</p>
            <p>{count}</p>
            <p>{firstname.first}</p>
            <p>{nickname.nickname}</p>
        </div>
    )
}



export default TextField


