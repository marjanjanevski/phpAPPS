import { NextSeo }          from "next-seo";

export default function Head() {

    const meta = {
        description: 'Sluta gissa och spara pengar. Vår POC-tjänst ger dig ett tidigt svar på om er idé har potential hos kunderna och om den är tekniskt genomförbar.',
        openGraph: {
            type: 'website',
            url: 'https://www.minabastapolare.se/erbjudande/poc',
            title: 'Proof of Concept (POC) | Mina Bästa Polare',
            description: 'Sluta gissa och spara pengar. Vår POC-tjänst ger dig ett tidigt svar på om er idé har potential hos kunderna och om den är tekniskt genomförbar.',
            images: [
                {
                    url: 'https://www.minabastapolare.se/img/meta/mina-basta-polare.jpg',
                    width: 1200,
                    height: 760,
                    type: 'image/jpg',
                    secureUrl: 'https://www.minabastapolare.se/img/meta/mina-basta-polare.jpg',
                },
            ],
        },
    };

    return (
        <>
            <title>Proof of Concept (POC) | Mina Bästa Polare</title>
            <NextSeo {...meta} useAppDir={true} />
        </>
    );
}
