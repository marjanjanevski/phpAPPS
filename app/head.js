import { NextSeo }          from "next-seo";
import { NEXT_SEO_DEFAULT } from "../next-seo.config";

export default function Head() {
    return (
        <>
            <title>Vi skapar digitala upplevelser | Mina Bästa Polare</title>
            <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
        </>
    );
}
