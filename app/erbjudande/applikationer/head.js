import { NextSeo }          from "next-seo";

export default function Head() {

    const meta = {
        description: 'En applikation används på flera plattformar eller sajter och löser en specifik funktion. Exempelvis räkna-ut-bästa-lösningar, offertverktyg, mötesbokningar etc.',
        openGraph: {
            type: 'website',
            url: 'https://www.minabastapolare.se/erbjudande/applikationer',
            title: 'Applikationer | Mina Bästa Polare',
            description: 'En applikation används på flera plattformar eller sajter och löser en specifik funktion. Exempelvis räkna-ut-bästa-lösningar, offertverktyg, mötesbokningar etc.',
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
            <title>Applikationer | Mina Bästa Polare</title>
            <NextSeo {...meta} useAppDir={true} />
        </>
    );
}
