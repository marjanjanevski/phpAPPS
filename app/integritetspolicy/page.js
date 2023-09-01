import WysiwygBlock from "../../components/WysiwygBlock";

const data = require('./data.json');

const Policy = () => {
    return (
        <section className="mbp-container">
            <WysiwygBlock content={data.wysiwygBlock.content}/>
        </section>
    );
};

export default Policy;
