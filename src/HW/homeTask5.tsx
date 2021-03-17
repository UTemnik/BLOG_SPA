import React from 'react'

//5 

interface IProps {
    firstProp: string,
    twoProp: number
}

const HomeComponent: React.FC<IProps> = (props) => {
    return (
        <div>
            { props.firstProp}
        </div>
    )
}

type TMyType<T> = T extends ((props: infer R) => any) ? R : never;
type TartgsType = TMyType<typeof HomeComponent>;

const result: TartgsType = {
    firstProp: 'test',
    twoProp: 333
}

