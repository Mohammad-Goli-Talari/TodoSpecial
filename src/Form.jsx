function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
    };
    retun (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input type="text" name="todo" id="todo" placeholder="write your next task" />
            </label>
            <button>
                <span className="visually_hidden">Submit</span>
                <svg>
                    <path d="" />
                </svg>
            </button>
        </form>
    );
}

export default Form;