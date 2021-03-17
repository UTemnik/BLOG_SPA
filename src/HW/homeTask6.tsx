//6
type TDivElement = JSX.IntrinsicElements['div'];

type TGetJSXPropsProp<K extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[K] ;

type TDivProps = TGetJSXPropsProp<'div'>;

const props: TDivProps = {// throw error потому что не содержится в атрибутах div
    className: 'handler' // не выкидывает ошибку так как валидно для div элемента
} 