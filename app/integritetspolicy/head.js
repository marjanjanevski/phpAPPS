import { NextSeo }          from "next-seo";

export default function Head() {

    const meta = {
        description: 'Mina Bästa Polare AB är personuppgiftsansvarig och ansvarar för att personuppgifter behandlas i enlighet med gällande lagstiftning på www.minabastapolare.se.',
        openGraph: {
            type: 'website',
            url: 'https://www.minabastapolare.se/integritetspolicy',
            title: 'Integritetspolicy | Mina Bästa Polare',
            description: 'Mina Bästa Polare AB är personuppgiftsansvarig och ansvarar för att personuppgifter behandlas i enlighet med gällande lagstiftning på www.minabastapolare.se.',
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
            <title>Integritetspolicy | Mina Bästa Polare</title>
            <NextSeo {...meta} useAppDir={true} />
        </>
    );
}
