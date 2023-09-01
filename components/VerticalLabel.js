const VerticalLabel = ({ label }) => {
    return (
        <div className="col-span-1 ">
                <p className="text-xs text-info uppercase tracking-2 font-secondary font-bold rotated-text rotate-180 mb-0">
                    {label}
                </p>

        </div>
    );
};
export default VerticalLabel;
