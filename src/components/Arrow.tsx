const Arrow = ({toLeft}: {toLeft?: boolean}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className={`w-10 ${toLeft && 'rotate-180'}`}>
            <path style={{fill: "black"}}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"/>
        </svg>
    );
};

export default Arrow;