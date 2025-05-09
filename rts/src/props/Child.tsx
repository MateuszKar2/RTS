interface ChildProps {
    color: string;
    onClick: () => void;
}


export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    )
};

export const ChildAsFC: React.FunctionComponent<ChildProps> = ({ color, onClick }) => {
    return(
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    )
}