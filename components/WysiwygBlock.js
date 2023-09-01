const WysiwygBlock = ({ content }) => {

    function createMarkup() {
        return {__html: content};
    }

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-start-3 lg:col-start-2 md:col-span-9 lg:col-span-6 mt-4 md:mt-20">
                <div className="lg:mt-8 prose lg:prose-xl" dangerouslySetInnerHTML={createMarkup()}></div>
            </div>
        </div>
    );
};
export default WysiwygBlock;
