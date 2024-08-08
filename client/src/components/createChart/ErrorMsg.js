

const ErrorMsg = ({error}) => {
    return (
        <>
            <div className="container w-form-fail">
                <div>{error}</div>
             </div>
        </>
    );
};

export default ErrorMsg;
