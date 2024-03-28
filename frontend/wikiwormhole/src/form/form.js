import "./form.css";

function Form() {
    return (
        <div className="form-cont">
            <div className="form-input-cont">
                <div className="form-input" id="first-input">
                    <input type="text"/>
                </div>
                <div className="form-input">
                    <input type="text"/>
                </div>
            </div>
            <div className="form-submit">
                <span>&#xbb;</span>
            </div>
        </div>
    );
}

export default Form;